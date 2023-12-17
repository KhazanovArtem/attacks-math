import Character from "./Character";

export default class AttackDebuf extends Character {
    constructor(name, type, level = 1, health = 100, distance) {
        super(name, type, level, health);
        this.attack = 10;
        this.defence = 40;
        this.distance = distance;
        this.stoned = 0;
        if(new.target == AttackDebuf) {
            throw new Error('Объект класса AttackDebuf не может создаваться конструкцией new');
        }
    }

    get attack() {
        return Math.ceil(this._attack*(1-(this.distance*0.1)+0.1)) - this.stoned;
    }

    set attack(attack) {
            this._attack = attack;
        // this._attack = Math.ceil(this.attack*(1-(distance*0.1)+0.1));
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(val) {
        if (val) {
            this._stoned = Math.log(2)/Math.log(this.distance)*5;
        } else {
            this._stoned = 0;
        }
    }
}