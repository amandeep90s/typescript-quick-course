type job = 'Engineer' | 'Programmer';

interface Person {
  firstName: string;
  lastName: string;
  job?: job;
  isVisitor?: boolean;
}

function generateEmail(input: Person): string {
  return `${input.firstName}.${input.lastName}@gmail.com`;
}

const someUser: Person = {
  firstName: 'Amandeep',
  lastName: 'Singh',
  job: 'Programmer',
};

function isPerson(potentialPerson: any): boolean {
  if ('firstName' in potentialPerson && 'lastName' in potentialPerson) {
    return true;
  }
  return false;
}

function printEmailIfPerson(potentialPerson: any): void {
  if (isPerson(potentialPerson)) {
    console.log(generateEmail(potentialPerson));
  } else {
    console.log('Input is not a person');
  }
}

printEmailIfPerson({ firstName: 'Aman', lastName: 'deep' });
