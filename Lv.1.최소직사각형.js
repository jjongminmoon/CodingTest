function solution(sizes) {
  let [minLens, maxLens] = sizes.reduce(
    (prev, cur) => {
      prev[0].push(Math.min(cur[0], cur[1]));
      prev[1].push(Math.max(cur[0], cur[1]));
      return prev;
    },
    [[], []]
  );

  return Math.max(...minLens) * Math.max(...maxLens);
}
