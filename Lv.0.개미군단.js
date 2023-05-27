// 나의 풀이
function solution(hp) {
  var answer = 0;

  while (hp > 0) {
    if (hp < 3) {
      hp--;
      answer++;
    } else if (hp < 5) {
      hp = hp - 3;
      answer++;
    } else if (hp >= 5) {
      hp = hp - 5;
      answer++;
    }
  }

  return answer;
}

// 다른 사람의 풀이 : 나머지를 활용해 한줄의 코드로 간단하게 풀이 가능
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
