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

//=============================================================    
//             Burntime-modification
//=============================================================    
    const std_time = 200; // the standard burntime for 1 item in ticks

    event.modify('biomesoplenty:dead_branch', item => {item.burnTime = std_time});
    //event.modify('gtceu:wood_tar_bucket', item => {item.burnTime = 32*std_time; item.setCraftingRemainingItem('bucket')});
    event.modify('gtceu:wood_tar_bucket', item => {item.burnTime = 32*std_time});

});