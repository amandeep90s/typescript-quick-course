type job = 'Engineer' | 'Programmer';

interface Person {
  firstName: string;
  lastName: string;
  job: job;
}

function generateEmail(input: Person): string {
  return `${input.firstName}.${input.lastName}@gmail.com`;
}

const someUser: Person = {
  firstName: 'Amandeep',
  lastName: 'Singh',
  job: 'Programmer',
};

console.log(generateEmail(someUser));
