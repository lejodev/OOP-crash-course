function Car(brand, reference, speed) {
    this.brand = brand,
    this.reference = reference,
    this.speed = speed
}

Car.prototype.desciption = function() {
    return `This is a ${this.brand} ${this.reference} and reaches a speed of ${this.speed} KM/H`
}

let car1 = new Car("Ford", "Mustang Mach 1", 285)
let car2 = new Car("Mercedes Benz", "AMG GTR Black Series", 346);
console.log(car1.desciption());

console.log(Object.keys(car1));
console.log(Object.values(car1));

console.log(Car);
console.log(car1, car2);