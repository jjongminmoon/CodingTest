// 나의 풀이
function solution(balls, share) {
  var answer = 0;

  const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

  answer = Math.round(factorial(balls) / factorial(balls - share) / factorial(share));

  return answer;
}
