import { MdEmail } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-400 px-6 py-10">

      {/* Name + Email Centered */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
          Mehar Ayesha
          <BsCircleFill className="text-purple-500 text-sm" />
        </h2>

        <div className="flex items-center justify-center gap-2 mt-3 text-sm hover:text-purple-400 transition">
          <MdEmail className="text-lg" />
          <span>meharayesha@example.com</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row
                      items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Mehar Ayesha. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#work" className="hover:text-purple-400 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;