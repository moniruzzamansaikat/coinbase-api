# Coinbase-api

### Run the app

1. To install essential packages: `yarn` or `npm i`
2. To run the server: `yarn dev` or `npm run dev`
3. To run tests: `yarn test` or `npm run test`

### Routes

Base URL: `http://localhost:5000/`
Route: `/api/getBitcoinInfo/{currency}`

- This will return

  - `currency` - currency name
  - `currentRate` - current bitcoin rate
  - `maxRate` - Highest btc rate in last 30 days
  - `minRate` - Lowest btc rate in last 30 days

- Available currencies:`USD | GDB | EUR`

- Response:

  ```javascript
  {
      "currency": "USD", // if currency is 'USD'
      "currentRate": 47035.3,
      "maxRate": 48173.2,
      "minRate": 37788.0583
  }
  ```
