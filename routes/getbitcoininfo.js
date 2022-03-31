const router = require('express').Router();
const { getLowestHighest, getCurrent } = require('../model/coinInfo');

const CURRENCIES = ['USD', 'EUR', 'GBP'];

router.get('/:currency', async (req, res) => {
  let { currency } = req.params;
  currency = currency.toUpperCase();

  if (!CURRENCIES.includes(currency)) {
    return res.json({ error: 'Invalid currency', status: 400 });
  }

  try {
    const currentRate = await getCurrent(currency);
    const lowAndHigh = await getLowestHighest(currency);
    res.json({
      currency,
      currentRate,
      ...lowAndHigh
    });
  } catch (error) {
    res.json({ error: error.message, status: 500 });
  }
})

module.exports = router;