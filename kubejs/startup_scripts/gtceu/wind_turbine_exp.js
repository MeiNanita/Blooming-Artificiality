const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe");
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine");
const $WorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine");

function EnvironmentModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL // 
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (!machine instanceof $WorkableElectricMultiblockMachine) {
        return $RecipeModifier.nullWrongType($WorkableElectricMultiblockMachine, machine);
    } else {

        if (recipe.getOutputEUt().voltage() > machine.getMaxVoltage()) return ModifierFunction.NULL;



        //let temp = machine.getCoilType().getCoilTemperature() // 
        let altitude = machine.getPos().getY();
        let isRaining = machine.getLevel().isRaining();
        let daytime = machine.getLevel().getDayTime(); // 0 - 24,000

        let eu_out = recipe.getOutputEUt().voltage(); // is positive int
        //let eu_in = recipe.getInputEUt(); // it's 0 for generators

        let max_voltage = machine.getMaxVoltage();
        let tier = machine.getTier(); // 2 = MV

        console.log(`Out: ${eu_out}`);
        console.log(`Max_V: ${max_voltage}`);
        console.log(`Tier: ${tier}`);
        console.log("-------------");

        let energyModifier = ModifierFunction.builder().eutMultiplier(daytime / 24000).build();
        //OverclockingLogic.create(1, 1, true).getModifier(machine, recipe) // double duration-factor per overclock (usually 0.5 or 0.25), double energy-factor (usually 4), boolean has subTicks
        //ModifierFunction.IDENTITY.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        //OverclockingLogic.NON_PERFECT_OVERCLOCK.getModifier(machine, recipe).andThen(energyModifier);

        return energyModifier;

    }
}

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('example_env')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('example_smelter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('example_env')
        .recipeModifiers([(machine, recipe) => EnvironmentModifier(machine, recipe)]) 
        .generator(true)
        .appearanceBlock(() => Block.getBlock("gtceu:solid_machine_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##')
            .aisle('#C')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_solid_steel", "gtceu:block/multiblock/blast_furnace")
})

