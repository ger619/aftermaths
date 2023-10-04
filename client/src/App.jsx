import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
//import PostsList from './Components/Posts/PostsList'
import Navbar from './Components/Navbar'
import AppRoutes from './Components/AppRoutes'
function App() {
  return (
    <Router>
        <Navbar />
        <h1>Rails React App</h1>
        <p>This is the app</p>
        <AppRoutes />
    </Router>
  )
}

export default App
