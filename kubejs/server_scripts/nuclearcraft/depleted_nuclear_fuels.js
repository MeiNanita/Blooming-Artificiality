ServerEvents.recipes(event => {
    const centrifuge = event.recipes.gtceu.centrifuge;
    const fission_waste = 'gtceu:metal_mixture_dust'; // placeholder atm until actual radioactive dust gets implemented
    const time_req = 99999;
    const energy_req = 99999;

    // rtg isotopes:
    // U-238, Pu-238, Am-241, Cf-250
    // Np-237 -> irradiated -> Pu-238
    // Reactor-stuff should be available around the start of IV, use high temperature smelting case (Alloy Blast Smelter) as the base for the reactor hull

    const isotopes = [
        'nuclearcraft:thorium_230',
        'nuclearcraft:thorium_232', // passive // 99.98 % of global thorium is that isotope and is what's actually bred into U-233
        'nuclearcraft:uranium_233',
        'nuclearcraft:uranium_235',
        'nuclearcraft:uranium_238', // passive
        'nuclearcraft:neptunium_236',
        'nuclearcraft:neptunium_237', // passive        // up until here uranic nuclear waste
        'nuclearcraft:plutonium_239',
        'nuclearcraft:plutonium_241',
        'nuclearcraft:plutonium_242', // passive
        'nuclearcraft:americium_242',
        'nuclearcraft:americium_243', // passive        // up until here plutonic nuclear waste
        'nuclearcraft:curium_243',
        'nuclearcraft:curium_245',
        'nuclearcraft:curium_246', // passive
        'nuclearcraft:curium_247',
        'nuclearcraft:berkelium_247', // passive
        'nuclearcraft:berkelium_248',                   // up until here americic nuclear waste
        'nuclearcraft:californium_249',
        'nuclearcraft:californium_251',
        'nuclearcraft:californium_252' // passive       // up until here californic nuclear waste
    ];

    centrifuge('nc_depleted_tbu')
        .itemInputs(
            'nuclearcraft:depleted_fuel_thorium_tbu'
        )
        .itemOutputs(
            Item.of('nuclearcraft:thorium_232', 4),
            Item.of('nuclearcraft:uranium_233', 3),
            Item.of(fission_waste, 2)
        )
        .duration(time_req)
        .EUt(energy_req);

    
    centrifuge('nc_depleted_leu_233')
        .itemInputs(
            'nuclearcraft:depleted_fuel_uranium_leu_233'
        )
        .itemOutputs(
            Item.of('nuclearcraft:uranium_238', 6),
            Item.of('nuclearcraft:neptunium_237', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_heu_233')
        .itemInputs(
            'nuclearcraft:depleted_fuel_uranium_heu_233'
        )
        .itemOutputs(
            Item.of('nuclearcraft:uranium_235', 2),
            Item.of('nuclearcraft:uranium_238', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_leu_235')
        .itemInputs(
            'nuclearcraft:depleted_fuel_uranium_leu_235'
        )
        .itemOutputs(
            Item.of('nuclearcraft:uranium_238', 6),
            Item.of('nuclearcraft:neptunium_237', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_heu_235')
        .itemInputs(
            'nuclearcraft:depleted_fuel_uranium_heu_235'
        )
        .itemOutputs(
            Item.of('nuclearcraft:neptunium_236', 2),
            Item.of('nuclearcraft:uranium_238', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_len_236')
        .itemInputs(
            'nuclearcraft:depleted_fuel_neptunium_len_236'
        )
        .itemOutputs(
            Item.of('nuclearcraft:neptunium_237', 6),
            Item.of('nuclearcraft:plutonium_242', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hen_236')
        .itemInputs(
            'nuclearcraft:depleted_fuel_neptunium_hen_236'
        )
        .itemOutputs(
            Item.of('nuclearcraft:plutonium_239', 2),
            Item.of('nuclearcraft:neptunium_237', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lep_239')
        .itemInputs(
            'nuclearcraft:depleted_fuel_plutonium_lep_239'
        )
        .itemOutputs(
            Item.of('nuclearcraft:plutonium_242', 6),
            Item.of('nuclearcraft:americium_243', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hep_239')
        .itemInputs(
            'nuclearcraft:depleted_fuel_plutonium_hep_239'
        )
        .itemOutputs(
            Item.of('nuclearcraft:plutonium_241', 2),
            Item.of('nuclearcraft:plutonium_242', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lep_241')
        .itemInputs(
            'nuclearcraft:depleted_fuel_plutonium_lep_241'
        )
        .itemOutputs(
            Item.of('nuclearcraft:plutonium_242', 6),
            Item.of('nuclearcraft:americium_243', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hep_241')
        .itemInputs(
            'nuclearcraft:depleted_fuel_plutonium_hep_241'
        )
        .itemOutputs(
            Item.of('nuclearcraft:americium_242', 2),
            Item.of('nuclearcraft:plutonium_242', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lea_242')
        .itemInputs(
            'nuclearcraft:depleted_fuel_americium_lea_242'
        )
        .itemOutputs(
            Item.of('nuclearcraft:americium_243', 6),
            Item.of('nuclearcraft:curium_246', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hea_242')
        .itemInputs(
            'nuclearcraft:depleted_fuel_americium_hea_242'
        )
        .itemOutputs(
            Item.of('nuclearcraft:curium_243', 2),
            Item.of('nuclearcraft:americium_242', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lecm_243')
        .itemInputs(
            'nuclearcraft:depleted_fuel_curium_lecm_243'
        )
        .itemOutputs(
            Item.of('nuclearcraft:curium_246', 6),
            Item.of('nuclearcraft:berkelium_247', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hecm_243')
        .itemInputs(
            'nuclearcraft:depleted_fuel_curium_hecm_243'
        )
        .itemOutputs(
            Item.of('nuclearcraft:curium_245', 2),
            Item.of('nuclearcraft:curium_246', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lecm_245')
        .itemInputs(
            'nuclearcraft:depleted_fuel_curium_lecm_245'
        )
        .itemOutputs(
            Item.of('nuclearcraft:curium_246', 6),
            Item.of('nuclearcraft:berkelium_247', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hecm_245')
        .itemInputs(
            'nuclearcraft:depleted_fuel_curium_hecm_245'
        )
        .itemOutputs(
            Item.of('nuclearcraft:curium_247', 2),
            Item.of('nuclearcraft:curium_246', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lecm_247')
        .itemInputs(
            'nuclearcraft:depleted_fuel_curium_lecm_247'
        )
        .itemOutputs(
            Item.of('nuclearcraft:curium_246', 6),
            Item.of('nuclearcraft:berkelium_247', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hecm_247')
        .itemInputs(
            'nuclearcraft:depleted_fuel_curium_hecm_247'
        )
        .itemOutputs(
            Item.of('nuclearcraft:berkelium_248', 2),
            Item.of('nuclearcraft:curium_246', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_leb_248')
        .itemInputs(
            'nuclearcraft:depleted_fuel_berkelium_leb_248'
        )
        .itemOutputs(
            Item.of('nuclearcraft:berkelium_247', 6),
            Item.of('nuclearcraft:californium_252', 2),
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_heb_248')
        .itemInputs(
            'nuclearcraft:depleted_fuel_berkelium_heb_248'
        )
        .itemOutputs(
            Item.of('nuclearcraft:californium_249', 2),
            Item.of('nuclearcraft:berkelium_247', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_lecf_249')
        .itemInputs(
            'nuclearcraft:depleted_fuel_californium_lecf_249'
        )
        .itemOutputs(
            Item.of('nuclearcraft:californium_252', 6),
            Item.of('gtceu:stone_dust', 2), // actually spent fuel waste
            Item.of(fission_waste, 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    centrifuge('nc_depleted_hecf_249')
        .itemInputs(
            'nuclearcraft:depleted_fuel_californium_hecf_249'
        )
        .itemOutputs(
            Item.of('gtceu:stone_dust', 2), // actually spent fuel waste
            Item.of('nuclearcraft:californium_252', 3),
            Item.of(fission_waste, 4)
        )
        .duration(time_req)
        .EUt(energy_req);

});