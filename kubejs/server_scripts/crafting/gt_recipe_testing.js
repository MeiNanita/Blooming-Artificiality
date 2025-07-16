ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    greg.sifter("test_recipe_chance_logic")
        .itemInputs("1x minecraft:coarse_dirt")
        .chancedOutput("1x minecraft:gravel", 5000, 0)
        .chancedOutput("1x minecraft:dirt", 10000-1, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .duration(1)
        .EUt(1)
});