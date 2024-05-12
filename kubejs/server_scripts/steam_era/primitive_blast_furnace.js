ServerEvents.recipes(event => {

    event.recipes.gtceu.primitive_blast_furnace('hematite_charcoal_to_iron')
        .itemInputs(
            Item.of('gtceu:impure_hematite_dust'),
            Item.of('gtceu:charcoal_dust')
        )
        .itemOutputs(
            Item.of('minecraft:iron_ingot'),
            Item.of('gtceu:tiny_dark_ash_dust')
        )
        .duration(600)

    event.recipes.gtceu.primitive_blast_furnace('hematite_coal_to_iron')
        .itemInputs(
            Item.of('gtceu:impure_hematite_dust'),
            Item.of('gtceu:coal_dust')
        )
        .itemOutputs(
            Item.of('minecraft:iron_ingot'),
            Item.of('gtceu:tiny_dark_ash_dust')
        )
        .duration(600)

    event.recipes.gtceu.primitive_blast_furnace('hematite_coke_to_iron')
        .itemInputs(
            Item.of('gtceu:impure_hematite_dust', 2),
            Item.of('gtceu:coke_dust')
        )
        .itemOutputs(
            Item.of('minecraft:iron_ingot', 2),
        )
        .chancedOutput(Item.of('gtceu:ash_dust'), 1100, 0)
        .duration(600)

});
