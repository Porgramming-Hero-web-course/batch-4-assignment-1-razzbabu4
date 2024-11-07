
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(){
        const currentAge = new Date().getFullYear();
        return currentAge - this.year
    }
}

const car = new Car("Honda", "Civic", 2015);
car.getCarAge();


