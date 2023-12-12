import AttackDebuf from "./AttackDebuf";

export default class Magician extends AttackDebuf {
    constructor(name, type, level = 1, health = 100, attack, defence, distance) {
        super(name, type, level, health, attack, defence, distance);
    }
}