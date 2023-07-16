// 나의 풀이
function solution(k, m, score) {
  var answer = 0;
  const sortArr = score.sort((a, b) => b - a);

  for (let i = m - 1; i < sortArr.length; ) {
    answer += sortArr[i] * m;
    i = i + m;
  }

  return answer;
}
