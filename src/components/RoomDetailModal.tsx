"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Star, MapPin, Wifi, Car, Coffee, Calendar, Clock } from "lucide-react";

interface Room {
  id: number;
  name: string;
  nameKh: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  gallery: string[];
  capacity: number;
  size: string;
  amenities: string[];
  features: Array<{ icon: any; label: string }>;
  rating: number;
  description: string;
}

interface RoomDetailModalProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "kh";
}

export default function RoomDetailModal({ room, isOpen, onClose, language }: RoomDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {language === "en" ? room.name : room.nameKh}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {room.gallery.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${room.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto">
              {room.gallery.map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            {/* Rating and Capacity */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary">
                  <Star className="w-3 h-3 mr-1" />
                  {room.rating}
                </Badge>
                <Badge variant="secondary">
                  <Users className="w-3 h-3 mr-1" />
                  {room.capacity} {language === "en" ? "guests" : "ភ្ញៀវ"}
                </Badge>
                <Badge variant="outline">
                  {room.size}
                </Badge>
              </div>
              {room.originalPrice > room.price && (
                <Badge variant="destructive">
                  {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">
                {language === "en" ? "Description" : "ការពិពណ៌នា"}
              </h3>
              <p className="text-muted-foreground">{room.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-semibold mb-3">
                {language === "en" ? "Room Amenities" : "សេវាកម្មបន្ទប់"}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">
                {language === "en" ? "Features" : "លក្ខណៈពិសេស"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 text-sm">
                    <feature.icon className="w-4 h-4" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold">${room.price}</span>
                    {room.originalPrice > room.price && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${room.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {language === "en" ? "per night" : "ក្នុងមួយយប់"}
                  </span>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {language === "en" ? "Available" : "មាន"}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {language === "en" ? "Check-in 3 PM" : "ចូល 3 PM"}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  {language === "en" ? "Book This Room" : "កក់បន្ទប់នេះ"}
                </Button>
                <Button variant="outline" className="w-full">
                  {language === "en" ? "Check Availability" : "ពិនិត្យភាពអាចរកបាន"}
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {language === "en" ? "Free cancellation until 24h before check-in" : "បោះបង់ដោយឥតគិតថ្លៃរហូតដល់ 24 ម៉ោងមុនពេលចូល"}
              </div>
              <div>
                {language === "en" ? "• Breakfast included" : "• រួមបញ្ចូលអាហារពេលព្រឹក"}
              </div>
              <div>
                {language === "en" ? "• Free WiFi and parking" : "• WiFi និងចតឥតគិតថ្លៃ"}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}