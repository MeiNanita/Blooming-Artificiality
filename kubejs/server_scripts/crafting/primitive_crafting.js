
ServerEvents.recipes(event => {

    event.remove({output: 'minecraft:crafting_table'});
    event.shaped(Item.of('minecraft:crafting_table'), [
        'AK',
        'WW'
    ], {
        W: '#minecraft:logs',
        A: 'notreepunching:flint_axe',
        K: '#forge:tools/knives'
    });

    event.replaceInput({ id: 'minecraft:stonecutter' },
        'minecraft:iron_ingot',
        'gtceu:iron_buzz_saw_blade'
    );

    event.replaceInput({ id: 'minecraft:blast_furnace' },
        'minecraft:iron_ingot',
        'gtceu:wrought_iron_plate'
    );

    event.shaped(Item.of('exnihilosequentia:oak_sieve'), [
        'P P',
        'PHP',
        'S S'
    ], {
        P: 'biomesoplenty:dead_planks',
        H: 'biomesoplenty:dead_slab',
        S: '#forge:rods/wood'
    });

    event.remove({output: 'exnihilosequentia:flint_mesh'});
    event.remove({output: 'exnihilosequentia:iron_mesh'});
    event.remove({output: 'exnihilosequentia:diamond_mesh'});
    event.remove({output: 'exnihilosequentia:emerald_mesh'});
    event.remove({output: 'exnihilosequentia:netherite_mesh'});

    event.shaped(Item.of('exnihilosequentia:flint_mesh'), [
        'PMP',
        'MGM',
        'PMP'
    ], {
        P: 'gtceu:flint_dust',
        G: 'gtceu:flint_block',
        M: 'exnihilosequentia:string_mesh'
    });

    event.shaped(Item.of('exnihilosequentia:iron_mesh'), [
        'PMP',
        'MGM',
        'PMP'
    ], {
        P: 'gtceu:fine_steel_wire',
        G: 'gtceu:steel_frame',
        M: 'exnihilosequentia:flint_mesh'
    });

});
