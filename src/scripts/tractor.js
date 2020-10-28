
export const plantSeeds = (plan) => {
    const seeds = []

    for (let rows of plan) {
        rows.forEach(seed => {
            seeds.push(seed)
        });
    }
 
    return seeds
}