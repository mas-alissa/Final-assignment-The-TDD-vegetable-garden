const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

// describe("getYieldForPlant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//     };

//     test("Get yield for plant with no environment factors", () => {
//         expect(getYieldForPlant(corn)).toBe(30);
//     });
// });

describe("getYieldForPlant with environment factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
    };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15); // low env. = 15 / meduim env. = 30 / high env. = 45
    });
});

// describe("getYieldForCrop", () => {
//     test("Get yield for crop, simple", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };
//         expect(getYieldForCrop(input)).toBe(30);
//     });
// });
describe("getYieldForCrop", () => {
    test("Get yield for crop with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(150);
    });
});


// describe("getTotalYield", () => {
//     test("Calculate total yield with multiple crops", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const pumpkin = {
//             name: "pumpkin",
//             yield: 4,
//         };
//         const crops = [
//             { crop: corn, numCrops: 5 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         expect(getTotalYield({ crops })).toBe(23);
//     });

//     test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield({ crops })).toBe(0);
//     });

//     describe("getCostsForCrop", () => {
//         test("calculate the cost for a crop",()=>{
//             const corn = {
//                 name: "corn",
//                 yield: 3, //kg
//                cost:2,

//             };
//             const input = {
//                 crop: corn,
//                 numCrops: 10,
//             };
//             expect(getCostsForCrop(input)).toBe(20);
//         })
//     })
// });


describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };


        const pumpkin = {
            name: "pumpkin",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield(environmentFactors, { crops })).toBe(105);
    });



    describe("getCostsForCrop", () => {
        test("calculate the cost for a crop", () => {
            const corn = {
                name: "corn",
                yield: 3, //kg
                cost: 2,

            };
            const input = {
                crop: corn,
                numCrops: 10,
            };
            expect(getCostsForCrop(input)).toBe(20);
        })
    })
});


// describe("getRevenueForCrop", () => {
//     test("calculate the revenue for a crop",() => {
//         const corn = {
//             name: "corn",
//             yield: 3, //kg
//            salePrice: 8,

//         };
//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };
//     expect(getRevenueForCrop(input)).toBe(240)})
// });

describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop", () => {
        const corn = {
            name: "corn",
            yield: 30, //kg
            salePrice: 8,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            }
        }

        const environmentFactors = {
            sun: "high",
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(360)
    });

})

describe("getProfitForCrop", () => {
    test("calculate the profit for a crop", () => {
        const corn = {
            name: "corn",
            yield: 3, // <-- 3 kilogram -->
            cost: 2, // 2 euro per plant 
            salePrice: 5, // 5 euro sale price voor 1 kg
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        expect(getProfitForCrop(input)).toBe(130); // (5*3*10) - (2*10) = 130
    })
})

describe("getTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 3,
        cost: 2,
        salePrice: 5,
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
        cost: 3,
        salePrice: 6,
    };
    const crops = [
        { crop: corn, numCrops: 5 },//65
        { crop: pumpkin, numCrops: 2 },//42
    ];
    test("calculate the profit for multiple crops", () => {
        expect(getTotalProfit({ crops })).toBe(107);

    })

});