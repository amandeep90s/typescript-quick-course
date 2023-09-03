const a: string = 'Hello world';
const b: number = 27;
const c: boolean = true;
const someArray: Array<string> = ['a', 'b', 'c'];
const someObject = {
  name: 'Aman',
  age: 5,
};

const abc = undefined;
const def = null;

function getData(): string | undefined {
  return '';
}

const data = getData();

if (data) {
  const someOtherData = data;
  console.log(someOtherData);
}

let input: unknown;
input = 'hello';

let somePrivateValue: string;
if (typeof input === 'string') {
  somePrivateValue = input;
}

function doTasks(tasks: number): void | never {
  if (tasks > 3) {
    throw new Error('Too many tasks');
  }
}

const stuff = doTasks(2);
