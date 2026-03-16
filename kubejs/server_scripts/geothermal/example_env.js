ServerEvents.recipes(event => {
    event.recipes.gtceu.example_env('env_recipe_modi')
        .notConsumable('minecraft:dirt')
        .duration(20)
        .EUt(-128);

    //event.recipes.gtceu.assembler('env_recipe_modi')
});
