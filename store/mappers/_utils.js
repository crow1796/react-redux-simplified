export const extractActionAndParamsFrom = (target) => {
    let extractedData = {
        module: null,
        action: null
    };
    let split = target.split('/');
    extractedData.module = split[0];
    extractedData.propName = split[1];
    return extractedData;
}