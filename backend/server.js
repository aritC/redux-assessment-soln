const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 5000;
const ProductModel = require("./models/Product");

app.post("/api/product", (req, res) => {
  let { name, price, desc, rating } = req.body;

  let errors = [];
  if (name === undefined || name === "")
    errors.push("Name Is a required field and cannot be Empty.");

  if (price === undefined || price === "")
    errors.push("Price Is a required field and cannot be Empty.");

  if (errors.length !== 0)
    return res.status(400).send({ message: "failed", errors });

  let newProduct = new ProductModel({ name, price, desc, rating });
  newProduct
    .save()
    .then((product) => {
      return res.status(200).send({ message: "success", product });
    })
    .catch((err) => {
      console.error("Save Error: ", err, newProduct);
      return res.status(500).send({ message: "failed" });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
