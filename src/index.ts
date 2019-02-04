import configuration from './config/configuration';
import Server from './Server';
const server = new Server(configuration);
console.log('in index');

server.bootstrap().run();
