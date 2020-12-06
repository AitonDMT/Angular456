class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntHyperspace(){
        console.log(`Entering hypercaralha with ${this.propulsor}`);
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntHyperspace()


class MilleniumFalcon extends Spacecraft implements ContainerShip {

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntHyperspace() 
        }else{
            console.log('Failede to jumpe into hyperspaced')
        }
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntHyperspace()


interface ContainerShip {

    cargoContainers: number
}

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for ther job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)

