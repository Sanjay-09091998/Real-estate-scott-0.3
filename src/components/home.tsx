import React from "react";
import LoginCard from "./auth/LoginCard";
import RealEstateHero from "./auth/RealEstateHero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1A237E] to-[#3F51B5] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left side - Hero Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <RealEstateHero />
        </div>

        {/* Right side - Login Card */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
