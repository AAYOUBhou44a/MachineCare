const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
// process.env.PORT

const app = express();
// app.get(...)

app.use(express.json());
// Permettre à Express de lire du JSON

app.get("/", (req, res) => {
  res.json({
    message: "Machine API is running"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});