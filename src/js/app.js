import Team from './Team';

const daemon = {
  attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
};
const magician = {
  attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
};
const swordsman = {
  attack: 40, defence: 10, health: 100, level: 1, name: 'Swordsman', type: 'Swordsman',
};

const team = new Team();
// team.addAll(daemon, magician, swordsman, daemon);
team.add(daemon);
team.add(magician);

console.log(team.members);
console.log(team.toArray());
