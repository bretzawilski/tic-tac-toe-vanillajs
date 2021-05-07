const gameBoard = (() => {
  const board = [
    'X', 'O', 'X',
    'X', 'O', 'O',
    'O', 'X', 'O',
  ];
    return { board };
});

const game = (() => {
  const render = (() => {
    for (i = 0; i < 9; i++) {
      let square = document.getElementById('b-' + i);
      let marker = play.board[i];
      square.innerText = marker;
    }
  });
  return { render };
});


const Player = (name, piece) => {
  const getPiece = () => piece;
  const getName = () => name;
}

const start = game();
const play = gameBoard();