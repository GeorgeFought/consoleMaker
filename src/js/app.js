import { DonutMaker } from "./donut-maker.js";
const newDonutMaker = new DonutMaker();

console.log(newDonutMaker);

const donutCount = document.querySelector(".player-stats__donut-count");
const autoClickerCount = document.querySelector(".player-stats__auto-clicker-count");
const autoClickerCost = document.querySelector(".player-stats__auto-clicker-cost");
const donutMultiplierCount = document.querySelector(".player-stats__multiplier-count");
const donutMultiplierCost = document.querySelector(".player-stats__multiplier-cost");
const donutMultiplier = document.querySelector(".player-stats__current-multiplier");
const clickerButton = document.querySelector(".buttons__clicker-button");
const buyAutoClickerButton = document.querySelector(".buttons__buy-auto-clicker");
const buyDonutMultiplierButton = document.querySelector(".buttons__buy-multiplier");
const resetButton = document.querySelector(".buttons__reset");

const updatePlayerStats = function(){
    donutCount.innerText='Console Count: '+newDonutMaker.donutCount.toFixed();
    autoClickerCount.innerText='Auto Clicker Count: '+newDonutMaker.autoClickerCount;
    autoClickerCost.innerText='Auto Clicker Cost: '+newDonutMaker.currentAutoClickerPrice.toFixed(2);
    donutMultiplierCount.innerText='Console Multiplier Count: '+newDonutMaker.donutMultiplierCount;
    donutMultiplierCost.innerText='Console Multiplier Cost: '+newDonutMaker.currentDonutMultiplierPrice.toFixed(2);
    clickerButton.innerText='Make Consoles';
    donutMultiplier.innerText='Current Multiplier: '+ newDonutMaker.clickValueMultiplier.toFixed(2);
    buyAutoClickerButton.innerText='Buy Auto Clicker: '+newDonutMaker.currentAutoClickerPrice.toFixed();
    buyDonutMultiplierButton.innerText='Buy Console Multiplier: '+newDonutMaker.currentDonutMultiplierPrice.toFixed();
}

updatePlayerStats();

clickerButton.addEventListener("click",()=>{
    newDonutMaker.recordClick();
    updatePlayerStats();
    console.log(newDonutMaker);
})

buyAutoClickerButton.addEventListener("click",()=>{
    if(newDonutMaker.donutCount>=newDonutMaker.currentAutoClickerPrice){
        newDonutMaker.buyAutoClicker();
        updatePlayerStats();
        console.log(newDonutMaker);
    }
})

buyDonutMultiplierButton.addEventListener("click",()=>{
    if(newDonutMaker.donutCount>=newDonutMaker.currentDonutMultiplierPrice){
        newDonutMaker.buyDonutMultiplier();
        updatePlayerStats();
        console.log(newDonutMaker);
    }
})

setInterval(()=>{
    newDonutMaker.activateAutoClickers();
    updatePlayerStats();
}, 1000);

setInterval(()=>{
    if(newDonutMaker.donutCount>=newDonutMaker.currentAutoClickerPrice){
        buyAutoClickerButton.classList.remove("hidden");
    }
    else{
        buyAutoClickerButton.classList.add("hidden");
    }
    if(newDonutMaker.donutCount>=newDonutMaker.currentDonutMultiplierPrice){
        buyDonutMultiplierButton.classList.remove("hidden");
    }
    else{
        buyDonutMultiplierButton.classList.add("hidden");
    }
}, 10);

resetButton.addEventListener("click",()=>{
    newDonutMaker.reset();
})