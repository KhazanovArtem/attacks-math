import Character from "./Character";

export default class AttackDebuf extends Character {
    constructor(name, type, level = 1, health = 100) {
        super(name, type, level, health);
        this.attack = 10;
        this.defence = 40;
        if (new.target == AttackDebuf) {
            throw new Error('Объект класса AttackDebuf не может создаваться конструкцией new');
          }
    }

    get spellAttack() {
        return this._attack;
    }

    set spellAttack(distance) {
        this._attack = Math.ceil(this.attack*(1-(distance*0.1)+0.1));
    }

    get stonedAttack() {
        return this._attack;
    }

    set stonedAttack(distance) {
        this._attack = this.spellAttack - (Math.log(2)/Math.log(distance))*5;
    }
}