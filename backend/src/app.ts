import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: ['https://teste-bm1w.onrender.com', 'http://localhost:3000'],
  credentials: true
}));

// ...existing code...

export default app;