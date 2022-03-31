const moment = require('moment');
const axios = require('axios');

const BASE_URL = 'https://api.coindesk.com/v1/bpi';

exports.getCurrent = async (curr) => {
  try {
    if (!curr) throw new Error('Currency is required');

    const url = `${BASE_URL}/currentprice/${curr.toLowerCase()}.json`;
    const res = await axios.get(url);

    const rate = res.data.bpi[curr].rate;

    return Number(rate.replace(',', ''));
  } catch (error) {
    throw new Error(error.message);
  }
}

exports.getLowestHighest = async (curr) => {
  try {
    if (!curr) throw new Error('Currency is required');

    const date = new Date();
    const startDate = moment(date).subtract(30, 'days').format('YYYY-MM-DD');
    const endDate = moment(date).format('YYYY-MM-DD');

    const URL = `${BASE_URL}/historical/close.json?start=${startDate}&end=${endDate}&currency=${curr}`
    const res = await axios.get(URL);
    const maxRate = (Math.max(...Object.values(res.data.bpi)));
    const minRate = (Math.min(...Object.values(res.data.bpi)));

    return {
      maxRate,
      minRate
    }
  } catch (error) {
    throw new Error(error.message);
  }
}