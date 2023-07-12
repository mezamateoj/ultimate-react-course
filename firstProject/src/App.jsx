import { useEffect, useState } from 'react';
import './App.css'
import Message from './components/Message';



function App() {
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount(count + 1)
    console.log(data.slip.advice);

  }

  useEffect(() => {
    getAdvice();
  }, []);
  

  return (
      <div>
        <h1>Good Advices!</h1>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <Message count={count} />
      </div>

  )
}

export default App
