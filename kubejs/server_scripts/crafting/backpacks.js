ServerEvents.recipes(event => {

    event.shaped('packedup:basicbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'minecraft:chest',
        P: 'minecraft:leather',
        S: '#agricraft:string'
    });

    event.shaped('packedup:copperbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'packedup:basicbackpack',
        P: 'gtceu:bronze_plate',
        S: 'gtceu:fine_copper_wire'
    });

    event.shaped('packedup:ironbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'packedup:copperbackpack',
        P: 'gtceu:invar_plate',
        S: 'gtceu:fine_steel_wire'
    });

    event.shaped('packedup:silverbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'packedup:ironbackpack',
        P: 'gtceu:aluminium_plate',
        S: 'gtceu:polyethylene_foil'
    });

    event.shaped('packedup:goldbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'packedup:silverbackpack',
        P: 'gtceu:epoxy_plate',
        S: 'gtceu:polyvinyl_chloride_foil'
    });

    event.shaped('packedup:diamondbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'packedup:goldbackpack',
        P: 'gtceu:reinforced_epoxy_resin_plate',
        S: 'gtceu:polytetrafluoroethylene_foil'
    });

    event.shaped('packedup:obsidianbackpack', [
        'S S',
        'PCP',
        'PPP'
    ], {
        C: 'packedup:diamondbackpack',
        P: 'gtceu:polybenzimidazole_plate',
        S: 'gtceu:polycaprolactam_foil'
    });

});
