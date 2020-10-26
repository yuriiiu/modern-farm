console.log("Welcome to the main module")

// Import funcion from another module
import {createPlan} from "./plan.js";
import {createCorn} from "./seeds/corn.js";
import {createSoybean} from "./seeds/soybean.js";
import {createSunflower} from "./seeds/sunflower.js";
import {createAsparagus} from "./seeds/asparagus.js";
import {createWheat} from "./seeds/wheat.js";
import {createPotato} from "./seeds/potato.js";




// Assign function output to variable
const yearlyPlan = createPlan();
// Print to console
console.log(yearlyPlan);


// Test create seed
const soybeanSeed = createSoybean();
console.log(soybeanSeed);

const cornSeed = createCorn();
console.log(cornSeed);

const sunflowerSeed = createSunflower();
console.log(sunflowerSeed);

const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

const wheatSeed = createWheat();
console.log(wheatSeed);

const potatoSeed = createPotato();
console.log(potatoSeed);