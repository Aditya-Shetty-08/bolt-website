
import Home from './pages/Home'
import './App.css'
import NavigationMenu from './components/navbar/navigation-menu'
import About from './pages/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <NavigationMenu />
      <Home />
      <About />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
