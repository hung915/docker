const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Api is running aaaaaaa11!bbb</h1>");
});

module.exports = router;
