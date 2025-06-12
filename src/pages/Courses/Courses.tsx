import React from 'react';
import { GraduationCap, Star, Clock, Users, Play, BookOpen } from 'lucide-react';
import './Courses.scss';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Fundamentals of Lifestyle Medicine',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.9,
      students: 1234,
      duration: '8 weeks',
      level: 'Beginner',
      price: '$299',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Comprehensive introduction to lifestyle medicine principles and evidence-based interventions.',
      modules: 12,
      certificate: true,
      category: 'Foundation'
    },
    {
      id: 2,
      title: 'Advanced Nutrition Therapy',
      instructor: 'Dr. Michael Chen',
      rating: 4.8,
      students: 856,
      duration: '6 weeks',
      level: 'Advanced',
      price: '$399',
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Deep dive into nutritional interventions for chronic disease management and prevention.',
      modules: 10,
      certificate: true,
      category: 'Nutrition'
    },
    {
      id: 3,
      title: 'Stress Management Techniques',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.9,
      students: 967,
      duration: '4 weeks',
      level: 'Intermediate',
      price: '$199',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Evidence-based approaches to stress reduction and mindfulness in clinical practice.',
      modules: 8,
      certificate: true,
      category: 'Mental Health'
    },
    {
      id: 4,
      title: 'Exercise as Medicine',
      instructor: 'Dr. James Wilson',
      rating: 4.7,
      students: 743,
      duration: '5 weeks',
      level: 'Intermediate',
      price: '$249',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Learn to prescribe exercise interventions for various health conditions and populations.',
      modules: 9,
      certificate: true,
      category: 'Physical Activity'
    }
  ];

  const categories = [
    'All Courses',
    'Foundation',
    'Nutrition',
    'Mental Health',
    'Physical Activity',
    'Sleep Medicine',
    'Chronic Disease'
  ];

  return (
    <div className="courses-page">
      <div className="container">
        <div className="courses-page__hero">
          <GraduationCap className="courses-page__hero-icon" size={48} />
          <h1 className="courses-page__title">
            Lifestyle Medicine <span className="courses-page__title-highlight">Courses</span>
          </h1>
          <p className="courses-page__subtitle">
            Advance your knowledge with evidence-based courses from leading lifestyle medicine experts
          </p>
        </div>

        <div className="courses-page__filters">
          <div className="courses-page__categories">
            {categories.map((category, index) => (
              <button key={index} className="courses-page__category-btn">
                {category}
              </button>
            ))}
          </div>
          <select className="courses-page__sort">
            <option value="rating">Sort by Rating</option>
            <option value="students">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="courses-page__grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card__image">
                <img src={course.image} alt={course.title} />
                <div className="course-card__level">{course.level}</div>
                <div className="course-card__play">
                  <Play size={20} />
                </div>
              </div>
              
              <div className="course-card__content">
                <div className="course-card__category">{course.category}</div>
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__instructor">by {course.instructor}</p>
                
                <div className="course-card__rating">
                  <Star className="course-card__star" size={14} />
                  <span className="course-card__rating-value">{course.rating}</span>
                  <span className="course-card__students">({course.students} students)</span>
                </div>
                
                <p className="course-card__description">{course.description}</p>
                
                <div className="course-card__details">
                  <div className="course-card__detail">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-card__detail">
                    <BookOpen size={14} />
                    <span>{course.modules} modules</span>
                  </div>
                  <div className="course-card__detail">
                    <Users size={14} />
                    <span>{course.students} enrolled</span>
                  </div>
                </div>
                
                {course.certificate && (
                  <div className="course-card__certificate">
                    <GraduationCap size={14} />
                    <span>Certificate included</span>
                  </div>
                )}
                
                <div className="course-card__footer">
                  <div className="course-card__price">{course.price}</div>
                  <button className="course-card__enroll-btn">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-page__cta">
          <div className="courses-page__cta-content">
            <h2 className="courses-page__cta-title">Become a Lifestyle Medicine Expert</h2>
            <p className="courses-page__cta-text">
              Join thousands of healthcare professionals advancing their careers through 
              evidence-based lifestyle medicine education.
            </p>
            <button className="courses-page__cta-btn">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;