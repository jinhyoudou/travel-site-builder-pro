
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, X, HelpCircle, Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSocialSignIn = (provider: string) => {
    toast({
      title: "Sign In Initiated",
      description: `Signing in with ${provider}. This feature is not yet fully implemented.`,
    });
  };

  const handleLanguageCurrencyChange = (type: string, value: string) => {
    toast({
      title: `${type} Updated`,
      description: `${type} has been changed to ${value}.`,
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <HelpCircle className="h-6 w-6 text-tripadvisor-blue mr-2" />
            <h1 className="font-bold text-2xl text-tripadvisor-primary">Helpy Here</h1>
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
            {/* Language & Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>EN / USD</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="end">
                <div className="p-2">
                  <h4 className="font-medium mb-2">Language</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {["English", "Spanish", "French", "German", "Italian", "Japanese"].map((lang) => (
                      <DropdownMenuItem key={lang} onClick={() => handleLanguageCurrencyChange('Language', lang)}>
                        {lang}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <div className="p-2">
                  <h4 className="font-medium mb-2">Currency</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {["USD", "EUR", "GBP", "JPY", "CAD", "AUD"].map((currency) => (
                      <DropdownMenuItem key={currency} onClick={() => handleLanguageCurrencyChange('Currency', currency)}>
                        {currency}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Button */}
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </Button>

            {/* Sign In Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <User className="h-5 w-5 mr-2" />
                  <span>Sign In</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-semibold">Sign In</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Button 
                      className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      onClick={() => handleSocialSignIn('Google')}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continue with Google
                    </Button>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full" onClick={() => handleSocialSignIn('Email/Phone')}>
                      Email or Phone Number
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      By signing in, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
              {/* Mobile Language & Currency */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Globe className="h-5 w-5 mr-2" />
                    <span>Language & Currency</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Language & Currency</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Language</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["English", "Spanish", "French", "German", "Italian", "Japanese"].map((lang) => (
                          <Button 
                            key={lang} 
                            variant="outline" 
                            className="justify-start"
                            onClick={() => handleLanguageCurrencyChange('Language', lang)}
                          >
                            {lang}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Currency</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["USD", "EUR", "GBP", "JPY", "CAD", "AUD"].map((currency) => (
                          <Button 
                            key={currency} 
                            variant="outline" 
                            className="justify-start"
                            onClick={() => handleLanguageCurrencyChange('Currency', currency)}
                          >
                            {currency}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Mobile Search */}
              <Button variant="ghost" className="w-full justify-start mt-2" size="sm">
                <Search className="h-5 w-5 mr-2" />
                <span>Search</span>
              </Button>

              {/* Mobile Sign In */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start mt-2" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    <span>Sign In</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center">Sign In</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Button 
                      className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      onClick={() => handleSocialSignIn('Google')}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Continue with Google
                    </Button>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or</span>
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => handleSocialSignIn('Email/Phone')}>
                      Email or Phone Number
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
