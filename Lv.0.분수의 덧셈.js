// 나의 풀이
function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let i = 2;

  const denom = denom1 * denom2;
  const numer = numer1 * (denom / denom1) + numer2 * (denom / denom2);

  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  answer = [numer / gcd(denom, numer), denom / gcd(denom, numer)];

  return answer;
}
