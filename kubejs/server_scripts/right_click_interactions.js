BlockEvents.rightClicked('kubejs:fog_collector', event => {
    const { item, hand, block, facing } = event;
    if (hand !== 'main_hand') return;
    if (!Object.keys(global.fog_collector_items).includes(item.id)) return;
    let water = block.entity.persistentData.getInt('water') || 0;
    if (water < global.fog_collector_items[item.id].amount) return;
    event.player.swing('main_hand');
    block.entity.persistentData.putInt('water', water - global.fog_collector_items[item.id].amount);
    block.popItemFromFace(Item.of(global.fog_collector_items[item.id].output, 1), facing);
    item.count--;
    //event.player.give('minecraft:water_bucket');
    //event.cancel();
});