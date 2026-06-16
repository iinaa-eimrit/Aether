import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import playerRoutes from './controllers';
import { startTelemetryConsumer } from './workers/kafkaConsumer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', playerRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);
  
  // Dummy telemetry loop at 25fps (40ms interval)
  let players = [
    { id: 'home-1', team: 'home', x: 50, y: 34, vx: 0.2, vy: 0.1 },
    { id: 'home-2', team: 'home', x: 30, y: 20, vx: 0.3, vy: -0.2 },
    { id: 'away-1', team: 'away', x: 70, y: 50, vx: -0.1, vy: 0.3 },
    { id: 'away-2', team: 'away', x: 60, y: 15, vx: -0.4, vy: 0.1 }
  ];

  const interval = setInterval(() => {
    // Update positions with simple velocity and bounds checking
    players.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > 105) p.vx *= -1;
      if (p.y < 0 || p.y > 68) p.vy *= -1;
    });

    const telemetryEvent = {
      match_id: 'dummy-match-1',
      timestamp: new Date().toISOString(),
      players: players.map(p => ({ player_id: p.id, team: p.team, x_coord: p.x, y_coord: p.y }))
    };
    socket.emit('telemetry', telemetryEvent);
  }, 40);

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
    clearInterval(interval);
  });
});

// Start Kafka Consumer
startTelemetryConsumer().catch(console.error);

httpServer.listen(port, () => {
  console.log(`API Gateway & Socket.IO running on port ${port}`);
});
