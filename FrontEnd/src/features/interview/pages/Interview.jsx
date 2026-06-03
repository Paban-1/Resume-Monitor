import React, { useState } from 'react';
import '../style/interview.scss'; // Make sure to import your compiled or configured SCSS file

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const skillGaps = ['redis', 'Message queue', 'Event loop'];

  return (
    <div className="dashboard-container">
      
      {/* 1. Left Sidebar Column */}
      <aside className="sidebar-left">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className={`nav-button ${activeTab === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveTab('technical')}
              >
                Technical questions
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-button ${activeTab === 'behavioral' ? 'active' : ''}`}
                onClick={() => setActiveTab('behavioral')}
              >
                Behavioral questions
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-button ${activeTab === 'roadmap' ? 'active' : ''}`}
                onClick={() => setActiveTab('roadmap')}
              >
                Road Map
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 2. Middle Content Column */}
      <main className="content-middle">
        {activeTab === 'technical' && (
          <div>
            <h2>Technical Questions</h2>
            {/* Content goes here */}
          </div>
        )}
        
        {activeTab === 'behavioral' && (
          <div>
            <h2>Behavioral Questions</h2>
            {/* Content goes here */}
          </div>
        )}
        
        {activeTab === 'roadmap' && (
          <div>
            <h2>Road Map</h2>
            {/* Content goes here */}
          </div>
        )}
      </main>

      {/* 3. Right Sidebar Column */}
      <aside className="sidebar-right">
        <h3 className="section-title">Skill Gaps</h3>
        <div className="skills-container">
          {skillGaps.map((skill, index) => (
            <button key={index} className="skill-badge">
              {skill}
            </button>
          ))}
        </div>
      </aside>

    </div>
  );
};

export default DashboardLayout;