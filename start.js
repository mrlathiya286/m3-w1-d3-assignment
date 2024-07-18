require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connection open");
  })
  .catch((err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Ensure the model is required to register the schema
require("./models/Registration");

const server = app.listen(3000, function () {
  console.log(`Express is running on port ${server.address().port}`);
});
