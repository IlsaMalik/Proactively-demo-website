import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import './SignUp.scss';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'patient'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
    // Handle sign up logic
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-page__content">
          <div className="signup-page__form-section">
            <div className="signup-form">
              <div className="signup-form__header">
                <h1 className="signup-form__title">Join ProVital</h1>
                <p className="signup-form__subtitle">
                  Create your account and start your journey to better health through lifestyle medicine
                </p>
              </div>

              <form className="signup-form__form" onSubmit={handleSubmit}>
                <div className="signup-form__row">
                  <div className="signup-form__field">
                    <label className="signup-form__label">First Name</label>
                    <div className="signup-form__input-wrapper">
                      <User className="signup-form__input-icon" size={20} />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="signup-form__input"
                        placeholder="First name"
                        required
                      />
                    </div>
                  </div>

                  <div className="signup-form__field">
                    <label className="signup-form__label">Last Name</label>
                    <div className="signup-form__input-wrapper">
                      <User className="signup-form__input-icon" size={20} />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="signup-form__input"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="signup-form__field">
                  <label className="signup-form__label">Email Address</label>
                  <div className="signup-form__input-wrapper">
                    <Mail className="signup-form__input-icon" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="signup-form__input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="signup-form__field">
                  <label className="signup-form__label">Phone Number</label>
                  <div className="signup-form__input-wrapper">
                    <Phone className="signup-form__input-icon" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="signup-form__input"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="signup-form__field">
                  <label className="signup-form__label">I am a</label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="signup-form__select"
                    required
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Healthcare Provider</option>
                    <option value="employer">Employer</option>
                  </select>
                </div>

                <div className="signup-form__row">
                  <div className="signup-form__field">
                    <label className="signup-form__label">Password</label>
                    <div className="signup-form__input-wrapper">
                      <Lock className="signup-form__input-icon" size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="signup-form__input"
                        placeholder="Create password"
                        required
                      />
                      <button
                        type="button"
                        className="signup-form__password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="signup-form__field">
                    <label className="signup-form__label">Confirm Password</label>
                    <div className="signup-form__input-wrapper">
                      <Lock className="signup-form__input-icon" size={20} />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="signup-form__input"
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        type="button"
                        className="signup-form__password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="signup-form__terms">
                  <label className="signup-form__checkbox">
                    <input type="checkbox" required />
                    <span className="signup-form__checkbox-text">
                      I agree to the <Link to="/terms">Terms of Service</Link> and{' '}
                      <Link to="/privacy">Privacy Policy</Link>
                    </span>
                  </label>
                </div>

                <button type="submit" className="signup-form__submit">
                  Create Account
                </button>
              </form>

              <div className="signup-form__footer">
                <p className="signup-form__login-text">
                  Already have an account?{' '}
                  <Link to="/login" className="signup-form__login-link">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="signup-page__info-section">
            <div className="signup-info">
              <h2 className="signup-info__title">Start Your Health Transformation</h2>
              <p className="signup-info__text">
                Join thousands of people who have transformed their health through evidence-based 
                lifestyle medicine interventions.
              </p>
              
              <div className="signup-info__stats">
                <div className="signup-info__stat">
                  <div className="signup-info__stat-number">10,000+</div>
                  <div className="signup-info__stat-label">Active Users</div>
                </div>
                
                <div className="signup-info__stat">
                  <div className="signup-info__stat-number">500+</div>
                  <div className="signup-info__stat-label">Expert Physicians</div>
                </div>
                
                <div className="signup-info__stat">
                  <div className="signup-info__stat-number">95%</div>
                  <div className="signup-info__stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;