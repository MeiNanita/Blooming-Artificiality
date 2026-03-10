ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    greg.primitive_chemical_reactor('caco3_to_quicklime')
        .itemInputs('gtceu:calcium_carbonate_dust')
        .itemOutputs('gtceu:quicklime_dust')
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000),
        )
        .duration(200);

    greg.primitive_chemical_reactor('calcium_oxide_to_calcium_hydroxide')
        .itemInputs('gtceu:quicklime_dust')
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
        )
        .itemOutputs('gtceu:calcium_hydroxide_dust')
        .duration(200);

    greg.primitive_chemical_reactor('gypsum_to_calcium_sulfide')
        .itemInputs(
            'gtceu:gypsum_dust',
            '2x gtceu:charcoal_dust'
        )
        .itemOutputs('gtceu:calcium_sulfide_dust')
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 2000),
        )
        .duration(200);
        
});