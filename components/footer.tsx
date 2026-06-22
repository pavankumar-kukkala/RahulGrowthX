import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Courses */}
          <div>
            <h3 className="font-bold uppercase text-sm tracking-wider mb-6">
              Courses
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Web Development</li>
              <li>Python Programming</li>
              <li>Digital Marketing</li>
              <li>Data Science</li>
              <li>Mobile Development</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold uppercase text-sm tracking-wider mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Blog</li>
              <li>Career Guide</li>
              <li>Success Stories</li>
              <li>Free Courses</li>
              <li>Certificates</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold uppercase text-sm tracking-wider mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Become Instructor</li>
              <li>Partners</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold uppercase text-sm tracking-wider mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold uppercase text-sm tracking-wider mb-6">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaYoutube size={20} />
              </Link>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div>
            <img
              src="/Dark_logo.png"
              alt="RahulGrowthX"
              className="h-10 w-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-500 text-sm">
            <p>© 2026 RahulGrowthX. All rights reserved.</p>
            <p className="mt-1">
              Designed & Developed by WeGoDigitally
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}