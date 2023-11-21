const exhausionMap = {
  diamond: {
    diamond: 1,
    iron: 1,
    stone: 1
  },

  iron: {
    diamond: 5,
    iron: 1,
    stone: 1
  },

  stone: {
    diamond: 25,
    iron: 5,
    stone: 1
  }
};

function solution(picks, minerals) {
  let queue = [[picks, 0]];
  let mineralIndex = 0;

  const getAddedFatigue = (type) => {
    let addedFatigue = 0;

    for (let i = mineralIndex; i < mineralIndex + 5; i += 1) {
      const targetMineral = minerals[i];

      if (targetMineral) {
        addedFatigue += exhausionMap[type][targetMineral];
      }
    }

    return addedFatigue;
  };

  const results = [];

  while (queue.length && mineralIndex < minerals.length) {
    const newQueue = [];

    for (const oneQueue of queue) {
      const [picks, fatigue] = oneQueue;
      const [diamondCount, ironCount, stoneCount] = picks;

      if (!diamondCount && !ironCount && !stoneCount) {
        results.push(fatigue);
      } else {
        if (diamondCount) {
          const addedFatigue = getAddedFatigue("diamond");
          newQueue.push([[diamondCount - 1, ironCount, stoneCount], fatigue + addedFatigue]);
        }

        if (ironCount) {
          const addedFatigue = getAddedFatigue("iron");
          newQueue.push([[diamondCount, ironCount - 1, stoneCount], fatigue + addedFatigue]);
        }

        if (stoneCount) {
          const addedFatigue = getAddedFatigue("stone");
          newQueue.push([[diamondCount, ironCount, stoneCount - 1], fatigue + addedFatigue]);
        }
      }
    }

    queue = newQueue;
    mineralIndex += 5;
  }

  return Math.min(...queue.map((el) => el[1]), ...results);
}
