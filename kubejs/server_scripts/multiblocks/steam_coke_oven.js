ServerEvents.recipes(event => {
    const recipe = event.recipes.gtceu.steam_coke_oven;

    recipe('log_to_charcoal')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids(
            Fluid.of('gtceu:wood_tar', 125),
            Fluid.of('gtceu:wood_vinegar', 250)
        )
        .duration(512);

    recipe('straw_bale_to_charcoal')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .itemInputs('2x farmersdelight:straw_bale')
        .itemOutputs('minecraft:charcoal')
        .outputFluids(
            Fluid.of('gtceu:wood_tar', 125),
            Fluid.of('gtceu:wood_vinegar', 250)
        )
        .duration(512);

});
