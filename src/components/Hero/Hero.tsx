import React, { useState } from 'react';
import { Search, MapPin, Shield, CheckCircle, Users, Clock } from 'lucide-react';
import './Hero.scss';

interface SearchState {
  condition: string;
  location: string;
  insurance: string;
}

interface SearchResult {
  message: string;
  pillarRecommendation?: string;
  stats: {
    doctors: number;
    avgRating: number;
    avgWaitTime: string;
  };
}

const Hero: React.FC = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    condition: '',
    location: '',
    insurance: ''
  });
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const conditions = [
    { value: '', label: 'Condition, procedure, specialty...' },
    { value: 'diabetes', label: 'Diabetes Management', pillar: 'nutrition' },
    { value: 'heart-disease', label: 'Heart Disease Prevention', pillar: 'physical-activity' },
    { value: 'weight-management', label: 'Weight Management', pillar: 'nutrition' },
    { value: 'stress-management', label: 'Stress & Anxiety Management', pillar: 'stress-management' },
    { value: 'nutrition', label: 'Nutritional Counseling', pillar: 'nutrition' },
    { value: 'sleep-disorders', label: 'Sleep Disorders', pillar: 'restorative-sleep' },
    { value: 'chronic-pain', label: 'Chronic Pain Management', pillar: 'physical-activity' },
    { value: 'hypertension', label: 'High Blood Pressure', pillar: 'stress-management' },
    { value: 'depression', label: 'Depression & Mental Health', pillar: 'social-connection' },
    { value: 'addiction', label: 'Substance Abuse Recovery', pillar: 'substance-abuse' }
  ];

  const locations = [
    { value: '', label: 'City, state, or zipcode' },
    { value: 'new-york', label: 'New York, NY' },
    { value: 'los-angeles', label: 'Los Angeles, CA' },
    { value: 'chicago', label: 'Chicago, IL' },
    { value: 'houston', label: 'Houston, TX' },
    { value: 'phoenix', label: 'Phoenix, AZ' },
    { value: 'philadelphia', label: 'Philadelphia, PA' },
    { value: 'san-antonio', label: 'San Antonio, TX' },
    { value: 'san-diego', label: 'San Diego, CA' },
    { value: 'dallas', label: 'Dallas, TX' },
    { value: 'san-jose', label: 'San Jose, CA' }
  ];

  const insuranceCarriers = [
    { value: '', label: 'Insurance carrier' },
    { value: 'blue-cross', label: 'Blue Cross Blue Shield' },
    { value: 'aetna', label: 'Aetna' },
    { value: 'cigna', label: 'Cigna' },
    { value: 'unitedhealth', label: 'UnitedHealth Group' },
    { value: 'humana', label: 'Humana' },
    { value: 'kaiser', label: 'Kaiser Permanente' },
    { value: 'anthem', label: 'Anthem' },
    { value: 'medicare', label: 'Medicare' },
    { value: 'medicaid', label: 'Medicaid' }
  ];

  const handleInputChange = (field: keyof SearchState, value: string) => {
    setSearchState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateSearchResult = (condition: string, location: string, insurance: string): SearchResult => {
    const conditionData = conditions.find(c => c.value === condition);
    const locationData = locations.find(l => l.value === location);
    const insuranceData = insuranceCarriers.find(i => i.value === insurance);

    const doctorCount = Math.floor(Math.random() * 20) + 8; // 8-27 doctors
    const rating = (Math.random() * 0.8 + 4.2).toFixed(1); // 4.2-5.0 rating
    const waitTimes = ['Same day', '1-2 days', '3-5 days', 'Within a week'];
    const waitTime = waitTimes[Math.floor(Math.random() * waitTimes.length)];

    return {
      message: `Excellent! We found ${doctorCount} lifestyle medicine specialists for ${conditionData?.label} in ${locationData?.label} who accept ${insuranceData?.label}. Our doctors focus on evidence-based lifestyle interventions and personalized care plans.`,
      pillarRecommendation: conditionData?.pillar,
      stats: {
        doctors: doctorCount,
        avgRating: parseFloat(rating),
        avgWaitTime: waitTime
      }
    };
  };

  const handleSearch = () => {
    const { condition, location, insurance } = searchState;
    
    if (!condition || !location || !insurance) {
      setSearchResult({
        message: 'Please complete all search fields to find the best lifestyle medicine experts tailored to your needs.',
        stats: {
          doctors: 0,
          avgRating: 0,
          avgWaitTime: ''
        }
      });
      return;
    }

    const result = generateSearchResult(condition, location, insurance);
    setSearchResult(result);
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__images">
          <img 
            src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Healthy cooking" 
            className="hero__image hero__image--1"
          />
          <img 
            src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Yoga meditation" 
            className="hero__image hero__image--2"
          />
          <img 
            src="https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Medical consultation" 
            className="hero__image hero__image--3"
          />
          <img 
            src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Exercise outdoors" 
            className="hero__image hero__image--4"
          />
        </div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Book an appointment with{' '}
              <span className="hero__title-highlight">lifestyle medicine</span>{' '}
              experts
            </h1>
            <p className="hero__subtitle">
              Optimize your lifestyle and reverse chronic diseases through evidence-based care.
            </p>
          </div>

          <div className="hero__search">
            <div className="hero__search-field">
              <Search className="hero__search-icon" size={20} />
              <select 
                className="hero__search-select"
                value={searchState.condition}
                onChange={(e) => handleInputChange('condition', e.target.value)}
              >
                {conditions.map((condition) => (
                  <option key={condition.value} value={condition.value}>
                    {condition.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="hero__search-field">
              <MapPin className="hero__search-icon" size={20} />
              <select 
                className="hero__search-select"
                value={searchState.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="hero__search-field">
              <Shield className="hero__search-icon" size={20} />
              <select 
                className="hero__search-select"
                value={searchState.insurance}
                onChange={(e) => handleInputChange('insurance', e.target.value)}
              >
                {insuranceCarriers.map((carrier) => (
                  <option key={carrier.value} value={carrier.value}>
                    {carrier.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="hero__search-btn" onClick={handleSearch}>
              Find now
            </button>
          </div>

          {searchResult && (
            <div className="hero__results">
              <div className="hero__results-header">
                <CheckCircle className="hero__results-icon" size={24} />
                <h3 className="hero__results-title">Search Results</h3>
              </div>
              
              <p className="hero__results-text">{searchResult.message}</p>
              
              {searchResult.stats.doctors > 0 && (
                <div className="hero__results-stats">
                  <div className="hero__results-stat">
                    <Users className="hero__results-stat-icon" size={16} />
                    <span className="hero__results-stat-value">{searchResult.stats.doctors}</span>
                    <span className="hero__results-stat-label">Specialists</span>
                  </div>
                  
                  <div className="hero__results-stat">
                    <div className="hero__results-rating">
                      <span className="hero__results-stat-value">★ {searchResult.stats.avgRating}</span>
                    </div>
                    <span className="hero__results-stat-label">Avg Rating</span>
                  </div>
                  
                  <div className="hero__results-stat">
                    <Clock className="hero__results-stat-icon" size={16} />
                    <span className="hero__results-stat-value">{searchResult.stats.avgWaitTime}</span>
                    <span className="hero__results-stat-label">Availability</span>
                  </div>
                </div>
              )}

              {searchResult.pillarRecommendation && (
                <div className="hero__results-recommendation">
                  <p className="hero__results-recommendation-text">
                    💡 Based on your condition, we recommend exploring our <strong>{searchResult.pillarRecommendation.replace('-', ' ')}</strong> pillar for comprehensive lifestyle medicine insights.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;