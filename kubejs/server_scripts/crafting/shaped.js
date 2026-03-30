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

    event.shaped('sophisticatedbackpacks:smelting_upgrade', [
        'DTS',
        'IBI',
        'GCG'
    ], {
        B: 'sophisticatedbackpacks:upgrade_base',
        T: 'minecraft:furnace',
        C: 'minecraft:chest',
        G: 'gtceu:small_bronze_gear',
        I: 'gtceu:bronze_screw',
        D: '#forge:tools/screwdrivers',
        S: '#forge:tools/saws'
    });

    event.shaped('sophisticatedbackpacks:blasting_upgrade', [
        'WTH',
        'GBG',
        'VCV'
    ], {
        B: 'sophisticatedbackpacks:upgrade_base',
        T: 'minecraft:blast_furnace',
        C: 'minecraft:chest',
        G: 'gtceu:small_steel_gear',
        V: '#gtceu:circuits/ulv',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers'
    });

    event.shaped('sophisticatedbackpacks:smoking_upgrade', [
        'WTH',
        'GBG',
        'VCV'
    ], {
        B: 'sophisticatedbackpacks:upgrade_base',
        T: 'minecraft:smoker',
        C: 'minecraft:chest',
        G: 'gtceu:small_steel_gear',
        V: '#gtceu:circuits/ulv',
        W: '#forge:tools/wrenches',
        H: '#forge:tools/hammers'
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

    event.shaped('minecraft:composter', [
        'WMW',
        'WDW',
        'SWS'
    ], {
        W: 'gtceu:wood_plate',
        S: 'gtceu:iron_screw',
        D: '#forge:tools/screwdrivers',
        M: '#forge:tools/mallets'
    });

    event.shaped('thermal:device_composter', [
        'PDP',
        'VCV',
        'WRW'
    ], {
        W: 'gtceu:treated_wood_plate',
        P: 'gtceu:steel_plate',
        V: 'gtceu:vacuum_tube',
        D: '#forge:tools/hammers',
        C: 'minecraft:composter',
        R: 'gtceu:steel_rotor'
    });

    event.shaped('2x gtceu:resistor', [
        'BPB',
        'WCW',
        ' P '
    ], {
        B: 'gtceu:bakelite_ingot',
        P: 'minecraft:paper',
        C: '#bloom_arti:carbon_dusts',
        W: 'gtceu:fine_copper_wire'
    });

    event.shaped('2x gtceu:resistor', [
        'BPB',
        'WCW',
        ' P '
    ], {
        B: 'gtceu:bakelite_ingot',
        P: 'minecraft:paper',
        C: '#bloom_arti:carbon_dusts',
        W: 'gtceu:copper_single_wire'
    });

    event.shaped(Item.of('farmersdelight:tatami', 2), [
        ' C ',
        'CFC',
        ' C '
    ], {
        C: 'farmersdelight:canvas',
        F: 'gtceu:treated_wood_frame'
    });

    event.shaped(Item.of('farmersdelight:rope'), [
        'S',
        'S',
        'S'
    ], {
        S: 'notreepunching:plant_string'
    });

});
