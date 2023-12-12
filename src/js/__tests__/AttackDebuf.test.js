import Daemon from '../Daemon';
import AttackDebuf from '../AttackDebuf';

test('chek error new AttackDebuf', () => {
    expect(() => {
        const err = new AttackDebuf('Lucifer', 'Daemon');
        console.log(err);
    }).toThrow("Объект класса AttackDebuf не может создаваться конструкцией new");
})

test('chek get/set attack', () => {
    const player2 = new Daemon('Lucifer', 'Daemon');
    player2.distance = 2;
    player2.attack = 100;
    player2.distance = 2;
    player2.stoned = false;
    expect(player2.attack).toBe(90);
});

test('check get/set stoned', () => {
    const player2 = new Daemon('Lucifer', 'Daemon');
    player2.distance = 2;
    player2.attack = 100;
    player2.distance = 2;
    player2.stoned = true;
    expect(player2.attack).toBe(85);
})