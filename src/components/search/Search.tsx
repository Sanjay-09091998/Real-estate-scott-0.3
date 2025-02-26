import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, MapPin } from "lucide-react";

export default function Search() {
  const [searchResults] = useState([
    {
      id: 1,
      name: "Luxury Villa Estate",
      address: "123 Ocean View Blvd, Malibu, CA",
      price: "$5,900,000",
      type: "Villa",
      status: "For Sale",
      bedrooms: 6,
      bathrooms: 7.5,
      sqft: "6,500",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60",
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-0123",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
    },
    {
      id: 2,
      name: "Modern Urban Loft",
      address: "456 Downtown Ave, New York, NY",
      price: "$2,800,000",
      type: "Loft",
      status: "Pending",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: "3,200",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop&q=60",
      agent: {
        name: "Michael Chen",
        phone: "(212) 555-0456",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      },
    },
    {
      id: 3,
      name: "Beachfront Paradise",
      address: "789 Coastal Rd, Miami Beach, FL",
      price: "$4,500,000",
      type: "Condo",
      status: "For Sale",
      bedrooms: 4,
      bathrooms: 4,
      sqft: "4,800",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
      agent: {
        name: "Emily Rodriguez",
        phone: "(305) 555-0789",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      },
    },
  ]);

  const [sortOption, setSortOption] = useState("newest");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0077b6]">Search Properties</h1>
      </div>

      <Card className="p-6 bg-white/80 backdrop-blur-sm border-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input placeholder="Enter ZIP code or location" className="h-11" />

          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="loft">Loft</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000000">Under $1M</SelectItem>
              <SelectItem value="1000000-3000000">$1M - $3M</SelectItem>
              <SelectItem value="3000000-5000000">$3M - $5M</SelectItem>
              <SelectItem value="5000000+">$5M+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Square Feet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-2000">Under 2,000</SelectItem>
              <SelectItem value="2000-4000">2,000 - 4,000</SelectItem>
              <SelectItem value="4000-6000">4,000 - 6,000</SelectItem>
              <SelectItem value="6000+">6,000+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {searchResults.map((property) => (
          <Card
            key={property.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm"
          >
            <div className="relative h-64">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
              >
                <Heart className="w-5 h-5 text-red-500" />
              </Button>
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/90 text-sm font-semibold">
                {property.status}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {property.name}
                </h3>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <p className="text-sm">{property.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Beds</p>
                  <p className="font-semibold">{property.bedrooms}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Baths</p>
                  <p className="font-semibold">{property.bathrooms}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Sq.Ft</p>
                  <p className="font-semibold">{property.sqft}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{property.agent.name}</p>
                    <p className="text-sm text-gray-500">
                      {property.agent.phone}
                    </p>
                  </div>
                </div>
                <p className="text-xl font-bold text-[#0077b6]">
                  {property.price}
                </p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-[#0077b6] hover:bg-[#00b4d8]">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  Request Tour
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg" className="w-full max-w-xs">
          Load More Properties
        </Button>
      </div>
    </div>
  );
}
