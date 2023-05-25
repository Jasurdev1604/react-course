import React, { useRef } from "react"

const Uncontrolled = () => {

    console.log('render');

    const nameRef = useRef()

    console.log(nameRef);
    
    return(<>
    <h1>Ucontrolled Component</h1>
    <input ref={nameRef} type="text" placeholder="name"/>
    <button onClick={() => alert(nameRef.current.value)}>add</button>
    </>)
}

export default Uncontrolled