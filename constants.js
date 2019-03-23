//module constants.js
function constants() {
  const rutaAudios = 'audiosMP3/';
  return {
    VALID_MESSAGES: [
      {
        request: ['aperitivo'],
        response: rutaAudios + 'aperitivo.mp3'
      },
      {
        request: ['ardilla'],
        response: rutaAudios + 'ardilla.mp3'
      },
      {
        request: ['nada'],
        response: rutaAudios + 'nada.mp3'
      },
      {
        request: ['ti crees'],
        response: rutaAudios + 'ti crees.mp3'
      },
      {
        request: ['lapar unha codia', 'codia'],
        response: rutaAudios + 'laparCodia.mp3'
      },
      {
        request: ['sono'],
        response: rutaAudios + 'sonoCriminal.mp3'
      },
      {
        request: ['babuino', 'mono'],
        response: rutaAudios + 'babuino.mp3'
      },
      {
        request: ['lingua', 'lengua'],
        response: rutaAudios + 'lingua.mp3'
      },
      {
        request: ['porco', 'puerco'],
        response: rutaAudios + 'puerco.mp3'
      },
      {
        request: ['suspiro'],
        response: rutaAudios + 'suspiro.mp3'
      },
      {
        request: ['tas bo'],
        response: rutaAudios + 'tas bo.mp3'
      },
      {
        request: ['ardilla'],
        response: 'ardilla.mp3'
      },
      {
        request: ['haber tipo'],
        response: rutaAudios + 'haber tipo.mp3'
      },
      {
        request: ['natural', 'aroma', 'conservante'],
        response: rutaAudios + 'aromas.mp3'
      },
      {
        request: ['xa o tiñas', 'espabila'],
        response: rutaAudios + 'espabila.mp3'
      },
      {
        request: ['a que andas', 'ocupado', 'andas'],
        response: rutaAudios + 'andas.mp3'
      },
      {
        request: ['facebook'],
        response: rutaAudios + 'facebook.mp3'
      },
      {
        request: ['nada'],
        response: rutaAudios + 'nada.mp3'
      },
      {
        request: ['tarareo', 'cancion'],
        response: rutaAudios + 'tarareo.mp3'
      },
      {
        request: ['eructo'],
        response: rutaAudios + 'eructo.mp3'
      },
      {
        request: ['auga'],
        response: rutaAudios + 'auga.mp3'
      },
      {
        request: ['cherry'],
        response: rutaAudios + 'cherry.mp3'
      },
      {
        request: ['done', 'terminado'],
        response: rutaAudios + 'done.mp3'
      },
      {
        request: ['que pasa'],
        response: ''
      },
      {
        request: ['coca cola'],
        response: rutaAudios + 'cocaCola.mp3'
      },
      {
        request: ['gatulovia'],
        response: rutaAudios + 'gatulovia.mp3'
      }
    ]
  };
}
module.exports = constants();
