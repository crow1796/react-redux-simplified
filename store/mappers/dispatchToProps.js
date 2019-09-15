import { extractActionAndParamsFrom } from './_utils'
const files = require.context('./../modules', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './index.js') return;
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).actions;
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