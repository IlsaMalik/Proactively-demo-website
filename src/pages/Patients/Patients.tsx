import React from 'react';
import { Heart, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import './Patients.scss';

const Patients: React.FC = () => {
  const benefits = [
    {
      icon: <Heart size={24} />,
      title: 'Personalized Care Plans',
      description: 'Receive customized lifestyle medicine interventions tailored to your specific health goals and conditions.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Evidence-Based Treatment',
      description: 'Access proven lifestyle interventions backed by the latest scientific research and clinical studies.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Flexible Scheduling',
      description: 'Book appointments that fit your schedule with same-day availability and telehealth options.'
    },
    {
      icon: <Users size={24} />,
      title: 'Comprehensive Support',
      description: 'Work with a multidisciplinary team including physicians, nutritionists, and wellness coaches.'
    }
  ];

  const conditions = [
    'Type 2 Diabetes',
    'Heart Disease',
    'High Blood Pressure',
    'Obesity',
    'Depression & Anxiety',
    'Chronic Pain',
    'Sleep Disorders',
    'Autoimmune Conditions'
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      condition: 'Type 2 Diabetes',
      quote: 'Through lifestyle medicine, I reversed my diabetes and lost 40 pounds. I feel better than I have in years!',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'John Thompson',
      condition: 'Heart Disease',
      quote: 'The comprehensive approach helped me avoid surgery and improve my heart health naturally.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="patients-page">
      <div className="container">
        <div className="patients-page__hero">
          <h1 className="patients-page__title">
            Transform Your Health with <span className="patients-page__title-highlight">Lifestyle Medicine</span>
          </h1>
          <p className="patients-page__subtitle">
            Take control of your health through evidence-based lifestyle interventions. 
            Our expert physicians help you prevent, treat, and reverse chronic diseases naturally.
          </p>
          <button className="patients-page__cta-btn">
            Start Your Journey
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="patients-page__benefits">
          <h2 className="patients-page__section-title">Why Choose Lifestyle Medicine?</h2>
          <div className="patients-page__benefits-grid">
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

        <div className="patients-page__conditions">
          <h2 className="patients-page__section-title">Conditions We Treat</h2>
          <p className="patients-page__section-subtitle">
            Our lifestyle medicine approach is effective for a wide range of chronic conditions
          </p>
          <div className="patients-page__conditions-grid">
            {conditions.map((condition, index) => (
              <div key={index} className="condition-item">
                <CheckCircle className="condition-item__icon" size={16} />
                <span className="condition-item__text">{condition}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="patients-page__testimonials">
          <h2 className="patients-page__section-title">Patient Success Stories</h2>
          <div className="patients-page__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card__image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-card__content">
                  <p className="testimonial-card__quote">"{testimonial.quote}"</p>
                  <div className="testimonial-card__author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.condition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="patients-page__cta">
          <h2 className="patients-page__cta-title">Ready to Transform Your Health?</h2>
          <p className="patients-page__cta-text">
            Join thousands of patients who have improved their health through lifestyle medicine
          </p>
          <button className="patients-page__cta-btn">
            Find a Doctor Near You
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patients;