
ServerEvents.recipes(event => {

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

    event.campfireCooking('minecraft:stone', 'minecraft:cobblestone');
    event.campfireCooking('minecraft:smooth_stone', 'minecraft:stone');

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

    event.replaceInput({ id: 'minecraft:stonecutter' },
        'minecraft:iron_ingot',
        'gtceu:iron_buzz_saw_blade'
    );

    event.replaceInput({ id: 'minecraft:blast_furnace' },
        'minecraft:iron_ingot',
        'gtceu:wrought_iron_plate'
    );


    // ===================================================================

    event.shapeless(
        Item.of('gtceu:iron_screw'), [
            'kubejs:scrap_metal',
            '#forge:tools/screwdrivers'
        ]
    )
    .damageIngredient( '#forge:tools/screwdrivers' );


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
            '#forge:tools/wrenches',
            '#forge:tools/crowbars'
        ]
    )
    .damageIngredient( '#forge:tools/wrenches' )
    .damageIngredient( '#forge:tools/crowbars' );


    event.shapeless(
        Item.of('gtceu:iron_rod'), [
            'kubejs:scrap_metal',
            '#forge:tools/files'
        ]
    )
    .damageIngredient( '#forge:tools/files' );


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

});
