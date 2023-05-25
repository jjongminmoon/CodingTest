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

// 다른 사람 풀이 : 정규 표현식을 사용해 간단하게 풀이한 코드를 가져왔다. 역시 정규 표현식은 한번 블로그에 정리 필요
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
