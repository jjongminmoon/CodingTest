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

// 다른 사람의 풀이 : 나의 풀이도 맞는 정답이지만 더 간단한 코드가 있어서 참고해보면 좋을 것 같다
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
