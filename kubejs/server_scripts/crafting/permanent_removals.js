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


    // minecraft
    event.remove({id: 'minecraft:crafting_table'});
    event.remove({id: 'minecraft:furnace'});

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


    // gregtech
    event.remove({id: 'gtceu:shaped/pickaxe_flint'});
    event.remove({id: 'gtceu:shaped/shovel_flint'});
    event.remove({id: 'gtceu:shaped/axe_flint'});
    event.remove({id: 'gtceu:shaped/hoe_flint'});
    event.remove({id: 'gtceu:shaped/sword_flint'});

    //event.remove({input: 'gtceu:impure_hematite_dust', type: 'minecraft:smelting'});
    //event.remove({input: 'gtceu:hematite_dust', type: 'minecraft:smelting'});
});
