import React from 'react';
import ReactDOM from 'react-dom';
import 'css-reset-and-normalize/css/reset-and-normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
