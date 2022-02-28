const  {getYieldForPlant,getYieldForCrop,getTotalYield,getCostsForCrop,getRevenueForCrop,getProfitForCrop} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});


describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});



describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

    describe("getCostsForCrop", () => {
        test("calculate the cost for a crop",()=>{
            const corn = {
                name: "corn",
                yield: 3, //kg
               cost:2,
               
            };
            const input = {
                crop: corn,
                numCrops: 10,
            };
            expect(getCostsForCrop(input)).toBe(20);
        })
    })
});

describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop",() => {
        const corn = {
            name: "corn",
            yield: 3, //kg
           salePrice: 8,
           
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
    expect(getRevenueForCrop(input)).toBe(240)})
})

describe("getProfitForCrop", () => {
    test("calculate the profit for a crop", () =>{
        const corn = {
            name: "corn",
            yield: 3, // <-- 3 kilogram -->
            cost:2, // 2 euro per plant 
            salePrice: 5, // 5 euro sale price voor 1 kg
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        expect(getProfitForCrop(input)).toBe(130); // (5*3*10) - (2*10) = 130
    })
})

