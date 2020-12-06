import {Spacecraft, ContainerShip} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements ContainerShip {

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntHyperspace() 
        }else{
            console.log('Failede to jumpe into hyperspaced')
        }
    }
}