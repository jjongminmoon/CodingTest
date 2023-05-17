// 풀이
function solution(numlist, n) {
  var answer = [];

  answer = numlist.sort((a, b) => {
    const aGap = Math.abs(a - n);
    const bGap = Math.abs(b - n);

    if (aGap === bGap) return b - a;
    return aGap - bGap;
  });

  return answer;
}
