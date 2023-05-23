// 나의 풀이
function solution(my_string) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < my_string.length; i++) {
    Number(my_string[i]) || Number(my_string[i]) === 0
      ? arr.push(Number(my_string[i]))
      : arr.push(" ");
  }

  const numArr = arr.join("").split(" ");

  for (let j = 0; j < numArr.length; j++) {
    Number(numArr[j]) ? (answer += Number(numArr[j])) : (answer += 0);
  }

  return answer;
}

// 다른 사람 풀이
function solution(my_string) {
  var answer = 0;
  answer = my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
}
