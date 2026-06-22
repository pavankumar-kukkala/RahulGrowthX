import {
  Star,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const levels = [
  {
    title: "Beginner",
    description:
      "Perfect for those just starting their learning journey",
    icon: Star,
  },
  {
    title: "Intermediate",
    description:
      "Build on your foundation and expand your expertise",
    icon: TrendingUp,
  },
  {
    title: "Advanced",
    description:
      "Master complex topics and become an expert",
    icon: BadgeCheck,
  },
];

export default function LearningLevels() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Learn at Your{" "}
            <span className="text-orange-500">
              Own Level
            </span>
          </h2>

          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            Whether you're just starting or looking to master
            advanced skills, we have courses for every level.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {levels.map((level, index) => {
            const Icon = level.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-8">
                  <Icon
                    size={28}
                    className="text-orange-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-black">
                  {level.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mt-4 leading-8">
                  {level.description}
                </p>

                {/* Bottom */}
                <div className="border-t border-gray-100 mt-8 pt-5 flex items-center justify-between">

                  <span className="text-orange-500 font-semibold">
                    Coming Soon
                  </span>

                  <ArrowRight
                    size={22}
                    className="text-orange-500"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}