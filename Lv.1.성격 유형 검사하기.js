function solution(survey, choices) {
  let scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";

  choices.forEach((v, i) => {
    [x, y] = survey[i];
    let result = 4 - v;
    if (result > 0) {
      scores[x] += result;
    } else if (result < 0) {
      scores[y] += v - 4;
    }
  });

  if (scores.R >= scores.T) answer += "R";
  else answer += "T";

  if (scores.C >= scores.F) answer += "C";
  else answer += "F";

  if (scores.J >= scores.M) answer += "J";
  else answer += "M";

  if (scores.A >= scores.N) answer += "A";
  else answer += "N";

  return answer;
}
