import { Comp1 } from '@components/Comp1';

class Server {
  private port: number;
  private host: string;
  private comp: Comp1;

  constructor(port, host) {
    this.port = port;
    this.host = host;
    this.comp = new Comp1();
  }

  startServer() {
    console.log(`Server is running at ${this.host}:${this.port}`);
  }
  async fetchData() {
    return await this.getData();
  }

  async getData() {
    return '{}';
  }
}

const newServer = new Server(5000, 'localhost');
newServer.startServer();
