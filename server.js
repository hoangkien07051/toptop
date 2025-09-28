const express = require("express");
const app = express();
const port = 8080;

app.get("/callback", (req, res) => {
  console.log("TikTok callback query:", req.query);
  res.send("TikTok login success! Code: " + req.query.code);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
