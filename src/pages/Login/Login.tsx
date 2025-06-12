import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import './Login.scss';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Handle login logic
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-page__content">
          <div className="login-page__form-section">
            <div className="login-form">
              <div className="login-form__header">
                <h1 className="login-form__title">Welcome Back</h1>
                <p className="login-form__subtitle">
                  Sign in to your ProVital account to continue your lifestyle medicine journey
                </p>
              </div>

              <form className="login-form__form" onSubmit={handleSubmit}>
                <div className="login-form__field">
                  <label className="login-form__label">Email Address</label>
                  <div className="login-form__input-wrapper">
                    <Mail className="login-form__input-icon" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="login-form__input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="login-form__field">
                  <label className="login-form__label">Password</label>
                  <div className="login-form__input-wrapper">
                    <Lock className="login-form__input-icon" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="login-form__input"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="login-form__password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="login-form__options">
                  <label className="login-form__checkbox">
                    <input type="checkbox" />
                    <span className="login-form__checkbox-text">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="login-form__forgot-link">
                    Forgot password?
                  </Link>
                </div>

                <button type="submit" className="login-form__submit">
                  Sign In
                </button>
              </form>

              <div className="login-form__footer">
                <p className="login-form__signup-text">
                  Don't have an account?{' '}
                  <Link to="/signup" className="login-form__signup-link">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="login-page__info-section">
            <div className="login-info">
              <h2 className="login-info__title">Transform Your Health Journey</h2>
              <p className="login-info__text">
                Access personalized lifestyle medicine recommendations, connect with expert physicians, 
                and track your progress towards optimal health.
              </p>
              
              <div className="login-info__features">
                <div className="login-info__feature">
                  <div className="login-info__feature-icon">🏥</div>
                  <div className="login-info__feature-text">
                    <h3>Expert Care</h3>
                    <p>Connect with board-certified lifestyle medicine physicians</p>
                  </div>
                </div>
                
                <div className="login-info__feature">
                  <div className="login-info__feature-icon">📊</div>
                  <div className="login-info__feature-text">
                    <h3>Track Progress</h3>
                    <p>Monitor your health metrics and lifestyle improvements</p>
                  </div>
                </div>
                
                <div className="login-info__feature">
                  <div className="login-info__feature-icon">🎯</div>
                  <div className="login-info__feature-text">
                    <h3>Personalized Plans</h3>
                    <p>Receive customized interventions based on your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;