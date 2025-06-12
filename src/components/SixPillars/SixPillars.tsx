import React, { useState } from 'react';
import './SixPillars.scss';

interface Pillar {
  id: string;
  title: string;
  image: string;
  metric: string;
  heading: string;
  description: string;
}

const SixPillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null); // Start with null to show all

  const pillars: Pillar[] = [
    {
      id: 'nutrition',
      title: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: '121/80 mmHg',
      heading: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness. Our nutrition specialists work with you to develop sustainable eating patterns that reduce inflammation, optimize metabolic health, and support long-term wellness goals.'
    },
    {
      id: 'physical-activity',
      title: 'Physical Activity',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: '32 minutes',
      heading: 'Physical Activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease. Our exercise physiologists create personalized movement programs that fit your lifestyle, from gentle yoga to strength training, ensuring sustainable fitness habits.'
    },
    {
      id: 'restorative-sleep',
      title: 'Restorative Sleep',
      image: 'https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: '8 hours',
      heading: 'Restorative Sleep',
      description: 'Consistent, quality sleep is essential for cognitive function, immune health, and physical restoration. Our sleep specialists help you develop healthy sleep hygiene practices, address sleep disorders, and create optimal sleep environments for better rest and recovery.'
    },
    {
      id: 'stress-management',
      title: 'Stress Management',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: '60 seconds',
      heading: 'Stress Management',
      description: 'Effective stress management techniques are crucial for both mental clarity and overall health. Learn evidence-based approaches including mindfulness meditation, breathing exercises, and cognitive behavioral strategies to reduce chronic stress and improve resilience.'
    },
    {
      id: 'social-connection',
      title: 'Social Connection',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: 'Feeling close',
      heading: 'Social Connection',
      description: 'Strong social connections are associated with a 50% increased likelihood of longevity and reduced risk of depression, anxiety, and cognitive decline. Our community wellness programs help you build meaningful relationships and support networks for better health outcomes.'
    },
    {
      id: 'substance-abuse',
      title: 'Substance Abuse',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: '62 years',
      heading: 'Substance Abuse Prevention',
      description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances support long-term health and longevity. Our addiction specialists provide comprehensive support for substance abuse recovery and prevention strategies for optimal wellness.'
    }
  ];

  const handleTabClick = (pillarId: string) => {
    // Toggle functionality: if clicking the same tab, show all; otherwise show selected
    setActiveTab(activeTab === pillarId ? null : pillarId);
  };

  // For mobile: show active pillar or first pillar if none selected
  const activePillar = activeTab ? pillars.find(pillar => pillar.id === activeTab) || pillars[0] : pillars[0];

  // For desktop: show filtered pillars or all pillars
  const displayPillars = activeTab ? pillars.filter(pillar => pillar.id === activeTab) : pillars;

  return (
    <section className="six-pillars">
      <div className="container">
        <div className="six-pillars__header">
          <p className="six-pillars__subtitle">HOW IT WORKS</p>
          <h2 className="six-pillars__title">
            <span className="six-pillars__title-highlight">Lifestyle as medicine:</span>{' '}
            The six pillars
          </h2>
        </div>

        <div className="six-pillars__tabs">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              className={`six-pillars__tab ${activeTab === pillar.id ? 'six-pillars__tab--active' : ''}`}
              onClick={() => handleTabClick(pillar.id)}
              aria-pressed={activeTab === pillar.id}
              aria-label={`View ${pillar.title} information`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Mobile/Tablet Tab Content - Shows only active pillar */}
        <div className="six-pillars__content">
          <div className="six-pillars__card" key={`mobile-${activePillar.id}`}>
            <div className="six-pillars__card-image">
              <img 
                src={activePillar.image} 
                alt={activePillar.heading}
                loading="lazy"
              />
              <div className="six-pillars__card-metric">
                {activePillar.metric}
              </div>
            </div>
            <div className="six-pillars__card-content">
              <h3 className="six-pillars__card-heading">{activePillar.heading}</h3>
              <p className="six-pillars__card-description">{activePillar.description}</p>
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout - Shows filtered or all pillars */}
        <div className="six-pillars__grid">
          {displayPillars.map((pillar, index) => (
            <div 
              key={`desktop-${pillar.id}`} 
              className="six-pillars__grid-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="six-pillars__grid-image">
                <img 
                  src={pillar.image} 
                  alt={pillar.heading}
                  loading="lazy"
                />
                <div className="six-pillars__grid-metric">
                  {pillar.metric}
                </div>
              </div>
              <div className="six-pillars__grid-content">
                <h3 className="six-pillars__grid-heading">{pillar.heading}</h3>
                <p className="six-pillars__grid-description">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {activeTab && (
          <div className="six-pillars__show-all">
            <button 
              className="six-pillars__show-all-btn"
              onClick={() => setActiveTab(null)}
            >
              Show All Six Pillars
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SixPillars;