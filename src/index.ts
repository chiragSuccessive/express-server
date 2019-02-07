import configuration from './config/configuration';
import Server from './Server';
const server = new Server(configuration);
server.bootstrap().run();
