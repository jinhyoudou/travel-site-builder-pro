
import React from 'react';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AttractionCardProps {
  name: string;
  image: string;
  category: string;
  location: string;
  price: string;
  featured?: boolean;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  name,
  image,
  category,
  location,
  price,
  featured = false,
}) => {
  return (
    <div className="trip-card h-full flex flex-col">
      <div className="relative">
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        {featured && (
          <Badge className="absolute top-3 left-3 bg-tripadvisor-primary hover:bg-tripadvisor-primary">
            Featured
          </Badge>
        )}
        <Badge className="absolute bottom-3 right-3 bg-white text-black hover:bg-white/90">
          {price}
        </Badge>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-2">{name}</h3>
        </div>
        <Badge variant="outline" className="w-fit mb-3">
          {category}
        </Badge>
        <div className="flex items-center text-gray-500 mt-auto">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
