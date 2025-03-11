StartupEvents.registry("block", (event) => {
    
    event.create('scrap_metal')
    .displayName('Scrap metal')
    .mapColor('METAL')
    .model('kubejs:block/scrap_metal')
    .box(0, 0, 0, 16, 4, 16)
    .soundType('chain')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('mineable/pickaxe')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .defaultCutout();


    event.create('scrap_plumbing')
    .displayName('Scrap plumbing')
    .mapColor('METAL')
    .model('kubejs:block/scrap_plumbing')
    .soundType('copper')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('mineable/pickaxe')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .defaultCutout();


    event.create('scrap_electronics')
    .displayName('Scrap electronics')
    .mapColor('METAL')
    .model('kubejs:block/scrap_electronics')
    .soundType('copper')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('mineable/pickaxe')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .defaultCutout();


    event.create('scrap_cable')
    .displayName('Scrap cable')
    .mapColor('METAL')
    .model('kubejs:block/scrap_cable')
    .box(0, 0, 0, 16, 8, 16)
    .soundType('wool')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('mineable/pickaxe')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .defaultCutout();


    event.create('trashbag')
    .displayName('Trashbag')
    .mapColor('COLOR_BLACK')
    .model('kubejs:block/trashbag')
    .soundType('azalea_leaves')
    .hardness(0.2)
    .resistance(0.2)
    .defaultCutout();


    event.create('tool_crate')
    .model('kubejs:block/tool_crate')
    .displayName('Tool crate')
    .mapColor('wood')
    .soundType('wood')
    .hardness(2)
    .resistance(3)
    .tagBlock('mineable/axe')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .fullBlock(true);


    event.create('wasteland_soil', 'falling')
    .displayName('Wasteland soil')
    .mapColor('color_orange')
    .soundType('suspicious_sand')
    .hardness(0.5)
    .resistance(0.5)
    .tagBlock('mineable/shovel')
    .requiresTool(false)
    .tagBlock('dead_bush_may_place_on')
    .tagBlock('sand')
    .tagBlock('valid_spawn')
    .fullBlock(true);


    event.create('wasteland_undersoil')
    .displayName('Wasteland undersoil')
    .mapColor('color_orange')
    .soundType('tuff')
    .hardness(0.8)
    .resistance(0.8)
    .tagBlock('mineable/shovel')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .tagBlock('dead_bush_may_place_on')
    .fullBlock(true);


    event.create('dry_lakebed')
    .displayName('Dry clay lakebed')
    .mapColor('color_orange')
    .soundType('deepslate')
    .hardness(1.25)
    .resistance(4.2)
    .tagBlock('mineable/pickaxe')
    .tagBlock('needs_stone_tool')
    .requiresTool(true)
    .tagBlock('dead_bush_may_place_on')
    .tagBlock('sand')
    .fullBlock(true);

});


