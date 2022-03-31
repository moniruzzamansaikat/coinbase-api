const router = require('express').Router();

router.use('/api/getbitcoininfo', require('./getbitcoininfo'));
router.get("*", (req, res) => {
  res.json({
    error: "Not found",
    status: 404
  })
})

module.exports = router;