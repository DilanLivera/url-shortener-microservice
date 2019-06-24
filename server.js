const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const PORT       = process.env.PORT || 3000;
const apiRoutes  = require('./routes/apiRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/shorturl', apiRoutes);

//default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

//middlewear for errors
app.use((req, res) => {
  res.status(404).send('Page Not Found!!!');
  res.status(500).send('Something broke!')
});

const listener = app.listen(PORT, () => console.log(`App is listening on port ${listener.address().port}`));