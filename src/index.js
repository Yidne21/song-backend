import app from './config/express';
import connectDB from './config/mongoose';
import * as environments from './config/environments';

const start = async () => {
  connectDB()
    .then(
      app.listen(environments.PORT, () => {
        console.log(
          `[${environments.NODE_ENV}] Server running on localhost:${environments.PORT}`
        );
      })
    )
    .catch((error) => console.log('Unable to start node server.', error));
};

start();

export default app;
