import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

import ErrorBoundary from './error'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <App hasError={hasError} />
    )}
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorker.unregister();
