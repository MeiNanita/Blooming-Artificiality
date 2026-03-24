GTCEuStartupEvents.materialModification(event => {
    GTMaterials.Gypsum
        .setFormula('CaSO4')
        .setComponents('1x calcium', '1x sulfur', '4x oxygen');
});

GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('silver_oxide')
        .dust() 
        .color(0x372C28)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components('2x silver', '1x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('calcium_sulfide')
        .dust() 
        .color(0xB47C6B)
        .iconSet(GTMaterialIconSet.FINE)
        .components('1x calcium', '1x sulfur')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('slag')
        .dust() 
        .color(0x978278);

    event.create('rich_slag')
        .dust() 
        .color(0xA25A3F);

    event.create('bakelite')
        .polymer()
        .fluid()
        .color(0x9D824C)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        );
    
});