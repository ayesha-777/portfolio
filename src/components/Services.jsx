

const Services = () => {
  return (
    <section id="Services" className=" px-6 py-24">
  <div className="max-w-5xl mx-auto space-y-14">

    {/* Heading */}
    <div className="text-center space-y-4">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white-400">
        Services
      </h2>
      <p className="text-gray-400 text-lg">
        Services I offer to help brands and ideas grow through thoughtful digital work.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Web Design */}
      <div className=" rounded-2xl p-6 border border-white-400
                      hover:border-purple-400 hover:-translate-y-1
                      transition-all duration-300">
        <h3 className="text-xl font-medium text-white mb-3">
          Web Design
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Creating clean, responsive, and visually balanced websites that feel intuitive
          and reflect a strong digital presence.
        </p>
      </div>

      {/* Social Marketing */}
      <div className=" rounded-2xl p-6 border border-white-400
                      hover:border-purple-400 hover:-translate-y-1
                      transition-all duration-300">
        <h3 className="text-xl font-medium text-white mb-3">
        Social-Media
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
           Managing and growing social media presence by creating engaging content and enhancing brand visibility across platforms.
        </p>
      </div>

      {/* Content Writing */}
     <div className="rounded-2xl p-6  border border-white-400
          hover:border-purple-400 
                          hover:-translate-y-2 hover:scale-[1.02]
                          hover:shadow-lg hover:shadow-purple-500/20
                          transition-all duration-300 ease-out ">
                        
        <h3 className="text-xl font-medium text-white mb-3">
          Content Writing
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Writing clear, purposeful content that communicates ideas effectively and supports brand voice and identity.
        </p>
      </div>

      {/* Social Media */}
      <div className=" rounded-2xl p-6 border border-white-400
                      hover:border-purple-400 hover:-translate-y-1
                      transition-all duration-300">
        <h3 className="text-xl font-medium text-white mb-3">
          Data-Entry
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
           Accurately managing, organizing, and maintaining information with attention 
  to detail to ensure data reliability and efficiency.
        </p>
      </div>

    </div>
  </div>
</section>

  )
}

export default Services
