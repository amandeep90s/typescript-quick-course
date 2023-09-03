function generateEmail(input) {
    return "".concat(input.firstName, ".").concat(input.lastName, "@gmail.com");
}
var someUser = {
    firstName: 'Amandeep',
    lastName: 'Singh',
    job: 'Programmer',
};
console.log(generateEmail(someUser));
