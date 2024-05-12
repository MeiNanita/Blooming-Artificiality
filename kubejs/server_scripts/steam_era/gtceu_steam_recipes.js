ServerEvents.recipes(event => {

    event.recipes.gtceu.alloy_smelter('tiny_hematite_charcoal')
        .itemInputs(
            Item.of('gtceu:tiny_hematite_dust'),
            Item.of('gtceu:charcoal_dust')
        )
        .itemOutputs(
            Item.of('minecraft:iron_nugget'),
            Item.of('gtceu:dark_ash_dust')
        )
        .duration(200)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('tiny_hematite_coal')
        .itemInputs(
            Item.of('gtceu:tiny_hematite_dust'),
            Item.of('gtceu:coal_dust')
        )
        .itemOutputs(
            Item.of('minecraft:iron_nugget'),
            Item.of('gtceu:dark_ash_dust')
        )
        .duration(200)
        .EUt(7)

    event.recipes.gtceu.macerator('recycling_rusted_plate_iron')
        .itemInputs(Item.of('immersive_weathering:rusted_plate_iron'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 9))
        .duration(9 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_plate_iron_stairs')
        .itemInputs(Item.of('immersive_weathering:rusted_plate_iron_stairs'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 6))
        .duration(6 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_plate_iron_slab')
        .itemInputs(Item.of('immersive_weathering:rusted_plate_iron_slab'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 4))
        .duration(4 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_cut_iron')
        .itemInputs(Item.of('immersive_weathering:rusted_cut_iron'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 9))
        .duration(9 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_cut_iron_stairs')
        .itemInputs(Item.of('immersive_weathering:rusted_cut_iron_stairs'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 6))
        .duration(6 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_cut_iron_slab')
        .itemInputs(Item.of('immersive_weathering:rusted_cut_iron_slab'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 4))
        .duration(4 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_iron_door')
        .itemInputs(Item.of('immersive_weathering:rusted_iron_door'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 3))
        .duration(3 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_iron_trapdoor')
        .itemInputs(Item.of('immersive_weathering:rusted_iron_trapdoor'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust', 3))
        .duration(3 * 56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_iron_bars')
        .itemInputs(Item.of('immersive_weathering:rusted_iron_bars', 4))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_factory_block')
        .itemInputs(Item.of('xkdeco:factory_block_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_factory_trapdoor')
        .itemInputs(Item.of('xkdeco:factory_trapdoor_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_factory_stairs')
        .itemInputs(Item.of('xkdeco:factory_stairs_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_factory_slab')
        .itemInputs(Item.of('xkdeco:factory_slab_rusted', 2))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_hazard_attention')
        .itemInputs(Item.of('xkdeco:factory_attention_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_hazard_electricity')
        .itemInputs(Item.of('xkdeco:factory_electricity_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_hazard_toxic')
        .itemInputs(Item.of('xkdeco:factory_toxic_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_hazard_radiation')
        .itemInputs(Item.of('xkdeco:factory_radiation_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

    event.recipes.gtceu.macerator('recycling_rusted_hazard_biohazard')
        .itemInputs(Item.of('xkdeco:factory_biohazard_rusted'))
        .itemOutputs(Item.of('gtceu:impure_hematite_dust'))
        .duration(56)
        .EUt(2)

});
