ServerEvents.recipes(event => {
    const gravel = "#forge:gravel";
    const sand = "#minecraft:sand";
    const dust = "exnihilosequentia:dust";
    const blackstone = "exnihilosequentia:crushed_blackstone";
    const netherrack = "exnihilosequentia:crushed_netherrack";
    const endstone = "exnihilo:crushed_end_stone";
    const soulsand = "minecraft:soul_sand"
    const waterloged = "waterlogged";

    // =================== removal-procedure ===================

    // remove the default ex nihilo loot-tables
    event.remove({type: "exnihilosequentia:sifting"});

    // mesh -> { inputBlock -> [output, chance] }
    const sieveRecipes = {
        "string": {
            "biomesoplenty:dried_salt": [
                ["minecraft:sand", 0.8],
                ["minecraft:gravel", 0.1],
                ["minecraft:dead_bush", 0.3],
                ["minecraft:flint", 0.05]
            ]
        },
        "flint": {},
        "iron": {},
        "diamond": {},
        "netherite": {}
    };

    function makeRolls(meshType, rolls) {
        if (typeof rolls === 'number' ) {
            return [{
                chance: rolls,
                mesh: meshType,
            }];
        }
        return rolls.map((roll) => ({
            chance: roll,
            mesh: meshType
        }));
    }

    Object.entries(sieveRecipes).forEach(([meshType, value]) => {
        Object.entries(value).forEach(([input, outputs]) => {
            outputs.forEach((output) => {
                event.custom({
                    "type": "exnihilosequentia:sifting",
                    "input": input,
                    "result": output[0],
                    "rolls": makeRolls(meshType, output[1])
                })
            })
        })
    })    
});
