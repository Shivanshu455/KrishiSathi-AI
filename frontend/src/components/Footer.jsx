import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">

      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600">
                <Leaf size={26} />
              </div>
              <div>
                <h2 className="text-3xl font-black">
                  Krishi<span className="text-green-500">Sathi</span>
                </h2>
                <p className="text-sm text-gray-400">
                  AI Agriculture Platform
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-8 text-gray-400">
              Empowering farmers with Artificial Intelligence,
              smart crop recommendations, weather intelligence,
              disease detection and data-driven agriculture.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition hover:bg-green-600"
                  >
                    <Icon size={20} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="mt-8 space-y-5">
              <Link
                to="/"
                className="block text-gray-400 transition hover:text-green-400"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 transition hover:text-green-400"
              >
                About
              </Link>
              <Link
                to="/login"
                className="block text-gray-400 transition hover:text-green-400"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-gray-400 transition hover:text-green-400"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold">Features</h3>
            <div className="mt-8 space-y-5">
              <p className="text-gray-400">AI Crop Advisor</p>
              <p className="text-gray-400">Disease Detection</p>
              <p className="text-gray-400">Weather Intelligence</p>
              <p className="text-gray-400">Market Insights</p>
              <p className="text-gray-400">Farmer Community</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Mail className="text-green-500" />
                <span className="text-gray-400">
                  support@krishisathi.ai
                </span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-green-500" />
                <span className="text-gray-400">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-green-500" />
                <span className="text-gray-400">
                  Dehradun, Uttarakhand
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-gray-400 lg:flex-row">
          <p>
            © 2026 KrishiSathi. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="transition hover:text-green-400"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition hover:text-green-400"
            >
              Terms & Conditions
            </Link>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              Back to Top
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;