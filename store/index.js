import axios from 'axios';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
axios.defaults.baseURL = '<base_api_url>';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk.withExtraArgument(axios))));
export default store;
