GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('primitive_chemical_reactor')
        .category('primitive')
        .setMaxIOSize(3, 2, 3, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});


GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('primitive_chemical_reactor', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_chemical_reactor')
        .appearanceBlock(GCYMBlocks.CASING_INDUSTRIAL_STEAM)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF', 'SSS', ' S ', '   ', '   ', '   ')
            .aisle('FFF', 'SXS', 'SPS', ' P ', ' P ', ' P ')
            .aisle('FFF', 'SCS', ' S ', '   ', '   ', '   ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get())
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1)))
            .where('X', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('S', Predicates.blocks(GCYMBlocks.CASING_INDUSTRIAL_STEAM.get())
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(0)))
            .where('P', Predicates.blocks(Block.getBlock('architects_palette:pipe')))
            .where(' ', Predicates.air())
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/industrial_steam_casing',
        'gtceu:block/machines/brewery')
        .onWorking((machine) => {
            let { level, pos } = machine.self();
            if (level.clientSide) return;

            if (level.random.nextFloat() >= 0.25) return true; // each tick only has a 25% chance to spawn a smoke particle

            let dx = 0;
            let dz = 0;

            switch (machine.getFrontFacing()) {
                case Direction.NORTH:
                    dz = 1;
                    break;
                case Direction.EAST:
                    dx = -1;
                    break;
                case Direction.SOUTH:
                    dz = -1;
                    break;
                case Direction.WEST:
                    dx = 1;
                    break;
            }

            // primitive way of getting all methods & variables of an unknown object to be printed out
            //Object.keys(machine).forEach(cmd => {
            //    console.log(cmd);
            //});

            let new_pos = pos.offset(dx, 5, dz);

            level.server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${new_pos.x} ${new_pos.y} ${new_pos.z} 0.0 0.0725 0.0 1.0 0`);

            return true; // needs to return a boolean or it'll crash, true = machine can continue
        })
        .editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'primitive_chemical_reactor',
				size: [180, 80],
				background: GuiTextures.PRIMITIVE_BACKGROUND,
				progress: {
					pos: [80, 30],
					size: [20, 20],
					texture: GuiTextures.PROGRESS_BAR_ARROW
				},
				inputs: [
                    { type: 'item', index: 0, pos: [82, 56], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_FURNACE_OVERLAY) },
					{ type: 'item', index: 1, pos: [34, 22], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_DUST_OVERLAY) },
					{ type: 'item', index: 2, pos: [52, 22], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_DUST_OVERLAY) },
					{ type: 'fluid', index: 0, pos: [34, 40], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)) },
                    { type: 'fluid', index: 1, pos: [52, 40], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)) },
				],
				outputs: [
					{ type: 'item', index: 0, pos: [110, 22], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [128, 22], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'fluid', index: 0, pos: [110, 40], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)) },
                    { type: 'fluid', index: 1, pos: [128, 40], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)) },
				],
			})
		);

});
