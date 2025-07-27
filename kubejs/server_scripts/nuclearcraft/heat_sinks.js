ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    const time_req = 99999;
    const energy_req = 99999;


    greg.assembler('passive_empty_heat_sink')
        .itemInputs(
            Item.of('gtceu:robust_machine_casing', 1),
            Item.of('gtceu:incoloy_ma_956_frame', 1)
        )
        .itemOutputs(
            'nuclearcraft:empty_heat_sink'
        )
        .duration(time_req)
        .EUt(energy_req);


    const fluid_heatsink_mats = [
        ['water', 'gtceu:distilled_water', 'nuclearcraft:water_heat_sink'],
        ['helium', 'gtceu:liquid_helium', 'nuclearcraft:liquid_helium_heat_sink']
    ];

    const molten_heatsink_mats = [
        ['iron', 'gtceu:iron', 'nuclearcraft:iron_heat_sink'],
        ['copper', 'gtceu:copper', 'nuclearcraft:copper_heat_sink'],
        ['redstone', 'gtceu:red_alloy', 'nuclearcraft:redstone_heat_sink'],
        ['glowstone', 'gtceu:glowstone', 'nuclearcraft:glowstone_heat_sink']
    ];


    fluid_heatsink_mats.forEach(material => {
        greg.canner(`passive_${material[0]}_heat_sink`)
            .itemInputs(
                Item.of('nuclearcraft:empty_heat_sink', 1)
            )
            .inputFluids(
                Fluid.of(material[1], 1000)
            )
            .itemOutputs(
                Item.of(material[2], 1)
            )
            .duration(time_req)
            .EUt(energy_req);
    });


    molten_heatsink_mats.forEach(material => {
        greg.canner(`passive_${material[0]}_heat_sink`)
            .itemInputs(
                Item.of('nuclearcraft:empty_heat_sink', 1)
            )
            .inputFluids(
                Fluid.of(material[1], 1008)
            )
            .itemOutputs(
                Item.of(material[2], 1)
            )
            .duration(time_req)
            .EUt(energy_req);
    });
    
    
});