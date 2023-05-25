function solution(arr, delete_list) {
  var answer = [];

  answer = arr.filter((el) => {
    for (let i = 0; i < delete_list.length; i++) {
      if (el == delete_list[i]) {
        return false;
      }
    }
    return true;
  });

  return answer;
}

// 다른 사람 풀이
const solution = (arr, dels) => arr.filter((el) => !dels.includes(el));
