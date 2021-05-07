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

    start.render();

  });

  return { 
    board,
    resetGame,
  };
});

// Functions concerning the operation of the game itself (the engine?)
const game = (() => {

  let turn = true;

  const render = (() => {
    for (i = 0; i < play.board.length; i++) {
      let square = document.getElementById('b-' + i);
      let marker = play.board[i];
      square.innerText = marker;
    }
  });

  const placeMarker = ((event) => {
    const pos = event.target.id.split('-')[1];
        
    play.board[pos] = turn ? 'X' : 'O';
    turn = !turn;
    
    render();
  })

  return { 
    render,
    placeMarker,
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