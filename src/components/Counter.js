import classes from './Counter.module.css';
import { CompteurAction } from '../store/compteur-slice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();
  const compteur = useSelector(state => state.compteur.compteur);

  const toggleCounterHandler = () => {
    dispatch(CompteurAction.reset(0));
  };

  const increment = () => {
    dispatch(CompteurAction.increment());
  };

  const decrement = () => {
    dispatch(CompteurAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{compteur}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrement}>Decrement</button>
    </main>
  );
};

export default Counter;
