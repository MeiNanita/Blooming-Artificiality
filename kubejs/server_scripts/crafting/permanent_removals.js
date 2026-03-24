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

    // architects palette
    event.remove({id: 'architects_palette:pipe'});
    event.remove({id: 'architects_palette:plating_block'});


    // minecraft
    event.remove({id: 'minecraft:crafting_table'});
    event.remove({id: 'minecraft:furnace'});
    event.remove({id: 'minecraft:composter'});

    // botany pots
    event.remove({id: 'botanypots:botanypots/crafting/terracotta_botany_pot'});
    event.remove({id: 'botanypots:botanypots/crafting/terracotta_hopper_botany_pot'});

    // farmers delight
    event.remove({id: 'farmersdelight:rope'});
    event.remove({id: 'farmersdelight:tatami'});
    event.remove({id: 'farmersdelight:canvas'});
    event.remove({id: 'farmersdelight:canvas_rug'});
    event.remove({id: 'farmersdelight:canvas_from_canvas_rug'});
    event.remove({id: 'farmersdelight:cutting/wither_rose'});
    event.remove({id: 'farmersdelight:cutting/wilted_lily'});

    // flowerseeds & flowerseedsbop
    event.remove({id: 'flowerseeds:dandelion_seed'});
    event.remove({id: 'flowerseeds:allium_seed'});
    event.remove({id: 'flowerseeds:azure_bluet_seed'});
    event.remove({id: 'flowerseeds:cornflower_seed'});
    event.remove({id: 'flowerseeds:blue_orchid_seed'});
    event.remove({id: 'flowerseeds:lily_of_the_valley_seed'});
    event.remove({id: 'flowerseeds:orange_tulip_seed'});
    event.remove({id: 'flowerseeds:pink_tulip_seed'});
    event.remove({id: 'flowerseeds:red_tulip_seed'});
    event.remove({id: 'flowerseeds:white_tulip_seed'});
    event.remove({id: 'flowerseeds:poppy_seed'});
    event.remove({id: 'flowerseeds:oxeye_daisy_seed'});
    event.remove({id: 'flowerseeds:wither_rose_seed'});
    event.remove({id: 'minecraft:has_rose_seed'});
    event.remove({id: 'minecraft:has_wild_flower_seed'});
    event.remove({id: 'minecraft:has_orange_cosmos_seed'});
    event.remove({id: 'minecraft:has_pink_daffodil_seed'});
    event.remove({id: 'minecraft:has_glow_flower_seed'});
    event.remove({id: 'minecraft:has_wilted_lily_seed'});
    event.remove({id: 'minecraft:has_burning_blossom_seed'});

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
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_starter_tier'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_starter_tier'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_1'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_2'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_3'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_4'});
    event.remove({id: 'sophisticatedbackpacks:stack_upgrade_omega_tier'});
    event.remove({id: 'sophisticatedbackpacks:battery_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:pickup_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_pickup_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:filter_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_filter_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:magnet_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_magnet_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:feeding_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_feeding_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:compacting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_compacting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:void_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_void_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:restock_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_restock_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:deposit_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_deposit_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:refill_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_refill_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:inception_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:everlasting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:smelting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:auto_smelting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:smoking_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:auto_smoking_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:blasting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:auto_blasting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:stonecutter_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:jukebox_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_jukebox_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:tool_swapper_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:tank_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:pump_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_pump_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:xp_pump_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:anvil_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:smithing_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:alchemy_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:advanced_alchemy_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/botanist_workbench_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/glassblower_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/carpenters_table_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/loom_table_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/mason_table_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/alchemy_bench_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:chipped/tinkering_table_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:blasting_upgrade_from_smelting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:smoking_upgrade_from_smelting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:auto_blasting_upgrade_from_auto_smelting_upgrade'});
    event.remove({id: 'sophisticatedbackpacks:auto_smoking_upgrade_from_auto_smelting_upgrade'});


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
    event.remove({id: 'naturaldecormod:mixed_grain_sand_smelt_recipe'});
    event.remove({id: 'naturaldecormod:mixed_sand_recipe'});

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
    event.remove({id: 'thermal:device_composter'});

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
    event.remove({id: 'gtceu:alloy_smelter/alloy_smelt_rubber_dust_to_block'});
    event.remove({id: 'gtceu:forge_hammer/gravel_to_sand'});
    event.remove({id: 'gtceu:forge_hammer/cobblestone_to_gravel'});
    event.remove({id: 'gtceu:shapeless/coated_board_1x'});
    event.remove({id: 'gtceu:shaped/coated_board'});
    event.remove({id: 'gtceu:shaped/resistor_wire'});
    event.remove({id: 'gtceu:shaped/resistor_wire_fine'});
    event.remove({id: 'gtceu:shaped/resistor_wire_charcoal'});
    event.remove({id: 'gtceu:shaped/resistor_wire_fine_charcoal'});
    event.remove({id: 'gtceu:shaped/resistor_wire_carbon'});
    event.remove({id: 'gtceu:shaped/resistor_wire_fine_carbon'});


});
