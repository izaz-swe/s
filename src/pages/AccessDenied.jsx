import React from 'react';
import { Link } from 'react-router-dom';

const AccessDenied = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-4">
          Access Denied
        </h1>
        <p className="text-gray-700 text-center">
          You don't have permission to access this page.
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
