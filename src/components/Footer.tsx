
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="font-bold text-lg mb-4">TripGuide</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Discover the best places to visit, eat, and stay from millions of traveler reviews.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tripadvisor-dark hover:text-tripadvisor-primary">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-tripadvisor-dark hover:text-tripadvisor-primary">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-tripadvisor-dark hover:text-tripadvisor-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Write a Review</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Add a Place</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Join</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Traveler's Choice</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Insurance</Link></li>
            </ul>
          </div>

          {/* Do Business With Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Do Business With Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Owners & DMO/CVB</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Business Advantage</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Sponsored Placements</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Advertise with Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-tripadvisor-primary">Become an Affiliate</Link></li>
            </ul>
          </div>

          {/* Get the App */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get the App</h3>
            <p className="text-gray-600 text-sm mb-4">Download the app for the full experience</p>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="bg-black text-white px-4 py-2 rounded flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" />
                  <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                App Store
              </Link>
              <Link to="/" className="bg-black text-white px-4 py-2 rounded flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3 12l-6-4v8l6-4zm0-8L7 10l6 4V6z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} TripGuide. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="hover:text-tripadvisor-primary">Terms of Use</Link>
            <Link to="/" className="hover:text-tripadvisor-primary">Privacy Policy</Link>
            <Link to="/" className="hover:text-tripadvisor-primary">Cookie Policy</Link>
            <Link to="/" className="hover:text-tripadvisor-primary">Content Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
