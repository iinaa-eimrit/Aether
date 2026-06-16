import express from 'express';
import axios from 'axios';
import { getPlayers } from '../services';

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

router.get('/players', async (req, res) => {
  try {
    const players = await getPlayers();
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/predict-injury', async (req, res) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/predict-injury', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error hitting ML API:', error);
    res.status(500).json({ error: 'ML Inference failed' });
  }
});

router.post('/scouting', async (req, res) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/rag-search', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error hitting ML API:', error);
    res.status(500).json({ error: 'RAG Search failed' });
  }
});

export default router;
