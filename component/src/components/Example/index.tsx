import React, { FC, useState } from 'react';

// export interface ExampleProps {

// }

const Example: FC = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const message = `Hello component, You clicked ${count} times`;

  return (
    <div>
      <p>{message}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
