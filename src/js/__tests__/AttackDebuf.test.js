import Daemon from '../Daemon';
import AttackDebuf from '../AttackDebuf';

test('chek error new AttackDebuf', () => {
    expect(() => {
        const err = new AttackDebuf('Lucifer', 'Daemon');
        console.log(err);
    }).toThrow("Объект класса AttackDebuf не может создаваться конструкцией new");
})

test('chek get/set spellAttack', () => {
    const player2 = new Daemon('Lucifer', 'Daemon');
    const distance = 2;
    player2.spellAttack = distance;
    expect(player2.spellAttack).toBe(9);
});

test('check get/set stonedAttack', () => {
    const player2 = new Daemon('Lucifer', 'Daemon');
    const distance = 4;
    player2.spellAttack = distance;
    player2.stonedAttack = distance;
    expect(player2.stonedAttack).toBe(4.5);
})