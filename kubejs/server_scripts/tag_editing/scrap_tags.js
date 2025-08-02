ServerEvents.tags('item', event => {

    const target_names = ['scrap_metal', 'scrap_plumbing', 'scrap_cable', 'scrap_electronics'];

    target_names.forEach(name => {
        const ores = event.get(`forge:ores/${name}`).getObjectIds();
        const blacklist = Ingredient.of(`kubejs:${name}`);

        ores.forEach(item => {
            if (!blacklist.test(item)) event.remove(`forge:ores/${name}`, item);
        });
    });

});

ServerEvents.tags('block', event => {

    const target_names = ['scrap_metal', 'scrap_plumbing', 'scrap_cable', 'scrap_electronics'];
    
    target_names.forEach(name => {
        const ores = event.get(`forge:ores/${name}`).getObjectIds();
        const blacklist = Ingredient.of(`kubejs:${name}`);

        ores.forEach(block => {
            if (!blacklist.test(block)) event.remove(`forge:ores/${name}`, block);
        });
    });

});
