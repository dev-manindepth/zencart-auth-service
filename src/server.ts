import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      console.log(`Listening on PORT ${Config.PORT}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
