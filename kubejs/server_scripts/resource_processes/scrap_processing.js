ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;


    // =======================================================
    //                   smelting & blasting recipes
    // =======================================================

    event.smelting('minecraft:iron_ingot', 'kubejs:scrap_metal', 0.7, 200);
    event.smelting('minecraft:copper_ingot', 'kubejs:scrap_plumbing', 0.7, 200);
    event.smelting('gtceu:tin_ingot', 'kubejs:scrap_cable', 0.7, 200);
    event.smelting('2x minecraft:redstone', 'kubejs:scrap_electronics', 0.7, 200);

    event.smelting('minecraft:iron_ingot', 'kubejs:shredded_scrap_metal', 0.7, 200);
    event.smelting('minecraft:copper_ingot', 'kubejs:shredded_scrap_plumbing', 0.7, 200);
    event.smelting('gtceu:tin_ingot', 'kubejs:shredded_scrap_cable', 0.7, 200);
    event.smelting('2x minecraft:redstone', 'kubejs:shredded_scrap_electronics', 0.7, 200);

    event.blasting('minecraft:iron_ingot', 'kubejs:scrap_metal', 0.7, 100);
    event.blasting('minecraft:copper_ingot', 'kubejs:scrap_plumbing', 0.7, 100);
    event.blasting('gtceu:tin_ingot', 'kubejs:scrap_cable', 0.7, 100);
    event.blasting('2x minecraft:redstone', 'kubejs:scrap_electronics', 0.7, 100);

    event.blasting('minecraft:iron_ingot', 'kubejs:shredded_scrap_metal', 0.7, 100);
    event.blasting('minecraft:copper_ingot', 'kubejs:shredded_scrap_plumbing', 0.7, 100);
    event.blasting('gtceu:tin_ingot', 'kubejs:shredded_scrap_cable', 0.7, 100);
    event.blasting('2x minecraft:redstone', 'kubejs:shredded_scrap_electronics', 0.7, 100);

    // =======================================================
    //                   macerator recipes
    // =======================================================

    greg.macerator('macerate_scrap_metal')
        .itemInputs('kubejs:scrap_metal')
        .itemOutputs(
            '2x kubejs:shredded_scrap_metal',
            'kubejs:shredded_scrap_metal',
            'kubejs:shredded_scrap_metal',
            '4x kubejs:shredded_scrap_metal'
        )
        .duration(512)
        .EUt(GTValues.V[GTValues.ULV]);

    greg.macerator('macerate_scrap_plumbing')
        .itemInputs('kubejs:scrap_plumbing')
        .itemOutputs(
            '2x kubejs:shredded_scrap_plumbing',
            'kubejs:shredded_scrap_plumbing',
            'kubejs:shredded_scrap_plumbing',
            '4x kubejs:shredded_scrap_plumbing'
        )
        .duration(512)
        .EUt(GTValues.V[GTValues.ULV]);

    greg.macerator('macerate_scrap_cable')
        .itemInputs('kubejs:scrap_cable')
        .itemOutputs(
            '2x kubejs:shredded_scrap_cable',
            'kubejs:shredded_scrap_cable',
            'kubejs:shredded_scrap_cable',
            '4x kubejs:shredded_scrap_cable'
        )
        .duration(512)
        .EUt(GTValues.V[GTValues.ULV]);

    greg.macerator('macerate_scrap_electronics')
        .itemInputs('kubejs:scrap_electronics')
        .itemOutputs(
            '2x kubejs:shredded_scrap_electronics',
            'kubejs:shredded_scrap_electronics',
            'kubejs:shredded_scrap_electronics',
            '4x kubejs:shredded_scrap_electronics'
        )
        .duration(512)
        .EUt(GTValues.V[GTValues.ULV]);

    // =======================================================
    //                   PBF recipes
    // =======================================================

    greg.primitive_blast_furnace('pbf_shredded_metal')
        .itemInputs(
            'kubejs:shredded_scrap_metal',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            'minecraft:iron_ingot'
        )
        .chancedOutput('gtceu:zinc_ingot', 500, 0)
        .chancedOutput('gtceu:ash_dust', 1250, 0)
        .duration(512);

    greg.primitive_blast_furnace('pbf_shredded_plumbing')
        .itemInputs(
            'kubejs:shredded_scrap_plumbing',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            'minecraft:copper_ingot'
        )
        .chancedOutput('gtceu:lead_ingot', 500, 0)
        .chancedOutput('gtceu:ash_dust', 1250, 0)
        .duration(512);

    greg.primitive_blast_furnace('pbf_shredded_cable')
        .itemInputs(
            'kubejs:shredded_scrap_cable',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            'gtceu:tin_ingot'
        )
        .chancedOutput('gtceu:nickel_ingot', 500, 0)
        .chancedOutput('gtceu:ash_dust', 1250, 0)
        .duration(512);

    greg.primitive_blast_furnace('pbf_shredded_electronics')
        .itemInputs(
            'kubejs:shredded_scrap_electronics',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            '4x minecraft:redstone'
        )
        .chancedOutput('gtceu:silver_ingot', 500, 0)
        .chancedOutput('gtceu:ash_dust', 1250, 0)
        .duration(512);

});