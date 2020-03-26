const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const inventory = [
  {
    name: 'pineapple',
    description: 'sweet and delicious',
  },
  {
    name: 'skittles',
    description: 'why did they change green?',
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/inventory', (req, res) => {
  res.send(inventory);
});

app.post('/inventory', (req, res) => {
  const inventoryItem = req.body;

  inventory.push(inventoryItem);

  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})