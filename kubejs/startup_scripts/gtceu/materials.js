GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('silver_oxide')
        .dust() 
        .color(0x372C28)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components('2x silver', '1x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);
        
    
});