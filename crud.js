const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
function setupRoutes() {
let players = [];
app.get('/', (req, res, next) => {
  try {
    const name = req.body.name;
    res.send(players);
  } catch (err) {
    next(err);
  }
});
app.post('/', (req, res, next) => {  
    const name = req.body.name;
    if (players.includes(name)) {
      return res.status(302).send('Player already exists');
    }
    players.push(name);
    res.send(players);
  });
app.put('/', (req, res, next) => {
  try {
    const oldName = req.body.old;
    const newName = req.body.new;     
    if (!players.includes(oldName)) {
      return res.staus(404).send('Player to update not found');
    }
    for (let i = 0; i < players.length; i++) {
      if (players[i] === oldName) {
        players[i] = newName;
      }
    }
    res.send(players);
  } catch (err) {
    next(err);
  }
});
app.delete('/', (req, res, next) => {
  try {
    const name = req.body.name;
    if (!players.includes(name)) {
      return res.status(404).send('Player to delete not found');
    }
    players = players.filter(player => player !== name);
    res.send(players);
  } catch (err) {
    next(err);
  }
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});
}
setupRoutes();
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
