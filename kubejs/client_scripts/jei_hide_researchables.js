console.info('The Factory Must Be Clean!');

const $Function = Java.loadClass('java.util.function.Function');
const $Collectors = Java.loadClass('java.util.stream.Collectors');

NetworkEvents.dataReceived('loggedIn', event => {
    console.log('loggedIn');

    const hideGTRecipe = (stage, inRecipeType, inRecipeID) => {
        const RecipeManager = global.jeiRuntime.recipeManager;
        let javaRecipeCategories = RecipeManager.createRecipeCategoryLookup().get().collect($Collectors.toMap(event => event.getRecipeType().getUid(), $Function.identity()));
        let javaRecipeCategory = javaRecipeCategories.get(Utils.id(inRecipeType));
        let javaRecipeType = javaRecipeCategory.getRecipeType();
        let javaRecipeID = RecipeManager.createRecipeLookup(javaRecipeType).get().filter(entry => entry.recipe.id == inRecipeID).findFirst().get();
        if(!event.player.stages.has(stage)) {
            RecipeManager.hideRecipes(javaRecipeType, [javaRecipeID]);
        }  
    };

    const hideGTRecipes = (stage, inRecipeType, inRecipeIDs) => {
        const RecipeManager = global.jeiRuntime.recipeManager;
        let javaRecipeCategories = RecipeManager.createRecipeCategoryLookup().get().collect($Collectors.toMap(event => event.getRecipeType().getUid(), $Function.identity()));
        let javaRecipeCategory = javaRecipeCategories.get(Utils.id(inRecipeType));
        let javaRecipeType = javaRecipeCategory.getRecipeType();
        let javaRecipeIDs = RecipeManager.createRecipeLookup(javaRecipeType).get().filter(entry => inRecipeIDs.includes(entry.recipe.id.toString())).toArray();
        if(!event.player.stages.has(stage)) {
            RecipeManager.hideRecipes(javaRecipeType, javaRecipeIDs);
        }  
    };

    //hideGTRecipe('machinery_steam', 'gtceu:macerator', 'gtceu:macerator/macerate_cupronickel_plate');
    hideGTRecipes('machinery_steam', 'gtceu:macerator', ['gtceu:macerator/macerate_cupronickel_plate', 'gtceu:macerator/macerate_double_cupronickel_plate', 'gtceu:macerator/macerate_cupronickel_ingot']);
    
});


NetworkEvents.dataReceived('machinery_steam', event => {
    //event.player.tell('Researched steam machines!');
    //event.player.playSound('entity.experience_orb.pickup')

    const unhideGTRecipe = (inRecipeType, inRecipeID) => {
        const RecipeManager = global.jeiRuntime.recipeManager;
        let javaRecipeCategories = RecipeManager.createRecipeCategoryLookup().get().collect($Collectors.toMap(event => event.getRecipeType().getUid(), $Function.identity()));
        let javaRecipeCategory = javaRecipeCategories.get(Utils.id(inRecipeType));
        let javaRecipeType = javaRecipeCategory.getRecipeType();
        let javaRecipeID = RecipeManager.createRecipeLookup(javaRecipeType).includeHidden().get().filter(entry => entry.recipe.id == inRecipeID).findFirst().get();
        RecipeManager.unhideRecipes(javaRecipeType, [javaRecipeID]);    
    };

    const unhideGTRecipes = (inRecipeType, inRecipeIDs) => {
        const RecipeManager = global.jeiRuntime.recipeManager;
        let javaRecipeCategories = RecipeManager.createRecipeCategoryLookup().get().collect($Collectors.toMap(event => event.getRecipeType().getUid(), $Function.identity()));
        let javaRecipeCategory = javaRecipeCategories.get(Utils.id(inRecipeType));
        let javaRecipeType = javaRecipeCategory.getRecipeType();
        let javaRecipeIDs = RecipeManager.createRecipeLookup(javaRecipeType).includeHidden().get().filter(entry => inRecipeIDs.includes(entry.recipe.id.toString())).toArray();
        RecipeManager.unhideRecipes(javaRecipeType, javaRecipeIDs);    
    };

    //unhideGTRecipe('gtceu:macerator', 'gtceu:macerator/macerate_cupronickel_plate');
    unhideGTRecipes('gtceu:macerator', ['gtceu:macerator/macerate_cupronickel_plate', 'gtceu:macerator/macerate_double_cupronickel_plate', 'gtceu:macerator/macerate_cupronickel_ingot']);
});
