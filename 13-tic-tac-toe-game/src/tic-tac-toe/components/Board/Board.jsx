import Status from './../Status/Status';
import Squares from '../Squares/Squares';
import S from './Board.module.css';
import { useState } from 'react';
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/tic-tac-toe/constants';

function Board() {
  // [게임 상태] -----------------------------------------------------
  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // [게임 상태 업데이트 기능] ------------------------------------------
  // 게임을 진행하는 함수
  const playGame = (index) => () => {
    // ------------------------------------------------------------
    // 리액트 렌더링 프로세스 플로우(진행 흐름)
    // ------------------------------------------------------------
    // 게임 상태 변경 -> 리액트에게 렌더 트리거(요청) -> 리액트는 컴포넌트 다시 렌더링 -> 렌더 트리 -> 리액트 돔이 이전 렌더 트리와 현재 렌더 트리 비교 -> 차이 발견 -> 실제 DOM 커밋(변경된 부분만 패치)

    // 게임이 종료된 경우
    if (winnerInfo) {
      // GAME OVER 메시지를 사용자에게 출력
      alert('GAME OVER');
      // 함수 실행되지 않도록 함수 종료(return)
      return;
    }

    // 아직 게임이 진행 중인 경우?
    // 아래 코드 실행

    // 아직 진행 중이라면 게임 진행 (리액트에게 렌더 요청 -> 화면 변경)
    setSquares((prevSquares) => {
      // 다음 번 컴포넌트 렌더링 시, 전달(계산)된 현재 시점의 상태: 이전 스퀘어 집합을 순환 해서
      const nextSquares = prevSquares.map((square, squareIndex) => {
        // 개별 스퀘어의 인덱스와 사용자 행동에 따라 선택된 인덱스를 비교한다.
        // 만약 그 값이 동일하다면?
        if (squareIndex === index) {
          return nextPlayer;
        }
        // 동일하지 않은 경우 그냥 이전 값을 반환한다.
        return square;
      });

      // 반환한 값이 다음 번 렌더링에서의 (스냅샷) 상태 값
      return nextSquares;
    });
  };

  // [게임의 파생된 상태] ----------------------------------------------
  // 게임이 끝났는가? 아니면 아직 진행 중인가?
  // 게임이 끝났다면 게임이 끝났음을 사용자에게 고하게!
  const winnerInfo = checkWinner(squares); // 반환 값에 따라 게임을 진행할지, 안 할지 결정

  // 게임 순서
  const gameIndex = squares.filter(Boolean).length;

  // 현재 게임 플레이어
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  // 첫번째 플레이어의 턴이면 PLAYER.ONE 아니면 PLAYER.TWO
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  // 게임을 비겼는가?
  // 모든 게임판의 말이 채워졌고, 승자가 없네요? 그럼 게임은 비긴 거죠!
  const isDraw = !winnerInfo && squares.every(Boolean);

  return (
    <div className={S.component}>
      <Status winner={winnerInfo?.winner} isDraw={isDraw} nextPlayer={nextPlayer} />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={playGame} />
    </div>
  );
}

export default Board;
