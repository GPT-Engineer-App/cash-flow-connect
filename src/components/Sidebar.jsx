import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions" className="block p-2 hover:bg-gray-700 rounded">Transactions</Link>
        </li>
        <li>
          <Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;