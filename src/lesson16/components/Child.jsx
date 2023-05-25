import React, { memo } from "react";

const Child = ({data1}) => {
    console.log('child render');
    console.log(data1());
    return(<>
    <h1>Child Component</h1>
    </>)
}

export default memo(Child)