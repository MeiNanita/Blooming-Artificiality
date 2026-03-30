ServerEvents.recipes(event => {

    event.custom({
        type: 'youkaisfeasts:drying_rack',
        category: 'misc',
        cookingtime: 18000, 
        experience: 0.0,
        ingredient: {
            item: 'gtceu:calcium_hydroxide_dust'
        },
        result: {
            item: 'gtceu:calcium_carbonate_dust'
        }
    });

    event.custom({
        type: 'youkaisfeasts:drying_rack',
        category: 'misc',
        cookingtime: 18000,
        experience: 0.0,
        ingredient: {
            item: 'gtceu:silver_dust'
        },
        result: {
            item: 'gtceu:small_silver_oxide_dust',
            count: 2
        }
    });

    event.custom({
        type: 'youkaisfeasts:simple_basin',
        input: {
            item: 'minecraft:cactus'
        },
        output: {
            amount: 50,
            fluid: 'minecraft:water'
        }
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:wither_rose"
            }
        ],
        result: [
            {
                count: 1,
                item: "farmersdelight:straw"
            },
            {
                chance: 0.25,
                item: "gtceu:tiny_dark_ash_dust"
            }
        ],
        tool: {
            tag: "forge:tools/knives"
        }
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "biomesoplenty:wilted_lily"
            }
        ],
        result: [
            {
                count: 2,
                item: "farmersdelight:straw"
            },
            {
                chance: 0.5,
                item: "farmersdelight:straw"
            }
        ],
        tool: {
            tag: "forge:tools/knives"
        }
    });

    event.custom({
        type: "gtceu:crafting_shaped_fluid_container",
        pattern: [
            "PPP",
            "PBP",
            "PPP"
        ],
        key: {
            P: {
                tag: "minecraft:planks"
            },
            B: {
                type: "gtceu:fluid_container",
                fluid: {
                    amount: 1000,
                    value: [
                        {
                            tag: "forge:wood_tar"
                        }
                    ]
                }
            }
        },
        result: {
            item: "gtceu:treated_wood_planks",
            count: 8
        }
    });

});
