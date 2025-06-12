import React from 'react';
import { Mic, Star, Calendar, MapPin, Users, Clock } from 'lucide-react';
import './Speakers.scss';

const Speakers: React.FC = () => {
  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Lifestyle Medicine Pioneer',
      specialty: 'Nutrition & Chronic Disease',
      rating: 4.9,
      events: 45,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading expert in nutritional interventions for diabetes and heart disease prevention.',
      topics: ['Nutrition', 'Diabetes', 'Heart Health'],
      availability: 'Available for booking',
      fee: '$2,500 - $5,000'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Sleep Medicine Expert',
      specialty: 'Sleep & Circadian Health',
      rating: 4.8,
      events: 32,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Renowned researcher in sleep optimization and its impact on metabolic health.',
      topics: ['Sleep Medicine', 'Circadian Rhythms', 'Metabolic Health'],
      availability: 'Booking 3 months ahead',
      fee: '$3,000 - $6,000'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Mind-Body Medicine Specialist',
      specialty: 'Stress Management & Mental Health',
      rating: 4.9,
      events: 67,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in integrating mindfulness and stress reduction techniques in clinical practice.',
      topics: ['Stress Management', 'Mindfulness', 'Mental Health'],
      availability: 'Available for booking',
      fee: '$2,000 - $4,500'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      title: 'Exercise Medicine Authority',
      specialty: 'Physical Activity & Rehabilitation',
      rating: 4.7,
      events: 28,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading advocate for exercise prescription in chronic disease management.',
      topics: ['Exercise Medicine', 'Rehabilitation', 'Chronic Disease'],
      availability: 'Available for booking',
      fee: '$2,200 - $4,800'
    }
  ];

  const eventTypes = [
    'All Events',
    'Conferences',
    'Workshops',
    'Webinars',
    'Corporate Events',
    'Medical Education'
  ];

  return (
    <div className="speakers-page">
      <div className="container">
        <div className="speakers-page__hero">
          <Mic className="speakers-page__hero-icon" size={48} />
          <h1 className="speakers-page__title">
            Expert <span className="speakers-page__title-highlight">Speakers</span>
          </h1>
          <p className="speakers-page__subtitle">
            Book renowned lifestyle medicine experts for your next event or conference
          </p>
        </div>

        <div className="speakers-page__filters">
          <div className="speakers-page__categories">
            {eventTypes.map((type, index) => (
              <button key={index} className="speakers-page__category-btn">
                {type}
              </button>
            ))}
          </div>
          <select className="speakers-page__sort">
            <option value="rating">Sort by Rating</option>
            <option value="events">Most Events</option>
            <option value="availability">Availability</option>
            <option value="fee">Fee Range</option>
          </select>
        </div>

        <div className="speakers-page__grid">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-card__image">
                <img src={speaker.image} alt={speaker.name} />
                <div className="speaker-card__availability">
                  {speaker.availability}
                </div>
              </div>
              
              <div className="speaker-card__content">
                <h3 className="speaker-card__name">{speaker.name}</h3>
                <p className="speaker-card__title">{speaker.title}</p>
                <p className="speaker-card__specialty">{speaker.specialty}</p>
                
                <div className="speaker-card__rating">
                  <Star className="speaker-card__star" size={16} />
                  <span className="speaker-card__rating-value">{speaker.rating}</span>
                  <span className="speaker-card__events">({speaker.events} events)</span>
                </div>
                
                <p className="speaker-card__bio">{speaker.bio}</p>
                
                <div className="speaker-card__topics">
                  {speaker.topics.map((topic, index) => (
                    <span key={index} className="speaker-card__topic">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="speaker-card__details">
                  <div className="speaker-card__detail">
                    <Users size={14} />
                    <span>{speaker.events} events</span>
                  </div>
                  <div className="speaker-card__detail">
                    <Clock size={14} />
                    <span>Speaking fee: {speaker.fee}</span>
                  </div>
                </div>
                
                <button className="speaker-card__book-btn">
                  <Calendar size={16} />
                  Book Speaker
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="speakers-page__cta">
          <div className="speakers-page__cta-content">
            <h2 className="speakers-page__cta-title">Looking for a Custom Speaker?</h2>
            <p className="speakers-page__cta-text">
              Can't find the perfect speaker for your event? Let us help you find the ideal 
              lifestyle medicine expert for your specific needs.
            </p>
            <button className="speakers-page__cta-btn">
              Request Custom Speaker
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;