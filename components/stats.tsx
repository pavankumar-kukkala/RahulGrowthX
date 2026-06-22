import { Star } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "1000+",
      label: "Active Students",
    },
    {
      value: "50+",
      label: "Video Courses",
    },
    {
      value: "4.8",
      label: "Average Rating",
      icon: true,
    },
    {
      value: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (
            <div key={index}>

              <div className="flex items-center justify-center gap-1">
                <h3 className="text-5xl md:text-6xl font-bold text-black">
                  {stat.value}
                </h3>

                {stat.icon && (
                  <Star
                    size={40}
                    className="fill-black text-black"
                  />
                )}
              </div>

              <p className="mt-4 text-xl text-gray-500">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}