// 나의 풀이
function solution(n, m) {
  const dcg = (a, b) => {
    const division = a % b;

    if (division === 0) return b;

    return dcg(b, division);
  };

  const min = dcg(n, m);
  const max = (n * m) / min;

  return [min, max];
}
