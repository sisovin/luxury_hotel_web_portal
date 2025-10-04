"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoomDetailModal from "@/components/RoomDetailModal";
import { Users, Wifi, Car, Coffee, Star, Eye } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Ocean View",
    nameKh: "បន្ទប់ប្រណីតមើលសមុទ្រ",
    category: "deluxe",
    price: 150,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
    ],
    capacity: 2,
    size: "45 sqm",
    amenities: ["Ocean View", "King Bed", "Mini Bar", "Balcony"],
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Car, label: "Parking" },
      { icon: Coffee, label: "Coffee Maker" }
    ],
    rating: 4.8,
    description: "Spacious room with stunning ocean views and modern amenities."
  },
  {
    id: 2,
    name: "Executive Suite",
    nameKh: "បន្ទប់ប្រតិបត្តិ",
    category: "suite",
    price: 280,
    originalPrice: 320,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
    ],
    capacity: 4,
    size: "80 sqm",
    amenities: ["Separate Living Room", "King Bed", "Jacuzzi", "City View"],
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Car, label: "Valet Parking" },
      { icon: Coffee, label: "Espresso Machine" }
    ],
    rating: 4.9,
    description: "Luxurious suite with separate living area and premium amenities."
  },
  {
    id: 3,
    name: "Standard Room",
    nameKh: "បន្ទប់ធម្មតា",
    category: "standard",
    price: 85,
    originalPrice: 100,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
    ],
    capacity: 2,
    size: "30 sqm",
    amenities: ["Queen Bed", "Work Desk", "Mini Fridge", "Garden View"],
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Car, label: "Parking" },
      { icon: Coffee, label: "Tea/Coffee" }
    ],
    rating: 4.5,
    description: "Comfortable and affordable room with essential amenities."
  },
  {
    id: 4,
    name: "Family Suite",
    nameKh: "បន្ទប់គ្រួសារ",
    category: "family",
    price: 220,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
    ],
    capacity: 6,
    size: "65 sqm",
    amenities: ["Two Bedrooms", "Living Area", "Kitchenette", "Sofa Bed"],
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Car, label: "Parking" },
      { icon: Coffee, label: "Kitchen" }
    ],
    rating: 4.7,
    description: "Perfect for families with separate bedrooms and living space."
  }
];

const categories = [
  { id: "all", label: "All Rooms", labelKh: "បន្ទប់ទាំងអស់" },
  { id: "standard", label: "Standard", labelKh: "ធម្មតា" },
  { id: "deluxe", label: "Deluxe", labelKh: "ប្រណីត" },
  { id: "suite", label: "Suites", labelKh: "បន្ទប់ធំ" },
  { id: "family", label: "Family", labelKh: "គ្រួសារ" }
];

export default function RoomShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [language] = useState<"en" | "kh">("en"); // This would come from context in real app

  const filteredRooms = selectedCategory === "all" 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory);

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "en" ? "Our Rooms & Suites" : "បន្ទប់ និងបន្ទប់ធំរបស់យើង"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en" 
              ? "Choose from our carefully designed rooms, each offering comfort and luxury"
              : "ជ្រើសរើសពីបន្ទប់ដែលរចនាដោយយកចិត្តទុកដាក់ ផ្តល់នូវភាពស្រួលស្រាយនិងប្រណីត"
            }
          </p>
        </div>

        {/* Room Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {language === "en" ? category.label : category.labelKh}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90">
                      {room.capacity} <Users className="w-3 h-3 ml-1" />
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary">
                      <Star className="w-3 h-3 mr-1" />
                      {room.rating}
                    </Badge>
                  </div>
                  {room.originalPrice > room.price && (
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="destructive">
                        {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">
                  {language === "en" ? room.name : room.nameKh}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {room.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">{room.size}</span>
                  <div className="flex items-center space-x-1">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <feature.icon key={index} className="w-4 h-4 text-muted-foreground" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">${room.price}</span>
                    {room.originalPrice > room.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${room.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">per night</span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setSelectedRoom(room)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {language === "en" ? "Quick View" : "មើលលឿន"}
                </Button>
                <Button size="sm" className="flex-1">
                  {language === "en" ? "Book Now" : "កក់ឥឡូវ"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {language === "en" ? "View All Rooms" : "មើលបន្ទប់ទាំងអស់"}
          </Button>
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
          language={language}
        />
      )}
    </section>
  );
}