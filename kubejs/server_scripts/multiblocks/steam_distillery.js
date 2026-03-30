ServerEvents.recipes(event => {
    const recipe = event.recipes.gtceu.steam_distillery;
    const base_time = 4096;
    // 2 B of wood vinegar in 8*512 ticks = 4096 ticks

//====================================================
//                  wood vinegar
//====================================================

    recipe('wood_vinegar_to_water')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_vinegar', 250))
        .circuit(1)
        .outputFluids(Fluid.of('minecraft:water', 125))
        .duration(base_time/8);

    recipe('wood_vinegar_to_methanol')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_vinegar', 500))
        .circuit(2)
        .outputFluids(Fluid.of('gtceu:methanol', 125))
        .duration(base_time/4);

    recipe('wood_vinegar_to_acetic_acid')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_vinegar', 1000))
        .circuit(3)
        .outputFluids(Fluid.of('gtceu:acetic_acid', 125))
        .duration(base_time/2);

    recipe('wood_vinegar_to_acetone')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_vinegar', 2000))
        .circuit(4)
        .outputFluids(Fluid.of('gtceu:acetone', 125))
        .duration(base_time);

    recipe('wood_vinegar_to_ethanol')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_vinegar', 2000))
        .circuit(5)
        .outputFluids(Fluid.of('gtceu:ethanol', 125))
        .duration(base_time);

//====================================================
//                  wood tar
//====================================================

    recipe('wood_tar_to_guaiacol')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_tar', 250))
        .circuit(1)
        .outputFluids(Fluid.of('gtceu:guaiacol', 125))
        .duration(base_time/8);

    recipe('wood_tar_to_phenol')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_tar', 500))
        .circuit(2)
        .outputFluids(Fluid.of('gtceu:phenol', 125))
        .duration(base_time/4);

    recipe('wood_tar_to_creosol')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_tar', 1000))
        .circuit(3)
        .outputFluids(Fluid.of('gtceu:creosol', 125))
        .duration(base_time/2);

    recipe('wood_tar_to_xylenol')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_tar', 2000))
        .circuit(4)
        .outputFluids(Fluid.of('gtceu:xylenol', 125))
        .duration(base_time);

    recipe('wood_tar_to_resin')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_tar', 2000))
        .circuit(5)
        .outputFluids(Fluid.of('thermal:resin', 125))
        .duration(base_time);

//====================================================
//                  wood gas
//====================================================

    recipe('wood_gas_to_carbon_monoxide')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_gas', 250))
        .circuit(1)
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 125))
        .duration(base_time/8);

    recipe('wood_gas_to_hydrogen')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_gas', 500))
        .circuit(2)
        .outputFluids(Fluid.of('gtceu:hydrogen', 125))
        .duration(base_time/4);

    recipe('wood_gas_to_methane')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_gas', 1000))
        .circuit(3)
        .outputFluids(Fluid.of('gtceu:methane', 125))
        .duration(base_time/2);

    recipe('wood_gas_to_carbon_dioxide')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_gas', 2000))
        .circuit(4)
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 125))
        .duration(base_time);

    recipe('wood_gas_to_ethylene')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:steam', 16))
        .perTick(false)
        .inputFluids(Fluid.of('gtceu:wood_gas', 2000))
        .circuit(5)
        .outputFluids(Fluid.of('gtceu:ethylene', 125))
        .duration(base_time);

});
