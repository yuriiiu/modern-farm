

export const harvestPlants = (plants) => {
    const seedObj = []

    for (let plant of plants) {
        if (Array.isArray(plant)) {
            plant.forEach( e => {
                var output = e.output/2
                
                for (var i=0; i < output; i++) {
                    seedObj.push(e)
                }
            })
        }
        else {
            for (var i=0; i<plant.output; i++) {
                seedObj.push(plant)
            }
        }
    }

    return seedObj
}