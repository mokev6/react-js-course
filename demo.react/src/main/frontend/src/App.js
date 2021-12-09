import SimpleInput from './components/SimpleInput';
import {Route, Switch, Link} from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    
    <Fragment>
      <div className="app">
        <Link to="/">Home </Link>
        <Link to="/clear"> Clear</Link>
      </div>
      <Switch>
        <Route path='/' exact>
          <div className="app">
            <SimpleInput />
          </div>
        </Route>
        <Route path='/clear' exact>
        <div className="app">
          url : /clear
            <SimpleInput />
          </div>
        </Route>

        <Route path='*'>
            Existe pas
        </Route>
			    
		   

      </Switch>
      </Fragment>
  );
}

export default App;
