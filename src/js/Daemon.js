import AttackDebuf from "./AttackDebuf";

export default class Daemon extends AttackDebuf {
    constructor(name, type, level = 1, health = 100, attack, defence) {
        super(name, type, level, health, attack, defence);
    }
}