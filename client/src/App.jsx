import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import AppRoutes from './Components/AppRoutes'
import CarouselHeader from "./Components/CarouselHeader/index.jsx";
function App() {
  return (
    <Router>
        <Navbar />
        <AppRoutes />
        <h1>Rails React App</h1>
        <p>This is the app</p>
    </Router>
  )
}

export default App
