ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu;

    greg.macerator('macerate_ammo357')
        .itemInputs("pointblank:ammo357")
        .chancedOutput("gtceu:lead_dust", 1250, 0)
        .chancedOutput("minecraft:gunpowder", 1250, 0)
        .duration(64)
        .EUt(GTValues.VH[GTValues.ULV]);

    greg.centrifuge('decomposition_centrifuging_gunpowder')
        .itemInputs("6x minecraft:gunpowder")
        .itemOutputs(
            "2x gtceu:saltpeter_dust",
            "gtceu:sulfur_dust",
            "3x gtceu:carbon_dust"
        )
        .duration(128)
        .EUt(GTValues.VHA[GTValues.LV]);

});