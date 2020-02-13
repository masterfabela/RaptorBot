//module constants.js
function constants() {
    const rutaAudios = 'audiosMP3/';
    return {
      VALID_MESSAGES: [
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
          request: ['porco', 'pueerco'], 
          response: rutaAudios + 'puerco.mp3'
        },
        {
          request: ['puerco'],
          response: rutaAudios + 'puerco2.mp3'
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
          request: ['espabila2'],
          response: rutaAudios + 'espabila2.mp3'
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
          request: ['coca cola'],
          response: rutaAudios + 'cocaCola.mp3'
        },
        {
          request: ['gatulovia'],
          response: rutaAudios + 'gatulovia.mp3'
        },
        {
          request: ['que non'],
          response: rutaAudios + 'queNon.mp3'
        },
        {
          request: ['ti tampouco'],
          response: rutaAudios + 'tiTampouco.mp3'
        },
        {
          request: ['hora parada'],
          response: rutaAudios + 'horaParada.mp3'
        },
        {
          request: ['quen cho preguntou'],
          response: rutaAudios + 'quenChoPreguntou.mp3'
        },
        {
          request: ['durmindo'],
          response: rutaAudios + 'durmindo.mp3'
        },
        {
          request: ['pintar a mona'],
          response: rutaAudios + 'pintarMona.mp3'
        },
        {
          request: ['criminal'],
          response: rutaAudios + 'criminal.mp3'
        },
        {
          request: ['cotiza'],
          response: rutaAudios + 'cotiza.mp3'
        },
        {
          request: ['cornudo'],
          response: rutaAudios + 'cornudo.mp3'
        },
        {
          request: ['sentate'],
          response: rutaAudios + 'sentate.mp3'
        },
        {
          request: ['cha na na'],
          response: rutaAudios + 'chanana.mp3'
        },
        {
          request: ['chanana'],
          response: rutaAudios + 'chanana2.mp3'
        },
        {
          request: ['causa'],
          response: rutaAudios + 'causa.mp3'
        },
        {
          request: ['borroada'],
          response: rutaAudios + 'borroada.mp3'
        },
        {
          request: ['yamaha'],
          response: rutaAudios + 'yamaha.mp3'
        },
        {
          request: ['tira a man e esconde a pedra'],
          response: rutaAudios + 'tiraManEscondePedra.mp3'
        },
        {
          request: ['como te pos'],
          response: rutaAudios + 'comoTePos.mp3'
        },
        {
          request: ['deitas'],
          response: rutaAudios + 'deitas.mp3'
        },
        {
          request: ['dios'],
          response: rutaAudios + 'chic! dioss.mp3'
        },
        {
          request: ['uuu','joker'],
          response: rutaAudios + 'luuu jajaja.mp3'
        },
        {
          request: ['pu pun'],
          response: rutaAudios + 'pu pun pu we.mp3'
        },
        {
          request: ['era visto'],
          response: rutaAudios + 'era visto.mp3'
        },
        {
          request: ['e criminal'],
          response: rutaAudios + 'este carallo e criminal.mp3'
        },
        {
          request: ['flautista', 'flauta', 'musica'],
          response: rutaAudios + 'flautista.mp3'
        },
        {
          request: ['lura'],
          response: rutaAudios + 'k borro botas lura.mp3'
        },
        {
          request: ['mallado'],
          response: rutaAudios + 'mallado.mp3'
        },
        {
          request: ['digas que no', 'digas que non'],
          response: rutaAudios + 'no me digas que no.mp3'
        },
        {
          request: ['non te botes'],
          response: rutaAudios + 'non te botes e.mp3'
        },
        {
          request: ['okey'],
          response: rutaAudios + 'OK.mp3'
        }
        ,
        {
          request: ['tella', 'loco'],
          response: rutaAudios + 'ti estas coma 1 tella.mp3'
        },
        {
          request: ['botella'],
          response: rutaAudios + 'pasame la botella.mp3'
        },
        {
          request: ['uepa', 'lolito'],
          response: rutaAudios + 'uepa.mp3'
        },
        {
          request: ['dalle ostia'],
          response: rutaAudios + 'Pero dalle ostia dalle.mp3'
        },
        {
          request: ['cotizas'],
          response: rutaAudios + 'cotizas mono.mp3'
        },     
        {
          request: ['agua', 'auga'],
          response: rutaAudios + 'satisfaccion agua.mp3'
        },
        {
          request: ['dame papel'],
          response: rutaAudios + 'rafaelpapelpacotabaco.mp3'
        },
        {
          request: ['psss'],
          response: rutaAudios + 'pssss.mp3'
        },
        {
          request: ['producto', 'aperitivo', 'comida'],
          response: rutaAudios + 'producto orneado.mp3'
        },
        {
          request: ['asubio'], 
          response: rutaAudios + 'asubio.mp3'
        },
        {
          request: ['ba buino'], 
          response: rutaAudios + 'ba buino.mp3'
        },
        {
          request: ['heartstone'], 
          response: rutaAudios + 'jromo paria.mp3'
        },
        {
          request: ['risada','risa'], 
          response: rutaAudios + 'risada larga.mp3'
        },
        {
          request: ['goliat','dark orbit'], 
          response: rutaAudios + 'nunha goliat.mp3'
        },
        {
          request: ['eespabila','espabilado'], 
          response: rutaAudios + 'eespabila.mp3'
        },
        {
          request: ['colen','entrada'], 
          response: rutaAudios + 'colen entrada.mp3'
        },
        {
          request: ['indio','glu glu','gluglu'], 
          response: rutaAudios + 'indio.mp3'
        },
        {
          request: ['give me fire','dame lume','wavin flag','flag'], 
          response: rutaAudios + 'give me fire.mp3'
        },
        {
          request: ['ooh','ooh oooh'], 
          response: rutaAudios + 'ooh ooooh.mp3'
        },
        {
          request: ['ja jaaa',], 
          response: rutaAudios + 'ja jaaa.mp3'
        },
        {
          request: ['jujaj','juaj'], 
          response: rutaAudios + 'jujaj.mp3'
        },
        {
          request: ['home','aguantas'], 
          response: rutaAudios + 'jajaja ome.mp3'
        },
        {
          request: ['lura'], 
          response: rutaAudios + 'que boorro botas lura.mp3'
        },
        {
          request: ['borro'], 
          response: rutaAudios + 'borrolura.mp3'
        },
        {
          request: ['pareu','cajo na madre'], 
          response: rutaAudios + 'madrepareupuerco.mp3'
        },
        {
          request: ['done'], 
          response: rutaAudios + 'done.mp3'
        },
        {
          request: ['sigue na misma'], 
          response: rutaAudios + 'siguemismajaja.mp3'
        },
        {
          request: ['sigues na misma'], 
          response: rutaAudios + 'siguenamismamadrepareu.mp3'
        },
        {
          request: ['ja ja'], 
          response: rutaAudios + 'non me sale o jaja.mp3'
        },
        {
          request: ['aproveita','aproveitar'], 
          response: rutaAudios + 'aproveita.mp3'
        },
        {
          request: ['ordenador', 'pc', 'portatil'], 
          response: rutaAudios + 'paraseme o ordenador.mp3'
        },
        {
          request: ['cherry','ausente'], 
          response: rutaAudios + 'cherryAusente3mins.mp3'
        },
        {
          request: ['hipo','petardazo'], 
          response: rutaAudios + 'petardazo.mp3'
        },
        {
          request: ['cotizar'], 
          response: rutaAudios + 'udoBotCotizar.mp3'
        },
        {
          request: ['buscas','non encontras'], 
          response: rutaAudios + 'quebuscasencontrado.mp3'
        },
        {
          request: ['que pasa'], 
          response: rutaAudios + 'quepasajiji.mp3'
        },
        {
          request: ['risilla','non e nada malo'], 
          response: rutaAudios + 'risanonenadamalo.mp3'
        },
        {
          request: ['jaja jaja'], 
          response: rutaAudios + 'risa desviada.mp3'
        },
        {
          request: ['malicia','malvado','maligno'], 
          response: rutaAudios + 'risa maliciosa.mp3'
        },
        {
          request: ['jajaja'], 
          response: rutaAudios + 'risa.mp3'
        },
        {
          request: ['jajaj'], 
          response: rutaAudios + 'risada instantanea.mp3'
        },
        {
          request: ['arre carallo'], 
          response: rutaAudios + 'arrecarallojodes.mp3'
        },
        {
          request: ['pero ti seica me jodes'], 
          response: rutaAudios + 'perotiseicamejodes.mp3'
        },
        {
          request: ['sopa de caracol','sopa','bailar'], 
          response: rutaAudios + 'sopadecaracol.mp3'
        },
        {
          request: ['ñam ñam','run'], 
          response: rutaAudios + 'suenarunrun.mp3'
        },
        {
          request: ['rollo','vara'], 
          response: rutaAudios + 'rollovaraseca.mp3'
        },
        {
          request: ['vaso','afogaste'], 
          response: rutaAudios + 'afojastevasoajua.mp3'
        },
        {
          request: ['tos'], 
          response: rutaAudios + 'tos.mp3'
        },
        {
          request: ['filtra','area'], 
          response: rutaAudios + 'filtraareagusto.mp3'
        },
        {
          request: ['vale'], 
          response: rutaAudios + 'vale tipo.mp3'
        },
        {
          request: ['cona','e o mismo', 'é o mismo'], 
          response: rutaAudios + 'conamisma.mp3'
        },
        {
          request: ['durmir', 'dormir'], 
          response: rutaAudios + 'vou ir a planchar a orella.mp3'
        },
        {
          request: ['xivale'],
          response: rutaAudios + 'xivale xivale.mp3'
        }
  
      ]
    };
  }
  module.exports = constants();
  