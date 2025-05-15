
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-bold text-2xl text-tripadvisor-primary">TripGuide</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-tripadvisor-primary">Hotels</Link>
            <Link to="/" className="font-medium hover:text-tripadvisor-primary">Restaurants</Link>
            <Link to="/" className="font-medium hover:text-tripadvisor-primary">Things to Do</Link>
            <Link to="/" className="font-medium hover:text-tripadvisor-primary">Travel Stories</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-5 w-5 mr-2" />
              <span>Sign In</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-tripadvisor-dark" />
            ) : (
              <Menu className="h-6 w-6 text-tripadvisor-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link to="/" className="block py-2 font-medium">Hotels</Link>
            <Link to="/" className="block py-2 font-medium">Restaurants</Link>
            <Link to="/" className="block py-2 font-medium">Things to Do</Link>
            <Link to="/" className="block py-2 font-medium">Travel Stories</Link>
            <div className="pt-3 border-t">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Search className="h-5 w-5 mr-2" />
                <span>Search</span>
              </Button>
              <Button variant="outline" className="w-full justify-start mt-2" size="sm">
                <User className="h-5 w-5 mr-2" />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
