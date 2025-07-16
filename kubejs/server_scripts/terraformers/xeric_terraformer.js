ServerEvents.recipes(event => {
    const terra = event.recipes.gtceu.xeric_terraformer; // xeric_terraformer

    terra('xeric_uses_water')
    .inputFluids(Fluid.of('minecraft:water', 1000))
    .duration(32)
    .EUt(30)
});