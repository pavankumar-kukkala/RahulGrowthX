export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Badge */}
        <div className="inline-flex bg-orange-500 text-white text-sm font-semibold px-6 py-2 rounded-full mb-10">
          Learn in Your Native Language
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
          Build Skills with Expert-Led
        </h1>

        <h2 className="text-5xl md:text-7xl font-bold text-orange-500 mt-3">
          Telugu Courses
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-500 leading-relaxed">
          Whether you want to advance your career, start a new one,
          or just explore—rahulgrouwx makes learning easy and affordable
          with courses in Telugu.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <button className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-orange-600 transition">
            Start Learning for Free
          </button>

          <button className="border-2 border-orange-500 text-orange-500 font-semibold px-8 py-4 rounded-2xl hover:bg-orange-50 transition">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}