type job = 'Engineer' | 'Programmer';

interface Person {
  firstName: string;
  lastName: string;
  job?: job;
  isVisitor?: boolean;
}

function generateEmail(input: Person, force?: boolean): string | undefined {
  if (input.isVisitor && !force) {
    return undefined;
  } else {
    return `${input.firstName}.${input.lastName}@gmail.com`;
  }
}

const someUser: Person = {
  firstName: 'Amandeep',
  lastName: 'Singh',
  job: 'Programmer',
  isVisitor: true,
};

console.log(generateEmail(someUser, true));
