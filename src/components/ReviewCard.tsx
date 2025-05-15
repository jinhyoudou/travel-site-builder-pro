
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  review: string;
  location?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  avatar,
  rating,
  date,
  title,
  review,
  location
}) => {
  // Generate star ratings
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-hover">
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{name}</div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {location && <span>{location}</span>}
            {location && <span>•</span>}
            <span>{date}</span>
          </div>
        </div>
      </div>

      <div className="mb-2 flex">{renderStars()}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-4">{review}</p>
      <div className="mt-4">
        <button className="text-tripadvisor-blue hover:text-tripadvisor-primary text-sm font-medium">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
