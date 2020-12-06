"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntHyperspace = function () {
        console.log("Entering hypercaralha with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
