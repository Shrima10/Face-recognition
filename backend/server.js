const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(cors());
app.use(express.json());

const faceRoutes = require('./routes/faceRoutes');
app.use('/api/face', faceRoutes);

const server = http.createServer(app);

const startSocketServer = require('./ws/socketServer');
startSocketServer(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
