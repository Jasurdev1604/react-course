import WithUpdate from "./withCounter"

export const Counter = ({count , setCount}) => {
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={setCount}>set count</button>
    </>
  )
}

export default WithUpdate(Counter)