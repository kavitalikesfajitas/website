import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/reducers';
import App from './components/App';
import '../styles/app.css'
render(
  <Provider store={store}>
    <App />
  </Provider>,

  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
