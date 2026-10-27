import express from 'express';
import { resolve } from 'node:path';
import cors from 'cors';

import routes from './routes.js';

import './database';

class App {
     constructor() {
          this.server = express();

          this.app.use(cors());
          this.middlewares();
          this.routes();
     }

     middlewares() {
          this.server.use(cors());
          this.server.use(express.json());
          this.server.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')));
     }
}
