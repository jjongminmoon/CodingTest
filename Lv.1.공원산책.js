function solution(park, routes) {
  let answer = getPosition(park, "S");

  routes.forEach((x) => {
    const wayAndFeets = x.split(" ");
    answer = goMove(answer, park, wayAndFeets[0], Number(wayAndFeets[1]));
  });
  return answer;
}

function goMove(cur, park, way, feets) {
  const toTheNorth = cur[0] - feets;
  const toTheSouth = cur[0] + feets;
  const toTheWest = cur[1] - feets;
  const toTheEast = cur[1] + feets;
  if (cannotMove(cur, park, way, feets)) return cur;
  if (way === "N") return [toTheNorth, cur[1]];
  if (way === "S") return [toTheSouth, cur[1]];
  if (way === "W") return [cur[0], toTheWest];
  if (way === "E") return [cur[0], toTheEast];
  return cur;
}

function cannotMove(cur, park, way, feets) {
  const toTheNorth = cur[0] - feets;
  const toTheSouth = cur[0] + feets;
  const toTheWest = cur[1] - feets;
  const toTheEast = cur[1] + feets;

  if (way === "N" && toTheNorth >= 0) {
    return (
      park
        .map((x) => x[cur[1]])
        .slice(toTheNorth, cur[0])
        .indexOf("X") > -1
    );
  } else if (way === "S" && toTheSouth < park.length) {
    return (
      park
        .map((x) => x[cur[1]])
        .slice(cur[0], toTheSouth + 1)
        .indexOf("X") > -1
    );
  } else if (way === "W" && toTheWest >= 0) {
    return park[cur[0]].slice(toTheWest, cur[1]).indexOf("X") > -1;
  } else if (way === "E" && toTheEast < park[0].length) {
    return park[cur[0]].slice(cur[1], toTheEast + 1).indexOf("X") > -1;
  }
  return true;
}

function getPosition(park, target) {
  for (x = 0; x < park.length; x++) {
    y = park[x].indexOf(target);
    if (y >= 0) {
      return [x, y];
    }
  }

  return [0, 0];
}
