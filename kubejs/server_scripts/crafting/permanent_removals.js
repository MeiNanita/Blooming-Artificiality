ServerEvents.recipes(event => {
    event.remove({output: '#exnihilosequentia:hammer'});
    event.remove({output: '#exnihilosequentia:crook'});

    event.remove({input: 'gtceu:impure_hematite_dust', type: 'minecraft:smelting'});
    event.remove({input: 'gtceu:hematite_dust', type: 'minecraft:smelting'});
});
