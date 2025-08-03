ServerEvents.recipes(event => {

    const pbf = event.recipes.gtceu.primitive_blast_furnace;

    pbf('pbf_scrap_metal_small_charcoal_dust')
        .itemInputs(
            'gtceu:crushed_scrap_metal_ore',
            'gtceu:small_charcoal_dust'
        )
        .itemOutputs(
            'minecraft:iron_ingot',
            'gtceu:tin_alloy_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 1000, 0)
        .duration(400)

    pbf('pbf_scrap_metal_charcoal_dust')
        .itemInputs(
            '4x gtceu:crushed_scrap_metal_ore',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            '4x minecraft:iron_ingot',
            '4x gtceu:tin_alloy_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 4000, 0)
        .duration(1600)

    pbf('pbf_scrap_metal_charcoal')
        .itemInputs(
            '3x gtceu:crushed_scrap_metal_ore',
            'minecraft:charcoal'
        )
        .itemOutputs(
            '3x minecraft:iron_ingot',
            '3x gtceu:tin_alloy_nugget',
            'gtceu:dark_ash_dust'
        )
        .duration(1600)

// ==========================================================

    pbf('pbf_scrap_plumbing_small_charcoal_dust')
        .itemInputs(
            'gtceu:crushed_scrap_plumbing_ore',
            'gtceu:small_charcoal_dust'
        )
        .itemOutputs(
            'minecraft:copper_ingot',
            'gtceu:potin_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 1000, 0)
        .duration(400)

    pbf('pbf_scrap_plumbing_charcoal_dust')
        .itemInputs(
            '4x gtceu:crushed_scrap_plumbing_ore',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            '4x minecraft:copper_ingot',
            '4x gtceu:potin_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 4000, 0)
        .duration(1600)

    pbf('pbf_scrap_plumbing_charcoal')
        .itemInputs(
            '3x gtceu:crushed_scrap_plumbing_ore',
            'minecraft:charcoal'
        )
        .itemOutputs(
            '3x minecraft:copper_ingot',
            '3x gtceu:potin_nugget',
            'gtceu:dark_ash_dust'
        )
        .duration(1600)

// ==========================================================

    pbf('pbf_scrap_cable_small_charcoal_dust')
        .itemInputs(
            'gtceu:crushed_scrap_cable_ore',
            'gtceu:small_charcoal_dust'
        )
        .itemOutputs(
            'gtceu:tin_ingot',
            'gtceu:cupronickel_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 1000, 0)
        .duration(400)

    pbf('pbf_scrap_cable_charcoal_dust')
        .itemInputs(
            '4x gtceu:crushed_scrap_cable_ore',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            '4x gtceu:tin_ingot',
            '4x gtceu:cupronickel_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 4000, 0)
        .duration(1600)

    pbf('pbf_scrap_cable_charcoal')
        .itemInputs(
            '3x gtceu:crushed_scrap_cable_ore',
            'minecraft:charcoal'
        )
        .itemOutputs(
            '3x gtceu:tin_ingot',
            '3x gtceu:cupronickel_nugget',
            'gtceu:dark_ash_dust'
        )
        .duration(1600)

// ==========================================================

    pbf('pbf_scrap_electronics_small_charcoal_dust')
        .itemInputs(
            'gtceu:crushed_scrap_electronics_ore',
            'gtceu:small_charcoal_dust'
        )
        .itemOutputs(
            'minecraft:redstone',
            'gtceu:battery_alloy_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 1000, 0)
        .duration(400)

    pbf('pbf_scrap_electronics_charcoal_dust')
        .itemInputs(
            '4x gtceu:crushed_scrap_electronics_ore',
            'gtceu:charcoal_dust'
        )
        .itemOutputs(
            '4x minecraft:redstone',
            '4x gtceu:battery_alloy_nugget'
        )
        .chancedOutput('gtceu:dark_ash_dust', 4000, 0)
        .duration(1600)

    pbf('pbf_scrap_electronics_charcoal')
        .itemInputs(
            '3x gtceu:crushed_scrap_electronics_ore',
            'minecraft:charcoal'
        )
        .itemOutputs(
            '3x minecraft:redstone',
            '3x gtceu:battery_alloy_nugget',
            'gtceu:dark_ash_dust'
        )
        .duration(1600)


});
