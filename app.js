var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
// Parameters from https://dev.botframework.com/#/bots?id=GettingStartedSampleBot
var bot = new builder.BotConnectorBot({ appId: 'GettingStartedSampleBot', appSecret: 'd3596c26a44d4057bf3a8b525a650051' });
bot.add('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});