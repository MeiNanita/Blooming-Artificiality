GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1st byproduct -> centrifugable, in PBF yields main output + 3 nuggets of the byproduct

    event.create('scrap_metal')
        .ore(1, 1, false)
        .color(0xB3A29B) // light color
        .secondaryColor(0x66443D) // shade color
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .oreSmeltInto(GTMaterials.Iron)
        .washedIn(GTMaterials.SodiumPersulfate)
        .separatedInto(GTMaterials.Silver, GTMaterials.Zinc) // electromagnetic separator (competes with thermal centrifuge), 1st is 10% dust, 2nd is 20% 2 nuggets or 5% dust
        .addOreByproducts(GTMaterials.TinAlloy, GTMaterials.Iron, GTMaterials.MetalMixture, GTMaterials.Zinc) // crushed ore byproduct (starting byproduct), purified ore byproduct (anything past ore-washer), refined ore byproduct (requires HV-macerator), chem. bath byproduct (70%)

    event.create('scrap_plumbing')
        .ore(1, 1, false)
        .color(0xDE7B3E)
        .secondaryColor(0x803609)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .oreSmeltInto(GTMaterials.Copper)
        .washedIn(GTMaterials.SodiumPersulfate)
        .separatedInto(GTMaterials.Nickel, GTMaterials.Gold)
        .addOreByproducts(GTMaterials.Bronze, GTMaterials.Copper, GTMaterials.MetalMixture, GTMaterials.Nickel)

    event.create('scrap_cable')
        .ore(1, 1, false)
        .color(0x585B5C)
        .secondaryColor(0x1C1C1C)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .oreSmeltInto(GTMaterials.Tin)
        .washedIn(GTMaterials.SodiumPersulfate)
        .separatedInto(GTMaterials.Nickel, GTMaterials.ManganesePhosphide)
        .addOreByproducts(GTMaterials.Cupronickel, GTMaterials.Tin, GTMaterials.RareEarth, GTMaterials.Silver)

    event.create('scrap_electronics')
        .ore(1, 1, false)
        .color(0xDBEDCC)
        .secondaryColor(0xB4B5B3)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .oreSmeltInto(GTMaterials.Redstone)
        .washedIn(GTMaterials.SodiumPersulfate)
        .separatedInto(GTMaterials.Cobalt, GTMaterials.GalliumArsenide)
        .addOreByproducts(GTMaterials.BatteryAlloy, GTMaterials.Redstone, GTMaterials.PlatinumGroupSludge, GTMaterials.Gold)

});