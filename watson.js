const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')
const credentials = require('./config/credentials').Credentials.watson

const assistant = new AssistantV2({
  version: credentials.version,
  authenticator: new IamAuthenticator({
    apikey: credentials.apikey,
  }),
  url: credentials.url
});

function crearSession(){
    return assistant.createSession({
        assistantId: credentials.assistantId
    })
}

function deleteSession(id_session){
    return assistant.deleteSession({
        assistantId: credentials.assistantId,
        sessionId: id_session
    })
}

function sendMessage(input, id_session){
    return assistant.message({
        assistantId: credentials.assistantId,
        sessionId: id_session,
        input: {
          'message_type': 'text',
          'text': input
          }
    })
}

module.exports = {
    crearSession,
    deleteSession,
    sendMessage
}