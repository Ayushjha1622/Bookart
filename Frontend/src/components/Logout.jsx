import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Successfully logged out from BookCart");

      setTimeout(() => {
        window.location.reload();
      }, 2000); // Reduced timeout for better UX
    } catch (error) {
      toast.error("Error logging out: " + error);
      setTimeout(() => {}, 1500);
    }
  };
  return (
    <div className="relative inline-block">
      <button
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-md flex items-center space-x-2"
        onClick={handleLogout}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
          />
        </svg>
        <span>Sign Out</span>
      </button>
    </div>
  );
}

export default Logout;
