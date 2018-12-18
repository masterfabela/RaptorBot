const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '336450760:AAEzojHyDAWbb_GdExpeJPOGCT4kAwNQ9QQ';
const bot = new TelegramBot(TOKEN, { polling: true });
const posiblesEntradas = ['hola', 'adeus', 'enviame una foto'];

bot.on('start', msg => {
  bot.sendMessage(msg.chat.id, 'Hola Señor');
});

bot.on('message', msg => {
  comprobarRespuesta(posiblesEntradas, msg.text, msg.chat.id);
});

function comprobarRespuesta(posiblesEntradas, mensajeUsuario, chatID) {
  posiblesEntradas.forEach(respuesta => {
    if (mensajeUsuario.toLowerCase() == respuesta) {
      responseControl(respuesta, chatID);
    }
  });
}

function responseControl(userMessage, chatID) {
  if (userMessage == 'hola') contestarMensaje(chatID, 'Hola Señor');
  if (userMessage == 'adeus') contestarMensaje(chatID, 'Adeus Señor');
  if (userMessage == 'enviame una foto')
    contestarFoto(
      chatID,
      'https://code.visualstudio.com/assets/docs/nodejs/nodejs/app-js-file-created.png'
    );
}

function contestarMensaje(id, respuesta) {
  bot.sendMessage(id, respuesta);
}

function contestarAudio(id, respuesta) {
  bot.sendAudio(id);
}

function contestarFoto(id, urlFoto) {
  bot.sendPhoto(id, urlFoto);
}
