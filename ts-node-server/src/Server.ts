import { IncomingMessage, ServerResponse, createServer } from 'http';

export class Server {
  public startServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      console.log(
        `Got request from ${req.headers['user-agent']} for ${req.url}`
      );
      res.write('Hello from TS server');
      res.end();
    }).listen(8080, () => {
      console.log('Server started at: http://localhost:8080');
    });
  }
}
