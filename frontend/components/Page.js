import React from 'react';

import Header from './Header';
import Meta from './Meta';

class Page extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Meta />
        <Header />
        <p>Хэдер бля</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
