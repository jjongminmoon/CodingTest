function solution(participant, completion) {
  let answer = "";
  const map = new Map();

  participant.forEach((name) => map.set(name, (map.get(name) || 0) + 1));
  completion.forEach((name) => map.set(name, (map.get(name) || 0) - 1));

  for (const [name, value] of map) {
    if (value) answer = name;
  }

  return answer;
}

/* 
1. map 객체를 만든 후 
2. 참가자 배열을 순회하면서 이름이 나오면 value값에 +1
3. 완주자 배열을 순회하면서 이름이 나오면 value값에 -1
4. 완주자 배열에 없는 선수 이름의 value값만 1이 되고, 나머지는 모두 0
5. map을 순회하면서 value가 1인 key(선수이름)를 출력

sort()로 해결할 수 있지만 효율성 측면에서 더 좋은 해시(Map)을 활용해 풀 수 있는 문제
*/
