import React from 'react';
import './ImageCarousel.scss';

const ImageCarousel: React.FC = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      alt: 'Healthy meal preparation'
    },
    {
      src: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=300',
      alt: 'Morning yoga session'
    },
    {
      src: 'https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=300',
      alt: 'Peaceful sleep'
    },
    {
      src: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300',
      alt: 'Meditation and mindfulness'
    },
    {
      src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=300',
      alt: 'Social connection'
    },
    {
      src: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=300',
      alt: 'Healthy lifestyle choices'
    }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="carousel">
      <div className="carousel__track">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="carousel__item">
            <img 
              src={image.src} 
              alt={image.alt}
              className="carousel__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;