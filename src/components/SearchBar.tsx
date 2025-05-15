
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('hotels');

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4">
        <Select 
          value={searchType} 
          onValueChange={setSearchType}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Search for..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hotels">Hotels</SelectItem>
            <SelectItem value="restaurants">Restaurants</SelectItem>
            <SelectItem value="activities">Things to Do</SelectItem>
            <SelectItem value="vacation-rentals">Vacation Rentals</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex-1 relative">
          <Input 
            type="text" 
            placeholder={`Search for ${searchType}...`} 
            className="w-full pl-10"
          />
          <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-gray-500" />
        </div>

        <Button className="bg-tripadvisor-primary hover:bg-tripadvisor-primary/90">
          Search
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <span className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-colors">
          Popular destinations
        </span>
        <span className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-colors">
          Weekend getaways
        </span>
        <span className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-colors">
          Beach destinations
        </span>
        <span className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-colors">
          Mountain retreats
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
