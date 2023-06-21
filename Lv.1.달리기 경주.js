// 나의 풀이
function solution(players, callings) {
  var answer = [...players];
  let playersMap = {};

  for (let i = 0; i < players.length; i++) {
    playersMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const callPlayer = callings[i];
    const callIdx = playersMap[callPlayer];
    const prevIdx = callIdx - 1;
    const prevPlayer = answer[prevIdx];

    [answer[callIdx], answer[prevIdx]] = [prevPlayer, callPlayer];
    [playersMap[callPlayer], playersMap[prevPlayer]] = [prevIdx, callIdx];
  }

  return answer;
}

// 다른 사람 풀이
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );
