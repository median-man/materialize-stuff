function generateRoll(seed, min, max) {
  const diff = max - min;
  return Math.floor(seed * (diff + 1)) + min;
}

function activateUnit(roll, scenario) {
  // const advance = 'advance';
  // const battle = 'battle';
  // const counterattack = 'counterattack';
  // const validScenarios = ['advance', 'battle', 'counterattack']
  const table = {
    advance: [
      { max: 5, unit: 'SPG', note: 1 },
      { max: 10, unit: 'MG' },
      { max: 15, unit: 'LW' },
      { max: 20, unit: 'TRUCK' },
      { max: 25, unit: 'AT GUN', note: 2 },
      { max: 30, unit: 'SPG', note: 2 },
      { max: 35, unit: 'MG' },
      { max: 40, unit: 'LW' },
      { max: 45, unit: 'TANK', note: 1 },
      { max: 50, unit: 'TRUCK' },
      { max: 55, unit: 'AT GUN', note: 1 },
      { max: 60, unit: 'LW' },
      { max: 65, unit: 'TANK' },
      { max: 70, unit: 'AT GUN' },
      { max: 75, unit: 'PSW/SPW' },
      { max: 80, unit: 'AT GUN' },
      { max: 85, unit: 'LW' },
      { max: 90, unit: 'TRUCK' },
      { max: 95, unit: 'PSW/SPW', note: 1 },
      { max: 100, unit: 'SPG' },
    ],
    battle: [
      { max: 5, unit: 'SPG' },
    ],
    counterattack: [],
  };
  if (!roll || roll > 100) throw new Error('Invalid roll: 1 <= roll <= 100');
  if (!scenario) throw new Error('Invalid scenario parameter');
  return table[scenario].find(({ max }) => roll <= max);
}

function TableView(selector) {
    this.$view = $(selector);
    if (!this.$view.length) throw new Error(`Invalid selector: ${selector}`);
}
