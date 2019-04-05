process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const CONSTANTS = require('./constants');
const TOKEN = '336450760:AAEzojHyDAWbb_GdExpeJPOGCT4kAwNQ9QQ';
const bot = new TelegramBot(TOKEN, { polling: true });
const MESSAGES = CONSTANTS.VALID_MESSAGES;

bot.on('start', msg => {
  bot.sendMessage(msg.chat.id, 'Hola Señor');
});

bot.on('message', msg => {
  contestarAudio(msg.chat.id, getResponseFile(msg.text));
});

function getResponseFile(userMessage) {
  var response;
  const lowerCaseMessage = userMessage.toLowerCase();
  MESSAGES.forEach(function(message) {
    message.request.forEach(function(request) {
      if (lowerCaseMessage.includes(request)) {
        response = message.response;
      }
    });
  });
  return response;
}

function contestarAudio(id, rutaAudio) {
  bot.sendVoice(id, rutaAudio);
}
