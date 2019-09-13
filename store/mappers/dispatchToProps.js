import { extractActionAndParamsFrom } from './_utils'
const files = require.context('./../reducers/actions', false, /\.js|ts$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './index.js' || key === './index.ts') return;
    modules[key.replace(/(\.\/|\.js|ts)/g, '')] = files(key);
})

export default mapping => {
    return (dispatch) => {
        let mapped = {};
        Object.keys(mapping).map(key => {
            let extractedData = extractActionAndParamsFrom(mapping[key]);
            mapped[key] = (...args) => dispatch(modules[extractedData.module][extractedData.propName].apply(null, args))
        })
        return mapped;
    };
}