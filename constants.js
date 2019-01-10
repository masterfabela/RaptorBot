//module constants.js
function constants() {
  return {
    VALID_MESSAGES: {
      hola: {
        request: 'hola',
        response: 'Hola chámome raptorBot'
      },
      adeus: {
        request: 'adeus',
        response: 'Espero que nos vexamos pronto'
      },
      default: {
        response: 'Ainda non teño a capacidade de contestar a iso'
      }
    }
  };
}
module.exports = constants();
