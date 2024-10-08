ServerEvents.recipes(event => {
    event.remove({output: '#notreepunching:knives'});
    event.remove({id: 'notreepunching:plant_string'});
    event.remove({id: 'minecraft:crafting_table'});

    //event.remove({input: 'gtceu:impure_hematite_dust', type: 'minecraft:smelting'});
    //event.remove({input: 'gtceu:hematite_dust', type: 'minecraft:smelting'});
});
