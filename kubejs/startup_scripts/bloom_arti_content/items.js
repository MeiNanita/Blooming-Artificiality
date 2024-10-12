StartupEvents.registry('item', event => {

    event.create('stone_pebble')
    .displayName('Stone pebble')
    .texture('notreepunching:item/stone_loose_rock')
    .maxStackSize(64);

    event.create('plant_fiber_mesh')
    .displayName('Plant fiber mesh')
    .texture('kubejs:item/plant_fiber_mesh')
    .maxStackSize(64);

    event.create('plant_fiber_sieve')
    .displayName('Plant fiber sieve')
    .texture('kubejs:item/plant_fiber_sieve')
    .unstackable()
    .maxDamage(64);

});