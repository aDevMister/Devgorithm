// components/FeaturesSection.js
import React from 'react'
const FeaturesSection = () => {
    return (
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Feature 1</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FeaturesSection;
  