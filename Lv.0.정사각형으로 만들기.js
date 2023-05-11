// 나의 풀이
function solution(arr) {
  let answer = arr;

  if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i++) {
      while (arr.length > arr[i].length) {
        arr[i].push(0);
      }
    }
  } else if (arr.length < arr[0].length) {
    while (arr.length < arr[0].length) {
      arr.push(new Array(arr[0].length).fill(0));
    }
  } else {
    arr;
  }

  return answer;
}

/*
크롬 에서 콘솔 로그를 찍었을 때는 정답과 같지만 프로그래머스에서 실행했을 때는
오류로 인해 코드 실행이 되지 않았다.
다른 사람들의 풀이를 참고하면서 다시 코드를 작성해 보아야 한다.
*/
