class Server {
  private port: number;
  private host: string;

  constructor(port, host) {
    this.port = port;
    this.host = host;
  }

  startServer() {
    console.log(`Server is running at ${this.host}:${this.port}`);
  }
}

const newServer = new Server(5000, 'localhost');
newServer.startServer();
