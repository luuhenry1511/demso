import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import reducer from './reducer'

const store= createStore(reducer);

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
  document.getElementById('root')
);

reportWebVitals();
