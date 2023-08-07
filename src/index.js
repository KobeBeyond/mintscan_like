import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {renderRoutes} from 'react-router-config'
import {Router} from 'react-router-dom'
import getRoutes from './routes';
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux'
import {createStore} from './stores'
import PendingNavDataLoader from './components/layout/PendingNavDataLoader';
import 'antd/dist/antd.min.css'

const routes = getRoutes()
const history = createBrowserHistory()
const store = createStore(window.APP_INITIAL_STATE)

const application = (
  <Provider store={store}>
    <Router history={history}>
      <PendingNavDataLoader store={store} routes={routes}>
        {() => <App>{renderRoutes(routes)}</App>}
      </PendingNavDataLoader>
    </Router>
  </Provider>
)

// loadableReady(() => {
  const root = document.getElementById('root')
  render(application, root)
// })


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
