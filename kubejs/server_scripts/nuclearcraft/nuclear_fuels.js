ServerEvents.recipes(event => {
    const form_press = event.recipes.gtceu.forming_press;
    const time_req = 99999;
    const energy_req = 99999;

    const nc_fuels = [
        // material-name, material-symbol, fertile-isotope, passive-isotope
        ['uranium', 'u', '233', '238'],
        ['uranium', 'u', '235', '238'],
        ['neptunium', 'n', '236', '237'],
        ['plutonium', 'p', '239', '242'],
        ['plutonium', 'p', '241', '242'],
        ['americium', 'a', '242', '243'],
        ['curium', 'cm', '243', '246'],
        ['curium', 'cm', '245', '246'],
        ['curium', 'cm', '247', '246'],
        ['berkelium', 'b', '248', '247'],
        ['californium', 'cf', '249', '252'],
        ['californium', 'cf', '251', '252']
    ];

    form_press('nc_fuel_tbu_233')
        .notConsumable('gtceu:cylinder_casting_mold')
        .circuit(2)
        .itemInputs(
            Item.of('nuclearcraft:uranium_233', 2),
            Item.of('nuclearcraft:thorium_232', 7)
        )
        .itemOutputs(
            Item.of('nuclearcraft:fuel_thorium_tbu', 1)
        )
        .duration(time_req)
        .EUt(energy_req);

    form_press('nc_fuel_tbu_235')
        .notConsumable('gtceu:cylinder_casting_mold')
        .circuit(2)
        .itemInputs(
            Item.of('nuclearcraft:uranium_235', 2),
            Item.of('nuclearcraft:thorium_232', 7)
        )
        .itemOutputs(
            Item.of('nuclearcraft:fuel_thorium_tbu', 1)
        )
        .duration(time_req)
        .EUt(energy_req);


    nc_fuels.forEach(entries => {
        form_press(`nc_fuel_le${entries[1]}_${entries[2]}`)
            .notConsumable('gtceu:cylinder_casting_mold')
            .circuit(1)
            .itemInputs(
                `1x nuclearcraft:${entries[0]}_${entries[2]}`,
                `8x nuclearcraft:${entries[0]}_${entries[3]}`
            )
            .itemOutputs(
                `1x nuclearcraft:fuel_${entries[0]}_le${entries[1]}_${entries[2]}`
            )
            .duration(time_req)
            .EUt(energy_req);

        form_press(`nc_fuel_he${entries[1]}_${entries[2]}`)
            .notConsumable('gtceu:cylinder_casting_mold')
            .circuit(2)
            .itemInputs(
                `4x nuclearcraft:${entries[0]}_${entries[2]}`,
                `5x nuclearcraft:${entries[0]}_${entries[3]}`
            )
            .itemOutputs(
                `1x nuclearcraft:fuel_${entries[0]}_he${entries[1]}_${entries[2]}`
            )
            .duration(time_req)
            .EUt(energy_req);
    });

});