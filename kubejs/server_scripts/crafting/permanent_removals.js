ServerEvents.recipes(event => {

    // notreepunching
    event.remove({output: '#notreepunching:knives'});
    event.remove({output: '#notreepunching:saws'});
    event.remove({output: '#notreepunching:mattocks'});
    event.remove({id: 'notreepunching:plant_string'});
    event.remove({id: 'notreepunching:sticks_from_logs_with_saw'});
    event.remove({id: 'notreepunching:sticks_from_planks_with_saw'});
    event.remove({id: 'notreepunching:sticks_from_logs_with_flint_axe'});
    event.remove({id: 'notreepunching:sticks_from_planks_with_flint_axe'});
    event.remove({id: 'notreepunching:string_from_web_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_saplings_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_leaves_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_vines_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_tall_flowers_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_wheat_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_small_flowers_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_sugarcane_with_knife'});
    event.remove({id: 'notreepunching:plant_fiber_from_cactus_with_knife'});
    event.remove({id: 'notreepunching:string_from_wool_with_knife'});
    event.remove({id: 'notreepunching:melon_slices_with_knife'});
    event.remove({id: 'notreepunching:smelting/large_vessel'});
    event.remove({id: 'notreepunching:smelting/small_vessel'});
    event.remove({id: 'notreepunching:campfire/large_vessel'});
    event.remove({id: 'notreepunching:campfire/small_vessel'});
    event.remove({id: 'notreepunching:cobblestone_from_rocks'});


    // minecraft
    event.remove({id: 'minecraft:crafting_table'});
    event.remove({id: 'minecraft:furnace'});

    // botany pots
    event.remove({id: 'botanypots:botanypots/crafting/terracotta_botany_pot'});
    event.remove({id: 'botanypots:botanypots/crafting/terracotta_hopper_botany_pot'});

    // farmers delight
    event.remove({id: 'farmersdelight:rope'});
    event.remove({id: 'farmersdelight:tatami'});
    event.remove({id: 'farmersdelight:canvas'});
    event.remove({id: 'farmersdelight:canvas_rug'});
    event.remove({id: 'farmersdelight:canvas_from_canvas_rug'});

    // abyssal decor
    event.remove({id: 'abyssal_decor:rope_barrier_recipe'});

    // cold sweat
    event.remove({id: 'cold_sweat:waterskin'});
    event.remove({id: 'cold_sweat:icebox'});

    // youkais feasts
    event.remove({id: 'youkaisfeasts:wood_basin'});
    event.remove({id: 'youkaisfeasts:drying_rack_from_bamboo_block_stonecutting'});

    // croptopia
    event.remove({id: 'croptopia:shaped_water_bottle'});
    event.remove({id: 'croptopia:food_press'});

    // sophisticated backpacks
    event.remove({id: 'sophisticatedbackpacks:copper_backpack'});
    event.remove({id: 'sophisticatedbackpacks:iron_backpack'});
    event.remove({id: 'sophisticatedbackpacks:iron_backpack_from_copper'});
    event.remove({id: 'sophisticatedbackpacks:gold_backpack'});
    event.remove({id: 'sophisticatedbackpacks:diamond_backpack'});
    event.remove({id: 'sophisticatedbackpacks:netherite_backpack'});
    event.remove({id: 'sophisticatedbackpacks:upgrade_base'});
    event.remove({id: 'sophisticatedbackpacks:crafting_upgrade'});

    // sophisticated storage
    event.remove({id: 'sophisticatedstorage:upgrade_base'});
    event.remove({id: 'sophisticatedstorage:backpack_crafting_upgrade_from_storage_crafting_upgrade'});

    // natural decor
    event.remove({id: 'naturaldecormod:black_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:blue_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:brown_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:cyan_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:gray_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:green_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:light_blue_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:light_gray_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:lime_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:magenta_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:orange_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:pink_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:purple_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:red_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:white_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:yellow_glazed_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:alavera_tacky_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:alavera_artisan_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:onyx_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:outdoor_iron_planter_pot_recipe'});
    event.remove({id: 'naturaldecormod:barrel_planter_recipe'});
    event.remove({id: 'naturaldecormod:planter_pot_monkey_puzzle_recipe'});
    event.remove({id: 'naturaldecormod:planter_pot_saguaro_recipe'});
    event.remove({id: 'naturaldecormod:crimson_pot_recipe'});
    event.remove({id: 'naturaldecormod:warped_pot_recipe'});
    event.remove({id: 'naturaldecormod:mangrove_pot_recipe'});
    event.remove({id: 'naturaldecormod:oak_pot_recipe'});
    event.remove({id: 'naturaldecormod:birch_pot_recipe'});
    event.remove({id: 'naturaldecormod:spruce_pot_recipe'});
    event.remove({id: 'naturaldecormod:acacia_pot_recipe'});
    event.remove({id: 'naturaldecormod:jungle_pot_recipe'});
    event.remove({id: 'naturaldecormod:dark_oak_pot_recipe'});
    event.remove({id: 'naturaldecormod:hanging_planter_bamboo_recipe'});
    event.remove({id: 'naturaldecormod:hanging_planter_cherry_recipe'});
    event.remove({id: 'naturaldecormod:cactus_chest_recipe'});
    event.remove({id: 'naturaldecormod:cactus_axe_recipe'});
    event.remove({id: 'naturaldecormod:cactus_shovel_recipe'});
    event.remove({id: 'naturaldecormod:cactus_hoe_recipe'});
    event.remove({id: 'naturaldecormod:cactus_pickaxe_recipe'});
    event.remove({id: 'naturaldecormod:cactus_sword'});
    event.remove({id: 'naturaldecormod:cactusplankstickrecipe'});
    event.remove({id: 'naturaldecormod:cactus_wood_crafting_bench_recipe'});
    event.remove({id: 'naturaldecormod:saguarologsmokerecipe'});
    event.remove({id: 'naturaldecormod:cactus_wood_smelt'});

    // thermal & thermal extra
    event.remove({id: 'thermal:parts/bronze_gear'});
    event.remove({id: 'thermal:bronze_dust_4'});
    event.remove({id: 'thermal:fire_charge/bronze_dust_4'});
    event.remove({id: 'thermal:storage/bronze_block'});
    event.remove({id: 'thermal:storage/bronze_ingot_from_block'});
    event.remove({id: 'thermal:storage/bronze_ingot_from_nuggets'});
    event.remove({id: 'thermal:storage/bronze_nugget_from_ingot'});
    event.remove({id: 'thermal:parts/lead_gear'});
    event.remove({id: 'thermal:storage/lead_block'});
    event.remove({id: 'thermal:storage/lead_ingot_from_block'});
    event.remove({id: 'thermal:storage/lead_ingot_from_nuggets'});
    event.remove({id: 'thermal:storage/lead_nugget_from_ingot'});

    event.remove({id: 'thermal_extra:crafting/bronze_rod'});
    event.remove({id: 'thermal_extra:crafting/lead_rod'});

    // gregtech
    event.remove({id: 'gtceu:shaped/pickaxe_flint'});
    event.remove({id: 'gtceu:shaped/shovel_flint'});
    event.remove({id: 'gtceu:shaped/axe_flint'});
    event.remove({id: 'gtceu:shaped/hoe_flint'});
    event.remove({id: 'gtceu:shaped/sword_flint'});
    event.remove({id: 'gtceu:shaped/barrel'});
    event.remove({id: 'gtceu:shaped/chest'});
    event.remove({id: 'gtceu:shaped/coke_oven'});
    event.remove({id: 'gtceu:shaped/bronze_primitive_blast_furnace'});
    event.remove({id: 'gtceu:macerator/dirt_from_bio_chaff'});
    event.remove({id: 'gtceu:electrolyzer/decomposition_electrolyzing_gunpowder'});
    event.remove({id: 'gtceu:shaped/wooden_barrel'});
    event.remove({id: 'gtceu:shaped/iron_shovel'});
    event.remove({id: 'gtceu:shaped/iron_pickaxe'});
    event.remove({id: 'gtceu:shaped/iron_axe'});
    event.remove({id: 'gtceu:shaped/iron_hoe'});
    event.remove({id: 'gtceu:shaped/iron_sword'});
    event.remove({id: 'gtceu:shaped/screwdriver_tip_iron'});
    event.remove({id: 'gtceu:shaped/chainsaw_head_iron'});
    event.remove({id: 'gtceu:shaped/wrench_head_iron'});
    event.remove({id: 'gtceu:shaped/shovel_iron'});
    event.remove({id: 'gtceu:shaped/pickaxe_iron'});
    event.remove({id: 'gtceu:shaped/axe_iron'});
    event.remove({id: 'gtceu:shaped/hoe_iron'});
    event.remove({id: 'gtceu:shaped/sword_iron'});
    event.remove({id: 'gtceu:shaped/scythe_iron'});
    event.remove({id: 'gtceu:shaped/hammer_iron'});
    event.remove({id: 'gtceu:shaped/mortar_iron'});
    event.remove({id: 'gtceu:shaped/file_iron'});
    event.remove({id: 'gtceu:shaped/wire_cutter_iron'});
    event.remove({id: 'gtceu:shaped/saw_iron'});
    event.remove({id: 'gtceu:shaped/wrench_iron'});
    event.remove({id: 'gtceu:shaped/knife_iron'});
    event.remove({id: 'gtceu:shaped/butchery_knife_iron'});
    event.remove({id: 'gtceu:shaped/mining_hammer_iron'});
    event.remove({id: 'gtceu:shaped/spade_iron'});
    event.remove({id: 'gtceu:shaped/crowbar_iron_lime'});


});
