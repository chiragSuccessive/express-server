import Server from "./Server";
import configuration from "./config/configuration";
const server = new Server(configuration);
server.bootstrap().run();
