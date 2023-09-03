interface Iserver {
  startServer(): void;
  stopSrver(): void;
}

class MainServer implements Iserver {
  private port: number;
  private host: string;

  constructor(port, host) {
    this.port = port;
    this.host = host;
  }

  stopSrver(): void {
    throw new Error('Method not implemented.');
  }

  startServer() {
    console.log(`Server is running at ${this.host}:${this.port}`);
  }
}

const mainServer: Iserver = new MainServer(5000, 'localhost');
mainServer.startServer();
