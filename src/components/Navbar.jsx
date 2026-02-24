import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  backdrop-blur  z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center ">

        


          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
                  Ayesha
                  <BsCircleFill className="text-purple-500 text-sm" />
                </h2>
        

        {/* Menu */}
        <ul className="hidden md:flex gap-10  backdrop-blur 
               px-6 py-3 rounded-full 
               border-2  shadow-lg cursor-pointer
               text-gray-300
             hover:-translate-y-0.5
             transition-all duration-300
               ">
          <a href="#Home" className="nav-link">Home</a>
  <a href="#About" className="nav-link">About Me</a>
  <a href="#Services"className="nav-link">Services</a>
  <a href="#Work" className="nav-link" >My Work</a>
        </ul>
        <a
  href="#Contact"
  className="inline-block px-4 py-2 rounded-full
             border-2 border-white text-gray-300
             hover:bg-purple-900 hover:text-white
             transition duration-300"
>
  Contact Me
</a>


      </div>
    </nav>

    
    
  );
};

export default Navbar;
