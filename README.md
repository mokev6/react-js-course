npx create-react-app my-app : creation d'une app React

npm install react-redux

npm install @reduxjs/toolkit

Regles generales:
	reducer: methode qui execute qqch sur un state
	store: enregistre tous les reducer
	composant: subscribe au store
	dispatcher: appelle le reducer et donc modifie le state
	
	useSelector: permet au composant de subscribe au store et de recuperer l etat definit dans le reducer
	useDispatch: execute un reducer du store depuis un composant

2) creer un repertoire store
3) store >
   - index.js => fichier qui contient les données du store
   - car-slice.js
   - UI-slice.js : les slices sont les fichiers qui contient les reducer propre à des component

4) dans chaque slice
	appeler createSlice de react toolkit
	et l'initialiser avec l'etat de depart

```
	import {createSlice} from '@reduxjs/toolkit';
	
		const uiSlice = createSlice({
			name: 'ui',
			initialState: {cartIsVisible: false}
			reducers: {
				toggle(state) {
					state.cartIsVisible = ! state.cartIsVisible;
				}
			}
		})
		
		export const UIAction = uiSlice.actions;
		export default uiSlice;
```
5) creer le store (index.js)et ajouter le reducer de la slice precedente
```
    import {configureStore} from '@reduxjs/toolkit';
    import uiSlice from 

    const store = configureStore({
    reducer:{ui: uiSlice.reducer}
})
export default store;
```
6) ajouter le store dans le index.js du root de l'appli
```
    import {Provider} from 'react-redux'
    import store from 

    <Provider store = {store}> <App/> </Provider>

```
7) utiliser les actions dans un composant
```
    import {uiAction} from 
    import {useDispatch} from 'react-redux'

    const dispatch = useDispatch()

    const XXX = () => {
        dispatch(uiAction.toggle()); => appelle de la fonction du reducer
    }
```
8) acceder a une variable d etat du store depuis un composant

utiliser useSelector et 
const test = useSelector(state => state.ui.cartIsVisible} tjr utilise state puis le nom donné au reducer dans le store, puis la variable

/!\ : dans les slice, si je souhaite creer un reducer qui recoit des données, ajouter un parametre nommé action. il contient un attribut appelé payload

```
ex: createSlice({
name: 'cart',
initialState: {
	items: []
}
reducers: {
	addItem(state, action) {
		
	},
	remove () {
	}
}
})
```
