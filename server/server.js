const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.get('/', (req, res, next) => res.send('Hello world!'));

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const peerServer = ExpressPeerServer(server, { debug: true });

app.use('/peerjs', peerServer);

peerServer.on('connection', client => console.log('client connected to: ', client.id));
peerServer.on('disconnect', client => console.log('client disconnected to: ', client.id));
