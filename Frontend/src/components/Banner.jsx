import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 min-h-[90vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Discover Your Next Great Read at{" "}
              <span className="text-pink-500">BookCart</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your one-stop destination for all your reading needs. Browse through thousands 
              of books, get personalized recommendations, and join a community of book lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
              <input 
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="btn btn-secondary hover:bg-pink-600 transition-colors">
                Join Now
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1740237945~exp=1740241545~hmac=8c18af8e23269a64a83bfea5b7167509a9e7b1c41c9f5f464160d62e32d0a7de&w=1480"
              className="w-full max-w-[550px] h-auto relative mx-auto mt-10"
              alt="BookCart Banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
