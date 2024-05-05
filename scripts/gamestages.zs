import mods.itemstages.ItemStages;
import crafttweaker.api.text.Component;

mods.recipestages.Recipes.setRecipeStage("machinery_steam", <tag:items:bloom_arti:machinery_steam>);
ItemStages.restrict(<tag:items:bloom_arti:machinery_steam>, "machinery_steam").hiddenName(Component.literal("A shiny machine...?"));