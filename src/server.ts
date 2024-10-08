// getting-started.js
import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
// import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

// uncought Exception
process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_Url as string);
    console.log(`🛢 Database is Connected Successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('Failed To to database', err);
  }

  // server gracefully of
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1); // node process of after server OF
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

// sigteam setup
process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
