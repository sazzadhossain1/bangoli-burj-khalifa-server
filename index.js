const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bngBurjKholifaApi = require("./data/bngBurjKholifa.json");

const idBurjKholifaOne = require("./data/1=idBurjKholifa.json");
const idBurjKholifaTwo = require("./data/2=idBurjKholifa.json");
const idBurjKholifaThree = require("./data/3=idBurjKholifa.json");
const idBurjKholifaFour = require("./data/4=idBurjKholifa.json");
const idBurjKholifaFive = require("./data/5=idBurjKholifa.json");
const idBurjKholifaSix = require("./data/6=idBurjKholifa.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/allApis/", (req, res) => {
  res.send(bngBurjKholifaApi);
});

app.get("/allApis/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const api = bngBurjKholifaApi.find((apiById) => apiById.id === id);
  res.send(api);
});

// app.get("/1/", (req, res) => {
//   res.send(idBurjKholifaOne);
// });
// app.get("/2/", (req, res) => {
//   res.send(idBurjKholifaTwo);
// });
// app.get("/3/", (req, res) => {
//   res.send(idBurjKholifaThree);
// });
// app.get("/4/", (req, res) => {
//   res.send(idBurjKholifaFour);
// });
// app.get("/5/", (req, res) => {
//   res.send(idBurjKholifaFive);
// });
// app.get("/6/", (req, res) => {
//   res.send(idBurjKholifaSix);
// });

app.listen(port, () => {
  console.log("Express app listening on port", port);
});
