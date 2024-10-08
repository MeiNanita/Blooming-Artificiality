ServerEvents.recipes(event => {
    event.remove({output: '#notreepunching:knives'});
    event.remove({output: '#notreepunching:saws'});
    event.remove({output: '#notreepunching:mattocks'});
    event.remove({id: 'notreepunching:plant_string'});
    event.remove({id: 'notreepunching:sticks_from_logs_with_saw'});
    event.remove({id: 'notreepunching:sticks_from_planks_with_saw'});
    event.remove({id: 'notreepunching:sticks_from_logs_with_flint_axe'});
    event.remove({id: 'notreepunching:sticks_from_planks_with_flint_axe'});
    event.remove({id: 'minecraft:crafting_table'});
    event.remove({id: 'minecraft:furnace'});

    //event.remove({input: 'gtceu:impure_hematite_dust', type: 'minecraft:smelting'});
    //event.remove({input: 'gtceu:hematite_dust', type: 'minecraft:smelting'});
});
