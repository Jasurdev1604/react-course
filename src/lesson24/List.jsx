import React , {useMemo , useDeferredValue, useEffect , useId} from 'react'

// export const List = ({value}) => {
//     const defValue = useDeferredValue(value)

//     const list = useMemo(() => {
//         let l = [];
//         for (let index = 1; index < 20000; index++) {
//             l.push(`${index} - ${value}`)
//         }
//         return l
//     } , [defValue])
    
//     // const isPenfing = value !== defValue

//     return list
// }

const List = ({value}) => {

    const id = useId();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
    } , [])
    return <>
    <h1>{id} - Data loading</h1>
    </>
}

export default List