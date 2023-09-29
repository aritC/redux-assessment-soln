const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
