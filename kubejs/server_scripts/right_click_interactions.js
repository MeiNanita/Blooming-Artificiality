BlockEvents.rightClicked('kubejs:fog_collector', event => {
    const { item, hand, block } = event;
    if (hand !== 'main_hand') return;
    if (item.id !== 'minecraft:bucket' && item.id !== 'notreepunching:ceramic_bucket') return;
    const water = block.entity.persistentData.getInt('water') || 0;
    if (water < 10) return;
    event.player.swing('main_hand');
    block.entity.persistentData.putInt('water', 0);
    if (item.id === 'minecraft:bucket') block.popItemFromFace(Item.of('minecraft:water_bucket', 1), Direction.UP);
    if (item.id === 'notreepunching:ceramic_bucket') block.popItemFromFace(Item.of('notreepunching:ceramic_water_bucket', 1), Direction.UP);
    item.count--;
    //event.player.give('minecraft:water_bucket');
    //event.cancel();
});