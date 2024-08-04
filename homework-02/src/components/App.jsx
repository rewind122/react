import { string } from 'prop-types';

function App({name}) {

  return (
    <button>
      {name}
      <img className="down-default" src="../../public/down-default.svg" aria-hidden />
      <img className="down-focused" src="../../public/down-focused.svg" aria-hidden />
    </button>
  );
}

App.propTypes = {
  name: string,
}

export default App;
