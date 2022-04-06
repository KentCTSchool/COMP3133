"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("Age: ".concat(this.age));
    };
    return Customer;
}());
exports.Customer = Customer;
