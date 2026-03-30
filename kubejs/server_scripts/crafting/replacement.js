ServerEvents.recipes(event => {    
    
    event.replaceInput({ id: 'minecraft:stonecutter' },
        'minecraft:iron_ingot',
        'gtceu:iron_buzz_saw_blade'
    );

    event.replaceInput({ id: 'minecraft:blast_furnace' },
        'minecraft:iron_ingot',
        'gtceu:wrought_iron_plate'
    );

    event.replaceInput({ id: 'sophisticatedbackpacks:backpack' },
        '#forge:string',
        'farmersdelight:canvas'
    );

    event.replaceInput({ id: 'gtceu:shaped/pump_deck' },
        'gtceu:iron_screw',
        'gtceu:steel_screw'
    );

    event.replaceInput({ id: 'gtceu:shaped/pump_hatch' },
        'gtceu:iron_screw',
        'gtceu:steel_screw'
    );

    event.replaceInput({ id: 'gtceu:shaped/pump_hatch' },
        'gtceu:iron_ring',
        'gtceu:steel_ring'
    );

    event.replaceInput({ id: 'gtceu:shaped/primitive_pump' },
        'gtceu:iron_screw',
        'gtceu:steel_screw'
    );

    event.replaceInput({ id: 'gtceu:shaped/primitive_pump' },
        'gtceu:iron_ring',
        'gtceu:steel_ring'
    );

    event.replaceInput({ id: 'gtceu:shaped/primitive_pump' },
        'gtceu:iron_rotor',
        'gtceu:steel_rotor'
    );

    event.replaceInput({ id: 'cold_sweat:sewing_table' },
        '#minecraft:wool',
        'farmersdelight:canvas'
    );

});
