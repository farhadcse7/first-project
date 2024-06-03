import Box from './components/Box';
import SecondBox from './components/SecondBox';

function App() {
  let name = "One year academy";
  return (
    <>
    <p className='text-5xl font-bold'>this is paragraph</p>
      <h2><i><u>Functional Component</u></i></h2>
      <Box name={name} courseName="Javascript for everyone" />
      <hr />
      <h2><i><u>Class Component</u></i></h2>
      <SecondBox name={name} courseName="React for everyone" />
    </>
  )
}

export default App;
