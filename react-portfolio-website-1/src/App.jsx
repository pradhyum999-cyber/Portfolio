import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certification from './components/certification/certification'

const App = () => {
  return (
   <>
       <Header />
       <Nav />
       <About />
       <Certification/>
       <Experience />
       <Contact />
       <Footer />
   </>
  )
}

export default App