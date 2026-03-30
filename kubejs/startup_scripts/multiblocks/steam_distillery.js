GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('steam_distillery')
        .category('distillation')
        .setMaxIOSize(1, 0, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('steam_distillery', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_distillery')
        .appearanceBlock(GCYMBlocks.CASING_INDUSTRIAL_STEAM)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FRF', 'BHB', 'BKB', 'BBB')
            .aisle('RFR', 'HPH', 'KPK', 'BKB')
            .aisle('F@F', 'BHB', 'BKB', 'BBB')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get()))
            .where('R', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get())
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X).setExactLimit(1)))
            .where('B', Predicates.blocks(GCYMBlocks.CASING_INDUSTRIAL_STEAM.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('H', Predicates.blocks(GCYMBlocks.CASING_INDUSTRIAL_STEAM.get())
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1)))
            .where('K', Predicates.blocks(GCYMBlocks.CASING_INDUSTRIAL_STEAM.get())
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS_1X).setExactLimit(1)))
            .build())
        .shapeInfo(definition => MultiblockShapeInfo.builder()
            .aisle('FSF', 'BBB', 'BBB', 'BBB')
            .aisle('IFF', 'BPB', 'BPO', 'BBB')
            .aisle('F@F', 'B-B', 'BBB', 'BBB')
            .where('@', definition.getBlock(), Direction.SOUTH)
            .where('B', GCYMBlocks.CASING_INDUSTRIAL_STEAM.get())
            .where('S', GTMachines.STEAM_HATCH, Direction.NORTH)
            .where('-', GTMachines.ITEM_IMPORT_BUS[GTValues.ULV], Direction.SOUTH)
            .where('O', GTMachines.FLUID_EXPORT_HATCH[GTValues.ULV], Direction.EAST)
            .where('I', GTMachines.FLUID_IMPORT_HATCH[GTValues.ULV], Direction.WEST)
            .where('F', GTBlocks.FIREBOX_BRONZE.get())
            .where('P', GTBlocks.CASING_BRONZE_PIPE.get())
            .build())
        .workableCasingModel(
            'gtceu:block/casings/gcym/industrial_steam_casing',
            'gtceu:block/multiblock/steam_oven'
        );

});
