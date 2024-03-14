import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Blogs from './components/blogs/Blogs'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'
// import Language from './components/skills/Language'


function App() {


  return (
    <>
      <div className='main'>
        <Sidebar />
        <Home />
        <About />
        {/* <Language/> */}
        <Services />
        <Resume />
        <Portfolio />
        <Blogs />
        <Contact />

      </div>
    </>
  )
}

export default App
