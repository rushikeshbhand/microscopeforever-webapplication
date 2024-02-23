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
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Blogs from './components/pages/Blogs'
import Notes from './components/pages/Notes'
import Jobs from './components/pages/Jobs'
import Courses from './components/pages/Courses'
import NotFound from './components/common/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header  */}
      <Header title="Microscopeforever" home="Home" about="About" notes="Notes" blogs="Blogs" courses="Courses" jobs="Jobs" />

      {/* react routing  */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />

        {/* Wildcard route for handling unmatched URLs */}
        <Route element={<NotFound/>} />
      </Routes>  

      {/* footer  */}
      <Footer></Footer>

      
    </>
  )
}

export default App
