import express from 'express';
import axios from 'axios';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(cors());
const wakatimeApiKey =process.env.WAKATIME_API_KEY  ;

app.get('/api/wakatime/stats', async (req, res) => {
  try {
    const response = await axios.get(`https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${wakatimeApiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/wakastats/alltime', async (req, res) => {
    try {
        const response = await axios.get(`https://wakatime.com/api/v1/users/current/stats/all_time?api_key=${wakatimeApiKey}`);
        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
