// 나의 풀이
function solution(a, b) {
  var answer = 0;
  let gcd = 1;

  for (let i = 2; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  let d = b / gcd;

  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;

  answer = d === 1 ? 1 : 2;

  return answer;
}
