
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  name, 
  image, 
  rating, 
  reviews, 
  description 
}) => {
  // Generate star ratings
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative">
          <Star className="text-gray-300 h-4 w-4" />
          <Star className="absolute top-0 left-0 fill-yellow-400 text-yellow-400 h-4 w-4 clip-path-half" />
        </span>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300 h-4 w-4" />);
    }

    return stars;
  };

  return (
    <div className="trip-card group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex">{renderStars()}</div>
          <span className="ml-2 text-sm text-gray-600">{reviews} reviews</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <Link 
          to="/" 
          className="text-tripadvisor-blue hover:text-tripadvisor-primary text-sm font-medium"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
