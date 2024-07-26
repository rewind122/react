// TODO:
// <ul> 리액트 엘리먼트를 생성하는 클래스 컴포넌트를 작성하세요.
// 컴포넌트 이름은 여러분이 생각하는 그것입니다. (여러분의 작명 센스를 볼게요)

import React from 'https://esm.sh/react';

class ArchitectureList extends React.Component {
  render() {
    // props 객체
    const { lang, children } = this.props;

    return React.createElement('ul', { className: 'architectures', lang }, children);
  }
}

export default ArchitectureList;
