npm install react-router-dom@5

	- "5" = version de la librairie
	- il y la version 6

Activation de la librairie:
	- dans App.js

    ```
		import {Route} from 'reac-router-dom'

		<Route path='/welcome'>
			<Welcome />
		<Route/>
    ```

    
	- dans index.js : wrapper <App /> par <BrowserRoute> <App/><:BrowserRoute>
		- active les routeurs

Le composants doit etre mis dans un repertoire que l on peu tnommer : pages
pr faire la difference avec les composants normaux que l on met dans le repertoire composant

```
- <a href='/welcome' /> : affichera un lien et executera le composant Welcome
```

/!\ : si on regarde le network du browser on verra qu une nouvelle requete est lancée ce qui signifie qu on cree une nouvelle
application => on perd tout nos etats

Comment faire : utiliser Link de import {Link} from 'react-router-dom' : react le fait pr nous
	- ```
     <li><Link to='/welcome' > Welcome </Link></li> 
     ```

	- Link = anchor tag
	- /!\: wrapper Link par <li>


Single page application: si on ouvre le dev tool du browser et qu on navigue dans l appli on ne voit pas de requete dans le network
du coup on ne perd pas les etats et cela donne l illusion au user qu une nouvelle page a ete ouverte

```

import {NavLink} from 'react-router-dom' : pour highleted le link active
- <NavLink to='/welcome' activeClassName={}> Welcome </NavLink> et ajouter une classe css dans la propriete activeClassName

```

Variable Dynamique dans le path 
```
	- <NavLink to='/product/:productId'> <Product/></NavLink> : utiliser les deux points pr dire que ce qui suit est dynamique
```

Comment acceder a la variable dynamique du path dans le component?

	- dans le composant import {useParams} from 'react-router-dom' : utilisation d'un hook fournit par la librairie
    - const params = useParams();
	- const productId = params.productId => utiliser le mm nom que la variable 

Dans App.js

    ```
	<Route path='/products'>
		<Product />
	<Route/>
	<Route path='/products/:productId'>
		<Details />
	<Route/>
    ```

	- quand je clique un produit, le detail s affiche aussi car pour react-router il va chercher tous les chemins commencant par /products
	- idem pour l inverse, si je rentre l url /product/p1, j aurai les produit affichées et le detail => ce qu eje ne veux pas

Des fois c est ce qu on veut mais Comment regler ca si on ne veut pas ?
	- utiliser <Switch />

    ```

	<Switch>
		<Route path='/products'>
			<Product />
		<Route/>
		<Route path='/products/:productId'>
			<Details />
		<Route/>
	</Switch>

    ```

 Pb ? si je rentre l url /product/1 => affcihera les produits et non le detail car React cherche le premier chemin commencant par
	/products

Je peux:
	- inverser

    ```

		<Switch>
			<Route path='/products/:productId'>
				<Details />
			<Route/>
			<Route path='/products'>
				<Product />
			<Route/>
	    </Switch>

    ```
	
OU utiliser l'instruction exact qui dit aller /products et null par ailleurs
	
	<Switch>
		<Route path='/products' exact>
			<Product />
		<Route/>
		<Route path='/products/:productId'>
			<Details />
		<Route/>
	</Switch>

je peux mettre des Route dans n'importe quelle composant

Rediriger un user : comment rediriger si user rentre dans l'url juste slah (/)
	- utiliser le composant Redirect de react-router-dom

    ```

	import {Route, Redirect} from 'reac-router-dom'

	<Route path='/' exact>
		<Redirect to='/welcome' />
	<Route/>
	<Route path='/welcome'>
		<Welcome />
	<Route/>

    ```

Route peut etre utiliser dans un composant normal

	const param = useParams();
	const id = param.productId
	<Route path={`/products/${id}/comments`}>
			<Comment />
	<Route/>
