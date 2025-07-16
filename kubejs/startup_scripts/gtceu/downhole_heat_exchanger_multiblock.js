GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('downhole_heat_exchanger')
        .category('bloom_arti')
        //.setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)   // input, output, fluid input, fluid output
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.BOILER);
});



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('downhole_heat_exchanger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('downhole_heat_exchanger')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', 'CSC', ' C ')
            .aisle(' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', ' P ', 'SPS', 'CKC')
            .aisle('   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', 'CSC', ' C ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMinGlobalLimited(1))
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/cleanroom', false)
        .afterWorking((machine) => {
            let { level, pos } = machine.self();
            if (level.clientSide) return;

            const entity = level.createEntity('minecraft:warden');
            entity.setPos(Vec3d.atBottomCenterOf(pos));
            entity.finalizeSpawn(level, level.getCurrentDifficultyAt(pos), 'TRIGGERED', null, null);
            level.addFreshEntityWithPassengers(entity);
            // play some sound here or whatever
        })
})