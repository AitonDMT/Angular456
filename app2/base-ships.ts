class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntHyperspace(){
        console.log(`Entering hypercaralha with ${this.propulsor}`);
    }
}

interface ContainerShip {

    cargoContainers: number
}


export {Spacecraft, ContainerShip}