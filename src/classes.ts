function logInvocation(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const className = target.constructor.name;
  let originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    console.log(
      `${className}#${propertyKey} called with ${JSON.stringify(args)}`
    );
    const result = await originalMethod.apply(this, args);
    console.log(
      `${className}#${propertyKey} returned ${JSON.stringify(result)}`
    );
  };
}

class Server {
  private port: number;
  private host: string;

  constructor(port: number, host: string) {
    this.port = port;
    this.host = host;
  }

  startServer() {
    console.log(`Server is running at ${this.host}:${this.port}`);
  }
  async fetchData() {
    return await this.getData(123);
  }

  @logInvocation
  async getData(id: number): Promise<string> {
    return 'some special data';
  }
}

const newServer = new Server(5000, 'localhost');
newServer.startServer();
newServer.getData(456);
