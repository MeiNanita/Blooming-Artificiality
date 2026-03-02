
ServerEvents.recipes(event => {
    // =======================================================
    //                   shapeless recipes
    // =======================================================

    event.shapeless(
        'naturaldecormod:rock_decor_medium', 
        [
            '2x naturaldecormod:rock_decor_small'
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_large', 
        [
            '4x naturaldecormod:rock_decor_small'
        ]
    );

    event.shapeless(
        'naturaldecormod:rock_decor_x_large', 
        [
            '8x naturaldecormod:rock_decor_small'
        ]
    );

    event.shapeless(
        'minecraft:cobblestone', 
        [
            '9x naturaldecormod:rock_decor_small'
        ]
    );

    event.shapeless(
        'notreepunching:plant_string', 
        [
            '3x farmersdelight:straw'
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

    event.shapeless(
        'croptopia:water_bottle', 
        [
            Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
        ]
    );

    event.shapeless(
        'croptopia:food_press', 
        [
            'minecraft:hopper',
            '#forge:tools/screwdrivers',
            '#forge:tools/hammers'
        ]
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

    event.shaped(Item.of('farmersdelight:canvas'), [
        'SF',
        'FS'
    ], {
        F: 'farmersdelight:straw',
        S: 'notreepunching:plant_string'
    });

    event.shaped(Item.of('farmersdelight:canvas'), [
        'FS',
        'SF'
    ], {
        F: 'farmersdelight:straw',
        S: 'notreepunching:plant_string'
    });

    event.shaped(Item.of('cold_sweat:filled_waterskin', '{Temperature:0.0d}'), [
        'WC',
        'CF'
    ], {
        W: 'cold_sweat:waterskin',
        C: 'minecraft:cactus',
        F: 'croptopia:food_press'
    });

    event.shaped(Item.of('minecraft:clay'), [
        'CCC',
        'CTC',
        'CCC'
    ], {
        C: 'minecraft:clay_ball',
        T: 'notreepunching:clay_tool'
    });

    event.shaped(Item.of('cold_sweat:waterskin'), [
        '  S',
        'CL ',
        'LC '
    ], {
        S: '#forge:string',
        C: 'farmersdelight:canvas',
        L: 'minecraft:leather'
    });

    event.shaped(Item.of('cold_sweat:icebox'), [
        'S_M',
        'WBW',
        'WCW'
    ], {
        M: '#forge:tools/mallets',
        S: '#forge:tools/saws',
        B: 'minecraft:bucket',
        _: 'gtceu:treated_wood_trapdoor',
        W: 'gtceu:treated_wood_planks',
        C: 'minecraft:cobblestone_slab'
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

    event.shaped('gtceu:coke_oven', [
        'HFW',
        'BDB',
        'BBB'
    ], {
        D: 'gtceu:bronze_drum',
        B: 'gtceu:coke_oven_bricks',
        F: 'minecraft:furnace',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers'
    });

    event.shaped('gtceu:primitive_blast_furnace', [
        'SHS',
        'BFB',
        'STS'
    ], {
        S: 'gtceu:iron_screw',
        B: 'gtceu:firebricks',
        F: 'minecraft:blast_furnace',
        H: '#forge:tools/hammers',
        T: '#forge:tools/screwdrivers'
    });

    // =======================================================
    //                   campfire recipes
    // =======================================================

    event.campfireCooking('minecraft:stone', 'minecraft:cobblestone', 0.1, 600);
    event.campfireCooking('minecraft:smooth_stone', 'minecraft:stone', 0.1, 600);

    // =======================================================
    //                   smelting recipes
    // =======================================================

    event.smelting('gtceu:bronze_ingot', '#bloom_arti:recyclable_bronze_tools', 0.7, 200);
    event.blasting('gtceu:bronze_ingot', '#bloom_arti:recyclable_bronze_tools', 0.7, 100);

    // =======================================================
    //                   ingredient replacements
    // =======================================================

    event.replaceInput({ id: 'minecraft:stonecutter' },
        'minecraft:iron_ingot',
        'gtceu:iron_buzz_saw_blade'
    );

    event.replaceInput({ id: 'minecraft:blast_furnace' },
        'minecraft:iron_ingot',
        'gtceu:wrought_iron_plate'
    );

    event.replaceInput({ id: 'sophisticatedbackpacks:backpack' },
        '#forge:string',
        'farmersdelight:canvas'
    );

    event.custom({
        type: 'youkaisfeasts:drying_rack',
        category: 'misc',
        cookingtime: 100,
        experience: 0.0,
        ingredient: {
            item: 'gtceu:calcium_hydroxide_dust'
        },
        result: {
            item: 'gtceu:calcium_carbonate_dust'
        }
    });

    event.custom({
        type: 'youkaisfeasts:drying_rack',
        category: 'misc',
        cookingtime: 100,
        experience: 0.0,
        ingredient: {
            item: 'gtceu:silver_dust'
        },
        result: {
            item: 'gtceu:small_silver_oxide_dust',
            count: 2
        }
    });

    event.custom({
        type: 'youkaisfeasts:simple_basin',
        input: {
            item: 'minecraft:cactus'
        },
        output: {
            amount: 125,
            fluid: 'minecraft:water'
        }
    });

});
