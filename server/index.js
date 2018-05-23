import express from 'express';
import router from './routes/requests';

const app = express();

app.use('/api/v1/users', router);

// Default Route
app.get('/api/v1', (req, res, next) => {
    res.status(200).send({
        message: 'Welcome. v1 of mantrckr API working just fine.'
    });
});

export default app;
