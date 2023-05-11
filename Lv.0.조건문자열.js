// 나의 풀이
function solution(ineq, eq, n, m) {
  var answer = 0;

  const item = `${ineq}${eq}`;

  if (item == ">=" && n >= m) {
    answer = 1;
  } else if (item == "<=" && n <= m) {
    answer = 1;
  } else if (item == ">!" && n > m) {
    answer = 1;
  } else if (item == "<!" && n < m) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

// 다른 사람 풀이
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
