import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import S from './Status.module.css';
import { bool } from 'prop-types';

Status.propTypes = {
  winner: OneOfPlayerType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool,
};

function Status({ winner, nextPlayer, isDraw = false }) {
  if (winner) {
    return <h2 className={S.component}>승자! {winner}</h2>;
  }

  if (isDraw) {
    return <h2 className={S.component}>비겼습니다...😅</h2>;
  }
  return <h2 className={S.component}>현재 턴 : {nextPlayer}</h2>;
}

export default Status;
