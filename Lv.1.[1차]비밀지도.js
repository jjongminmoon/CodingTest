function solution(n, arr1, arr2) {
  var answer = [];
  let binArr = [];

  for (let i = 0; i < arr1.length; i++) {
    binArr.push(String(Number(arr1[i].toString(2)) + Number(arr2[i].toString(2))).split(""));
  }

  for (let i = 0; i < binArr.length; i++) {
    for (let j = 0; j < binArr[i].length; j++) {
      binArr[i][j] = Number(binArr[i][j]) > 0 ? "#" : " ";
    }
  }

  answer = binArr.map((el) => el.join(""));

  return answer;
}
