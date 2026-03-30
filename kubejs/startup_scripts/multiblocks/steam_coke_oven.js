GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    GTRecipeTypes.COKE_OVEN_RECIPES
        .setProgressBar(GuiTextures.PROGRESS_BAR_COKE_OVEN, FillDirection.LEFT_TO_RIGHT)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setSlotOverlay(true, false, GuiTextures.DUST_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BEAKER_OVERLAY_2);

    event.create('steam_coke_oven')
        .category('coke_oven')
        .setMaxIOSize(1, 1, 1, 2)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1) // is_output, is_fluid, (opt. is_last (default = true)), GuiTexture
        .setSlotOverlay(true, false, GuiTextures.DUST_OVERLAY)
        .setSlotOverlay(true, true, GuiTextures.BEAKER_OVERLAY_3)
        .setSlotOverlay(true, true, false, GuiTextures.BEAKER_OVERLAY_2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COKE_OVEN, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('steam_coke_oven', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_coke_oven')
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF', 'BBB', 'BBB')
            .aisle('FFF', 'BPB', 'BCB')
            .aisle('FFF', 'B@B', 'BBB')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get())
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1).setPreviewCount(1)))
            .where('C', Predicates.blocks(GTBlocks.BRONZE_BRICKS_HULL.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('B', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2)))
            .build())
        .shapeInfo(definition => MultiblockShapeInfo.builder()
            .aisle('FSF', 'BBB', 'BBB')
            .aisle('FFF', 'BPO', 'BCO')
            .aisle('FFF', '-@+', 'BBB')
            .where('@', definition.getBlock(), Direction.SOUTH)
            .where('S', GTMachines.STEAM_HATCH, Direction.NORTH)
            .where('-', GTMachines.STEAM_IMPORT_BUS, Direction.SOUTH)
            .where('+', GTMachines.STEAM_EXPORT_BUS, Direction.SOUTH)
            .where('O', GTMachines.FLUID_EXPORT_HATCH[GTValues.ULV], Direction.EAST)
            .where('F', GTBlocks.FIREBOX_BRONZE.get())
            .where('B', GTBlocks.CASING_BRONZE_BRICKS.get())
            .where('P', GTBlocks.CASING_BRONZE_PIPE.get())
            .where('C', GTBlocks.BRONZE_BRICKS_HULL.get())
            .build())
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_bronze_plated_bricks',
            'gtceu:block/multiblock/steam_oven'
        );

});
