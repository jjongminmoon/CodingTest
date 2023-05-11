// 나의 풀이
function solution(str_list) {
  var answer = [];

  const l_idx = str_list.indexOf("l");
  const r_idx = str_list.indexOf("r");

  for (let i = 0; i < str_list.length; i++) {
    if (str_list.includes("l") && str_list.includes("r")) {
      if (l_idx > 0) {
        l_idx > r_idx ? (answer = str_list.slice(r_idx)) : (answer = str_list.slice(0, l_idx));
      }
    } else {
      answer = [];
    }
  }

  return answer;
}

// 다른 사람 풀이
function solution(str_list) {
  var answer = [];
  let count = 0;

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i].includes("l")) {
      for (let j = 0; j < i; j++) {
        answer[count] = str_list[j];
        count++;
      }
      break;
    } else if (str_list[i].includes("r")) {
      for (let j = i + 1; j < str_list.length; j++) {
        answer[count] = str_list[j];
        count++;
      }
      break;
    }
  }

  return answer;
}
