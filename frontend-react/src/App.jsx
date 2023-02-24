import { useEffect,useState} from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import ComponentOne from './ComponentOne'

function App() {

  // let number = 0;

  const [number,setNumber] = useState(0);

  const increaseCount = () => {
    // number+=1;
    setNumber(number+1);
  }

  // useEffect(()=>{
  //   console.log("This component has mounted")
  // },[])

  return (
    <div>
      <h1>hello! </h1>
      <button onClick={increaseCount}>click to increase count ({number}) </button>
      <ComponentOne/>
    </div>
  )
}

export default App
