import React, { useState , useTransition} from 'react'
import List from './List';
// import { flushSync } from 'react-dom';

export const Index = () => {
  // const [count , setCount] = useState(0);
  // const [state , setState] = useState('toq ham emas juft hasm emas');
  // const plus = () => {
  //   flushSync(() => {
  //     setCount(count + 1);
  //   })
  //   flushSync(() => {
  //     setState(count % 2 === 0 ? 'toq son' : 'juft son')  
  //   })
  // }
  // console.log('render');

  const [value , setValue] = useState('')
  // const [list , setList] = useState([]);

  // const [isPending , startTransition] = useTransition()

  const onChange = ({target:{value}}) => {
    setValue(value)
    // startTransition(() => {
    //   getData(value)
    // })
  }

  return (
    <>
        {/* <h1>Counter: {count} {state}</h1>
        <button onClick={plus}>plus</button> */}
        <input type="text" value={value} onChange={onChange} />
        {/* {
          isPending ? 'loading...' :list.map(e => <h1>{e}</h1>)
        } */}
        <List value = {value}/>
    </>
  )
}

export default Index