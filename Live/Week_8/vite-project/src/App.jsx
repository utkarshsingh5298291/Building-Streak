import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
