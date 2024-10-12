/*
{
    "playerhelditem": "kubejs:plant_fiber_sieve",
    "block": "kubejs:wasteland_soil",
    "command": "/playsound minecraft:block.sand.break block @p ~ ~ ~ 1 0.6",
    "setblock": {"block": "biomesoplenty:orange_sand"},
    "give": [
        "1=minecraft:air",
        "1=minecraft:charcoal"
    ]
}
*/

BlockEvents.rightClicked('kubejs:wasteland_soil', event => {
    let player = event.getPlayer();

    if (player.getHeldItem('main_hand') == 'kubejs:plant_fiber_sieve') {
        player.damageHeldItem('main_hand', 1);
        event.block.set('biomesoplenty:orange_sand');
        event.level.runCommandSilent("/playsound minecraft:block.sand.break block @p[distance=..3] ~ ~ ~ 1 0.6");
        
        if (Math.random() < 0.25) {
            player.give('kubejs:stone_pebble');
        }

        if (Math.random() < 0.25) {
            player.give('minecraft:dead_bush');
        }

        if (Math.random() < 0.10) {
            player.give('minecraft:paper');
        }

        if (Math.random() < 0.05) {
            player.give('minecraft:bone');
        }

        if (Math.random() < 0.05) {
            player.give('pointblank:ammo357');
        }

        if (Math.random() < 0.025) {
            player.give('kubejs:scrap_metal');
        }

        if (Math.random() < 0.025) {
            player.give('minecraft:charcoal');
        }

        if (Math.random() < 0.005) {
            player.give('minecraft:diamond');
        }
    }
    
    
});
