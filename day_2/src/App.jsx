import './App.css'
import Card from './components/Card'
function App() {
  return (
  <>
  <div className="parent">
    <Card  name="Rahul Verma" age={18} img='https://unsplash.com/photos/blue-car-split-revealing-glowing-purple-x-ray-components-GeACFUua184'/>
    <Card name="Vivek Kumar" age={21} img='https://images.pexels.com/photos/25843211/pexels-photo-25843211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=750'/>
    <Card name="Ajay Kumar" age={20} img='https://images.pexels.com/photos/25843211/pexels-photo-25843211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=750'/>
  </div>
  
  </>
  )
}

export default App  