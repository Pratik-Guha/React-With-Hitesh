import Chai from "./chai"
import Card from "./components/Card"

function App() {
  const obj={
    username:"Pratik Guha",
    age:21
  }

  return (
    <>
     {/* <h1>Chai and react</h1> */}
     <Chai/>
     <Card  username={obj.username} btnTxt="Click me" />
    </>
  )
}

export default App
