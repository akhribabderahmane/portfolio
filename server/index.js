import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;
const wakatimeApiKey ='waka_c2276e99-cd1b-41b5-9d4a-c7e470efce59'; // Replace with your WakaTime API key

app.use(cors());

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
