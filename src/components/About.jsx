import { FaLightbulb, FaGraduationCap, FaBriefcase ,FaCode} from "react-icons/fa";

const About = () => { 
  return (
    <section
      id="About"
      className=" px-6 py-24 flex justify-center"
    >
      <div className="max-w-5xl w-full space-y-14">

        {/* Heading + Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold ">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am a front-end developer who enjoys creating clean and meaningful digital experiences. Through my final year project and hands-on work, I’ve developed a strong sense of structure, layout, and user interaction. 
<br />
Working on real projects has helped me understand how ideas turn into functional designs, from planning layouts to refining details that improve usability. I value consistency, thoughtful design, and smooth user flow, and I continue to grow by learning from every project I build.
          </p>
        </div>

        {/* Info Cards (Eliana-style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="rounded-2xl p-6  border border-white-400
          hover:border-purple-400 
                          hover:-translate-y-2 hover:scale-[1.02]
                          hover:shadow-lg hover:shadow-purple-500/20
                          transition-all duration-300 ease-out 
                        
  
                          ">
            <h3 className="text-xl font-medium  mb-3">
              <FaCode className="text-3xl text-white-400" />

            </h3>
            <h1 className="items-start text-2xl">Languages</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              HTML,CSS,JavaSCcript
              <br />
              React JS
            </p>
          </div>
        
        
          <div className="rounded-2xl p-6  border border-white-400
                          hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-400
                          hover:shadow-lg hover:shadow-purple-500/20
                          transition-all duration-300 ease-out">
            <h3 className="text-xl font-medium  mb-3">
            <FaGraduationCap className="text-3xl text-white-400" />


            </h3>
            <h1 className="items-start text-2xl">Education</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              
              BSCS
(Bachelor in Computer Science)
            </p>
          </div>

 <div className="rounded-2xl p-6  border border-white-400
                          hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-400
                          hover:shadow-lg hover:shadow-purple-500/20
                          transition-all duration-300 ease-out">
            <h3 className="text-xl font-medium  mb-3">
          

           <FaBriefcase className="text-3xl text-white-400" />

            </h3>
            <h1 className="items-start text-2xl">Projects</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              
              Built more then 10 projects
            </p>
          </div>
          <div>
          

          
          </div>

</div>
</div>

        
      
    </section>
  );
};

export default About;
