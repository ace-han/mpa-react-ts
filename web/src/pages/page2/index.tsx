import React, { FC } from 'react';
import { render } from 'react-dom';
import Example from '../../components/Example';

const App: FC = () => {
  return (
    <>
      <Example />
      <p />
    </>
  )
}

render(<App />, document.getElementById('root'));
