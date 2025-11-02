
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2>React Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: '5px',
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: '5px',
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            margin: '5px',
            padding: '10px 20px',
            backgroundColor: 'gray',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
