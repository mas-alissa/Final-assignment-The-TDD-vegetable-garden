// const getYieldForPlant = (corn) => {
//     return corn.yield;
// }

const getYieldForPlant = (corn,environmentFactors) => {
    const environmentFactor = environmentFactors.sun;
    if(environmentFactor === "low"){
       return corn.yield * 50 / 100;
    } else if(environmentFactor === "medium"){
    return corn.yield * 100 / 100;
     } else if(environmentFactor === "high"){
return corn.yield * 150 / 100;
}
}

// const getYieldForCrop = (input) => {
//     return input.crop.yield * input.numCrops;
// }

const getYieldForCrop = (input,environmentFactors) => {
    const environmentFactor = environmentFactors.sun;
    if(environmentFactor === "low"){
        return (input.crop.yield * 50 / 100) * input.numCrops; //OF --> input.crop.yield * (-input.crop.factor.sun.low) / 100;
    } else if (environmentFactor === "medium"){
        return input.crop.yield * input.numCrops;// OF --> (input.crop.yield * 100 / 100) * input.numCrops;
    } else if(environmentFactor === "high"){
        return input.crop.yield * (150 / 100) * input.numCrops;
    }
}


// const getTotalYield = ({ crops }) => {
//     const multiplicationProcess = crops.map(item => item.crop.yield * item.numCrops);
//     const additionProcess = multiplicationProcess.reduce((acc, item) => acc + item, 0);
//     return additionProcess;
// }

const getTotalYield = (environmentFactors,{ crops }) => {
    const multiplicationProcess = crops.map(item => {
        const environmentFactor = environmentFactors.sun;
        if(environmentFactor === "low"){
            return (item.crop.yield * -item.crop.factor.sun.low / 100) * item.numCrops
        } else if(environmentFactor === "medium"){
            return (item.crop.yield * 100 / 100) * item.numCrops
        } else if(environmentFactor === "high"){
            return (item.crop.yield * (100 + item.crop.factor.sun.high) / 100) * item.numCrops

        }
    });
    console.log(multiplicationProcess);
    const additionProcess = multiplicationProcess.reduce((acc, item) => acc + item, 0);
    return additionProcess;
}


const getCostsForCrop = (input) => {
    return input.crop.cost * input.numCrops;
}


// const getRevenueForCrop = (input) => {
//     return input.crop.yield * input.crop.salePrice * input.numCrops
// }

const getRevenueForCrop = (input,environmentFactors) => {
    const environmentFactor = environmentFactors.sun;
    if(environmentFactor === "low"){
        return (input.crop.yield * -input.crop.factor.sun.low / 100) * input.crop.salePrice * input.numCrops;
    } else if(environmentFactor === "medium"){
        return (input.crop.yield * 100 / 100) * input.crop.salePrice * input.numCrops;
    } else if(environmentFactor === "high"){
        return (input.crop.yield * (100 + input.crop.factor.sun.high) / 100) * input.crop.salePrice * input.numCrops;
    }
}

// const getProfitForCrop = (input) => {
//     return (input.crop.salePrice * input.crop.yield * input.numCrops) - (input.crop.cost *  input.numCrops)
// }

const getProfitForCrop = (input,environmentFactors) => {
    const environmentFactor = environmentFactors.sun;
    if(environmentFactor === "low"){
        return ((input.crop.yield * -input.crop.factor.sun.low / 100) * input.numCrops * input.crop.salePrice) - input.crop.cost * input.numCrops;
    } else if(environmentFactor === "medium"){
        return ((input.crop.yield * 100 / 100) * input.numCrops * input.crop.salePrice) - input.crop.cost * input.numCrops;
    }else if(environmentFactor === "high"){
        return ((input.crop.yield * (100 + input.crop.factor.sun.high) / 100) * input.numCrops * input.crop.salePrice) - input.crop.cost * input.numCrops;
    }
}

// const getTotalProfit = ({crops}) => {
//     const arrayProfitPerplant = crops.map(item => (item.crop.salePrice * item.crop.yield * item.numCrops) - (item.crop.cost * item.numCrops)) //[ 65 , 42 ]
//     const totalProfit = arrayProfitPerplant.reduce((acc,elem) => acc + elem,0)
//     return totalProfit;
//     }

const getTotalProfit = (environmentFactors,{crops}) => {
    const arrayProfitPerplant = crops.map(item => {
        const environmentFactor = environmentFactors.sun;
        if(environmentFactor === "low"){
            return ((item.crop.yield * (-item.crop.factor.sun.low / 100)) * item.numCrops * item.crop.salePrice) - (item.crop.cost * item.numCrops);
        } else if(environmentFactor === "medium"){
            return ((item.crop.yield * (100 / 100)) * item.numCrops * item.crop.salePrice) - (item.crop.cost * item.numCrops);
        }else if(environmentFactor === "high"){
            return ((item.crop.yield * ((100 + item.crop.factor.sun.high) / 100)) * item.numCrops * item.crop.salePrice) - (item.crop.cost * item.numCrops);
        }
    }) 
    const totalProfit = arrayProfitPerplant.reduce((acc,elem) => acc + elem,0)
    return totalProfit;
    }


module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield,getCostsForCrop,getRevenueForCrop,getProfitForCrop,getTotalProfit };