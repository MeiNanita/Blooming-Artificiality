ServerEvents.recipes(event => {

    event.shapeless(
        'minecraft:cobblestone', 
        [
            '4x naturaldecormod:rock_decor_small'
        ]
    );

    event.shapeless(
        'notreepunching:plant_string', 
        [
            '3x farmersdelight:straw'
        ]
    );

    event.shapeless(
        '4x minecraft:clay_ball', [
            '4x gtceu:clay_dust',
            'minecraft:water_bucket'
        ]
    )
    .replaceIngredient(
        'minecraft:water_bucket',
        'minecraft:bucket'
    );

    event.shapeless(
        'croptopia:water_bottle', 
        [
            Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
        ]
    );

    event.shapeless(
        'gtceu:wood_drum', 
        [
            'minecraft:barrel',
            '#forge:tools/saws',
            '#forge:tools/mallets'
        ]
    );

    event.shapeless(
        'architects_palette:pipe', 
        [
            'gtceu:steel_huge_fluid_pipe'
        ]
    );

    event.shapeless(
        'gtceu:tiny_lead_dust', 
        [
            'gtceu:lead_nugget',
            '#forge:tools/mortars'
        ]
    );

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
