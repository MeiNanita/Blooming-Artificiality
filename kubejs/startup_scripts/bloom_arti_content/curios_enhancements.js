ItemEvents.modification(event => {
	event.modify("apple", modify => {
		modify.attachCapability(
			CuriosCapabilityBuilder.CURIOS.itemStack()
				.canEquip((stack, context) => true)
				.canUnequip((stack, context) => true)
				.modifyAttribute("generic.movement_speed", "apple_speed", 0.1, "multiply_total") // improves movement-speed by 10%
		)
	})
});
