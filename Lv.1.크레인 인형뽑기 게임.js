function solution(board, moves) {
  var answer = 0;
  var stack = [];

  while (moves.length) {
    const move = moves.shift() - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][move] != 0) {
        if (stack[stack.length - 1] == board[i][move]) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(board[i][move]);
        }
        board[i][move] = 0;
        break;
      }
    }
  }

  return answer;
}
