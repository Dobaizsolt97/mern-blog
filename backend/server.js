const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

//app
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
//cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes
app.get("/", (req, res) => {
  res.send("hisdawd");
});

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
