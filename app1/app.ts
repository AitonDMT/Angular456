let message: string = "Help me";
console.log(message);

let episode: number = 4;
console.log("This epsiode "+episode);
episode=episode+1;
console.log("Next episode "+episode);

let favoriteDroid: string
favoriteDroid = 'BB-8';
console.log("My Favorite Droid is: "+ favoriteDroid);

let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12;
}

let distance = 11;

console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance)}`);

let call = (name: string) =>  console.log(`Do you copy, ${name}?`);
call('R2');



function inc (speed: number, inc: number = 1) : number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);