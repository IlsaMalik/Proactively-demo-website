import React from 'react';
import { BookOpen, Star, Download, ShoppingCart, Users, Clock } from 'lucide-react';
import './Books.scss';

const Books: React.FC = () => {
  const books = [
    {
      id: 1,
      title: 'The Lifestyle Medicine Handbook',
      author: 'Dr. Sarah Johnson',
      rating: 4.8,
      reviews: 234,
      price: '$29.99',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'A comprehensive guide to implementing lifestyle medicine principles in daily practice.',
      category: 'Clinical Practice',
      pages: 320,
      format: ['Hardcover', 'eBook', 'Audiobook']
    },
    {
      id: 2,
      title: 'Nutrition as Medicine',
      author: 'Dr. Michael Chen',
      rating: 4.9,
      reviews: 189,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Evidence-based nutritional interventions for chronic disease prevention and treatment.',
      category: 'Nutrition',
      pages: 280,
      format: ['Paperback', 'eBook']
    },
    {
      id: 3,
      title: 'Mind-Body Medicine',
      author: 'Dr. Emily Rodriguez',
      rating: 4.7,
      reviews: 156,
      price: '$32.99',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Exploring the connection between mental health and physical wellness.',
      category: 'Mental Health',
      pages: 350,
      format: ['Hardcover', 'eBook', 'Audiobook']
    },
    {
      id: 4,
      title: 'Exercise Prescription',
      author: 'Dr. James Wilson',
      rating: 4.6,
      reviews: 98,
      price: '$27.99',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Scientific approach to prescribing exercise for health and disease management.',
      category: 'Physical Activity',
      pages: 290,
      format: ['Paperback', 'eBook']
    }
  ];

  const categories = [
    'All Categories',
    'Clinical Practice',
    'Nutrition',
    'Mental Health',
    'Physical Activity',
    'Sleep Medicine',
    'Stress Management'
  ];

  return (
    <div className="books-page">
      <div className="container">
        <div className="books-page__hero">
          <BookOpen className="books-page__hero-icon" size={48} />
          <h1 className="books-page__title">
            Lifestyle Medicine <span className="books-page__title-highlight">Books</span>
          </h1>
          <p className="books-page__subtitle">
            Discover evidence-based resources from leading experts in lifestyle medicine
          </p>
        </div>

        <div className="books-page__filters">
          <div className="books-page__categories">
            {categories.map((category, index) => (
              <button key={index} className="books-page__category-btn">
                {category}
              </button>
            ))}
          </div>
          <select className="books-page__sort">
            <option value="rating">Sort by Rating</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="books-page__grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-card__image">
                <img src={book.image} alt={book.title} />
                <div className="book-card__category">{book.category}</div>
              </div>
              
              <div className="book-card__content">
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">by {book.author}</p>
                
                <div className="book-card__rating">
                  <div className="book-card__stars">
                    <Star className="book-card__star" size={14} />
                    <span className="book-card__rating-value">{book.rating}</span>
                  </div>
                  <span className="book-card__reviews">({book.reviews} reviews)</span>
                </div>
                
                <p className="book-card__description">{book.description}</p>
                
                <div className="book-card__details">
                  <div className="book-card__detail">
                    <Users size={14} />
                    <span>{book.pages} pages</span>
                  </div>
                  <div className="book-card__detail">
                    <Clock size={14} />
                    <span>Available formats</span>
                  </div>
                </div>
                
                <div className="book-card__formats">
                  {book.format.map((format, index) => (
                    <span key={index} className="book-card__format">
                      {format}
                    </span>
                  ))}
                </div>
                
                <div className="book-card__footer">
                  <div className="book-card__price">{book.price}</div>
                  <div className="book-card__actions">
                    <button className="book-card__btn book-card__btn--secondary">
                      <Download size={16} />
                      Preview
                    </button>
                    <button className="book-card__btn book-card__btn--primary">
                      <ShoppingCart size={16} />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;