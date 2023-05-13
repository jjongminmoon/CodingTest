// 다른 사람의 풀이
function solution(babbling) {
  var answer = 0;
  const available = ["aya", "ye", "woo", "ma"];

  answer = babbling.filter((el) => {
    available.forEach((a) => {
      if (el.indexOf(a) > -1) {
        el = el.replace(a, " ");
      }
    });
    return el.trim() == "";
  }).length;

  return answer;
}
