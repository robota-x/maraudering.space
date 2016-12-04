export default (request) => {

  var encounterData = {
    type: 'monster',
    description: 'A hulking presence stands before you. The light reflects in strange ways around him, preventing you from truly understanding its form.',
    hp: 100,
  };

  var encounterLoot = {
    items: ['Magic horn', 'Weirwood shard', 'Strange Map'],
    coins: 120,
    xp: 5
  }

  if (request.message.type === 'startEncounter') {
    handleEncounterStart(request);
  } else if (request.message.type === 'spellCast'){
    handleEncounterEnd(request);
  }

  function handleEncounterStart(req) {
    //grab encounter stuff via api call to c# backend.
    req.message = { encounterStatus: 'start', data: encounterData}; // change the msg.
    // return Promise.resolve(req);
  }

  function handleEncounterEnd(req) {
    //grab loot via api call to the c# backend.
    req.message = { encounterStatus: 'win', encounterLoot: encounterLoot};
    // return Promise.resolve(req);
  }

  return Promise.resolve(request);
};
