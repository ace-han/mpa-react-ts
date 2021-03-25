import React, { FC } from 'react';
import Example from '../Example';
import ListBox from '../ListBox';
import Menu from '../Menu';
import './tailwind-ui.css';

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

export default App;