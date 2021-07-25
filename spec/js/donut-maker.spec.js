//Iteration (Sprint) 1
describe('Feature 1: Have a way to count donuts', () => {
    describe('Can add to donut count', () => {
        let underTest;

        beforeEach(()=>{
            underTest = new DonutMaker();
        })

        it('should start with a donut count of 0', ()=>{
            expect(underTest.donutCount).toBe(0);
        })
        it('Can retrieve a donut count', ()=>{
            underTest.recordClick();
            expect(underTest.donutCount).toBe(1);
        })
        it('Can retreieve 2 as a donut count if 2 clicks recorded',()=>{
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.donutCount).toBe(2);
        })
    });
});

describe('Feature 2: Able to purchase first Auto Clicker with 100 donuts from your count', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
        for(let i = 0; i < 100; i++){
            underTest.recordClick();
        }
    })
    
    it('Can Retreive autoClickerCount', ()=>{
        expect(underTest.autoClickerCount).toBe(0);
    })
    it('Can add to autoClickerCount', ()=>{
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toBe(1);
    })
    it('buyAutoClicker should remove 100 donuts from donut count', () => {
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toBe(1);
        expect(underTest.donutCount).toBe(0);
    })
});

describe('Feature 3: Cost of each autoClicker will go up per purchase', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
    })

    it('2nd autoclicker purchase will increase by 10%', () =>{
        for(let i = 0; i < 210; i++){
            underTest.recordClick();
        }
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(110);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(0);
    })
    it('Each autoclicker purchase will increase by 10% there after.', () =>{
        for(let i = 0; i < 331; i++){
            underTest.recordClick();
        }
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(231);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(121);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(0);
    })
});

describe('Feature 4: Ensure there are enough clicks to buy AutoClicker', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
    })
    it('Prevent the autoClickerCount from increasing if there arent enough donuts', ()=>{
        for(let i = 0; i < 332; i++){
            underTest.recordClick();
        }
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(232);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(122);
        underTest.buyAutoClicker();
        expect(underTest.donutCount).toBe(1);
        underTest.buyAutoClicker();
        expect(underTest.autoClickerCount).toBe(3);
    })
});

describe('Feature 5: activateAutoClickers() add autoClickerCount to donutCount', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
    })
    it('When activateAutoClickers is executed it should add autoClickerCount to donutCount', ()=>{
        for(let i = 0; i < 332; i++){
            underTest.recordClick();
        }
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.activateAutoClickers();
        expect(underTest.donutCount).toBe(4);
    })
});

//Iteration (Sprint) 2

describe('Feature 1: Can purchase donutMultipliers', () => {
        let underTest;
        beforeEach(()=>{
            underTest = new DonutMaker();
        })

        it('Should retrieve a donutMultiplierCount of 0', ()=>{
            expect(underTest.donutMultiplierCount).toBe(0);
        })
        it('Can add to donutMultiplierCount', ()=>{
            for(let i = 0; i < 10; i++){
                underTest.recordClick();
            }
            underTest.buyDonutMultiplier();
            expect(underTest.donutMultiplierCount).toBe(1);
        })
        it('buyDonutMultiplier should subtract 10 donuts',()=>{
            for(let i = 0; i < 10; i++){
                underTest.recordClick();
            }
            underTest.buyDonutMultiplier();
            expect(underTest.donutCount).toBe(0);
        })
});

describe('Feature 2: Cost of each donutMultiplier will go up per purchase', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
    })

    it('2nd donutMultipler purchase will increase by 10%', () =>{
        for(let i = 0; i < 21; i++){
            underTest.recordClick();
        }
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount).toBe(11);
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount).toBe(0);
    })
    it('Each donutMultiplier purchase will increase by 10% there after.', () =>{
        for(let i = 0; i < 34; i++){
            underTest.recordClick();
        }
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount).toBe(24);
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount).toBe(13);
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount.toFixed(2)).toBe('0.90');
    })
});

describe('Feature 3: Ensure there are enough clicks to buy DonutMultiplier', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
    })
    it('Prevent the donutMultiplier Count from increasing if there arent enough donuts', ()=>{
        for(let i = 0; i < 34; i++){
            underTest.recordClick();
        }
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount).toBe(24);
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount).toBe(13);
        underTest.buyDonutMultiplier();
        expect(underTest.donutCount.toFixed(2)).toBe('0.90');
        underTest.buyDonutMultiplier();
        expect(underTest.donutMultiplierCount).toBe(3);
    })
});

describe('Feature 4: First donutMulitplier should increase a clicks value by 1.2x', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
    })
    it('Donuts added from clicks increase after the first donutMultiplier is purchased', () =>{
        for(let i = 0; i < 10; i++){
            underTest.recordClick();
        }
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        expect(underTest.donutCount).toBe(1.2);
    })
});

describe('Feature 5: Subsequent Donut Multipliers click bonus will go up exponentially', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
        for(let i = 0; i < 21; i++){
            underTest.recordClick();
        }
    })
    it('Increase the value multiplier to 1.2 to the xth power where x is donutMultiplierCount', () =>{
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        expect(underTest.donutCount).toBe(12.2);
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        expect(underTest.clickValueMultiplier.toFixed(2)).toBe('2.64');
        expect(underTest.donutCount.toFixed(2)).toBe('3.84');
    })
});

describe('Feature 6: DonutMultipliers clickbonus will apply to clicks from the autoClicker', () => {
    let underTest;
    beforeEach(()=>{
        underTest = new DonutMaker();
        for(let i = 0; i < 231; i++){
            underTest.recordClick();
        }
        underTest.buyDonutMultiplier();
        underTest.recordClick();
        underTest.buyDonutMultiplier();
        underTest.recordClick();
    })
    it('When activateAutoClickers() is executed the value of donuts an autoClicker makes goes up by the donutMultiplier value', ()=>{
        underTest.buyAutoClicker();
        expect(underTest.donutCount.toFixed(2)).toBe('113.84');
        underTest.activateAutoClickers();
        expect(underTest.donutCount.toFixed(2)).toBe('117.48');
        expect(underTest.autoClickValue.toFixed(2)).toBe('3.64');
        underTest.buyAutoClicker();
        expect(underTest.donutCount.toFixed(2)).toBe('7.48');
        underTest.activateAutoClickers();
        expect(underTest.autoClickValue.toFixed(2)).toBe('6.28')
        expect(underTest.donutCount.toFixed(2)).toBe('20.04');
    })
});