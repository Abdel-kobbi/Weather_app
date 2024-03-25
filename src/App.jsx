import { useState } from 'react';
import "./App.scss";
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button variant='abdo'>Delete</Button>
    </div>
  )
}

export default App
