import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux'
import { Provider} from 'react-redux'
import reducer from './reducer/reducer';
const store = createStore(reducer);
export default store;

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
//registerServiceWorker();
