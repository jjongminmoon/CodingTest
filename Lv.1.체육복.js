function solution(n, lost, reserve) {
  let answer = 0;
  let realLost = lost.filter((a) => !reserve.includes(a));
  let realReserve = reserve.filter((a) => !lost.includes(a));

  answer =
    n -
    realLost.filter((a) => {
      let b = realReserve.find((r) => r - a <= 1);
      if (!b) return true;
      realReserve = realReserve.filter((r) => r !== b);
    }).length;

  return answer;
}
