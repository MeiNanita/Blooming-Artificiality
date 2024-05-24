// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

/*
JEIEvents.removeCategories(event => {
    console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
});
*/

//console.log(Object.keys(JEIEvents.hideCustom));
/*
hideItems
JEIEvents.addFluids
JEIEvents.hideFluids
JEIEvents.removeRecipes
JEIEvents.removeCategories
JEIEvents.information
JEIEvents.hideCustom
JEIEvents.subtypes
JEIEvents.addItems
*/

// field variables
/*
let has_machinery_steam = false;

JEIEvents.hideItems(event => {
    //let methods = Object.getOwnPropertyNames(event);
    //let methods = Object.keys(event);
    //console.log(methods.length);
    //console.log(methods);
});

JEIEvents.removeRecipes(event => {
    //let methods = Object.getOwnPropertyNames(event);
    //let methods = Object.keys(event);
    //console.log(methods.length);
    //console.log(methods);
    let cupronickel = [
        'gtceu:macerator/macerate_cupronickel_plate',
        'gtceu:macerator/macerate_double_cupronickel_plate',
        'gtceu:macerator/macerate_cupronickel_ingot'
    ];
    if (!has_machinery_steam) {
       event.remove('gtceu:macerator', cupronickel); 
    }
    
    //console.log(event.categoryIds);

});

ClientEvents.tick(event => {
    //let methods = Object.keys(event);
    //console.log(methods.length);
    //console.log(methods);
    //console.log(event.hasGameStage("machinery_steam"));
    has_machinery_steam = event.hasGameStage("machinery_steam");
});
*/

//=================================

/*
let has_machinery_steam = false;

JEIEvents.removeRecipes(event => {
    let cupronickel = [
        'gtceu:macerator/macerate_cupronickel_plate',
        'gtceu:macerator/macerate_double_cupronickel_plate',
        'gtceu:macerator/macerate_cupronickel_ingot'
    ];
    if (!has_machinery_steam) {
       event.remove('gtceu:macerator', cupronickel); 
    }
});

ClientEvents.tick(event => {
    has_machinery_steam = event.hasGameStage("machinery_steam");
});
*/
/*
JEIEvents.removeRecipes(event => {
    console.log(event.getCategories());
    console.log(Object.keys(event));
});
*/
