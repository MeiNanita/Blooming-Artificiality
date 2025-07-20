GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('xeric_terraformer')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)   // input, output, fluid input, fluid output
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.DOWN_TO_UP)
        .setSound(GTSoundEntries.BOILER);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('xeric_terraformer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('xeric_terraformer')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('OOO', '   ')
            .aisle('OXO', ' A ')
            .aisle('OOO', '   ')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('X', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()))
            .where('O', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMinGlobalLimited(1))
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_inert_ptfe', 'gtceu:block/multiblock/cleanroom', false)
        .afterWorking((machine) => {
            let { level, pos } = machine.self();
            if (level.clientSide) return;

            let repl_block = Block.id('minecraft:moss_block').getBlockState(); // desired block-result

            let x = level.random.nextFloat() - 0.5;
            let y = level.random.nextFloat() - 0.5;
            let z = level.random.nextFloat() - 0.5;

            let mag = Math.sqrt(x*x + y*y + z*z);
            x /= mag;
            y /= mag;
            z /= mag;

            let dist = 12 * level.random.nextFloat(); // sphere with a radius of 0 to 12 blocks

            x = dist*x | 0; // converts float to int (signed)
            y = dist*y | 0;
            z = dist*z | 0;

            let new_pos = pos.offset(x, y, z);

            level.server.runCommandSilent(`fillbiome ${new_pos.x} ${new_pos.y} ${new_pos.z} ${new_pos.x} ${new_pos.y} ${new_pos.z} minecraft:desert replace bloom_arti:ruined_wasteland`);

            //let block_name = level.getBlock(pos.above()).getId()
            let block_name = level.getBlock(new_pos).getId();

            if (block_name == 'kubejs:wasteland_soil') {
                level.setBlockAndUpdate(new_pos, repl_block);
            }

        })
})
