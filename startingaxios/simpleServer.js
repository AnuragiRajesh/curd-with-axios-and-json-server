const express = require("express");
const app = express();
const port = 3000;

app.get("/status", (req, res) => {
  res.send("yes its working");
});

app.post("/status", (req, res) => {
  res.send("post");
});
app.put("/status", (req, res) => {
  res.send("put");
});

app.patch("/status", (req, res) => {
  res.send("patch");
});

app.delete("/status", (req, res) => {
  res.send("delete");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// localhost:300/status
