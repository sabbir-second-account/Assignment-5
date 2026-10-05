const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-600 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4 pr-0 md:pr-12">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* <img src="/public/logo-text.png"  /> */}
              <img src="/logo-text.png" alt="DevStack Logo" />
              {/* <div className="bg-pink-600 text-white font-bold text-xs rounded px-2 py-1 flex items-center justify-center">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-pink-600">Stack</span>
              </span> */}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 text-xs font-semibold text-slate-700">
              <a
                href="#github"
                className="hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#twitter"
                className="hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-6 grid grid-cols-3 gap-6">
            {/* Product Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-xs text-slate-500 font-medium">
                <li>
                  <a
                    href="#home"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-xs text-slate-500 font-medium">
                <li>
                  <a
                    href="#about"
                    className="hover:text-slate-800 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Legal
              </h3>
              <ul className="space-y-3 text-xs text-slate-500 font-medium">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Separator & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';

// const Footer = () => {
//     return (
//         <div>
//             hello
//         </div>
//     );
// };

// export default Footer;
