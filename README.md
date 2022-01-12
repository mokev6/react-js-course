React hook:

functional component : avant on ne pouvait pas modifier leur etat interne, ni ajouter un cycle de vie
class componant: est arrivée pour répondre à ce pb. le pb est qu elle oblige a ajouter du code en plus (constructor, onmount, didmount etc)
+ probleme pour ordonnée le code

React 16.8 à reglé ce pb en creant les react hooks => lifecyle dans des functional componant

npm install
npm start

1) useState :
- import React {useState} from 'react'
- a utiliser a la racine du fonctional composant
	- impossible dans un if, for, ou fonction imbriquée
- renvoie un tableau : la valeur et son setteur  const [valeur, setValeur] = useState(0);
- ne fait pas de merge comme les class based componant, il remplace la valeur
	```
	
	const test = useState({title : '', amount: ''})
	
	<input value={test[0].title} onChange={test[1].title=event.target.value} /> => erreur car on perd la valeur de amount et le setteur attend un object
	
	```
	Pour corriger : ajouter la valeur courant de amount
	
	```
	
	const test = useState({title : '', amount: ''})
	
	<input value={test[0].title} onChange={event => {
		test[1]({
			title: event.target.value,
			amount: test[0].amount
			}
		}} />
	
	```

Pb: dans une application complexe, React peut prendre du retard pour updater les states, du coup le champ amount peut ne pas avoir sa derniere maj

```
	const test = useState({title : '', amount: ''})
	
	<input value={test[0].title} onChange={event => {
		test[1]((previousState) => {
			title: event.target.value,
			amount: previousState.amount
			})
		}} />
```

utiliser une fonction anonyme dans le setter qui prend en parametre l ancien state pour s assurer d avoir le dernier state

/!\ : 

```
	setName('Kev');
	setAge('34');
	 n executera pas deux fois le composant car le cycle d execution est synchrone. Ils seront mis a jour en simultanement
```

```
console.log(name);
setName('Max');
console.log(name);
```

On peut penser que lors du second console.log, cela logguera Max, mais en faie cela logguera l ancien name, pck la nouvelle valeur de l etat sera disponible au prochain render qui est PROGRAMME (mais pas immediatement executé) lors de l'appel à setName

2) useEffect :
	gere les side effect comme fetch()
	- est executé apres que render du composant
	- agit comme componantDidUpdate() => s'il n y a pas de dependancies
	- sans dependancie, useEffect sera executé apres chaque Render => /!\ si je mets à jour un useState alors cela fera une boucle infini dans le cas ou je n ai pas mis de dependancies
	- pour eviter ca, mettre un empty array comme dependancie => sera exécuté une seule fois apres le render
		agit comme componantDidMount => executé une seule fois apres le premier render
	- penser à object destructuring si je dois ajouter une fonction comme dependancies => une fonction de prop

Chaque fois que le composant est rééxécuter, les fonctions sont recrées donc sa reference est modifié mais elle n est pas PAS EXECUTEE

useEffect prend une fonction de retour => fonction de cleanUp
elle est exécutée la prochaine fois que useEffect est exécutée.
s'il y a aucune dependance "cad == []", la fonction est appelée quand le composant est unmounted

```
useEffect(() => {
	const timer = setTimeOut(()=> {
		console.log(enteredIngredient);
	} , 500);
	return () => {cleanTimeout(timer);}
},[enteredIngredient]);
```

Chaque fois que enteredIngredient est modifié, jouera la fonction de cleanup, puis le useEffect;
c est tres utile lorque dans le useEffect on utilise setTimeout => dans la fonction de cleanup on fera un cleanTimeout

3) useCallback :
	wrappe une fonction et permet de la mettre en cache jusqu a ce qu elle soit modifiée par exemple par une des dependances fait qu on doit la modifier
	
	```
	const test = useCallback((titi) => {
		setIngredient(titi);
	}, []);
	
	```

4) useRef :
	cont enteredIngredient = useRef();
	<input ref={enteredIngredient} />
	enteredIngredient.current.value => pour obtenir la valeur courant
	
5) useReducer: aucun lien avec Redux library
	a utiliser quand on a des states plus complexes à gerer ou quand des states doivent etre gerer ens.
	 c'est un useState mais met la logique à un endroit precis dans le reducer
	 un composant permet get/ajouter/delete des ingredients. A la place de mettre la liste des ingredients dans un useState et de faire une methode pour get/add/delete, useReducer permet de mettre à un seul endroit cette logique de get/add/delete
	 le reducer peut etre cree à l exterieur du componant, mais aussi à l'interieur s'il a besoin des props
	 
```
//currentIngredient = valeur courante de l'etat. Apres le return, cette valeur est MAJ
const ingrdientReducer = (currentIngredient, action) => {
	switch(action.type) {
		case 'SET':
			return action.ingredients
		case 'ADD':
			return [...currentIngredient, action.ingredients];
		case 'DELETE':
			return currentIngredient.filter(ing => ing.id == action.id);
		default:
			throw new Error('Should not get there');
	}
}

// le composant
const Ingredient = () => {
	const [ingredient, dispatch] = useReducer(ingrdientReducer, []); // initialisation du reducer avec ingrdientReducer et init de la valeur par un tableau
	// la variable d etat s appelle ingredient et on a une fonction qui met a jour cette varibale qui s appelle dispatch
}

	// pour utiliser le reducer, utiliser la fonction dispatch (on peut la nommer comme on veut) qui prend un object (l'object action) et la nouvelle valeur de l etat
	dispatch({type: 'ADD', ingredients: {id: 1, label: 'tomate'}}
```	 

/!\ : avec useReducer, chaque fois que la varibale d etat est mise a jour, React re-render le composant. Different de useState qui programme la mise a jour

6) useContext
	comment savoir si un user est connecté à l'appli? il va falloir passer une donnée de composant en composant.
	useContext permet d eviter ca

```
export const AuthContext = React.createContext({
	isAuth: false,
	login: () => {}
});

const AuthContextProvider = props = {

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	
	const loginHandler = () => {
		setIsAuthenticated(true); 
	};

	return (
		<AuthContext.Provider value={isAuth: isAuthenticated, login: loginHandler}> // au debut la valeur est initalisée avec les valeur de AuthContext et ensuite on l override
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

```

Wrapper avec AuthContextProvider le composant <App> dans index.js

Comment recuperer une variable du context ?

```
import {AuthContext} from './context/auth-context.js';

const context = useContext(AuthContext);
context.isAuth;

```

7) useMemo
	permet de sauvegarder une value
	useCallback sauve une fonction
	sauvegarder une valeur et la reevaluer qd on en a besoin et pas a chaque re-render du composant
