import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          {/* <h2 className="mb-6 text-4xl md:text-5xl">Experience the Story</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Order your copy of "No Better Address!" and discover the untold
            stories of the Hotel Cecil, Tangier.
          </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 transition-colors duration-300">
              Order Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-4 transition-colors duration-300">
              Contact Authors
            </button>
          </div> */}
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="mb-4 text-xl text-amber-400">No Better Address!</h3>
            <p className="text-gray-400 mb-4">
              A Brief Social History of the Hotel Cecil, Tangier
            </p>
            <p className="text-gray-500 text-sm">
              By Andrew Clandermond and Dr. Terence MacCarthy
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  About the Book
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  The Authors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            {/* <p className="text-gray-400 text-sm">
              For inquiries, interviews, or speaking engagements, please contact
              us at:
            </p>
            <a
              href="mailto:contact@nobetteraddress.com"
              className="text-amber-400 hover:text-amber-300 text-sm"
            >
              contact@nobetteraddress.com
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 No Better Address! All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
