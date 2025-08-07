ServerEvents.recipes(event => {

    /**
     * 
     * @param {string} species - the name of the agricraft crop-species, for example "minecraft:cactus"
     * @param {string} target - the name of the (soil-)block that should be targetted, for example "kubejs:wasteland_soil"
     * @param {string} result - the name of the (soil-)block that the target should be turned into, for example "minecraft:sand"
     */
    const agri_crop_terraform = function(species, target, result) {

        event.custom({
            type: "lychee:random_block_ticking",
            block_in: {
                blocks: ["agricraft:crop"],
                nbt: `{\"genes\":{\"strength\":{\"rec\":10,\"dom\":10},\"species\":{\"rec\":\"${species}\",\"dom\":\"${species}\"}},\"growthIndex\":7}`
            },
            contextual: [
                {
                    type: "location",
                    offsetY: -1,
                    predicate: {
                        block: {
                            blocks: [target]
                        }
                    }
                },
                {
                    type: "chance",
                    chance: 0.1
                }
            ],
            post: [
                {
                    type: "place",
                    offsetY: -1,
                    block: {
                        blocks: [result]
                    }
                }
            ]
        });

    };

    // ===========================================================================================


    agri_crop_terraform('minecraft:wither_rose', 'kubejs:wasteland_soil', 'chipped:white_sand');


});
