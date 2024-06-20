import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const isLoggedIn = false; // This should be replaced with actual authentication logic
  const username = "John Doe"; // This should be replaced with actual user data

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Budgeting App</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{username}</span>
            </div>
          ) : (
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-500">
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;