import React from 'react';
import TravelPlanCard from '../Components/TravelPlanCard';

const Home = () => {
  const handleViewDetails = () => {
    window.location.href = '/travel-plan';
  };

  return (
    <div>
      <h1>Welcome to Our Travel Agency</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <TravelPlanCard 
          title="Beach Paradise" 
          description="Explore the serene beaches and vibrant nightlife." 
          onView={handleViewDetails} 
        />
        <TravelPlanCard 
          title="Mountain Adventure" 
          description="Experience the thrill of hiking and breathtaking views." 
          onView={handleViewDetails} 
        />
      </div>
    </div>
  );
};

export default Home;
