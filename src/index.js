import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import myStore from './store/index';

import './index.css';
import App from './App';

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));
