const express = require("express");
const db = require("./models");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const router = require("./routes");
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());

//chuyển req, res về json
app.use(express.json());

//connect db
db.mongoose.connect(
  db.url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connect db success");
  }
);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`http://localhot/${PORT}`);
});
