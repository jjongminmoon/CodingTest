// 나의 풀이
function solution(numbers, k) {
  var answer = 1;

  for (let i = 0; i < k - 1; i++) {
    answer += 2;

    if (answer > numbers.length) {
      answer -= numbers.length;
    }
  }

  return answer;
}

// 다른 사람의 풀이
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
