import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Termsheet from './pages/Termsheet';
import Welcome from './pages/Welcome';
import { routes } from './routes';
import "./translations/i18n";

function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path='leaseit' element={<Welcome />} />
        {
          routes.map((route, idx) => <Route key={idx} path={route.path} element={route.component} />)
        }
        <Route path='/leaseit/termsheet/:id' element={<Termsheet />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
