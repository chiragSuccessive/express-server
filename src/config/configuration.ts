import { IConfig } from './IConfig';

import { config } from 'dotenv';
config();
const configuration: IConfig = Object.freeze({
  key: process.env.KEY,
  mongo_url: process.env.MONGO_URL,
  port: process.env.PORT,
});
export default configuration;
