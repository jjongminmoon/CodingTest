// 나의 풀이
const getElCount = (arr) => {
  let result = {};
  for (const el of arr) {
    result[el] = (result[el] || 0) + 1;
  }
  return result;
};

function solution(my_string) {
  let answer = new Array(52).fill(0);
  let alphabet = [];

  const count = getElCount(my_string.split(""));

  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i), String.fromCharCode(i).toUpperCase());
  }

  alphabet.sort();

  for (let i = 0; i < alphabet.length; i++) {
    if (Object.keys(count).includes(alphabet[i])) {
      answer[i] = count[alphabet[i]];
    }
  }

  return answer;
}

// 다른 사람의 풀이 확인 필요!
