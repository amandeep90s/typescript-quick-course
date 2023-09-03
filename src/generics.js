function returnKeys(arg) {
    console.log(Object.keys(arg));
    return arg;
}
var someObj = returnKeys({ foo: 'bar' });
var john = {
    special: 'This is my special property',
    name: 'John Doe',
    age: 27,
};
var Observable = /** @class */ (function () {
    function Observable() {
    }
    Observable.prototype.subscribe = function (arg) {
        console.log("Subscribed to ".concat(arg.special));
    };
    return Observable;
}());
new Observable().subscribe(john);
