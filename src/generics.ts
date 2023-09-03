function returnKeys<T extends Object>(arg: T) {
  console.log(Object.keys(arg));
  return arg;
}

const someObj = returnKeys({ foo: 'bar' });

interface Human<T> {
  name: string;
  age: number;
  special: T;
}

const john: Human<string> = {
  special: 'This is my special property',
  name: 'John Doe',
  age: 27,
};

class Observable<T extends Human<string>> {
  subscribe(arg: T) {
    console.log(`Subscribed to ${arg.special}`);
  }
}

new Observable<typeof john>().subscribe(john);
