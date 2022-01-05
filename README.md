Unit Test

- Jest : pour executer les test et assert les resultats
- React testing library : pour simuler l application React
- outils dispo par defaut lorsque fait npx create-react-app cf : voir dans packahe.json

Convention de nommage:
	- si je test App.js le test s appelle App.test.js

```

import {render, screen} from '@testing-library/react';
import Greeting from './Gretting'

test('renders Hello World', () => {
	// arrange
	render(<Greeting />);
	
	// act
	
	//assert
	const helloWorld = screen.getByText('Hello World');
	expect(helloWorld).toBeInTheDocument();
	
});

```

- executer les tests avec npm test 
- test et expect sont accessibles sans import
- screen permet d accer au DOM virtuel : on peut trouver des elements sur le dom
	- contient pas mal de fonctions 
- describe() : utile pour grouper des tests

```

	- describe('my grouping test', () => {
		test('renders Hello World', () => {
			// arrange
			render(<Greeting />);
			
			// act
			
			//assert
			const helloWorld = screen.getByText('Hello World');
			expect(helloWorld).toBeInTheDocument();
	
		});
	})

```

- userEvent: 
	- objet permettant de simuler des actions utilisateurs : cliquer sur un bouton ...
	- disponible dans la librairie @testing-library/user-event
```
	import userEvent from '@testing-library/user-event'

	test('renders Hello World', () => {
			// arrange
			render(<Greeting />);
			
			// act
			const buttonElement = screen.getByRole('button') => recupere l unique bouton du composant Greeting
			userEvent.click(buttonElement) => click sur le bouton et declenche l evenement lié
			
			//assert
			// verifie que le texte est present
			const helloWorld = screen.getByText('Hello World');
			expect(helloWorld).toBeInTheDocument();
			
			// verifie que le texte n est pas present
			const helloWorld = screen.queryByText('Hello World', {exact: false}); => retourne null si le texte n hesite pas
			expect(helloWorld).toBeNull(); => utiliser tobenull
	
		});

```

screen contient des methodes commecant par find et par get
- la difference : find reevalue le composant alr que get non
- si mon composant effectue un appel asynchrone, et que je souhaite verifier le resultat de l appel, avec get il echouera car l appel prend qq millisec/ sec.
- find retourne une promesse (ce que l on souhaite en asynchrone)
- utilisation de async/await

```
	test('renders Hello World', async () => {
			// arrange
			render(<Async />);
			
			const list = await screen.findAllByRole('listItem');
			expect(list).not.toHaveLength(0);
	
		});

```

Mock :
- mon composant appelle fetch => comment mock cet appel
- window.fetch pour simuler le fetch(), on lui affecte jest.fn(). cette methode crée un mock
- window.fetch.mockResolvedValueOnce(); on sette une valeur qd le fetch est appelé.
- la valeur settée ici est un object contenant un attribut json qui retourne une fonction async => promesse

```
	test('renders Hello World', async () => {
			// arrange
			window.fetch = jest.fn();
			window.fetch.mockResolvedValueOnce({
				json: async () => [{id:1, title: 'toto'}]
			});
			render(<Async />);
			
			const list = await screen.findAllByRole('listItem');
			expect(list).not.toHaveLength(0);
	
		});
```

- Pour plus d info sur les TU, voir le site de Jest
- react-hooks-testing-library : pour tester les custom hooks
