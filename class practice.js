//parent
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return`${this.make}, ${this.model}, ${this.year}`;
    }
    
    startVehicle(){
        console.log('Starting Vehicle');

    }
    StopVehicle(){
        console.log('Stop Vehicle');
    }
}
//child
class car extends Vehicle{
    constructor(make, model, year, color){
        SourceBufferList(make, model, year, color);
  
    }
}