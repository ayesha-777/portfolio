import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import study from './assets/study.png'
import media from './assets/media.png'
import blog from './assets/blog.png'
import todo from './assets/todo.png'
import './App.css'
const App = () => {
  const myWorks = [
  {
    title: "Study Sphere",
    description: "A centralized web platform where students can attend online classes, track progress, manage goals, and connect with friends — all in one place.",
  image:study,
  },
  {
    title: "Media Search ",
    description: "A web app to search, explore, and save photos, videos, and GIFs from multiple APIs in one place.",
    image:media,
  },
  {
    title: "Blog Platform",
    description: "A platform to write, share, and explore articles with user-friendly interface..",
    image: blog,
  },
  {
    title: "To-Do Web",
    description: "A responsive web app to create, organize, and manage tasks efficiently with intuitive UI and real-time updates..",
    image: todo,

}];


  return (
   <div className="w-full min-h-screen  overflow-x-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Work works={myWorks} />
    <Contact/>
    <Footer/>
  
    </div>
  )
}

export default App
