
const Work = ({ works }) => {
  return (
    <section id="Work" className="text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold ">
            My Work
          </h2>
          <p className="text-gray-300 text-lg">
            Here are some projects and works I’ve created with attention to detail, balance, and design.
          </p>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="overflow-hidden rounded-2xl cursor-pointer
                         hover:-translate-y-2 hover:scale-[1.02]
                         hover:shadow-lg hover:shadow-sky-500/20
                         transition-all duration-300 ease-out bg-slate-800"
            >
              {/* Work Image */}
              <img
                src={work.image}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              {/* Title + Description (always visible) */}
              <div className="p-2 text-center">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
