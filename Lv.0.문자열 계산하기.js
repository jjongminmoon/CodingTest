// 나의 풀이
function solution(my_string) {
  var answer = 0;
  let arr = my_string.split(" ");
  let operator = "+";

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      operator = arr[i];
    } else {
      operator == "+" ? (answer += parseInt(arr[i])) : (answer -= parseInt(arr[i]));
    }
  }

  return answer;
}
