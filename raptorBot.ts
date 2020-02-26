import { PaqueteRespostas, Resposta } from "./Resposta";

process.env.NTBA_FIX_319 = '1';
const TelegramBot = require('node-telegram-bot-api');
const CONSTANTS = require('./constants');
const TOKEN = '877627849:AAEXtbsMxtrtmXF9R8za5s8a-a74euNzYoY';
const bot = new TelegramBot(TOKEN, { polling: true });
const MESSAGES:Resposta[] = CONSTANTS.VALID_MESSAGES;

bot.on('start', (msg:any) => {
  bot.sendMessage(msg.chat.id, 'Hola Señor');
});



bot.on('message', (msg:any) => {
  contestarAudio(msg.chat.id, getResponseFile(msg.text));
});

function getResponseFile(userMessage:string):string {
  let response:string = '';
  const lowerCaseMessage = userMessage.toLowerCase();
  MESSAGES.forEach(message => {
    message.request.forEach(request => {
      if (lowerCaseMessage.includes(request)) {
        response = message.response;
      }
    })
  })
  return response;
}

function contestarAudio(id:string, rutaAudio:string) {
  bot.sendVoice(id, rutaAudio);
}
