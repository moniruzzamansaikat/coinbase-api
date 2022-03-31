const { getCurrent, getLowestHighest } = require('../coinInfo')

it('getCurrent("USD") should return a number', async () => {
  const rate = await getCurrent('USD');
  expect(typeof rate).toBe('number');
});

it('getCurrent("bdt") should thorw an error', async () => {
  try {
    const rate = await getCurrent('bdt');
    expect(typeof rate).toBe('number');
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});

it('getCurrent() -> currency is required', async () => {
  try {
    const data = await getCurrent();
    expect(data).toBe(undefined);
  } catch (error) {
    expect(error.message).toBe('Currency is required');
  }
});

it('getLowestHighest("USD") should return an object', async () => {
  const data = await getLowestHighest('USD');
  expect(typeof data).toBe('object');
});

it('getLowestHighest() -> currency is required', async () => {
  try {
    const data = await getLowestHighest();
    expect(typeof data).toBe(undefined);
  } catch (error) {
    expect(error.message).toBe('Currency is required');
  }
});







