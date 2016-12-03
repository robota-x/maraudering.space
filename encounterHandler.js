export default (request) => {
  var console = require("console");
  var pubnub = require("pubnub");

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

  var msg = request.message;
  if (msg.type === 'startEncounter') {
    handleEncounterStart(request.message);
  } else if (msg.type === 'spellCast'){
    handleEncounterEnd();
  }

  function handleEncounterStart(msg) {
    //grab encounter stuff via api call to c# backend.
    return Promise.resolve(encounterData);
  }

  function handleEncounterEnd(msg) {
    //grab loot via api call to the c# backend.
    return Promise.resolve({ encounterStatus: 'win', encounterLoot: encounterLoot});
  }
};
