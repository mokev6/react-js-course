When working with "Authentication Tokens", these tokens are typically created in the "JSON Web Token" Format (JWT).

As explained in the previous lecture, those "tokens" are really just long strings which are constructed by an algorithm that 
encodes data into a string (with help of a private key, only known by the server).

You can learn more about JSON Web Tokens (JWTs) here: https://jwt.io/

- Possiblité d utilise useContext pour gerer si on est connecté ou non

creer auth-context.js et mettre :

```
	const AuthContext = React.createContext({
		token: '', => c est le token que l on initialisera qd le serveur ns le renverra 
		isLoggedIn: false,
		login: (token, expirationTime) => {},
		logout: () => {}
		
	});
	
	const calculateRemainingTime = expirationTime => {
		const currentTime = new Date().getTime();
		const adjExpirationTime = new Date(expirationTime).getTime();
		const remainingTime = adjExpirationTime - currentTime; // future moins present
		
		return remainingTime;
	}
	
	const retriveStoredToken = () => {
		const storedToken = localStorage.getItem('token');
		const storedExpirationDate = localStorage.getItem('expirationTime');
		
		const remainingTime = calculateRemainingTime(storeExpirationDate);
		
		// si inferieur à 1 minute, on se dit que le token n est plus valide 
		if (remainingTime < 60000) {
			localStorage.removeItem('token');
			localStorage.removeItem('expirationTime');
			return null;
		}
		
		return {
			token : storedToken,
			duration: remainingTime
		}
	}
	
	let logoutTimer;
	
	export const AuthContextProvider = (props) => {
		const tokenData = retriveStoredToken();
		
		let initialToken;
		if (tokenData) {
			initialToken = tokenData.token;
		}
		
		
		const [token, isToken] = useState(initialToken);
		const userIsLoggedIn = !!token; => si c est un string et qu'il n est pas vide return true
		
		const loginHandler = (token, expirationTime) => {
			setToken(token);
			localStorage.setItem('token', token);
			localStorage.setItem('expirationTime', expirationTime);
			const remainingTime = calculateRemainingTime(expirationTime);
			logoutTimer = setTimeout(logoutHandler, remainingTime);
		}
		const logoutHandler = useCallback(() => {
			setToken(null);
			localStorage.removeItem('token');
			localStorage.removeItem('expirationTime');
			
			if (logoutTimer) {
				clearTimeout(logoutTimer);
			}
		}, []);
		
		useEffect(() => {
			if (tokenData) {
				logoutTimer = setTimeout(logoutHandler, tokenData.duration);
			}
			
		},[tokenData, logoutHandler])
		
		const contextValeur = {
			token: token,
			isLoggedIn: userIsLoggedIn,
			login: loginHandler,
			logout: logoutHandler
		};
		
		return <AuthContext.Provider value={contextValeur}>props.children</AuthContext.Provider>;
	}

	export default AuthContext; 
```
et dans index.js 
```
<AuthContextProvider><App/></AuthContextProvider>
```

puis dans les composant ou on a besoin faire:

```
import {useContext} from 'react';
import AuthContext from 'auth-context';
const authCtx = useContext(AuthContext);
```

et on a acces au donne du context

- connexion ok utilisé useHistory.replace pour etre redirigé vers une page
	- replace : impossible de revenir en arriere

- proteger les Routes avec des conditions (est ce qu on est loggué ou pas afficher la route)
```
	{authCtx.isLoggedIn && (
		<Route path='/toto'>
			<Profile />
		</Route>
	)}
```
 et ajouter une derniere Route
 ```
	import {Redirect} from 'react-dom';
	<Route path="*">
		<Redirect to ='/' />
	</Route>
```
Probleme si on recharge la page on perd la connexion, car le state token est reinitialisé a null;
- pour cela, le mettre dans le localStorage
- a la connexion l enregistrer dans le local storage et la deconnexion le supprimer
- verifier que le token n est pas deja present dans le local storage.

- Auto Loggout
	- firebase fournit le nombre de secondes dans lequel le token expire
	- /!\: bien convertir les secondes en timestamp
	- cf le helper calculateRemainingTime mis dans auth-context.js et son utilisation dans loginHandler
	- setTimeout execute logoutHandler dans un laps de temps

- si le user se deconnecte, il faut delete le timeout
	- creation d une variable logoutTimer en dehors du composant (variable Global du fichier auth-context.js)et l init avec la fonction timeout qd on se log.
	- appeler clearTimeout au moment de la deconnexion

- Se logguer automatiquement : verifier que le token est tjr valide lorsque nous quittons l appli sans se deconnecter et qu ensuite on revient sur lappli ou si on rafraichi l appli
	-cf la fonction retriveStoredToken
	- et utilisation du useEffect pour initialiser la durée du token
	- /!\ : dans le useEffect, on passe la fonction logoutHandler . ici on s assure qu'elle n est pas recréee inutilement pour eviter des boucles infinies ou des effets bizarres
			ce qui ns oblige a wrapper la fonction dans le hook useCallback
			- dans la callback, inutile de mettre dans le tableau des dependances le localStorage et clearTimeout, pck ca ne changera pas. Ni setToken ni la variable globale
