class DonutMaker{
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.currentAutoClickerPrice = 100;
        this.donutMultiplierCount = 0;
        this.currentDonutMultiplierPrice = 10;
        this.clickValueMultiplier = 0;
        this.autoClickValue = 1;
    }

    recordClick(){
        if(this.donutMultiplierCount<1){
            this.donutCount++;
        }
        else{
            this.donutCount+= this.clickValueMultiplier;
        }
    }

    buyAutoClicker(){
        if(this.donutCount>=this.currentAutoClickerPrice){
            this.autoClickerCount++;
            this.donutCount-=this.currentAutoClickerPrice;
            this.currentAutoClickerPrice+=(this.currentAutoClickerPrice*0.10);
         }
    }

    activateAutoClickers(){
        this.autoClickValue+= this.clickValueMultiplier;
        this.donutCount += this.autoClickValue*this.autoClickerCount;
    }

    buyDonutMultiplier(){
        if(this.donutCount>=this.currentDonutMultiplierPrice){
            this.donutMultiplierCount++;
            this.clickValueMultiplier += Math.pow(1.2, this.donutMultiplierCount);
            this.donutCount-=this.currentDonutMultiplierPrice;
            this.currentDonutMultiplierPrice+=(this.currentDonutMultiplierPrice*0.10)
        }
    }

    reset(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.currentAutoClickerPrice = 100;
        this.donutMultiplierCount = 0;
        this.currentDonutMultiplierPrice = 10;
        this.clickValueMultiplier = 0;
        this.autoClickValue = 1;
    }
}
export { DonutMaker }