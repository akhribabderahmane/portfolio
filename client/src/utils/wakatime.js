import axios from 'axios';

const API_KEY = 'waka_4c248226-6f38-442c-a3b5-b5ff652a11cc'; // Replace with your actual WakaTime API key

const STATS_ENDPOINT = '/api/v1/users/current/stats';
const ALL_TIME_SINCE_TODAY = '/api/v1/users/current/all_time_since_today';

export const getReadStats = async () => {
  try {
    const response = await axios.get(`${STATS_ENDPOINT}/last_7_days`, {
      headers: {
        Authorization: `Basic ${btoa(API_KEY)}`, // WakaTime API expects Basic Auth
      },
    });

    if (response.status >= 400) {
      return { status: response.status, data: [] };
    }

    const getData = response.data;

    return {
      status: response.status,
      data: {
        last_update: getData.data.modified_at,
        start_date: getData.data.start,
        end_date: getData.data.end,
        categories: getData.data.categories,
        best_day: {
          date: getData.data.best_day.date,
          text: getData.data.best_day.text,
        },
        human_readable_daily_average: getData.data.human_readable_daily_average_including_other_language,
        human_readable_total: getData.data.human_readable_total_including_other_language,
        languages: getData.data.languages.slice(0, 3),
        editors: getData.data.editors,
      },
    };
  } catch (error) {
    console.error('Error fetching read stats:', error);
    return { status: 500, data: [] };
  }
};

export const getALLTimeSinceToday = async () => {
  try {
    const response = await axios.get(ALL_TIME_SINCE_TODAY, {
      headers: {
        Authorization: `Basic ${btoa(API_KEY)}`,
      },
    });

    if (response.status >= 400) {
      return { status: response.status, data: {} };
    }

    const getData = response.data;

    return {
      status: response.status,
      data: {
        text: getData.data.text,
        total_seconds: getData.data.total_seconds,
      },
    };
  } catch (error) {
    console.error('Error fetching all time stats:', error);
    return { status: 500, data: {} };
  }
};
