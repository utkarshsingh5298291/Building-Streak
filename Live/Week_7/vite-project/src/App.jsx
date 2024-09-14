import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is harkirat ");
  
  function updateTitle(){
    setTitle("my name is " +Math.random());
  }

  return (
    <Fragment>
      <button onClick={updateTitle}> Update the title</button>
      <Header title={title}></Header>
      <Header title="harkirat2"></Header>
    </Fragment>
  )
}
function HeaderWithButton(){
  const [title, setTitle] = useState("my name is harkirat ");
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
