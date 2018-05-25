import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/requests';

const app = express();

// For parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/users', router);

// Default Heroku App Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the mantrckr API. Version 1 is live at /api/v1/' });
});

// Default Route For Version 1
app.get('/api/v1', (req, res) => {
  res.status(200).send({
    message: 'Welcome. v1 of mantrckr API working just fine.',
  });
});

export default app;
