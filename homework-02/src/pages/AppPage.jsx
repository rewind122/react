import App from '@/components/App';

function AppPage() {
  return (
    <>
      <h1>컴포넌트 속성 검사</h1>
      <ul className="button-list">
        <li>
          <App name="카테고리" />
        </li>
        <li>
          <App name="가격" />
        </li>
        <li>
          <App name="최신순" />
        </li>
      </ul>
    </>
  )
}

export default AppPage;