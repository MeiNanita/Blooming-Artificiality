
ServerEvents.recipes(event => {
    // =======================================================
    //                   shapeless recipes
    // =======================================================

    event.shapeless(
        'kubejs:plant_fiber_mesh', [
            Item.of('notreepunching:plant_string', 4)
        ]
    );

    event.shapeless(
        Item.of('gtceu:iron_plate'), [
            'kubejs:scrap_metal',
            '#forge:tools/hammers',
            '#forge:tools/crowbars'
        ]
    )
    .damageIngredient( '#forge:tools/hammers' )
    .damageIngredient( '#forge:tools/crowbars' );

    event.shapeless(
        Item.of('gtceu:small_iron_gear'), [
            'kubejs:scrap_metal',
            '#forge:tools/screwdrivers',
            '#forge:tools/wrenches'
        ]
    )
    .damageIngredient( '#forge:tools/screwdrivers' )
    .damageIngredient( '#forge:tools/wrenches' );

    event.shapeless(
        Item.of('gtceu:iron_rod'), [
            'kubejs:scrap_metal',
            '#forge:tools/files',
            '#forge:tools/saws'
        ]
    )
    .damageIngredient( '#forge:tools/files' )
    .damageIngredient( '#forge:tools/saws' );

    event.shapeless(
        Item.of('gtceu:copper_small_fluid_pipe'), [
            'kubejs:scrap_plumbing',
            '#forge:tools/wrenches',
            '#forge:tools/saws'
        ]
    )
    .damageIngredient( '#forge:tools/wrenches' )
    .damageIngredient( '#forge:tools/saws' );

    event.shapeless(
        Item.of('gtceu:potin_tiny_fluid_pipe'), [
            'kubejs:scrap_plumbing',
            '#forge:tools/wrenches'
        ]
    )
    .damageIngredient( '#forge:tools/wrenches' );

    event.shapeless(
        Item.of('gtceu:tin_single_cable'), [
            'kubejs:scrap_cable',
            '#forge:tools/wire_cutters'
        ]
    )
    .damageIngredient( '#forge:tools/wire_cutters' );

    event.shapeless(
        Item.of('gtceu:fine_red_alloy_wire', 3), [
            'kubejs:scrap_cable',
            '#forge:tools/knives'
        ]
    )
    .damageIngredient( '#forge:tools/knives' );

    event.shapeless(
        Item.of('gtceu:tin_single_wire'), [
            'gtceu:tin_single_cable',
            '#forge:tools/knives'
        ]
    )
    .damageIngredient( '#forge:tools/knives' )
    .replaceIngredient(
        'gtceu:tin_single_cable',
        'gtceu:rubber_plate'
    );

    event.shapeless(
        Item.of('minecraft:redstone'), [
            'kubejs:scrap_electronics',
            '#forge:tools/hammers',
            '#forge:tools/screwdrivers',
            '#forge:tools/wire_cutters'
        ]
    )
    .damageIngredient( '#forge:tools/hammers' )
    .damageIngredient( '#forge:tools/screwdrivers' )
    .damageIngredient( '#forge:tools/wire_cutters' );

    event.shapeless(
        Item.of('gtceu:fine_gold_wire', 3), [
            'kubejs:scrap_electronics',
            '#forge:tools/wire_cutters',
            '#forge:tools/screwdrivers'
        ]
    )
    .damageIngredient( '#forge:tools/wire_cutters' )
    .damageIngredient( '#forge:tools/screwdrivers' );

    event.shapeless(
        Item.of('gtceu:silver_foil'), [
            'kubejs:scrap_electronics',
            '#forge:tools/knives',
            '#forge:tools/screwdrivers'
        ]
    )
    .damageIngredient( '#forge:tools/knives' )
    .damageIngredient( '#forge:tools/screwdrivers' );

    event.shapeless(
        'naturaldecormod:rock_decor_small', 
        [
            Item.of('kubejs:stone_pebble', 1)
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_medium', 
        [
            Item.of('kubejs:stone_pebble', 2)
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_large', 
        [
            Item.of('kubejs:stone_pebble', 4)
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_x_large', 
        [
            Item.of('kubejs:stone_pebble', 8)
        ]
    );

    event.shapeless(
        'minecraft:cobblestone', 
        [
            Item.of('kubejs:stone_pebble', 9)
        ]
    );

    event.shapeless(
        'notreepunching:plant_string', 
        [
            Item.of('notreepunching:plant_fiber', 4)
        ]
    );

    event.shapeless(
        Item.of('gtceu:small_tin_dust', 2), [
            'gtceu:tin_single_wire',
            '#forge:tools/mortars'
        ]
    )
    .damageIngredient( '#forge:tools/mortars' );

    event.shapeless(
        Item.of('gtceu:small_copper_dust', 2), [
            'gtceu:copper_single_wire',
            '#forge:tools/mortars'
        ]
    )
    .damageIngredient( '#forge:tools/mortars' );

    event.shapeless(
        Item.of('gtceu:tiny_red_alloy_dust'), [
            'gtceu:fine_red_alloy_wire',
            '#forge:tools/mortars'
        ]
    )
    .damageIngredient( '#forge:tools/mortars' );

    event.shapeless(
        Item.of('gtceu:copper_plate'), [
            'gtceu:copper_small_fluid_pipe',
            '#forge:tools/hammers',
            '#forge:tools/saws'
        ]
    )
    .damageIngredient( '#forge:tools/hammers' )
    .damageIngredient( '#forge:tools/saws' );

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
    });

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

    event.campfireCooking('minecraft:stone', 'minecraft:cobblestone');
    event.campfireCooking('minecraft:smooth_stone', 'minecraft:stone');

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
