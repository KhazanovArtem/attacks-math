// TODO: write your code here
import Daemon from './Daemon';
import Magician from './Magician';


console.log('worked');

const player2 = new Daemon('Lucifer', 'Daemon');
const player3 = new Magician('Merlin', 'Magician');
player2.attack = 100;
player2.distance = 2;
player2.stoned = false;
console.log(player2.attack);
player2.stoned = true;
console.log(player2.attack);




