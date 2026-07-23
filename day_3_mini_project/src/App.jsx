import Card from "./components/Card";
import User from "./components/User";

const App = () => {

  let name=[
    "Rahul",
    "sagar",
    "vikram",
    "sachin",
    "namo"
  ]
  return (
    <>
   {name.map(function(el){
    return (
      <h1>{`${el}`}</h1>
    )
   })}
    </>
  )
}

export default App