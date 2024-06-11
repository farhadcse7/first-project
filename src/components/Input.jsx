import React, { forwardRef } from 'react'

const Input = ({ placeholder, name }, ref) => {
    console.log(name);
    return <input ref={ref} placeholder={placeholder} />
};

const forwardInput = forwardRef(Input);

export default forwardInput;