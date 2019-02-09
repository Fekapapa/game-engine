'use strict'

const FindEnemy = (enemies) => {
  const sortedEnemies = [];

  for (let enemy in enemies) {
      sortedEnemies.push([enemy, enemies[enemy]]);
  }

  sortedEnemies.sort((a, b) => a[1].distance - b[1].distance);

  return sortedEnemies[0][1];
}

export { FindEnemy };
