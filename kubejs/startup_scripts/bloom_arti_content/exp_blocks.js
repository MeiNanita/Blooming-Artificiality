StartupEvents.registry('block', event => {

    event.create('terraformer')
        .blockEntity(blockInfo => {
            blockInfo.serverTick(20, 0, entity => {
                let level = entity.getLevel();
                let pos = entity.getBlockPos();
                let repl_block = Block.id('minecraft:moss_block').getBlockState(); // desired block-result

                let x = level.random.nextFloat() - 0.5;
                let y = level.random.nextFloat() - 0.5;
                let z = level.random.nextFloat() - 0.5;

                let mag = Math.sqrt(x*x + y*y + z*z);
                x /= mag;
                y /= mag;
                z /= mag;

                let dist = 5 * level.random.nextFloat(); // sphere with a radius of 0 to 5 blocks

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
                
            });
        })

        .displayName('Terraformer')
        .soundType('copper')
        .mapColor('METAL')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('forge:mineable/pickaxe')
        
});