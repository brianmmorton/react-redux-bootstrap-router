import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch as fetchUser } from 'store/user';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles';

import createRoutes from './routes';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';

import createStore from 'store/create';

const store = createStore();

function renderApp () {
  const state = store.getState();
  const routes = createRoutes(state);

  ReactDOM.render(
    <Provider store={store}>
      <App routes={routes} />
    </Provider>
  , document.getElementById('root'));
}

// initiate user before loading app
store.dispatch(fetchUser())
  .then(renderApp)
  .catch(renderApp);

registerServiceWorker();
