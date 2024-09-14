import { useState } from 'react'
import './App.css'



function App() {
const [count, setCount] = useState(0)

return(
  <div>
    <CustomButton count={setCount} setCount={setCount}></CustomButton>
)

  return (
    <>
      <button onClick={onClickHandler}>counter{props.count}</button>
    </>
  )
}
function customButton(props){

  
function onClickHandler(){
  setCount(count+1)
}
  return <button>
    Counter {props.count}
  </button>
}

export default App
