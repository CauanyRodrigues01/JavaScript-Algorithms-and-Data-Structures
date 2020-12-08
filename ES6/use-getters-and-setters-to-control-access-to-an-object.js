class Thermostat {
    constructor(tempFahr){
        this.tempFahr = tempFahr; 
    }
    get temperature() {
        return (5/9) * (this.tempFahr - 32);
    }
    set temperature(tempCel){
        this.tempFahr = (tempCel * 9.0) / 5 + 32;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;