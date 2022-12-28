import Team from '../Team';

test('функция add', () => {
  const daemon = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };
  const magician = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
  };
  const team = new Team();
  team.add(daemon);
  team.add(magician);

  const result = new Set();
  result.add(daemon);
  result.add(magician);

  expect(team.members).toEqual(result);
});

test('функция add - ошибка', () => {
  expect(() => {
    const daemon = {
      attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
    };

    const team = new Team();
    team.add(daemon);
    team.add(daemon);
  }).toThrow(new Error('Такой персонаж уже есть в команде'));
});

test('функция addAll', () => {
  const daemon = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };
  const magician = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
  };

  const team = new Team();
  team.addAll(daemon, magician);

  const result = new Set();
  result.add(daemon);
  result.add(magician);

  expect(team.members).toEqual(result);
});

test('функция toArray', () => {
  const daemon = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };
  const magician = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
  };

  const team = new Team();
  team.addAll(daemon, magician);

  const result = [
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
    },
  ];

  expect(team.toArray()).toEqual(result);
});
