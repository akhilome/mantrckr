import app from './server/index';

const PORT = process.env.PORT || 3000;
if (!module.parent) app.listen(PORT);

export default app;
