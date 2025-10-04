"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Menu, Globe, Star, MapPin, Phone, LogIn, UserPlus } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    title: "Luxury Suite",
    description: "Experience ultimate comfort in our premium suites"
  },
  {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    title: "Ocean View Room",
    description: "Wake up to breathtaking ocean views every morning"
  },
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    title: "Executive Lounge",
    description: "Relax and unwind in our sophisticated lounge area"
  }
];

const navigationItems = [
  { label: "Rooms", labelKh: "បន្ទប់", href: "#rooms" },
  { label: "Amenities", labelKh: "សេវាកម្ម", href: "#amenities" },
  { label: "Dining", labelKh: "អាហារ", href: "#dining" },
  { label: "Contact", labelKh: "ទំនាក់ទំនង", href: "#contact" }
];

export default function HeroSection() {
  const [language, setLanguage] = useState<"en" | "kh">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "kh" : "en");
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              {language === "en" ? "Royal Hotel" : "ហូតែល រ៉ូយ៉ាល់"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {language === "en" ? item.label : item.labelKh}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Auth Buttons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "ខ្មែរ" : "EN"}</span>
            </Button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>{language === "en" ? "Login" : "ចូល"}</span>
              </Button>
              <Button size="sm" className="flex items-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>{language === "en" ? "Sign Up" : "ចុះឈ្មោះ"}</span>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="sm">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {language === "en" ? item.label : item.labelKh}
                    </a>
                  ))}
                  
                  {/* Auth Buttons - Mobile */}
                  <div className="pt-4 border-t space-y-3">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <LogIn className="w-4 h-4 mr-2" />
                      {language === "en" ? "Login" : "ចូល"}
                    </Button>
                    <Button className="w-full justify-start" size="sm">
                      <UserPlus className="w-4 h-4 mr-2" />
                      {language === "en" ? "Sign Up" : "ចុះឈ្មោះ"}
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Phone className="w-4 h-4" />
                      <span>+855 23 123 456</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Phnom Penh, Cambodia</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[80vh] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Hero Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {language === "en" 
                          ? "Experience Luxury Like Never Before" 
                          : "បទពិសោធន៍ប្រណីតដែលមិនធ្លាប់មាន"
                        }
                      </h1>
                      <p className="text-lg md:text-xl mb-8 opacity-90">
                        {language === "en"
                          ? "Discover comfort, elegance, and exceptional service in the heart of Cambodia"
                          : "រកឃើញភាពស្រួលស្រាយ ភាពឆើតឆាយ និងសេវាកម្មពិសេសនៅកណ្តាលប្រទេសកម្ពុជា"
                        }
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6">
                          {language === "en" ? "Book Now" : "កក់ឥឡូវនេះ"}
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-black">
                          {language === "en" ? "Explore Rooms" : "មើលបន្ទប់"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}