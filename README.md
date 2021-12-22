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
		login: token => {},
		logout: () => {}
		
	});

	export const AuthContextProvider = (props) => {
		
		const [token, isToken] = useState(null);
		const userIsLoggedIn = !!token; => si c est un string et qu'il n est pas vide return true
		
		const loggedInHandler = token => setToken(token);
		const loggedOutHandler = () => setToken(null);
		
		const contextValeur = {
			token: token,
			isLoggedIn: userIsLoggedIn,
			login: loggedInHandler,
			logout: loggedOutHandler
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
