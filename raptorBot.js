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
  contestarMensaje(msg.chat.id, getResponse(msg.text));
  contestarAudio(msg.chat.id);
});

function getResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();
  var response;
  MESSAGES[lowerCaseMessage]
    ? (response = MESSAGES[lowerCaseMessage].response)
    : (response = MESSAGES.default.response);
  return response;
}

function contestarMensaje(id, respuesta) {
  bot.sendMessage(id, respuesta);
}

function contestarAudio(id) {
  bot.sendAudio(id, 'audiosTor/ti crees.mp3');
}

function contestarFoto(id, urlFoto) {
  bot.sendPhoto(id, urlFoto);
}
