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


const getRevenueForCrop = (input) => {
    return input.crop.yield * input.crop.salePrice * input.numCrops
}

const getProfitForCrop = (input) => {
    return (input.crop.salePrice * input.crop.yield * input.numCrops) - (input.crop.cost *  input.numCrops)
}

const getTotalProfit = ({crops}) => {
    const arrayProfitPerplant = crops.map(item => (item.crop.salePrice * item.crop.yield * item.numCrops) - (item.crop.cost * item.numCrops)) //[ 65 , 42 ]
    const totalProfit = arrayProfitPerplant.reduce((acc,elem) => acc + elem,0)
    return totalProfit;
    }


module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield,getCostsForCrop,getRevenueForCrop,getProfitForCrop,getTotalProfit };