import {Spacecraft, ContainerShip} from './base-ships'
import {MilleniumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="))


let ship = new Spacecraft('hyperdrive')
ship.jumpIntHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for ther job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)

