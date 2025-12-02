const express = require('express');
const app = express();
app.use(express.json()); 
const PORT = 3000;
let players = ["dhoni","virat","raina"];
app.get('/', (req, res) => {
  res.send(players);
});
app.post('/', (req, res) => {
  players.push(req.body.name);
  res.send(players);
});
app.put('/', (req, res) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i] === req.body.old) {
      players[i] = req.body.new;
    }
  }
  res.send(players);
});
app.delete('/', (req, res) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i] === req.body.name) {
      players.splice(i,1);
    }
  }
  res.send(players);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
   