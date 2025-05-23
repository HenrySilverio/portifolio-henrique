import React from 'react';

const ResponsiveTest: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-900/80 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="block sm:hidden">XS Screen (Mobile)</div>
      <div className="hidden sm:block md:hidden">SM Screen (Tablet)</div>
      <div className="hidden md:block lg:hidden">MD Screen (Laptop)</div>
      <div className="hidden lg:block xl:hidden">LG Screen (Desktop)</div>
      <div className="hidden xl:block">XL Screen (Large Desktop)</div>
    </div>
  );
};

export default ResponsiveTest;