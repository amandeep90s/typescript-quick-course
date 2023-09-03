abstract class BaseServer {
  private port: number;
  protected host: string;

  constructor(port, host) {
    this.port = port;
    this.host = host;
  }

  startServer() {
    console.log(`Server is running at ${this.host}:${this.port}`);
  }

  abstract stopServer(): void;
}

class DbServer extends BaseServer {
  constructor(port: number, address: string) {
    super(port, address);
    console.log('Calling db server constructor');
  }

  stopServer(): void {
    console.log('Server is stopped');
  }
}

const someServer = new DbServer(5000, 'localhost');
someServer.startServer();
someServer.stopServer();
