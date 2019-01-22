import { IConfig } from "./IConfig";

import { config } from "dotenv";
config();
const configuration: IConfig = Object.freeze({ port: process.env.PORT });
export default configuration;
