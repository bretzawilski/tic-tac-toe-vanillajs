// Functions controlling the state of the gameBoard
const gameBoard = (() => {
  
  const board = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
    
  const resetGame = (() => {
    
    for (i = 0; i < play.board.length ; i++) {
      play.board[i] = '';
    }
    start.turn[0] = true;
    start.render();

  });

  return { 
    board,
    resetGame,
  };
});

// Functions concerning the operation of the game itself (the engine?)
const game = (() => {

  const turn = [true];

  const render = (() => {
    for (i = 0; i < play.board.length; i++) {
      let square = document.getElementById('b-' + i);
      let marker = play.board[i];
      square.innerText = marker;
    }
  });

  const placeMarker = ((event) => {
    const pos = event.target.id.split('-')[1];
        
    play.board[pos] = turn[0] ? 'X' : 'O';
    turn[0] = !turn[0];
    
    render();
    checkWin();
  })

  const xWins = (() => {
    const winMessage = document.createElement('h2');
    winMessage.innerText = 'X wins the game!';
    const winDiv = document.getElementById('center');
    winDiv.appendChild(winMessage);
  })

  const checkWin = () => {
    if (play.board[0] === 'X' && play.board[1] === 'X' && play.board[2] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[0] === 'X' && play.board[3] === 'X' && play.board[6] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[1] === 'X' && play.board[4] === 'X' && play.board[7] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[2] === 'X' && play.board[5] === 'X' && play.board[8] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[3] === 'X' && play.board[4] === 'X' && play.board[5] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[6] === 'X' && play.board[7] === 'X' && play.board[8] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[0] === 'X' && play.board[4] === 'X' && play.board[8] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    else if (play.board[2] === 'X' && play.board[4] === 'X' && play.board[6] === 'X') {
      console.log('X wins!');
      alert('X wins the game!');
    }
    
    else if (play.board[0] === 'O' && play.board[3] === 'O' && play.board[6] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[1] === 'O' && play.board[4] === 'O' && play.board[7] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[2] === 'O' && play.board[5] === 'O' && play.board[8] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[3] === 'O' && play.board[4] === 'O' && play.board[5] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[6] === 'O' && play.board[7] === 'O' && play.board[8] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[0] === 'O' && play.board[4] === 'O' && play.board[8] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[2] === 'O' && play.board[4] === 'O' && play.board[6] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
    else if (play.board[2] === 'O' && play.board[4] === 'O' && play.board[6] === 'O') {
      console.log('O wins!');
      alert('O wins the game!');
    }
  }

  return {
    turn, 
    render,
    placeMarker,
    checkWin,
    xWins,
  };
});

// Functions relating to individual Players
const Player = (() => {

});


// Global constants and event listeners. How do I move these out of global?
const start = game();
const play = gameBoard();

const boardSquare = document.getElementById('game');
boardSquare.addEventListener('click', start.placeMarker);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', play.resetGame);