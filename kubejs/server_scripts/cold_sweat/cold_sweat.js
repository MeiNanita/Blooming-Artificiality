ColdSweatEvents.registries(event => {

    event.addInsulator(insulator => {

        insulator.items('thermal:diving_helmet')
            // Insulation that the item provides (cold, heat)
            .insulation(2, 2)
            .slot('armor')
            .immuneToModifier('cold_sweat:water', 1.0)
            

    });

});