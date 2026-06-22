import {
  CheckCircle2,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-orange-500 px-8 py-20 md:px-16 text-center">

          {/* Top Left Circle */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-white rounded-full opacity-70" />

          {/* Bottom Right Circle */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 border-4 border-white rounded-full opacity-70" />

          {/* Badge */}
          <div className="inline-flex bg-white text-gray-700 px-5 py-2 rounded-xl text-sm font-semibold mb-8">
            ✨ Limited Time Offer
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Career with Expert
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-white/90 text-lg md:text-xl">
            Join 1000+ students already learning and get instant
            access to our complete course library.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

            <button className="bg-white text-orange-500 font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition">
              Learn More
            </button>

            <button className="border-2 border-white text-white font-semibold px-10 py-4 rounded-2xl hover:bg-white hover:text-orange-500 transition">
              Start Learning Free
            </button>

          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} />
              <span>No credit card required</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} />
              <span>7-day free trial</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} />
              <span>Cancel anytime</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}