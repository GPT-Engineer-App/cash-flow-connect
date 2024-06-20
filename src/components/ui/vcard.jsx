import React from "react";

export const VCard = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {children}
    </div>
  );
};

export const VCardHeader = ({ children }) => {
  return (
    <div className="border-b pb-2 mb-2">
      {children}
    </div>
  );
};

export const VCardTitle = ({ children }) => {
  return (
    <h2 className="text-lg font-bold">
      {children}
    </h2>
  );
};

export const VCardContent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};