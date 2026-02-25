import { MdEmail } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin ,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="text-gray-400 px-6 py-10">

      {/* Name + Email Centered */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
          Ayesha
          <BsCircleFill className="text-purple-500 text-sm" />
        </h2>

        <div className="flex items-center justify-center gap-2 mt-3 text-sm hover:text-purple-400 transition">
          <MdEmail className="text-lg" />
          <span>meharayesha777@gmail.com</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row
                      items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ayesha Rafiq. All rights reserved.
        </p>

       
      

  <div className="flex justify-center gap-6 py-6 text-gray-400">
  <a
    href="https://github.com/ayesha-777"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <FaGithub size={28} />
  </a>

  <a
    href="https://www.linkedin.com/in/ayesha-rafiq-686822280"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition-colors"
  >
    <FaLinkedin size={28} />
  </a>
   <a
    href="https://www.instagram.com/in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-700 transition-colors"
  >
    <FaInstagram size={28} />
  </a>
</div>
</div>
  

      
    </footer>
  );
};

export default Footer;