import React, { useState } from 'react';
import { Building, Users, TrendingUp, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';
import './ListPractice.scss';

const ListPractice: React.FC = () => {
  const [formData, setFormData] = useState({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    specialty: '',
    location: '',
    practiceSize: ''
  });

  const benefits = [
    {
      icon: <Users size={24} />,
      title: 'Expand Your Patient Base',
      description: 'Connect with patients actively seeking lifestyle medicine expertise in your area.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Grow Your Practice',
      description: 'Increase appointment bookings and revenue through our comprehensive platform.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Verified Credentials',
      description: 'Build trust with patients through our rigorous verification process.'
    },
    {
      icon: <Building size={24} />,
      title: 'Practice Management',
      description: 'Access tools to manage appointments, patient records, and billing efficiently.'
    }
  ];

  const features = [
    'Online appointment scheduling',
    'Patient management system',
    'Secure messaging platform',
    'Insurance verification',
    'Telehealth capabilities',
    'Marketing support',
    'Analytics and reporting',
    'Mobile app access'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="list-practice-page">
      <div className="container">
        <div className="list-practice-page__hero">
          <h1 className="list-practice-page__title">
            List Your <span className="list-practice-page__title-highlight">Practice</span> on ProVital
          </h1>
          <p className="list-practice-page__subtitle">
            Join our network of lifestyle medicine experts and connect with patients who need your expertise
          </p>
        </div>

        <div className="list-practice-page__benefits">
          <h2 className="list-practice-page__section-title">Why Join ProVital?</h2>
          <div className="list-practice-page__benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="list-practice-page__content">
          <div className="list-practice-page__form-section">
            <h2 className="list-practice-page__form-title">Get Started Today</h2>
            <p className="list-practice-page__form-subtitle">
              Fill out the form below and we'll get your practice listed within 24 hours
            </p>
            
            <form className="practice-form" onSubmit={handleSubmit}>
              <div className="practice-form__row">
                <div className="practice-form__field">
                  <label className="practice-form__label">Practice Name *</label>
                  <input
                    type="text"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleInputChange}
                    className="practice-form__input"
                    required
                  />
                </div>
                <div className="practice-form__field">
                  <label className="practice-form__label">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="practice-form__input"
                    required
                  />
                </div>
              </div>

              <div className="practice-form__row">
                <div className="practice-form__field">
                  <label className="practice-form__label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="practice-form__input"
                    required
                  />
                </div>
                <div className="practice-form__field">
                  <label className="practice-form__label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="practice-form__input"
                    required
                  />
                </div>
              </div>

              <div className="practice-form__row">
                <div className="practice-form__field">
                  <label className="practice-form__label">Specialty *</label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    className="practice-form__select"
                    required
                  >
                    <option value="">Select Specialty</option>
                    <option value="lifestyle-medicine">Lifestyle Medicine</option>
                    <option value="preventive-medicine">Preventive Medicine</option>
                    <option value="integrative-medicine">Integrative Medicine</option>
                    <option value="functional-medicine">Functional Medicine</option>
                    <option value="nutrition">Nutrition & Dietetics</option>
                    <option value="mental-health">Mental Health</option>
                  </select>
                </div>
                <div className="practice-form__field">
                  <label className="practice-form__label">Practice Size</label>
                  <select
                    name="practiceSize"
                    value={formData.practiceSize}
                    onChange={handleInputChange}
                    className="practice-form__select"
                  >
                    <option value="">Select Size</option>
                    <option value="solo">Solo Practice</option>
                    <option value="small">Small (2-5 providers)</option>
                    <option value="medium">Medium (6-15 providers)</option>
                    <option value="large">Large (16+ providers)</option>
                  </select>
                </div>
              </div>

              <div className="practice-form__field">
                <label className="practice-form__label">Practice Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="practice-form__input"
                  placeholder="City, State"
                  required
                />
              </div>

              <button type="submit" className="practice-form__submit">
                Submit Application
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          <div className="list-practice-page__features">
            <h3 className="list-practice-page__features-title">What You Get</h3>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="features-list__item">
                  <CheckCircle className="features-list__icon" size={16} />
                  <span className="features-list__text">{feature}</span>
                </div>
              ))}
            </div>

            <div className="list-practice-page__testimonial">
              <div className="testimonial">
                <div className="testimonial__rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="testimonial__star" size={16} />
                  ))}
                </div>
                <p className="testimonial__quote">
                  "ProVital has transformed my practice. I've seen a 40% increase in new patients 
                  and the platform makes managing appointments effortless."
                </p>
                <div className="testimonial__author">
                  <strong>Dr. Sarah Johnson</strong>
                  <span>Lifestyle Medicine Physician</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPractice;