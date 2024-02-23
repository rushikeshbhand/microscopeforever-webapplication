import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Header from './components/common/Header'
import Home from './components/pages/Home'
import About from "./components/common/About";
import Founder from './components/common/Founder'
import ContactUs from './components/common/ContactUs'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header  */}
      <Header title="Microscopeforever" home="Home" about="About" notes="Notes" blogs="Blogs" courses="Courses" />

      {/* react routing  */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>  

      {/* footer  */}
      <Footer></Footer>

      
    </>
  )
}

export default App
