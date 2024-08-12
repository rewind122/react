import { func, node, object } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
  style: object
};

function Square({children, onPlay, style}) {

  // [파생된 상태]
  const isDisabled = !!children;

  return (
    <button className={S.component} style={style} onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
