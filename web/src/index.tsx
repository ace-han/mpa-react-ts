import React, { FC } from 'react';
import { render } from 'react-dom';

const App: FC = () => {
  return (
    <>
      <div>
        <a href="./page1.html">page1</a>
      </div>
      <br />
      <br />
      <div>
        <a href="./page2.html">page2</a>
      </div>

    </>
  )
}

render(<App />, document.getElementById('root'));
