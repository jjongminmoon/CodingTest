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

// 다른 사람 풀이
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
