const PositionYCondition = Java.loadClass("com.gregtechceu.gtceu.common.recipe.condition.PositionYCondition");

ServerEvents.recipes(event => {

    for (let i = 0; i < 16; i++) {
        event.recipes.gtceu.downhole_heat_exchanger(`water_steam_${32 + ((i-1) * 4)}_${31 + (i * 4)}`) // default height 60 - 63 -> 16 mb => 2560 mB steam (eq. 1A MV)
            .circuit(i+1)
            .inputFluids(Fluid.of('minecraft:water', (16 - i) * 2 ))
            .outputFluids(Fluid.of('gtceu:steam', (16 - i) * 320))
            .duration(10)
            .addCondition(new PositionYCondition((i == 0 ? -64 : (32 + ((i-1) * 4))), 31 + (i * 4)));

        event.recipes.gtceu.downhole_heat_exchanger(`distilled_water_steam_${32 + ((i-1) * 4)}_${31 + (i * 4)}`) // default height 60 - 63 -> 32 mb => 5120 mB steam (eq. 1A HV)
            .circuit(i+1)
            .inputFluids(Fluid.of('gtceu:distilled_water', (16 - i) * 4))
            .outputFluids(Fluid.of('gtceu:steam', (16 - i) * 640))
            .duration(5)
            .addCondition(new PositionYCondition((i == 0 ? -64 : (32 + ((i-1) * 4))), 31 + (i * 4)))
            
    }

    /*
    event.recipes.gtceu.downhole_heat_exchanger('water_steam_60_63') // default height
        .inputFluids(Fluid.of('minecraft:water', 16))
        .outputFluids(Fluid.of('gtceu:steam', 2560)) // 1A MV
        .duration(10)
        .addCondition(new PositionYCondition(60, 63));
    

    event.recipes.gtceu.downhole_heat_exchanger('distilled_water_steam_60_63') // default height
        .inputFluids(Fluid.of('gtceu:distilled_water', 32))
        .outputFluids(Fluid.of('gtceu:steam', 5120)) // 1A HV
        .duration(5)
        .addCondition(new PositionYCondition(60, 63));
    */

});