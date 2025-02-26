import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import LoginForm from "./LoginForm";

interface LoginCardProps {
  onSubmit?: (values: any) => void;
  isLoading?: boolean;
}

export default function LoginCard({
  onSubmit = (values) => console.log("Form submitted:", values),
  isLoading = false,
}: LoginCardProps) {
  return (
    <Card className="w-[480px] backdrop-blur-md bg-white/90 border-none shadow-2xl">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-lg">
          {/* Gradient overlay for glassmorphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E]/10 to-[#3F51B5]/10 backdrop-blur-sm z-0" />

          {/* Content container */}
          <div className="relative z-10 p-8">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome to Real Estate Intelligence
              </h1>
              <p className="text-gray-500 mt-2">
                Sign in to access your dashboard
              </p>
            </div>

            <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
