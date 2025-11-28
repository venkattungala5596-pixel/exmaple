let players = [];

function addplayers(name) {
  players.push(name);
}
function showplayers() {
  console.log(players);
}
function updateplayers(index, newName) {
  players[index] = newName;
}
function deleteplayers(index) {
  players.splice(index, 1);
}
addplayers('dhoni');
addplayers('virat');
addplayers('raina');
showplayers();
updateplayers(0, 'rohit');
showplayers();

deleteplayers(0);
showplayers();
