JEIEvents.hideItems(event => {

    // notreepunching
    event.hide('notreepunching:flint_knife');
    event.hide('notreepunching:iron_knife');
    event.hide('notreepunching:gold_knife');
    event.hide('notreepunching:diamond_knife');
    event.hide('notreepunching:netherite_knife');
    event.hide('notreepunching:iron_saw');
    event.hide('notreepunching:gold_saw');
    event.hide('notreepunching:diamond_saw');
    event.hide('notreepunching:netherite_saw');
    event.hide('#notreepunching:mattocks');
    event.hide('notreepunching:ceramic_small_vessel');
    event.hide('notreepunching:ceramic_large_vessel');
    event.hide('notreepunching:clay_small_vessel');
    event.hide('notreepunching:clay_large_vessel');


    // gregtech
    event.hide('gtceu:flint_pickaxe');
    event.hide('gtceu:flint_shovel');
    event.hide('gtceu:flint_axe');
    event.hide('gtceu:flint_hoe');
    event.hide('gtceu:flint_sword');

    const scrap_stone_blocks = [
        '', 
        'deepslate_', 
        'netherrack_', 
        'endstone_', 
        'granite_', 
        'andesite_', 
        'diorite_', 
        'red_granite_', 
        'marble_', 
        'tuff_', 
        'sand_', 
        'red_sand_', 
        'gravel_', 
        'basalt_',
        'blackstone_'
    ];
    scrap_stone_blocks.forEach(stone => {
        event.hide(`gtceu:${stone}scrap_metal_ore`);
        event.hide(`gtceu:${stone}scrap_plumbing_ore`);
        event.hide(`gtceu:${stone}scrap_cable_ore`);
        event.hide(`gtceu:${stone}scrap_electronics_ore`);
    });

});
