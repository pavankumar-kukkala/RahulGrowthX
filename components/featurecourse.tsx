import {
  Star,
  Users,
  Clock3,
} from "lucide-react";

export default function FeaturedCourse() {
  return (
    <section className="bg-[#F5EFE9] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">

          <div className="grid lg:grid-cols-2">

            {/* Left Image */}
            <div className="relative">

              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-orange-500 text-white px-5 py-2 rounded-xl font-semibold">
                  Beginner
                </span>
              </div>

              <img
                src="/course-image.jpg"
                alt="Course"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="p-8 lg:p-10">

              <h2 className="text-4xl font-bold text-black leading-tight">
                Branding & Identity
                <br />
                Design Bootcamp
              </h2>

              <p className="mt-4 text-gray-500 leading-7">
                Master brand strategy, logo design, and visual identity
                to create impactful brands from scratch.
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-gray-500">
                <li>• Beginner Friendly</li>
                <li>• Practical Projects</li>
                <li>• Industry Techniques</li>
              </ul>

              <p className="mt-6 text-gray-400">
                By Rahul Kumar
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-6">

                <div className="flex items-center gap-2">
                  <Star
                    size={20}
                    className="fill-orange-500 text-orange-500"
                  />
                  <span className="font-semibold">4.9</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>2.5k</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={20} />
                  <span>12 hours</span>
                </div>

              </div>

              <hr className="my-8" />

              {/* Price */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div className="flex items-center gap-3">
                  <span className="text-5xl font-bold text-orange-500">
                    ₹1000
                  </span>

                  <span className="text-2xl text-gray-400 line-through">
                    ₹15000
                  </span>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold">
                  Start Learning
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}