// TODO: write your code here
import Daemon from './Daemon';
import Magician from './Magician';


console.log('worked');

const player2 = new Daemon('Lucifer', 'Daemon');
const player3 = new Magician('Merlin', 'Magician');

const distance = 4;
const distance2 = 4;

player2.spellAttack = distance;
console.log(player2.spellAttack);
player2.stonedAttack = distance;
console.log(player2.stonedAttack);
player3.spellAttack = distance2;
console.log(player3.spellAttack);
player3.stonedAttack = distance2;
console.log(player3.stonedAttack);




