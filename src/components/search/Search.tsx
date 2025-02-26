import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Search() {
  const [searchResults] = useState([
    {
      name: "Lake House",
      address: "678 Waterfront Ln, Chicago",
      price: "$980,000",
      type: "House",
      status: "For Sale",
    },
    {
      name: "Smart Home",
      address: "202 Silicon Valley Rd, CA",
      price: "$1,800,000",
      type: "Condo",
      status: "Sold",
    },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Search Properties</h1>

      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input placeholder="Enter ZIP code" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-500000">$0 - $500,000</SelectItem>
              <SelectItem value="500000-1000000">
                $500,000 - $1,000,000
              </SelectItem>
              <SelectItem value="1000000+">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {searchResults.map((property, index) => (
          <Card
            key={index}
            className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {property.status}
                </span>
              </div>
              <p className="text-gray-500">{property.address}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{property.price}</span>
                <span className="text-gray-500">{property.type}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
