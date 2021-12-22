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

Ajout d'une page NOT FOUND
	ajouter une route à la fin du switch avec path = *. l'etoile signie n impore quelle adresse affichera le composant
	
	```
	<Switch>
		<Route path='/products' exact>
			<Product />
		<Route/>
		<Route path='/products/:productId'>
			<Details />
		<Route/>
		<Route path='*'>
			<NOTFOUND />
		<Route/>
	</Switch>
	```

cmt rediriger la page une fois info postées ?: useHistory de react-router-dom
```
	import {useHistory} from 'react-router-dom';
	const history = useHistory();
```	
	history.push('/quote') => prends une URL
	
	- push : une fois redirigé, on peut revenir en arriere
	- replace : une fois redirigé, impossible de revenir en arriere

Comment lever une pop lorque qu'on revient sur la page precedent ? utiliser le composant Prompt de 'react-router-dom'
	- il detecte si on navigue sur une autre page et levera un avertissement sous certaine condition

```
	import {Prompt} from 'react-router-dom';
	
	[entering, setEntering] = useState(false);
	const onFucusHandler = () => setEntering(true);

	
	<Fragment>
		<Prompt when={entering} message={(location) => 'You want to leave?';}
		<form onFocus={onFucusHandler}>
		</form>
	</Fragment>
```	
	OnFocus: qd on clique sur un element du form, la fonction est appelée. ICi on dit que un element du form a été touché. Si le userclique sur retour, une alerte
	se levera pr dire: You want to leave ?

Comment obtenr l'URL courant ? utiliser use Location de 'react-router-dom'
```
	 const location = useLocation();
	 
	 const param = new URLSearchParams(location.search) => on obtient une map contenant les attribut optional d'une URl (ceux apres le point d'interrogation)
	 param.get('sort')
```

Comment recuperer l'URL tel qu on le definit dans le code : comment recuperer '/products/:productId' dynamiquement.
	- useRouteMatch

```
	const match = useRouteMatch();
	<Route path='${match.path}' exact>
			<Details />
	<Route/>
```
	- cela evite de reecrire '/products/:productId' dans les route qui sont dans des composants.
	- par example j ai fait un composant 'produits' avec des link et chaque link mene a une autre ex:'produits/1'
	- je souhaite changer dans 'produits' par 'produit'(sans 's'). Dans le switch je le change et je devrai le faire partout dans le composant.
	ce hook permet de ne faire le changement que dans le switch car match.path retourne la chainz 'produit/:productId'

Cas particulier : peut prendre un object en input History.push

```
	history.push({
		pathname: location.pathname,
		search: 'sort?asc'
	})
```	
On peut ecrire du code JSX entre les routes plutot que d'appeler un Composant

react router 6
	npm install react-router-dom@6 or npm install react-router-dom@latest
	- remplacer Switch par Routes
	
	```
		<Switch>
			<Route path='${match.path}' exact>
				<Details />
			<Route/>
		</Switch>
	```
		devient
	```	
		<Routes>
			<Route path='${match.path}' element= {<Details/>} />
		</Routes>
	```	
		- Dans element on passe le JSX (ce n'est pas un pointeur sur le composant)
		- 'exact' n est plus necessaire, il match le path. plus besoin de les structuré dans un certain ordre
		
	- NavLink
		- activeclassname remplacé par className, et prend une fonction en parametre
		```
			 <NavLink to='/welcome' activeClassName={}> Welcome </NavLink>
		```
				remplacé par 
		```	
			<NavLink className={(navData) => navData.isActive ? class.active : ''} to='/welcome' />
				Welcome
				</NavLink>
		```
		
	- Redirect est remplacé par Navigate replace : ajouter replace pour changer la page. on peut ne pas le mettre ms c est diff
		```
		<Route path='/' exact>
			<Redirect to='/welcome' />
		<Route/>
		```
		
		devient 
		
		```
		<Route path='/' element={<Navigate replace to='/welcome' />} />
		```
		
	- obligation de wrapper toutes les Route par Routes ce qui n'etait pas obligatoire sur la version 5
	- si je souhaite visiter /welcome/new-user , et qu'il fait reference a un composant imbriqué : rajouter une etoile
		```
		<Routes>
			<Route path='/welcome/*' element= {<Welcome/>} />
		</Routes>
		```
		puis dans le composant Welcome (cad le composant imbriqué)
		```
		<Routes>
			<Route path='new-user' element= {<p> coucou </p>} />
		</Routes>
		```
		
		inutile dans le composant imbriqué, de faire /welcome/new-user. on utilise le chemin relatif. Idem pour les link imbriqué
		match.path est inutile
	
	- les route imbriqué n'ont plus besoin d'etre dans le composant imbriqué. on peut les mettre avec les routes principales
	```
		<Routes>
			<Route path='/welcome/*' element= {<Welcome/>}>
				<Route path='new-user' element= {<p> Coucou</p>} />
			</Route>
		</Routes>
	```
		- on obtient toutes les routes a un seul endroit plutot d etre dispersé partout
	
	- mais comment savoir ou cette route doit etre mise dans le composant imbriqué ? => utilisation de Outlet
	- rajouter <Outlet /> dans le composant et react injectera . 
	- recaptilatif: je mets <Outlet> dans le composant Welcome et qd je clique dans le composant Welcome sur la route /welcome/new-user, ca affichera coucou
	
	- useNavigate remplace useHistory
	- useNAvigate(-1) : previsous page
	- useNavigate(-2) : previsous page of the previous page
	- useNavigate (1) : next page 
	- il fait d autre choses 

	- <Prompt /> n existe pas, on doit creer notre propre feature : rester en 5 si c est super important et que j ai la flemme de le dev
	
	-Lazy Loading: chargé certaine partie du code qd on en a besoin car sans ca tous le code javascript est chargé.
	
	```
	import Quotes from './Quotes';
	
	const Welcome = () => {
		return (
			<Quotes />
		);
	}
	```
	
	devient
	```
	import React from 'react';
	const Quotes = React.lazy(() => import('./Quotes');
	
	const Welcome = () => {
		return (
			<Quotes />
		);
	}
	```
	Il telechargera le code qd il en a besoin
	
	/!\ : on peut obtenir une erreur car le telechargmenet du composant peut prendre du tps. 
	Pour résoudre ca : utilisation de Suspense
	
	```
	import React, {Suspense} from 'react';
	const Quotes = React.lazy(() => import('./Quotes');
	
	const Welcome = () => {
		return (
			<Suspense fallback={<LoadingSpinner}>
				<Quotes />
			<Suspense>
		);
	}
	```
	
	utiliser Suspense et dans la propriete fallback, mettre du code JSX. Exemple on peut mettre une composant faisant un spinner. Ca affichera un spinner dans le composant n est pas
	totalement chargé
