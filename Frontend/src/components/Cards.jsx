import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="p-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="relative overflow-hidden rounded-t-2xl">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-1">
              {item.name}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {item.title}
            </p>

            <div className="flex items-center justify-between pt-2">
              <div className="text-2xl font-bold text-pink-500">
                ${item.price}
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
