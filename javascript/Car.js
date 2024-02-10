class Car{
    // let a=10;
    // let b=20;
    // b=30;
    constructor(brand,color){
        this.brand=brand;
        this.color=color;
    }
    getCarBrand(){
        console.log(this.brand);
    }
    getCarDetails(){
        console.log("Brand:",this.brand);
        console.log("Color:",this.color);
    }
}

let carObj = new Car("Audi","Red");
carObj.getCarBrand();

