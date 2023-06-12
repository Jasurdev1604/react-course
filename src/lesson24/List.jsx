import React , {useMemo , useDeferredValue} from 'react'

export const List = ({value}) => {
    const defValue = useDeferredValue(value)

    const list = useMemo(() => {
        let l = [];
        for (let index = 1; index < 20000; index++) {
            l.push(`${index} - ${value}`)
        }
        return l
    } , [defValue])
    
    // const isPenfing = value !== defValue

    return list
}

export default List