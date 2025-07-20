ServerEvents.recipes(event => {

    // contextual is by default an AND-list
    // the correct location-predicate-docu can be found here: https://minecraft.wiki/w/Advancement/Conditions/location?oldid=2481474

    /*
    // how to do biome-checks
    {
        type: "location",
        predicate: {
            biome: "minecraft:desert"
        }
    }
    */

    event.custom({
        type: "lychee:random_block_ticking",
        contextual: [
            {
                type: "chance",
                chance: 0.25
            },
            {
                type: "or",
                contextual: [
                    {
                        type: "location",
                        offsetY: 1,
                        predicate: {
                            block: {
                                blocks: ["minecraft:water"]
                            }
                        }
                    },
                    {
                        type: "location",
                        offsetX: 1,
                        predicate: {
                            block: {
                                blocks: ["minecraft:water"]
                            }
                        }
                    },
                    {
                        type: "location",
                        offsetX: -1,
                        predicate: {
                            block: {
                                blocks: ["minecraft:water"]
                            }
                        }
                    },
                    {
                        type: "location",
                        offsetZ: 1,
                        predicate: {
                            block: {
                                blocks: ["minecraft:water"]
                            }
                        }
                    },
                    {
                        type: "location",
                        offsetZ: -1,
                        predicate: {
                            block: {
                                blocks: ["minecraft:water"]
                            }
                        }
                    }
                ]
            }
        ],
        post: [
            {
                type: "place",
                block: {
                    blocks: ["minecraft:clay"]
                }
            }
        ],
        block_in: "kubejs:dry_lakebed"
    });

});