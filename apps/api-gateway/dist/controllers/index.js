"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const services_1 = require("../services");
const router = express_1.default.Router();
router.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'api-gateway' });
});
router.get('/players', async (req, res) => {
    try {
        const players = await (0, services_1.getPlayers)();
        res.json(players);
    }
    catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/predict-injury', async (req, res) => {
    try {
        const response = await axios_1.default.post('http://127.0.0.1:8000/predict-injury', req.body);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error hitting ML API:', error);
        res.status(500).json({ error: 'ML Inference failed' });
    }
});
router.post('/scouting', async (req, res) => {
    try {
        const response = await axios_1.default.post('http://127.0.0.1:8000/rag-search', req.body);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error hitting ML API:', error);
        res.status(500).json({ error: 'RAG Search failed' });
    }
});
exports.default = router;
