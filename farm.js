const getYieldForPlant = (corn) => {
    return corn.yield;
}

const getYieldForCrop = (input) => {
    return input.crop.yield * input.numCrops;
}


const getTotalYield = ({ crops }) => {
    const multiplicationProcess = crops.map(item => item.crop.yield * item.numCrops);
    const additionProcess = multiplicationProcess.reduce((acc, item) => acc + item, 0);
    return additionProcess;
}


const getCostsForCrop = (input) => {
    return input.crop.cost * input.numCrops;
}

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield,getCostsForCrop };