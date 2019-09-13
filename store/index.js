import reducers from './modules';
import { createStore } from 'redux';

const store = createStore(reducers);
export default store;
