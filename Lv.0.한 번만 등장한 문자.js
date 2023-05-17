// 나의 풀이
function solution(s) {
  var answer = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]) ? answer.push(arr[i]) : null;
  }

  return answer.sort().join("");
}
