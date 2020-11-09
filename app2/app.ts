class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

let ship = new Spacecraft('hyperdrive');
ship.jumpIntHyperspace();


class MilleniumFalcon extends Spacecraft {

    constructor(){
        super('hyperdrive');
    }

    jumpIntHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntHyperspace()
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }
}
