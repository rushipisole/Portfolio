import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Blogs from './components/blogs/Blogs'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'


function App() {


  return (
    <>
      <div className='main'>
        <Sidebar />
        <Home />
        <About />
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
