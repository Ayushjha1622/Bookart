import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-500">BookCart</h3>
            <p className="text-gray-600 dark:text-gray-300">Your one-stop destination for all your reading needs.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="/course" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">Books</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-800 dark:text-white" />
                <button className="px-4 py-2 bg-pink-500 text-white rounded-r-lg hover:bg-pink-600 transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-300">© 2024 BookCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
