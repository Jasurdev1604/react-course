import React, { useState } from 'react'
import { flushSync } from 'react-dom';

export const Index = () => {
  const [count , setCount] = useState(0);
  const [state , setState] = useState('toq ham emas juft hasm emas');
  const plus = () => {
    flushSync(() => {
      setCount(count + 1);
    })
    flushSync(() => {
      setState(count % 2 === 0 ? 'toq son' : 'juft son')  
    })
  }
  console.log('render');
  return (
    <>
        <h1>Counter: {count} {state}</h1>
        <button onClick={plus}>plus</button>
    </>
  )
}

export default Index