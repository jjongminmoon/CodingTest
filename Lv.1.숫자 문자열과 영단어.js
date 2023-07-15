// 나의 풀이
function solution(s) {
  var answer = s;
  const numObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  const alphabet = Object.keys(numObj);
  const number = Object.values(numObj);

  alphabet.forEach((alp, idx) => {
    const regex = new RegExp(alp, "gi");
    answer = answer.replace(regex, number[idx]);
  });

  return Number(answer);
}
