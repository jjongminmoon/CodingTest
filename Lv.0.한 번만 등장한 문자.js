// 나의 풀이
function solution(s) {
  var answer = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]) ? answer.push(arr[i]) : null;
  }

  return answer.sort().join("");
}

// 다른 사람의 풀이 확인 시에도 동일한 코드
