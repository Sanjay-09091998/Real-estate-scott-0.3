import React from "react";
import { Building2 } from "lucide-react";

interface RealEstateHeroProps {
  imageUrl?: string;
  title?: string;
  subtitle?: string;
}

export default function RealEstateHero({
  imageUrl = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  title = "Discover Your Perfect Property",
  subtitle = "Access comprehensive real estate data and insights",
}: RealEstateHeroProps) {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-white overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/80 to-[#3F51B5]/80 mix-blend-multiply" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-12 text-white">
        <Building2 className="w-16 h-16 mb-6 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4 tracking-tight">{title}</h1>
        <p className="text-lg text-gray-100 max-w-md">{subtitle}</p>
      </div>
    </div>
  );
}
