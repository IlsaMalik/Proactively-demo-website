import React from 'react';
import { Building2, TrendingDown, Users, Shield, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';
import './Employers.scss';

const Employers: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingDown size={24} />,
      title: 'Reduce Healthcare Costs',
      description: 'Lower insurance premiums and medical expenses through preventive lifestyle medicine programs.',
      stat: '30% reduction in healthcare costs'
    },
    {
      icon: <Users size={24} />,
      title: 'Improve Employee Wellness',
      description: 'Boost employee health, energy, and overall well-being through comprehensive lifestyle interventions.',
      stat: '85% employee satisfaction rate'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Increase Productivity',
      description: 'Reduce sick days and improve workplace performance with healthier, more engaged employees.',
      stat: '25% increase in productivity'
    },
    {
      icon: <Shield size={24} />,
      title: 'Comprehensive Coverage',
      description: 'Provide access to lifestyle medicine experts, nutrition counseling, and wellness coaching.',
      stat: '95% program completion rate'
    }
  ];

  const services = [
    'On-site lifestyle medicine consultations',
    'Virtual wellness coaching sessions',
    'Nutrition and meal planning workshops',
    'Stress management and mindfulness training',
    'Physical activity and fitness programs',
    'Sleep optimization seminars',
    'Chronic disease prevention programs',
    'Health risk assessments and screenings'
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      employees: '500+',
      results: [
        '40% reduction in sick days',
        '35% decrease in healthcare costs',
        '90% employee participation rate'
      ],
      quote: 'ProVital transformed our workplace wellness. Our employees are healthier and more productive than ever.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Manufacturing Plus',
      employees: '1,200+',
      results: [
        '50% reduction in workplace injuries',
        '30% improvement in employee retention',
        '25% increase in overall productivity'
      ],
      quote: 'The lifestyle medicine approach has created a culture of health that benefits everyone.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="employers-page">
      <div className="container">
        <div className="employers-page__hero">
          <h1 className="employers-page__title">
            Transform Your Workplace with <span className="employers-page__title-highlight">Lifestyle Medicine</span>
          </h1>
          <p className="employers-page__subtitle">
            Reduce healthcare costs, improve employee wellness, and boost productivity with our comprehensive 
            corporate wellness programs powered by lifestyle medicine experts.
          </p>
          <button className="employers-page__cta-btn">
            Get Started Today
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="employers-page__benefits">
          <h2 className="employers-page__section-title">Why Choose ProVital for Your Company?</h2>
          <div className="employers-page__benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">
                  {benefit.icon}
                </div>
                <div className="benefit-card__content">
                  <h3 className="benefit-card__title">{benefit.title}</h3>
                  <p className="benefit-card__description">{benefit.description}</p>
                  <div className="benefit-card__stat">{benefit.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="employers-page__services">
          <h2 className="employers-page__section-title">Our Corporate Wellness Services</h2>
          <p className="employers-page__section-subtitle">
            Comprehensive lifestyle medicine programs tailored to your organization's needs
          </p>
          <div className="employers-page__services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <CheckCircle className="service-item__icon" size={16} />
                <span className="service-item__text">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="employers-page__case-studies">
          <h2 className="employers-page__section-title">Success Stories</h2>
          <div className="employers-page__case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-card__image">
                  <img src={study.image} alt={study.company} />
                  <div className="case-study-card__company-info">
                    <h3 className="case-study-card__company">{study.company}</h3>
                    <span className="case-study-card__size">{study.employees} employees</span>
                  </div>
                </div>
                
                <div className="case-study-card__content">
                  <div className="case-study-card__results">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="case-study-card__result">
                        <CheckCircle className="case-study-card__result-icon" size={14} />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="case-study-card__quote">
                    "{study.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="employers-page__cta">
          <div className="employers-page__cta-content">
            <Building2 className="employers-page__cta-icon" size={48} />
            <h2 className="employers-page__cta-title">Ready to Transform Your Workplace?</h2>
            <p className="employers-page__cta-text">
              Join hundreds of companies that have improved employee health and reduced healthcare costs 
              with our lifestyle medicine programs.
            </p>
            <div className="employers-page__cta-buttons">
              <button className="employers-page__cta-btn employers-page__cta-btn--primary">
                Schedule a Consultation
                <ArrowRight size={16} />
              </button>
              <button className="employers-page__cta-btn employers-page__cta-btn--secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;