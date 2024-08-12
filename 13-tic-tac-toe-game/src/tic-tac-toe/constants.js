export const PLAYER = {
  ONE: '🎀',
  TWO: '💎',
};

// 게임 플레이어 집합
export const PLAYER_LIST = Object.values(PLAYER);

// 게임 플레이어의 수
export const PLAYER_COUNT = Object.keys(PLAYER).length;

// 스퀘어 집합: 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);

// 승리자의 색상
export const WINNERS_COLOR = '#f5e4ff';

// 게임의 승리 조건
const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// 게임이 끝났는지, 아직 게임 중인지 확인해 결과를 반환하는 함수
// 게임판 정보와 승리 조건을 비교해 결과 반환
export const checkWinner = (squares) => {
  // 문을 사용해 배열을 순환해보자!
  // 이터레이션 프로토콜
  // - 이터러블(반복 가능한) 프로토콜
  // - 이터레이터(반복자) 프로토콜
  // for문, for ~ in문 말고 [ for ~ of ]문을 사용해 이터러블 프로토콜을 순환할 수 있다.

  let winnerInfo = null;

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = squares[x];
    
    if (winner && winner === squares[y] && winner === squares[z]) {
      console.log('GAME OVER');
      winnerInfo = { 
        winner,
        condition: [x, y, z]
      };

      break;
    } 
  }

  return winnerInfo;
}