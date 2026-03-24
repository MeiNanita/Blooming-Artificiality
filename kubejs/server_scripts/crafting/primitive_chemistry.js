ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    greg.primitive_chemical_reactor('caco3_to_quicklime')
        .itemInputs(
            '#bloom_arti:charcoal_fuels', 
            'gtceu:calcium_carbonate_dust'
        )
        .itemOutputs('gtceu:quicklime_dust')
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000),
        )
        .duration(600);

    greg.primitive_chemical_reactor('calcium_oxide_to_calcium_hydroxide')
        .itemInputs(
            '#bloom_arti:charcoal_fuels', 
            'gtceu:quicklime_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
        )
        .itemOutputs('gtceu:calcium_hydroxide_dust')
        .duration(600);

    greg.primitive_chemical_reactor('gypsum_to_calcium_sulfide')
        .itemInputs(
            '#bloom_arti:charcoal_fuels', 
            '2x gtceu:charcoal_dust',
            'gtceu:gypsum_dust'
        )
        .itemOutputs('gtceu:calcium_sulfide_dust')
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 2000),
        )
        .duration(600);

    greg.primitive_chemical_reactor('calcium_sulfide_to_calcium_hydroxide')
        .itemInputs(
            '#bloom_arti:charcoal_fuels', 
            'gtceu:calcium_sulfide_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 2000),
        )
        .itemOutputs('gtceu:calcium_hydroxide_dust')
        .outputFluids(
            Fluid.of('gtceu:hydrogen_sulfide', 1000),
        )
        .duration(600);

    greg.primitive_chemical_reactor('gypsum_calcium_sulfide_reduction')
        .itemInputs(
            '4x #bloom_arti:charcoal_fuels', 
            '3x gtceu:gypsum_dust',
            'gtceu:calcium_sulfide_dust'
        )
        .itemOutputs(
            '4x gtceu:quicklime_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:sulfur_dioxide', 4000),
        )
        .duration(2400);

    greg.primitive_chemical_reactor('claus_process')
        .itemInputs(
            '2x #bloom_arti:charcoal_fuels'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrogen_sulfide', 2000),
            Fluid.of('gtceu:sulfur_dioxide', 1000)
        )
        .itemOutputs('3x gtceu:sulfur_dust')
        .outputFluids(
            Fluid.of('minecraft:water', 2000),
        )
        .duration(1200);

    greg.primitive_chemical_reactor('boudouard_reaction')
        .itemInputs(
            '#bloom_arti:charcoal_fuels', 
            'gtceu:charcoal_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_monoxide', 2000),
        )
        .duration(600);

    greg.primitive_chemical_reactor('water_gas_shift_reaction')
        .itemInputs(
            '4x #bloom_arti:charcoal_fuels'
        )
        .notConsumable('gtceu:iron_dust')
        .inputFluids(
            Fluid.of('gtceu:carbon_monoxide', 1000),
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000),
            Fluid.of('gtceu:hydrogen', 2000)
        )
        .duration(2400);

    greg.primitive_chemical_reactor('methanol_from_carbon_monoxide')
        .itemInputs(
            '4x #bloom_arti:charcoal_fuels'
        )
        .notConsumable('gtceu:copper_dust')
        .inputFluids(
            Fluid.of('gtceu:carbon_monoxide', 1000),
            Fluid.of('gtceu:hydrogen', 4000)
        )
        .outputFluids(
            Fluid.of('gtceu:methanol', 1000)
        )
        .duration(2400);

    greg.primitive_chemical_reactor('methanol_from_carbon_dioxide')
        .itemInputs(
            '4x #bloom_arti:charcoal_fuels'
        )
        .notConsumable('gtceu:copper_dust')
        .inputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000),
            Fluid.of('gtceu:hydrogen', 6000)
        )
        .outputFluids(
            Fluid.of('gtceu:methanol', 1000),
            Fluid.of('minecraft:water', 1000)
        )
        .duration(2400);

    greg.primitive_chemical_reactor('silver_oxide_decomposition')
        .itemInputs(
            '#bloom_arti:charcoal_fuels',
            'gtceu:silver_oxide_dust'
        )
        .itemOutputs('2x gtceu:silver_dust')
        .outputFluids(
            Fluid.of('gtceu:oxygen', 1000)
        )
        .duration(600);

    greg.primitive_chemical_reactor('methanol_to_formaldehyde')
        .itemInputs(
            '#bloom_arti:charcoal_fuels'
        )
        .notConsumable('gtceu:silver_dust')
        .inputFluids(
            Fluid.of('gtceu:methanol', 1000),
            Fluid.of('gtceu:oxygen', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:formaldehyde', 1000),
            Fluid.of('minecraft:water', 1000)
        )
        .duration(600);

    greg.primitive_chemical_reactor('bakelite_synthesis_ingot')
        .itemInputs(
            '4x #bloom_arti:charcoal_fuels'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids(
            Fluid.of('gtceu:creosote', 4000),
            Fluid.of('gtceu:formaldehyde', 1000)
        )
        .itemOutputs('7x gtceu:bakelite_ingot')
        .outputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .duration(2400);

    greg.alloy_smelter('bakelite_plate_via_alloy_smelter')
        .itemInputs(
            'gtceu:bakelite_ingot'
        )
        .notConsumable('gtceu:plate_casting_mold')
        .itemOutputs('gtceu:bakelite_plate')
        .duration(64)
        .EUt(GTValues.V[GTValues.ULV]);

    greg.alloy_smelter('resin_circuit_board')
        .itemInputs(
            'gtceu:wood_plate',
            '2x gtceu:bakelite_plate'
        )
        .itemOutputs('gtceu:resin_circuit_board')
        .duration(128)
        .EUt(GTValues.VH[GTValues.LV]);
        
});