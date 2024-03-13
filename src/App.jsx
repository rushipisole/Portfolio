import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Blogs from './components/blogs/Blogs'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'
// import Contact2 from './components/contact/Contact2'


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
        {/* <Contact2/> */}
      </div>
    </>
  )
}

export default App
