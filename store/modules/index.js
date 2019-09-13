import { combineReducers } from 'redux';
const files = require.context('./', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './index.js') return;
    let mod = files(key);
    let reducers = mod.reducers || {};
    let initialState = mod.initialState || {};
    modules[key.replace(/(\.\/|\.js)/g, '')] = (state = initialState, action) => reducers[action.type] ? reducers[action.type](state, action.payload) : state;
})

const rootReducer = combineReducers(modules);

export default rootReducer;