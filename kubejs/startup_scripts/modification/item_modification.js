ItemEvents.modification(event => {

    /*
    event.modify('pamhc2foodcore:freshwateritem', item => {
        item.foodProperties = null;
        item.foodProperties = food => {
            food.hunger(0)
            food.saturation(0)
        };
    });
    */

    event.modify('biomesoplenty:dead_branch', item => {
        item.burnTime = 200;
    });

});