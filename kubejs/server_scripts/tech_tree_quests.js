console.info('The Factory Must Grow!')

//LoggedIn Event
PlayerEvents.loggedIn(event => {
    event.player.sendData('loggedIn');
    console.log('loggedIn');
});

//Steam machines research
FTBQuestsEvents.completed('1BEB4EE9017D3F96', event => {
    event.player.sendData('machinery_steam');
});
