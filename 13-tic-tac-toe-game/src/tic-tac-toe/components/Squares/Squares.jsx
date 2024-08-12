import { func } from 'prop-types';
import { WINNERS_COLOR } from '@/tic-tac-toe/constants';
import {
  OneOfPlayerListType,
  WinnerInfoType,
} from '@/tic-tac-toe/types/type.d';
import Square from '../Square/Square';
import S from './Squares.module.css';

Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};

Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Squares({ squares, winnerInfo, onPlay }) {
  return (
    <div className={S.component}>
      {/* 리스트 렌더링 */}
      {squares.map((square, index) => {
        // 배경 색칠을 위한 스타일 객체 정의
        const winnerStyles = {
          backgroundColor: null,
          // transform: 'scale(1)'
        };

        // 승자가 있나요?
        if (winnerInfo) {
          // 승자의 조건을 알려주세요.
          const [x, y, z] = winnerInfo.condition;
          // 그럼 승자의 스퀘어(말판)에 색칠을 할게요.
          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
            // winnerStyles.transform = 'scale(1.2)';
          }
        }

        return (
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
