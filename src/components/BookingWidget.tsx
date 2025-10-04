"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { 
  Calendar as CalendarIcon, 
  Users, 
  MapPin, 
  Star, 
  Gift, 
  Percent,
  Clock,
  Phone
} from "lucide-react";

const specialOffers = [
  {
    id: 1,
    title: "Early Bird Special",
    titleKh: "ការផ្តល់ជូនពេលព្រឹក",
    discount: 25,
    description: "Book 30 days in advance and save 25%",
    descriptionKh: "កក់ 30 ថ្ងៃមុន និងសន្សំ 25%",
    validUntil: "2024-12-31",
    code: "EARLY25"
  },
  {
    id: 2,
    title: "Weekend Getaway",
    titleKh: "ការសម្រាកចុងសប្តាហ៍",
    discount: 15,
    description: "Special rates for weekend stays",
    descriptionKh: "តម្លៃពិសេសសម្រាប់ការស្នាក់នៅចុងសប្តាហ៍",
    validUntil: "2024-11-30",
    code: "WEEKEND15"
  },
  {
    id: 3,
    title: "Extended Stay",
    titleKh: "ការស្នាក់នៅយូរ",
    discount: 20,
    description: "Stay 5+ nights and get 20% off",
    descriptionKh: "ស្នាក់នៅ 5+ យប់ និងទទួលបាន 20% បញ្ចុះតម្លៃ",
    validUntil: "2024-12-15",
    code: "STAY20"
  }
];

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");
  const [selectedOffer, setSelectedOffer] = useState<string>("");
  const [language] = useState<"en" | "kh">("en"); // This would come from context in real app
  const [isFloating, setIsFloating] = useState(false);

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking details:", {
      checkIn,
      checkOut,
      guests,
      rooms,
      selectedOffer
    });
  };

  return (
    <>
      {/* Main Booking Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Book Your Stay" : "កក់ការស្នាក់នៅរបស់អ្នក"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "en" 
                ? "Find the perfect dates for your luxury getaway"
                : "រកកាលបរិច្ឆេទដ៏ល្អឥតខ្ចោះសម្រាប់ការសម្រាកប្រណីតរបស់អ្នក"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5" />
                    <span>
                      {language === "en" ? "Reservation Details" : "ព័ត៌មានលម្អិតការកក់"}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        {language === "en" ? "Check-in Date" : "កាលបរិច្ឆេទចូល"}
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : 
                              (language === "en" ? "Select date" : "ជ្រើសរើសកាលបរិច្ឆេទ")
                            }
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>
                        {language === "en" ? "Check-out Date" : "កាលបរិច្ឆេទចេញ"}
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : 
                              (language === "en" ? "Select date" : "ជ្រើសរើសកាលបរិច្ឆេទ")
                            }
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                            disabled={(date) => date < (checkIn || new Date())}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Guests and Rooms */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>
                        {language === "en" ? "Guests" : "ភ្ញៀវ"}
                      </Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                {num} {language === "en" ? "Guest" + (num > 1 ? "s" : "") : "ភ្ញៀវ"}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>
                        {language === "en" ? "Rooms" : "បន្ទប់"}
                      </Label>
                      <Select value={rooms} onValueChange={setRooms}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {language === "en" ? "Room" + (num > 1 ? "s" : "") : "បន្ទប់"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <Label>
                      {language === "en" ? "Promo Code (Optional)" : "កូដប្រូម៉ូ (ស្រេចចិត្ត)"}
                    </Label>
                    <Input 
                      placeholder={language === "en" ? "Enter promo code" : "បញ្ចូលកូដប្រូម៉ូ"}
                      value={selectedOffer}
                      onChange={(e) => setSelectedOffer(e.target.value)}
                    />
                  </div>

                  {/* Book Button */}
                  <Button 
                    onClick={handleBooking}
                    size="lg" 
                    className="w-full text-lg py-6"
                    disabled={!checkIn || !checkOut}
                  >
                    {language === "en" ? "Check Availability & Book" : "ពិនិត្យភាពអាចរកបាន និងកក់"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Special Offers Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="w-5 h-5" />
                    <span>
                      {language === "en" ? "Special Offers" : "ការផ្តល់ជូនពិសេស"}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {specialOffers.map((offer) => (
                    <div 
                      key={offer.id}
                      className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedOffer(offer.code)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">
                          {language === "en" ? offer.title : offer.titleKh}
                        </h4>
                        <Badge variant="secondary">
                          <Percent className="w-3 h-3 mr-1" />
                          {offer.discount}%
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {language === "en" ? offer.description : offer.descriptionKh}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                          {offer.code}
                        </span>
                        <span className="text-muted-foreground">
                          {language === "en" ? "Valid until" : "មានសុពលភាពដល់"} {offer.validUntil}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>
                      {language === "en" ? "Need Help?" : "ត្រូវការជំនួយ?"}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+855 23 123 456</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Phnom Penh, Cambodia</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>
                      {language === "en" ? "24/7 Support" : "ជំនួយ 24/7"}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    {language === "en" ? "Live Chat" : "ជជែកផ្ទាល់"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Booking Widget (appears on scroll) */}
      {isFloating && (
        <div className="fixed bottom-4 right-4 z-50">
          <Card className="w-80 shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">
                {language === "en" ? "Quick Booking" : "កក់លឿន"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Input 
                  type="date" 
                  className="text-xs"
                  placeholder={language === "en" ? "Check-in" : "ចូល"}
                />
                <Input 
                  type="date" 
                  className="text-xs"
                  placeholder={language === "en" ? "Check-out" : "ចេញ"}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Select defaultValue="2">
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="1">
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="sm" className="w-full">
                {language === "en" ? "Book Now" : "កក់ឥឡូវ"}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}