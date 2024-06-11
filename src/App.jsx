import { useEffect, useRef, useState } from 'react';
import Box from './components/Box';
import SecondBox from './components/SecondBox';
import Counter from './components/counter/Counter';
import Navbar from './components/layouts/Navbar';
// import Input from './components/input';

function App() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const videoRef = useRef(null);
  // const inputRef=useRef(null);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setCount((count) => count + 1);
  }, [])

  useEffect(() => {
    console.log("this is rendering useEffect");
  }, [count])

  // useEffect(()=>{
  //   inputRef.current.focus();
  // },[]);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <Navbar />
      {/* <Counter/> */}

      <div className="container text-center py-5">

        <button className='bg-green-400 rounded p-2 text-lg' onClick={increment}>Click Me</button>
        <h2>{count}</h2>
        <br />
        {/* <input type="text" name='name' onChange={handleChange} placeholder='enter your name' />
    <h4>this is: {name}</h4> */}

        <input type="text" name='name' onChange={(event) => setName(event.target.value)} placeholder='enter your name' />
        <h4>this is: {name}</h4>
        <br />
        <input type="email" name='email' onChange={(event) => setEmail(event.target.value)} placeholder='enter your email' />
        <h4>email is: {email}</h4>
        <br />

        <button className='bg-green-400 rounded p-2 text-lg' onClick={() => setCount((count) => count + 1)}>
          Click One</button>
        <br /><br />

        <button className='bg-green-400 rounded p-2 text-lg' onClick={() => setCounts((counts) => counts + 1)}>
          Click Two</button>
        <br /><br />
        {/* video section  */}
        <button className='bg-green-400 rounded p-2 m-5' onClick={handlePlay}>Play</button>
        <button className='bg-green-400 rounded p-2' onClick={handlePause}>Pause</button>
        <video ref={videoRef} width={400} height={300} controls className='mx-auto'>
          <source src="../src/assets/tia.mp4" type="video/mp4" />
        </video>

        {/* forward ref  */}
        {/* <Input ref={inputRef} placeholder='this is input' name='farhad' /> */}
      </div>
    </>
  );
}

export default App;
