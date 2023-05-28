// 나의 풀이
function solution(age) {
  var answer = "";
  const ageStr = String(age);
  const alphabet = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97));

  for (let i = 0; i < ageStr.length; i++) {
    answer += alphabet[Number(ageStr[i])];
  }

  return answer;
}

// 알파벳을 구하는 함수 참고
