
import {createCorn} from "./seeds/corn.js";
import {createSoybean} from "./seeds/soybean.js";
import {createSunflower} from "./seeds/sunflower.js";
import {createAsparagus} from "./seeds/asparagus.js";
import {createWheat} from "./seeds/wheat.js";
import {createPotato} from "./seeds/potato.js";

const plants = []


export const addPlant = (seeds) => {

    seeds.forEach( seed => {
        
        if (seed === 'Corn') {
            plants.push(createCorn())
        }
        else if (seed === 'Soybean') {
            plants.push(createSoybean())
        }
        else if (seed === 'Sunflower') {
            plants.push(createSunflower())
        }
        else if (seed === 'Asparagus') {
            plants.push(createAsparagus())
        }
        else if (seed === 'Wheat') {
            plants.push(createWheat())
        }
        else if (seed === 'Potato') {
            plants.push(createPotato())
        }
    })
}

export const usePlants = () => {
    return plants
}