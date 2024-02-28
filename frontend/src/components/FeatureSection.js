import React from 'react';

function FeaturesSection() {
  return (
    <section className="features">
      <div className="container">
        <h3>Key Features</h3>
        {/* Add feature cards or list */}
        <div className="feature-card">
          <h4>Commit Frequency Analysis</h4>
          <p>Understand your commit patterns over time.</p>
        </div>
        <div className="feature-card">
          <h4>Repository Insights</h4>
          <p>Discover your most active repositories.</p>
        </div>
        {/* Add more features as needed */}
      </div>
    </section>
  );
}

export default FeaturesSection;
