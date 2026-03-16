ServerEvents.recipes(event => {

    event.shaped(Item.of('farmersdelight:tatami', 2), [
        ' C ',
        'CFC',
        ' C '
    ], {
        C: 'farmersdelight:canvas',
        F: 'gtceu:treated_wood_frame'
    });

    event.shaped(Item.of('farmersdelight:rope'), [
        'S',
        'S',
        'S'
    ], {
        S: 'notreepunching:plant_string'
    });

    event.shapeless(
        'farmersdelight:canvas_rug', 
        [
            'farmersdelight:canvas'
        ]
    );

    event.shapeless(
        'farmersdelight:canvas', 
        [
            'farmersdelight:canvas_rug'
        ]
    );

});