ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    greg.primitive_chemical_reactor('chloromethane_to_methanol')
        .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 1))
        .inputFluids(
            Fluid.of('gtceu:chloromethane', 1000),
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:methanol', 1000),
            Fluid.of('gtceu:salt_water', 1000)
        )
        .duration(100);

    greg.primitive_chemical_reactor('dummy_recipe')
        .itemInputs(Item.of('gtceu:calcium_carbonate_dust', 1))
        .itemOutputs(Item.of('gtceu:quicklime_dust', 1))
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000),
        )
        .duration(200);
        
});