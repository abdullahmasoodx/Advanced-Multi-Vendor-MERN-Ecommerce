const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser  = require('body-parser')
const cookieParser  = require('cookie-parser')

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT;

app.use("/api", require("./routes/authRouter.js"));

app.listen(PORT, () => {
  console.log("server is started");
});
