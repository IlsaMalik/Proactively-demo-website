import React from 'react';
import { Users, Star, MapPin, Calendar, Filter, Search } from 'lucide-react';
import './Doctors.scss';

const Doctors: React.FC = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Lifestyle Medicine & Nutrition',
      rating: 4.9,
      reviews: 127,
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
      availability: 'Available Today',
      experience: '12 years',
      pillars: ['Nutrition', 'Physical Activity', 'Stress Management']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Preventive Medicine & Sleep Health',
      rating: 4.8,
      reviews: 89,
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300',
      availability: 'Next Available: Tomorrow',
      experience: '8 years',
      pillars: ['Restorative Sleep', 'Stress Management', 'Physical Activity']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Mental Health & Social Wellness',
      rating: 4.9,
      reviews: 156,
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      availability: 'Available Today',
      experience: '15 years',
      pillars: ['Social Connection', 'Stress Management', 'Substance Abuse']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Exercise Medicine & Rehabilitation',
      rating: 4.7,
      reviews: 94,
      location: 'Houston, TX',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
      availability: 'Next Available: 2 days',
      experience: '10 years',
      pillars: ['Physical Activity', 'Nutrition', 'Restorative Sleep']
    }
  ];

  return (
    <div className="doctors-page">
      <div className="container">
        <div className="doctors-page__header">
          <h1 className="doctors-page__title">Find Lifestyle Medicine Experts</h1>
          <p className="doctors-page__subtitle">
            Connect with board-certified physicians specializing in evidence-based lifestyle interventions
          </p>
        </div>

        <div className="doctors-page__filters">
          <div className="doctors-page__search">
            <Search className="doctors-page__search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, specialty, or condition..."
              className="doctors-page__search-input"
            />
          </div>
          <button className="doctors-page__filter-btn">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div className="doctors-page__results">
          <div className="doctors-page__results-header">
            <h2 className="doctors-page__results-title">
              {doctors.length} Doctors Available
            </h2>
            <select className="doctors-page__sort">
              <option value="rating">Sort by Rating</option>
              <option value="availability">Sort by Availability</option>
              <option value="experience">Sort by Experience</option>
            </select>
          </div>

          <div className="doctors-page__grid">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card">
                <div className="doctor-card__image">
                  <img src={doctor.image} alt={doctor.name} />
                  <div className="doctor-card__availability">
                    {doctor.availability}
                  </div>
                </div>
                
                <div className="doctor-card__content">
                  <h3 className="doctor-card__name">{doctor.name}</h3>
                  <p className="doctor-card__specialty">{doctor.specialty}</p>
                  
                  <div className="doctor-card__rating">
                    <Star className="doctor-card__star" size={16} />
                    <span className="doctor-card__rating-value">{doctor.rating}</span>
                    <span className="doctor-card__reviews">({doctor.reviews} reviews)</span>
                  </div>
                  
                  <div className="doctor-card__location">
                    <MapPin size={14} />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <div className="doctor-card__experience">
                    <Users size={14} />
                    <span>{doctor.experience} experience</span>
                  </div>
                  
                  <div className="doctor-card__pillars">
                    {doctor.pillars.map((pillar, index) => (
                      <span key={index} className="doctor-card__pillar">
                        {pillar}
                      </span>
                    ))}
                  </div>
                  
                  <button className="doctor-card__book-btn">
                    <Calendar size={16} />
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;