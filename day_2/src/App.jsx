import './App.css'
import Card from './components/Card'
function App() {
  return (
  <>
  <div className="parent">
    <Card  name="Rahul Verma" age={18}/>
    <Card name="Vivek Kumar" age={21}/>
    <Card name="Ajay Kumar" age={20}/>
  </div>
  
  </>
  )
}

export default App  
