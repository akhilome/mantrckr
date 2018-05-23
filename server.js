import app from './server/index';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`)
});

export default app;
