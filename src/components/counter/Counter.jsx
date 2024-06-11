import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    let [show, setShow] = useState(false);

    // const handlePassword = () => {
    //     if (show) {
    //         setShow(false)
    //     } else {
    //         setShow(true)
    //     }
    // }

    const handleIncrement = () => {
        count++;
        setCount(count);
    }

    const handleDecrement = () => {
        count--;
        setCount(count);
    }

    return (
        <>
            <div className="text-center py-5">
                <button className='bg-green-400 px-2 py-2 text-lg font-500 text-white rounded' onClick={handleIncrement}>Increment</button>
                <h1 className='text-5xl'>{count}</h1>
                <button className='bg-green-400 px-2 py-2 text-lg font-500 text-white rounded' onClick={handleDecrement}>Decrement</button>
                <div className='py-5'>
                    <input className='border border-black p-4' placeholder='password' type={show ? "text" : "password"} />
                    {/* <button onClick={handlePassword}>Show</button> */}
                    <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
                </div>
            </div>
        </>
    )
}
export default Counter