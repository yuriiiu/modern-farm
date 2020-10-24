console.log("Welcome to the main module")

// Import funcion from another module
import {createPlan} from "./plan.js";


// Assign function output to variable
const yearlyPlan = createPlan();
// Print to console
console.log(yearlyPlan);