StartupEvents.registry("block", (event) => {
    event.create("scrap_metal")
    .displayName("Scrap metal")
    .mapColor('METAL')
    .model('kubejs:block/scrap_metal')
    .box(0, 0, 0, 16, 4, 16)
    .soundType('chain')
    .hardness(1.0)
    .resistance(1.0)
    .defaultCutout();


    event.create("scrap_plumbing")
    .displayName("Scrap plumbing")
    .mapColor('METAL')
    .model('kubejs:block/scrap_plumbing')
    .soundType('copper')
    .hardness(1.0)
    .resistance(1.0)
    .defaultCutout();


    event.create("scrap_electronics")
    .displayName("Scrap electronics")
    .mapColor('METAL')
    .model('kubejs:block/scrap_electronics')
    .soundType('copper')
    .hardness(1.0)
    .resistance(1.0)
    .defaultCutout();


    event.create("scrap_cable")
    .displayName("Scrap cable")
    .mapColor('METAL')
    .model('kubejs:block/scrap_cable')
    .box(0, 0, 0, 16, 8, 16)
    .soundType('wool')
    .hardness(1.0)
    .resistance(1.0)
    .defaultCutout();


    event.create("trashbag")
    .displayName("Trashbag")
    .mapColor('COLOR_BLACK')
    .model('kubejs:block/trashbag')
    .soundType('azalea_leaves')
    .hardness(0.2)
    .resistance(0.2)
    .blockEntity(blockInfo => {
        blockInfo.inventory(9, 1);
        blockInfo.rightClickOpensInventory();
    })
    .defaultCutout();


    event.create("fog_collector", "cardinal")
    .blockEntity(blockInfo => {
        blockInfo.attachCapability(CapabilityBuilder.FLUID.customBlockEntity()
            .getCapacity(be => 1000)
            .onFill((be, stack, simulate) => {
                if (stack.id != "minecraft:water") return 0
                const current_water_amount = be.persistentData.getInt('water');
                if (1000 - current_water_amount > 0 && !simulate) {
                    be.persistentData.putInt('water', current_water_amount + stack.amount);
                    return stack.amount;
                }
                return 0;
            }) 
            .onDrain((be, stack, simulate) => {
                // since the fluid handlers currently don't work, this event doesn't fire... and thus can be ignored
                console.log('drain event launched!');
                console.log(stack.id);
                console.log(stack.amount);
                return 0;
            })
            .getFluid(be => {
                let { level, blockPos } = be;
                let block = level.getBlockState(blockPos);
                let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                return Fluid.of("minecraft:water", be.persistentData.getInt('water') || 0);
            })  
            
        );
        blockInfo.serverTick(36, 0, event => {
            if (event.getLevel().isNight()) {
                let fluid = event.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                fluid.fill(Fluid.of("minecraft:water", 1), "execute");
            }
        });
        blockInfo.clientTick(180, 0, event => {
            if (event.getLevel().isNight()) {
                event.level.spawnParticles('minecraft:dripping_water', true, event.blockPos.x + 0.5, event.blockPos.y + 1.15, event.blockPos.z + 0.5, 0, 0.3, 0, 1, 1);
            }
        });
    })
    .displayName("Fog collector")
    .mapColor('PODZOL')
    .model('kubejs:block/fog_collector')
    .soundType('bamboo')
    .hardness(1.0)
    .resistance(1.0)
    .defaultCutout();


});


