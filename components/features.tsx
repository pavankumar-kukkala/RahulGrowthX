import {
  Video,
  Clock3,
  BadgeCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Video Lessons",
    description:
      "Crystal clear video content in Telugu with English subtitles",
  },
  {
    icon: Clock3,
    title: "Learn at Your Pace",
    description:
      "Lifetime access to all course materials, learn anytime",
  },
  {
    icon: BadgeCheck,
    title: "Certificates",
    description:
      "Earn certificates upon completion of courses",
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description:
      "Get help whenever you need it from our support team",
  },
];

export default function Features() {
  return (
    <section className="bg-[#ffffff] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition duration-300"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 mx-auto rounded-full bg-orange-500 flex items-center justify-center">
                  <Icon className="text-white" size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-500 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}