// 나의 풀이
function solution(emergency) {
  var answer = [];
  const sorted = emergency.slice().sort((a, b) => b - a);

  answer = emergency.map((el) => sorted.indexOf(el) + 1);

  return answer;
}

// 1. 원본 배열의 값을 복사한 후 내림차순 정렬
// 2. 원본 배열의 값들이 복사된 sorted 배열의 어느 인덱스에 위치하는지 찾음
// 3. 해당 인덱스 + 1을 해서 순위를 매김
