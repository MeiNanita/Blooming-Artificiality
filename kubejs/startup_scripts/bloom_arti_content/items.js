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

});