
ServerEvents.recipes(event => {
    // =======================================================
    //                   shapeless recipes
    // =======================================================

    event.shapeless(
        'minecraft:cobblestone', 
        [
            '4x naturaldecormod:rock_decor_small'
        ]
    );

    event.shapeless(
        'notreepunching:plant_string', 
        [
            '3x farmersdelight:straw'
        ]
    );

    event.shapeless(
        '4x minecraft:clay_ball', [
            '4x gtceu:clay_dust',
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
        'gtceu:wood_drum', 
        [
            'minecraft:barrel',
            '#forge:tools/saws',
            '#forge:tools/mallets'
        ]
    );

    event.shapeless(
        'architects_palette:pipe', 
        [
            'gtceu:steel_huge_fluid_pipe'
        ]
    );

    event.shapeless(
        'gtceu:tiny_lead_dust', 
        [
            'gtceu:lead_nugget',
            '#forge:tools/mortars'
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

    event.shaped(Item.of('minecraft:clay'), [
        'CC',
        'CC'
    ], {
        C: 'minecraft:clay_ball'
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
        _: '#minecraft:wooden_trapdoors',
        W: '#minecraft:planks',
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
        S: 'gtceu:wrought_iron_screw',
        B: 'gtceu:firebricks',
        F: 'minecraft:blast_furnace',
        H: '#forge:tools/hammers',
        T: '#forge:tools/screwdrivers'
    });

    event.shaped('youkaisfeasts:wood_basin', [
        'C M',
        'PIP',
        'SSS'
    ], {
        S: '#minecraft:wooden_slabs',
        P: '#minecraft:planks',
        I: 'gtceu:long_iron_rod',
        C: '#forge:tools/saws',
        M: '#forge:tools/mallets'
    });

    event.shaped('youkaisfeasts:wood_basin', [
        'M C',
        'PIP',
        'SSS'
    ], {
        S: '#minecraft:wooden_slabs',
        P: '#minecraft:planks',
        I: 'gtceu:long_iron_rod',
        C: '#forge:tools/saws',
        M: '#forge:tools/mallets'
    });

    event.shaped('youkaisfeasts:drying_rack', [
        'SIS',
        'ICI',
        'SIS'
    ], {
        S: '#forge:string',
        I: 'minecraft:stick',
        C: 'farmersdelight:canvas'
    });

    event.shaped('farmersdelight:basket', [
        'I I',
        'C C',
        'ICI'
    ], {
        I: 'minecraft:stick',
        C: 'farmersdelight:canvas'
    });

    event.shaped('youkaisfeasts:short_basket', [
        'I I',
        'CCC'
    ], {
        I: 'minecraft:stick',
        C: 'farmersdelight:canvas'
    });

    event.shaped('botanypots:terracotta_botany_pot', [
        'TPT',
        'TTT'
    ], {
        P: 'minecraft:flower_pot',
        T: 'minecraft:terracotta'
    });

    event.shaped('botanypots:terracotta_hopper_botany_pot', [
        'H S',
        'GPG',
        'TVT'
    ], {
        P: 'botanypots:terracotta_botany_pot',
        G: 'gtceu:small_steel_gear',
        T: 'gtceu:steel_screw',
        V: 'minecraft:hopper',
        H: '#forge:tools/hammers',
        S: '#forge:tools/screwdrivers'
    });

    event.shaped('botanypots:terracotta_hopper_botany_pot', [
        'S H',
        'GPG',
        'TVT'
    ], {
        P: 'botanypots:terracotta_botany_pot',
        G: 'gtceu:small_steel_gear',
        T: 'gtceu:steel_screw',
        V: 'minecraft:hopper',
        H: '#forge:tools/hammers',
        S: '#forge:tools/screwdrivers'
    });

    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'TST',
        'OLO',
        'WWW'
    ], {
        S: '#forge:tools/screwdrivers',
        T: 'gtceu:iron_screw',
        O: 'gtceu:small_iron_gear',
        L: 'minecraft:leather',
        W: 'gtceu:wood_plate'
    });

    event.shaped('sophisticatedbackpacks:crafting_upgrade', [
        'DTS',
        'IBI',
        'GCG'
    ], {
        B: 'sophisticatedbackpacks:upgrade_base',
        T: 'minecraft:crafting_table',
        C: 'minecraft:chest',
        G: 'gtceu:small_bronze_gear',
        I: 'gtceu:bronze_screw',
        D: '#forge:tools/screwdrivers',
        S: '#forge:tools/saws'
    });

    event.shaped('2x gtceu:industrial_steam_casing', [
        'PHP',
        'PFP',
        'PWP'
    ], {
        F: 'gtceu:bronze_frame',
        P: 'gtceu:bronze_plate',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    });

    event.shaped('gtceu:primitive_chemical_reactor', [
        'CXC',
        'UGU',
        'CDC'
    ], {
        C: 'gtceu:industrial_steam_casing',
        U: 'minecraft:glass_bottle',
        G: 'gtceu:steel_gear',
        D: 'gtceu:steel_drum',
        X: 'minecraft:glass'
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
    event.blasting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 0.0, 200);

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

    event.replaceInput({ id: 'gtceu:shaped/pump_deck' },
        'gtceu:iron_screw',
        'gtceu:steel_screw'
    );

    event.replaceInput({ id: 'gtceu:shaped/pump_hatch' },
        'gtceu:iron_screw',
        'gtceu:steel_screw'
    );

    event.replaceInput({ id: 'gtceu:shaped/pump_hatch' },
        'gtceu:iron_ring',
        'gtceu:steel_ring'
    );

    event.replaceInput({ id: 'gtceu:shaped/primitive_pump' },
        'gtceu:iron_screw',
        'gtceu:steel_screw'
    );

    event.replaceInput({ id: 'gtceu:shaped/primitive_pump' },
        'gtceu:iron_ring',
        'gtceu:steel_ring'
    );

    event.replaceInput({ id: 'gtceu:shaped/primitive_pump' },
        'gtceu:iron_rotor',
        'gtceu:steel_rotor'
    );

    event.replaceInput({ id: 'cold_sweat:sewing_table' },
        '#minecraft:wool',
        'farmersdelight:canvas'
    );

    // =======================================================
    //                   specialized recipes
    // =======================================================

    event.custom({
        type: 'youkaisfeasts:drying_rack',
        category: 'misc',
        cookingtime: 18000,
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
        cookingtime: 18000,
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
            amount: 50,
            fluid: 'minecraft:water'
        }
    });

});
