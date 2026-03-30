ServerEvents.recipes(event => {
    const recipe = event.recipes.gtceu.coke_oven;

    event.remove({id: 'gtceu:coke_oven/log_to_charcoal'});
    event.remove({id: 'gtceu:coke_oven/coal_to_coke'});
    event.remove({id: 'gtceu:coke_oven/coal_to_coke_block'});

    recipe('log_to_charcoal')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids(Fluid.of('gtceu:wood_tar', 125))
        .duration(1024);

    recipe('straw_bale_to_charcoal')
        .itemInputs('2x farmersdelight:straw_bale')
        .itemOutputs('minecraft:charcoal')
        .outputFluids(Fluid.of('gtceu:wood_tar', 125))
        .duration(1024);

});
