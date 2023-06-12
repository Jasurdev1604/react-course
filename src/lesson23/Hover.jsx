import WithUpdate from './withCounter'

export const Hover = ({count , setCount}) => {
  return (
    <>
    <h1>Hover:{count}</h1>
    <button onMouseOver={setCount}>on hover</button>
    </>
  )
}

export default WithUpdate(Hover)