import { IConfig } from "./IConfig";

import { config } from "dotenv";
config();
const configuration: IConfig = Object.freeze({ port: process.env.PORT,key:process.env.KEY,mongo_url:process.env.MONGO_URL });
export default configuration;
