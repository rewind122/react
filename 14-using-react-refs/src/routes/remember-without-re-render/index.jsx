// --------------------------------------------------------------------------
// ✅ 리액트 탈출구(Escape Hatches) - useRef 훅
// --------------------------------------------------------------------------
// - [ ] 함수 지역 변수 또는 함수 vs. 클래스 인스턴스 멤버(변수, 함수)
// - [ ] 리-렌더 없이 컴포넌트 내부의 데이터를 기억하는 방법
// - [ ] useState() 훅으로 리-렌더 없이 기억하기
// --------------------------------------------------------------------------

import { useId, useState } from 'react';
import S from './style.module.css';

function RememberWithoutReRender() {
  const id = useId();
  // 메뉴얼 방식의 리-렌더 함수
  // 실제 선언된 상태가 아닙니다.
  // 사용자가 직접 리-렌더 요청 목적
  const reRender = useState(0)[1];
  // const [_, reRender] = useState(0);

  // 함수 내 지역 변수 (함수 실행 이후에 기억되지 않는다.)
  let message = '';
  // 함수 내 데이터 기억하는 방법
  // 1. useState() 훅 함수 사용 (메모이제이션, 외부에 데이터 기억 저장/읽기)
  //    필연적으로 리액트로 하여금 다시 컴포넌트를 리-렌더하도록 요청
  // 2. useRef() 훅 함수 사용 (메모이제이션, 외부에 데이터 기억 저장/읽기)
  //    현재(current) 기억된 값이 변경되더라도 기억은 하지만, 리-렌더하도록 요청하지 않음

  // 이벤트 핸들러 (사용자 입력에 의해 실행되는 함수)
  const handleChange = ({ target: { value } }) => {
    message = value;
  };

  const handleClick = () => {
    console.log({ message });
  };

  const handleReRender = () => {
    document.getElementById(id).value = '';
    reRender((r) => --r);
  };

  // 컴포넌트(함수)가 실행될 때마다
  // 초기 렌더, 리-렌더 될 때마다 이 값 출력
  console.log({ message });

  return (
    <main className={S.component}>
      <h1 className={S.headline}>다시 렌더링 하지 않고 기억</h1>

      <div className={S.description}>
        <p>다시 렌더링 되더라도 사용자 메시지를 기억해야 합니다.</p>
        <p>하지만 사용자가 입력할 때마다 다시 렌더링되지 않아야 합니다.</p>
        <p>어떻게 해야 리-렌더 요청 없이 메시지를 기억할 수 있을까요?</p>
      </div>

      <div className={S.control}>
        <label htmlFor={id} className="sr-only">
          메시지
        </label>
        <input id={id} type="text" onChange={handleChange} />
      </div>

      <div className={S.group}>
        <button type="button" onClick={handleClick}>
          메시지 확인
        </button>
        <button type="button" onClick={handleReRender}>
          다시 렌더링
        </button>
      </div>
    </main>
  );
}

export default RememberWithoutReRender;
