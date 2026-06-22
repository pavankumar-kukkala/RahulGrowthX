import {
  Database,
  TrendingUp,
  Camera,
  Palette,
} from "lucide-react";

const topics = [
  {
    title: "Data Science",
    courses: "32 courses",
    icon: Database,
    image: "/topic.jpg",
  },
  {
    title: "Digital Marketing",
    courses: "28 courses",
    icon: TrendingUp,
    image: "/topic.jpg",
  },
  {
    title: "Content Creation",
    courses: "32 courses",
    icon: Camera,
    image: "/topic.jpg",
  },
  {
    title: "UI/UX Design",
    courses: "22 courses",
    icon: Palette,
    image: "/topic.jpg",
  },
];

export default function PopularTopics() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Explore Popular{" "}
            <span className="text-orange-500">
              Topics
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Exciting new learning paths are on the way.
            <span className="text-orange-500 font-semibold">
              {" "}Coming soon.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[30px] p-4 hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative">

                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-44 object-cover rounded-[25px]"
                  />

                  {/* Floating Icon */}
                  <div className="absolute -bottom-5 left-4 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Icon
                      size={24}
                      className="text-orange-500"
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="pt-10 text-center">
                  <h3 className="font-bold text-xl text-gray-900">
                    {topic.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {topic.courses}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}