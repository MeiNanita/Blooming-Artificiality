ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:downhole_heat_exchanger'), [
        'CFC',
        'SPS',
        'SFS'
    ], {
        S: 'gtceu:steel_large_fluid_pipe',
        P: 'gtceu:lv_pump',
        F: 'gtceu:steel_rotor',
        C: '#gtceu:circuits/lv'
    });
});

