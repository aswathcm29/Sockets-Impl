import { WebSocketServer } from 'ws';
import handleMessage from './websocketFunctions/handle-message.js';
import handleConnectionTermination from './websocketFunctions/handle-connection-termination.js';
import { v4 as uuidv4 } from 'uuid';
const port = 8080
const serverId = uuidv4()
try {
    const wss = new WebSocketServer({ port: port});
    wss.on('connection', function connection(ws) {
      ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
      });
    ws.send(JSON.stringify({"action":"serverDetails","serverId":serverId+""}))
    });
    console.log("Web socket server started successfully",port)
   } catch (error) {
    console.error("Error while starting the web socket server")
   }
   
