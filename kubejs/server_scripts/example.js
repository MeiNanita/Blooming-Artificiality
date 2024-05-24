// priority: 100

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    /*
    let recipes=[]
    event.forEachRecipe({},r=>{
        // console.log("recipe",r.json.toString())
        recipes.push(JSON.parse(r.json.toString()))
    })
    let recipe=JSON.stringify(recipes)
    console.log(recipe)
    */

    /*
    event.forEachRecipe({type: 'gtceu:macerator'},recipe=>{
        console.log(recipe.id);
    });
    */

    /*
    event.forEachRecipe({ type: 'gtceu:macerator' }, recipe => {
        // console.log(recipe.id);
        let data = JSON.parse(recipe.json);
        let energy = data.tickInputs.eu;
        let eut = 0;
        try {
            eut = energy[0].content; // necessary because it likes to error outside despite correct syntax 
        } catch (error) {}

        if (data.tickInputs && energy && eut > 2) {            
            //event.remove({ id: recipe.id });
            //recipe.stage('machinery_steam'); // only works on shaped & shapeless, otherwise just perma-locks the recipe
        }
    });
    */

});
