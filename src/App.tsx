import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects3 />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
