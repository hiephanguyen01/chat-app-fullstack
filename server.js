import express from "express";
const app = express();
const port = 3000;

//chuyển req, res về json
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
