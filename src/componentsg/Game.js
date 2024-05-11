import '../stylesg/App.css';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function Game() {
  const [game, setGame] = useState(new Chess());
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Безопасное изменение состояния игры
  const safeGameMutate = (modify) => {
    setGame((prevGame) => {
      const updatedGame = { ...prevGame };
      modify(updatedGame);
      return updatedGame;
    });
  };

  // Ход компьютера
  const makeRandomMove = () => {
    const possibleMoves = game.moves();

    // выход, если игра окончена
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
      setGameOver(true);
      const winner = game.turn() === 'w' ? 'Black' : 'White';
      setWinner(winner);
      return;
    }

    // выбрать случайный ход
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    // сделать случайный ход
    safeGameMutate((updatedGame) => {
      updatedGame.move(possibleMoves[randomIndex]);
    });
  };

  // Действие при перемещении фигуры пользователем
  const onDrop = (source, target) => {
    if (gameOver) return false;

    let move = null;
    safeGameMutate((updatedGame) => {
      move = updatedGame.move({
        from: source,
        to: target,
        promotion: 'q',
      });
    });

    // недопустимый ход
    if (move === null) return false;

    // допустимый ход
    setTimeout(makeRandomMove, 200);
    return true;
  };

  // Перезапуск игры
  const restartGame = () => {
    setGame(new Chess());
    setGameOver(false);
    setWinner(null);
  };

  // Прослушивание нажатия клавиши Enter для перезапуска игры
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        restartGame();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="app">
      <div className="header"></div>
      <div className="content">
        <div className="chessboard-container">
          <Chessboard position={game.fen()} onPieceDrop={onDrop} />
          {gameOver && (
            <div className="game-over">
              <p>Game Over</p>
              <p>Winner: {winner}</p>
              <p>Press Enter to restart</p>
            </div>
          )}
        </div>
        <div className="text-block">
          <h2>Текст</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibus.
          </p>
          {/* Дополнительный текст */}
        </div>
      </div>
    </div>
  );
}

export default Game;