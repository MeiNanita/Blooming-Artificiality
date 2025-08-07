BlockEvents.rightClicked('minecraft:dirt', event => {
    if (event.player.mainHandItem.hasTag('minecraft:hoes') || event.player.mainHandItem.hasTag('forge:tools/scythes'))
        event.cancel();
});
