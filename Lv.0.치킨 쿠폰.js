// 나의 풀이
function solution(chicken) {
  var answer = 0;
  let temp = chicken % 10;
  let result = Math.floor(chicken / 10);
  answer += result;
  result += temp;

  while (1) {
    temp = result % 10;
    result = Math.floor(result / 10);
    answer += result;
    if (result === 0) break;
    result += temp;
  }

  return answer;
}
