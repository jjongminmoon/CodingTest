// 나의 풀이
function solution(s) {
  var answer = [];
  const map = new Map();

  [...s].map((el, i) => {
    if (!map.has(el)) {
      answer.push(-1);
    } else {
      answer.push(i - map.get(el));
    }

    map.set(el, i);
  });

  return answer;
}
