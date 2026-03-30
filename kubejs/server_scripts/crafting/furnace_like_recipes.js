ServerEvents.recipes(event => {

    // =======================================================
    //                   campfire recipes
    // =======================================================

    event.campfireCooking('minecraft:stone', 'minecraft:cobblestone', 0.1, 600);
    event.campfireCooking('minecraft:smooth_stone', 'minecraft:stone', 0.1, 600);

    // =======================================================
    //                   smelting recipes
    // =======================================================

    event.smelting('gtceu:bronze_ingot', '#bloom_arti:recyclable_bronze_tools', 0.7, 200);
    event.smelting('minecraft:iron_ingot', 'kubejs:scrap_metal', 0.7, 200);
    event.smelting('minecraft:copper_ingot', 'kubejs:scrap_plumbing', 0.7, 200);
    event.smelting('gtceu:tin_ingot', 'kubejs:scrap_cable', 0.7, 200);
    event.smelting('2x minecraft:redstone', 'kubejs:scrap_electronics', 0.7, 200);
    event.smelting('gtceu:lead_nugget', 'pointblank:ammo357', 0.7, 200);
    event.smelting('minecraft:iron_ingot', 'kubejs:shredded_scrap_metal', 0.7, 200);
    event.smelting('minecraft:copper_ingot', 'kubejs:shredded_scrap_plumbing', 0.7, 200);
    event.smelting('gtceu:tin_ingot', 'kubejs:shredded_scrap_cable', 0.7, 200);
    event.smelting('2x minecraft:redstone', 'kubejs:shredded_scrap_electronics', 0.7, 200);

    // =======================================================
    //                   blasting recipes
    // =======================================================

    event.blasting('gtceu:bronze_ingot', '#bloom_arti:recyclable_bronze_tools', 0.7, 100);
    event.blasting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 0.0, 200);
    event.blasting('minecraft:iron_ingot', 'kubejs:scrap_metal', 0.7, 100);
    event.blasting('minecraft:copper_ingot', 'kubejs:scrap_plumbing', 0.7, 100);
    event.blasting('gtceu:tin_ingot', 'kubejs:scrap_cable', 0.7, 100);
    event.blasting('2x minecraft:redstone', 'kubejs:scrap_electronics', 0.7, 100);
    event.blasting('gtceu:lead_nugget', 'pointblank:ammo357', 0.7, 100);
    event.blasting('minecraft:iron_ingot', 'kubejs:shredded_scrap_metal', 0.7, 100);
    event.blasting('minecraft:copper_ingot', 'kubejs:shredded_scrap_plumbing', 0.7, 100);
    event.blasting('gtceu:tin_ingot', 'kubejs:shredded_scrap_cable', 0.7, 100);
    event.blasting('2x minecraft:redstone', 'kubejs:shredded_scrap_electronics', 0.7, 100);

});
