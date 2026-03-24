StartupEvents.registry('item', event => {

    event.create('shredded_scrap_metal')
    .displayName('Shredded scrap metal')
    .texture('kubejs:item/shredded_scrap_metal')
    .maxStackSize(64);

    event.create('shredded_scrap_plumbing')
    .displayName('Shredded scrap plumbing')
    .texture('kubejs:item/shredded_scrap_plumbing')
    .maxStackSize(64);

    event.create('shredded_scrap_cable')
    .displayName('Shredded scrap cable')
    .texture('kubejs:item/shredded_scrap_cable')
    .maxStackSize(64);

    event.create('shredded_scrap_electronics')
    .displayName('Shredded scrap electronics')
    .texture('kubejs:item/shredded_scrap_electronics')
    .maxStackSize(64);

    event.create('mirror_shards')
    .displayName('Mirror shards')
    .color(0, 0xC0D0E0)
    .color(1, 0x505A60)
    .texture('layer0', 'gtceu:item/material_sets/dull/crushed_refined')
    .texture('layer1', 'gtceu:item/material_sets/dull/crushed_refined_secondary')
    .texture('layer2', 'gtceu:item/material_sets/shiny/crushed_refined_overlay')
    .maxStackSize(64);

});