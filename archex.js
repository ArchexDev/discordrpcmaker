const archex = require("discord-rpc");
const config = require('./config.json');

archex.register(config.AppID);

const client = new archex.Client({ transport: 'ipc' });

client.on('ready', () => {
  console.log('RPC açýldý: archex!');
  client.setActivity({
    details: config.durum,
    state: config.aciklama,
    largeImageKey: config.buyukResimAd,
    largeImageText: config.buyukResimYazi,
    smallImageKey: config.kucukResimAd,
    smallImageText: config.kucukResimYazi,
    startTimestamp: Date.now(),
  });
});

client.login({ clientId: config.AppID }).catch((error) => {
  throw error.message;
});