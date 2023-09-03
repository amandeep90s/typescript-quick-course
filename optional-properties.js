function generateEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return "".concat(input.firstName, ".").concat(input.lastName, "@gmail.com");
    }
}
var someUser = {
    firstName: 'Amandeep',
    lastName: 'Singh',
    job: 'Programmer',
    isVisitor: true,
};
console.log(generateEmail(someUser, true));
