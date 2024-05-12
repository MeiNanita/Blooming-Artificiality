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

});
