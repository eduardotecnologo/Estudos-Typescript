"use strict";
exports.__esModule = true;
function getHello(name) {
    return 'Hello ' + name;
}
var name = "Eduardo";
document.body.innerHTML = getHello(name);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 50;
getCar(Camaro);
