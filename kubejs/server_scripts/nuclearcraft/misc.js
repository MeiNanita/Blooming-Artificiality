ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    const time_req = 99999;
    const energy_req = 99999;

    greg.assembler('fission_reactor_controller')
        .itemInputs(
            Item.of('gtceu:iv_machine_hull', 1),
            Item.of('gtceu:auto_maintenance_hatch', 1),
            Item.of('nuclearcraft:fission_reactor_casing', 4),
            Item.of('gtceu:ev_sensor', 4),
            Item.of('#gtceu:circuits/iv', 4),
            Item.of('gtceu:iv_robot_arm', 2),
            Item.of('gtceu:platinum_single_cable', 2)
        )
        .itemOutputs(
            'nuclearcraft:fission_reactor_controller'
        )
        .duration(time_req)
        .EUt(energy_req);


    greg.assembler('fission_reactor_casing')
        .itemInputs(
            Item.of('gtceu:high_temperature_smelting_casing', 1),
            Item.of('gtceu:double_lead_plate', 4)
        )
        .itemOutputs(
            'nuclearcraft:fission_reactor_casing'
        )
        .duration(time_req)
        .EUt(energy_req);


    greg.assembler('fission_reactor_port')
        .itemInputs(
            Item.of('nuclearcraft:fission_reactor_casing', 1),
            Item.of('gtceu:iv_energy_output_hatch_16a', 1),
            Item.of('gtceu:iv_robot_arm', 2),
            Item.of('gtceu:iv_conveyor_module', 2)
        )
        .itemOutputs(
            'nuclearcraft:fission_reactor_port'
        )
        .duration(time_req)
        .EUt(energy_req);


    greg.assembler('fission_reactor_glass')
        .itemInputs(
            Item.of('nuclearcraft:fission_reactor_casing', 1),
            Item.of('gtceu:laminated_glass', 4)
        )
        .itemOutputs(
            'nuclearcraft:fission_reactor_glass'
        )
        .duration(time_req)
        .EUt(energy_req);


    greg.assembler('fission_reactor_solid_fuel_cell')
        .itemInputs(
            Item.of('gtceu:tungsten_carbide_frame', 1),
            Item.of('gtceu:laminated_glass', 4) // also needs 4 zirconium plates, will be added later
        )
        .itemOutputs(
            'nuclearcraft:fission_reactor_solid_fuel_cell'
        )
        .duration(time_req)
        .EUt(energy_req);
    
});