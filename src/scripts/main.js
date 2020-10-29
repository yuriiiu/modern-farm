console.log("Welcome to the main module")

// Import funcion from another module
import {createPlan} from "./plan.js";
import {plantSeeds} from "./tractor.js";
import {addPlant} from "./field.js";
import { usePlants} from "./field.js";
import {harvestPlants} from "./harvester.js"



// Create yearly plan
const yearlyPlan = createPlan();
console.log(yearlyPlan)

// Plant seeds
const seeds = plantSeeds(yearlyPlan);

// Add Plant
addPlant(seeds)

// Use Plants
let plants = usePlants();

console.log(plants)

// Harvest plants
let seedObj = harvestPlants(plants);

console.log(seedObj)