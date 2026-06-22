import { ArrowRightCircle } from "lucide-react";

const features = [
  {
    title: "Smart Strategy",
    description:
      "We plan every project with clear goals and direction",
  },
  {
    title: "Modern Design",
    description:
      "Clean, professional, and user-focused interfaces",
  },
  {
    title: "Quality Development",
    description:
      "Fast, secure, and scalable solutions",
  },
  {
    title: "Long-Term Support",
    description:
      "We help you grow even after launch",
  },
];

export default function TrustedBrands() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Trusted by growing brands
            </h2>

            <p className="mt-6 text-gray-500 text-lg leading-8">
              We combine creativity, strategy, and technology
              to deliver impactful digital solutions.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <ArrowRightCircle
                    className="text-orange-500 mt-1 shrink-0"
                    size={34}
                  />

                  <div>
                    <h3 className="font-bold text-xl text-black">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-2xl transition">
              Start Teaching Today
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/trusted-brand.jpg"
              alt="Business Professional"
              className="w-full rounded-3xl shadow-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}