function getHello(name: string) {
  return 'Hello ' + name;
}
export { };
let name = "Eduardo";
document.body.innerHTML = getHello(name);

interface iCar {
  brand: string;
  name: string;
  power: number;
}
class Car {
  brand: string;
  name: string;
  power: number;
}

let getCar = function (car: iCar) {
  console.log(car.brand, car.name, car.power);
}
let Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 50;
getCar(Camaro);