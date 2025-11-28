const express = require('express');
const app = express();
const PORT = 3000;
// GET /
app.get('/', (req, res) => {
  res.send('user done');
});
// GET /user
// app.get('/user', (req, res) => {
//   res.send('user');
// });
// POST /user
app.post('/', (req, res) => {
  let user = {};
  res.send("User created: ");
});
// PUT /user
app.put('/', (req, res) => {
  let user = {};
  res.send("User Updated");
});
// DELETE /user
app.delete('/', (req, res) => {
  let user = {};
  res.send("User Deleted");
});
// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
