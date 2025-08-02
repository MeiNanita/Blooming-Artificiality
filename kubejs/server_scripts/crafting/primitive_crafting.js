
ServerEvents.recipes(event => {
    // =======================================================
    //                   shapeless recipes
    // =======================================================

    event.shapeless(
        'kubejs:plant_fiber_mesh', [
            '4x notreepunching:plant_string'
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_small', 
        [
            'kubejs:stone_pebble'
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_medium', 
        [
            '2x kubejs:stone_pebble'
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_large', 
        [
            '4x kubejs:stone_pebble'
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_x_large', 
        [
            '8x kubejs:stone_pebble'
        ]
    );

    event.shapeless(
        'minecraft:cobblestone', 
        [
            '9x kubejs:stone_pebble'
        ]
    );

    event.shapeless(
        'notreepunching:plant_string', 
        [
            '4x notreepunching:plant_fiber'
        ]
    );

    event.shapeless(
        'minecraft:clay_ball', [
            'gtceu:clay_dust',
            'minecraft:water_bucket'
        ]
    )
    .replaceIngredient(
        'minecraft:water_bucket',
        'minecraft:bucket'
    );

    // =======================================================
    //                   shaped recipes
    // =======================================================

    event.shaped(Item.of('minecraft:crafting_table'), [
        'AK',
        'WW'
    ], {
        W: '#minecraft:logs',
        A: 'notreepunching:flint_axe',
        K: 'gtceu:flint_knife'
    });

    event.shaped(Item.of('minecraft:crafting_table'), [
        'AK',
        'WW'
    ], {
        W: '#minecraft:logs',
        A: '#minecraft/axes',
        K: '#forge:tools/knives'
    });

    event.shaped(Item.of('minecraft:campfire'), [
        ' S ',
        'SFS',
        'WWW'
    ], {
        W: '#minecraft:logs',
        S: 'minecraft:stick',
        F: 'notreepunching:fire_starter'
    })
    .damageIngredient('notreepunching:fire_starter');

    event.shaped(Item.of('minecraft:furnace'), [
        'CCC',
        'CFC',
        'SSS'
    ], {
        C: 'minecraft:cobblestone',
        S: 'minecraft:smooth_stone',
        F: 'minecraft:campfire'
    });

    event.shaped(Item.of('minecraft:clay'), [
        'CCC',
        'CTC',
        'CCC'
    ], {
        C: 'minecraft:clay_ball',
        T: 'notreepunching:clay_tool'
    });

    event.shaped(Item.of('minecraft:barrel'), [
        'M_S',
        'PRP',
        'PRP'
    ], {
        M: '#forge:tools/mallets',
        S: '#forge:tools/saws',
        _: '#minecraft:wooden_slabs',
        P: '#minecraft:planks',
        R: 'gtceu:long_iron_rod'
    });

    event.shaped(Item.of('minecraft:chest'), [
        '_M_',
        'OSO',
        'L_L'
    ], {
        M: '#forge:tools/mallets',
        S: '#forge:tools/saws',
        _: '#minecraft:wooden_slabs',
        O: 'gtceu:iron_ring',
        L: '#minecraft:logs'
    });
    
    event.shaped('kubejs:plant_fiber_sieve', [
        'SMS',
        'MMM',
        'SMS'
    ], {
        M: 'kubejs:plant_fiber_mesh',
        S: 'minecraft:stick'
    });

    // =======================================================
    //                   campfire recipes
    // =======================================================

    event.campfireCooking('minecraft:stone', 'minecraft:cobblestone', 0.1, 600);
    event.campfireCooking('minecraft:smooth_stone', 'minecraft:stone', 0.1, 600);

    // =======================================================
    //                   smelting recipes
    // =======================================================

    event.smelting('minecraft:iron_ingot', 'kubejs:scrap_metal', 0.7, 200);
    event.smelting('minecraft:copper_ingot', 'kubejs:scrap_plumbing', 0.7, 200);
    event.smelting('gtceu:tin_ingot', 'kubejs:scrap_cable', 0.7, 200);
    event.smelting('minecraft:redstone', 'kubejs:scrap_electronics', 0.7, 200);

    event.blasting('minecraft:iron_ingot', 'kubejs:scrap_metal', 0.7, 100);
    event.blasting('minecraft:copper_ingot', 'kubejs:scrap_plumbing', 0.7, 100);
    event.blasting('gtceu:tin_ingot', 'kubejs:scrap_cable', 0.7, 100);
    event.blasting('minecraft:redstone', 'kubejs:scrap_electronics', 0.7, 100);

    const ore_suffix = ['crushed', 'purified', 'refined'];

    ore_suffix.forEach(suffix => {
        event.blasting('minecraft:iron_ingot', `gtceu:${suffix}_scrap_metal_ore`, 0.5, 100);
        event.blasting('minecraft:copper_ingot', `gtceu:${suffix}_scrap_plumbing_ore`, 0.5, 100);
        event.blasting('gtceu:tin_ingot', `gtceu:${suffix}_scrap_cable_ore`, 0.5, 100);
        event.blasting('minecraft:redstone', `gtceu:${suffix}_scrap_electronics_ore`, 0.5, 100);
    });

    const dust_suffix = ['impure_', 'pure_', ''];

    dust_suffix.forEach(suffix => {
        event.blasting('minecraft:iron_ingot', `gtceu:${suffix}scrap_metal_dust`, 0.5, 100);
        event.blasting('minecraft:copper_ingot', `gtceu:${suffix}scrap_plumbing_dust`, 0.5, 100);
        event.blasting('gtceu:tin_ingot', `gtceu:${suffix}scrap_cable_dust`, 0.5, 100);
        event.blasting('minecraft:redstone', `gtceu:${suffix}scrap_electronics_dust`, 0.5, 100);
    });

    // =======================================================
    //                   ingredient replacements
    // =======================================================

    event.replaceInput({ id: 'minecraft:stonecutter' },
        'minecraft:iron_ingot',
        'gtceu:iron_buzz_saw_blade'
    );

    event.replaceInput({ id: 'minecraft:blast_furnace' },
        'minecraft:iron_ingot',
        'gtceu:iron_plate'
    );

    

});
