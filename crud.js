const express = require('express');
const app = express();
const PORT = 3000;
let players = ["dhoni","virat","raina"];
app.get('/', (req, res) => {
  res.send(players);
});
app.post('/', (req, res) => {
  players.push("shana");
  res.send(players);
});
app.put('/', (req, res) => {
  players = "jaddu";
  res.send(players);
});
app.delete('/', (req, res) => {
  players.pop();
  res.send(players);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
