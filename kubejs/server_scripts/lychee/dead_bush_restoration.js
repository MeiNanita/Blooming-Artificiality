ServerEvents.recipes(event => {

    /**
     * 
     * @param {string} tree_species - the name of the dynamic tree species, for example "dtphc2:dragon_fruit_sapling"
     * @param {string} req_crop - the name of the agricraft-crop that must surround the dead bush, for example "minecraft:wither_flower"
     * @param {string} req_soil - the name of the soil-tag that the dead bush must be on. Only valid tags are "sandy_soil", "silty_soil" or "clay_soil"
     */
    const agri_bush_restoration = function(tree_species, req_crop, req_soil) {
        const crop_lang = Item.of(req_crop).displayName.string.slice(1, -1);

        event.custom({
            type: "lychee:block_interacting",
            comment: `Revives a dead bush as a new species,\nif the following conditions are met:\n`,
            block_in: "minecraft:dead_bush",
            item_in: [
                {
                    item: "gtceu:fertilizer"
                }
            ],
            contextual: [
                {
                    type: "and",
                    description: `§a§l${crop_lang}§r crop on all 4 cardinal directions\n§7- Crops must have a §6mutativity of 10§r`,
                    contextual: [
                        {
                            type: "location",
                            offsetX: -1,
                            predicate: {
                                block: {
                                    blocks: ["agricraft:crop"],
                                    nbt: `{\"genes\":{\"mutativity\":{\"rec\":10,\"dom\":10},\"species\":{\"rec\":\"${req_crop}\",\"dom\":\"${req_crop}\"}},\"growthIndex\":7}`
                                }
                            }
                        },
                        {
                            type: "location",
                            offsetX: 1,
                            predicate: {
                                block: {
                                    blocks: ["agricraft:crop"],
                                    nbt: `{\"genes\":{\"mutativity\":{\"rec\":10,\"dom\":10},\"species\":{\"rec\":\"${req_crop}\",\"dom\":\"${req_crop}\"}},\"growthIndex\":7}`
                                }
                            }
                        },
                        {
                            type: "location",
                            offsetZ: -1,
                            predicate: {
                                block: {
                                    blocks: ["agricraft:crop"],
                                    nbt: `{\"genes\":{\"mutativity\":{\"rec\":10,\"dom\":10},\"species\":{\"rec\":\"${req_crop}\",\"dom\":\"${req_crop}\"}},\"growthIndex\":7}`
                                }
                            }
                        },
                        {
                            type: "location",
                            offsetZ: 1,
                            predicate: {
                                block: {
                                    blocks: ["agricraft:crop"],
                                    nbt: `{\"genes\":{\"mutativity\":{\"rec\":10,\"dom\":10},\"species\":{\"rec\":\"${req_crop}\",\"dom\":\"${req_crop}\"}},\"growthIndex\":7}`
                                }
                            }
                        }
                    ]
                },
                {
                    type: "location",
                    offsetY: -1,
                    predicate: {
                        block: {
                            tag: `bloom_arti:${req_soil}`
                        }
                    }
                }
            ],
            post: [
                {
                    type: "place",
                    block: tree_species,
                    contextual: {
                        type: "chance",
                        chance: 0.05
                    }
                }
            ]
        });

    };

    agri_bush_restoration("dtphc2:dragon_fruit_sapling", "minecraft:cactus", "sandy_soil");


});
