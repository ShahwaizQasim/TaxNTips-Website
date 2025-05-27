import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
