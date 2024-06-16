// priority: 0

global.onFillHandler = (be, resource, simulate) => {
    console.log('fill attempted');
    if (!simulate) {
        be.persistentData.putInt('water', currentWater - drainAmount)
    }
    return 0
}
  
global.onDrainHandler = (be, resource, simulate) => {
    console.log('drain attempted');
    const currentWater = be.persistentData.getInt('water') || 0
    const drainAmount = Math.min(currentWater, resource.amount)
    if (!simulate) {
      be.persistentData.putInt('water', currentWater - drainAmount)
    }
    return drainAmount
}
  
global.getFluid = (be) => {
    const currentWater = be.persistentData.getInt('water') || 0
    const cap = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null)
    console.log('getFluid')
    console.log(currentWater)
    return Fluid.water(currentWater)
}
