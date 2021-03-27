import React, { FC } from 'react';
import { render } from 'react-dom';
import Example from './components/Example';
import ListBox from './components/ListBox';
import Menu from './components/Menu';

import './assets/tailwind-ui.css';

const App: FC = () => {
  return (
    <>
      <Example />
      <p />
      <ListBox />
      <p />
      <Menu />
      <p />
    </>
  )
}
render(<App />, document.getElementById('root'));
