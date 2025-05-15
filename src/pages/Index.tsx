
import React from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import DestinationCard from '@/components/DestinationCard';
import AttractionCard from '@/components/AttractionCard';
import ReviewCard from '@/components/ReviewCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Sample data for destinations
  const destinations = [
    {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0",
      rating: 4.8,
      reviews: 14322,
      description: "Known as the City of Light, Paris is famous for its iconic Eiffel Tower, world-class cuisine, and beautiful art."
    },
    {
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa",
      rating: 4.7,
      reviews: 12048,
      description: "A tropical paradise with beautiful beaches, spiritual temples, and lush rice terraces."
    },
    {
      name: "New York City, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      rating: 4.6,
      reviews: 19876,
      description: "The Big Apple offers iconic sights like Times Square, Central Park, and world-class museums."
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      rating: 4.9,
      reviews: 15678,
      description: "A city where ancient traditions meet futuristic technology, with excellent food and fascinating culture."
    }
  ];

  // Sample data for attractions
  const attractions = [
    {
      name: "Eiffel Tower Guided Tour",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
      category: "Tour",
      location: "Paris, France",
      price: "From $49",
      featured: true
    },
    {
      name: "Ubud Sacred Monkey Forest Tour",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
      category: "Nature",
      location: "Bali, Indonesia",
      price: "From $25",
    },
    {
      name: "Statue of Liberty & Ellis Island Tour",
      image: "https://images.unsplash.com/photo-1524431144429-03fdd30eee26",
      category: "Tour",
      location: "New York City, USA",
      price: "From $79",
    },
    {
      name: "Tokyo Sushi Making Experience",
      image: "https://images.unsplash.com/photo-1618688469537-2ccf758288a4",
      category: "Food & Drink",
      location: "Tokyo, Japan",
      price: "From $65",
      featured: true
    }
  ];

  // Sample data for reviews
  const reviews = [
    {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      date: "October 10, 2023",
      title: "Amazing experience at the Eiffel Tower!",
      review: "We had an incredible time visiting the Eiffel Tower. Our guide was knowledgeable and friendly, and we didn't have to wait in any lines. The views from the top were breathtaking. Highly recommended for anyone visiting Paris!",
      location: "Chicago, USA"
    },
    {
      name: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4,
      date: "September 22, 2023",
      title: "Beautiful beaches in Bali",
      review: "Spent a week in Bali and it was magical. The beaches are pristine, the people are friendly, and the food is delicious. Make sure to visit the temples and rice terraces too. Can't wait to go back!",
      location: "London, UK"
    },
    {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      date: "November 5, 2023",
      title: "Unforgettable time in New York",
      review: "New York exceeded all my expectations. There's so much to see and do! We enjoyed Broadway shows, Central Park, the MET, and amazing restaurants. The city truly never sleeps!",
      location: "Sydney, Australia"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Discover the world's best places
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slide-up">
              Find the best hotels, restaurants, and things to do, based on traveler reviews
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="trip-section">
        <div className="container mx-auto">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Explore top-rated attractions, activities, and more</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                name={destination.name}
                image={destination.image}
                rating={destination.rating}
                reviews={destination.reviews}
                description={destination.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="trip-button">
              Explore All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="trip-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title">Top-Rated Attractions</h2>
          <p className="section-subtitle">Book experiences that make your trip unforgettable</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <AttractionCard
                key={index}
                name={attraction.name}
                image={attraction.image}
                category={attraction.category}
                location={attraction.location}
                price={attraction.price}
                featured={attraction.featured}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="trip-button">
              Browse All Attractions
            </Button>
          </div>
        </div>
      </section>

      {/* Traveler Reviews */}
      <section className="trip-section">
        <div className="container mx-auto">
          <h2 className="section-title">Recent Traveler Reviews</h2>
          <p className="section-subtitle">Trusted reviews from our community of travelers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                avatar={review.avatar}
                rating={review.rating}
                date={review.date}
                title={review.title}
                review={review.review}
                location={review.location}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-tripadvisor-blue text-tripadvisor-blue hover:bg-tripadvisor-blue hover:text-white">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="trip-section bg-tripadvisor-blue">
        <div className="container mx-auto text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to plan your next adventure?</h2>
            <p className="text-xl mb-8">Join millions of travelers who find the best hotels, restaurants, and things to do</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-tripadvisor-blue hover:bg-white/90">
                Start Planning
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Sign Up for Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
