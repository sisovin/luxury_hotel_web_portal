"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Car, 
  Coffee, 
  Utensils, 
  Waves, 
  Dumbbell, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Plane, 
  MapPin,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const amenities = [
  {
    id: 1,
    icon: Wifi,
    title: "Free WiFi",
    titleKh: "WiFi ឥតគិតថ្លៃ",
    description: "High-speed internet access throughout the hotel",
    descriptionKh: "អ៊ីនធឺណិតល្បឿនលឿននៅទូទាំងសណ្ឋាគារ",
    details: "Enjoy complimentary high-speed WiFi in all rooms and public areas. Perfect for business travelers and staying connected with loved ones.",
    detailsKh: "រីករាយជាមួយ WiFi ល្បឿនលឿនឥតគិតថ្លៃនៅគ្រប់បន្ទ��់ និងតំបន់សាធារណៈ។ ល្អសម្រាប់អ្នកធ្វើដំណើរអាជីវកម្ម និងការទំនាក់ទំនងជាមួយមនុស្សជាទីស្រឡាញ់។",
    category: "connectivity"
  },
  {
    id: 2,
    icon: Car,
    title: "Free Parking",
    titleKh: "ចតឥតគិតថ្លៃ",
    description: "Secure parking available for all guests",
    descriptionKh: "ចតដ្ឋានសុវត្ថិភាពសម្រាប់ភ្ញៀវទាំងអស់",
    details: "Complimentary valet parking service with 24/7 security. We also offer electric vehicle charging stations.",
    detailsKh: "សេវាកម្មចតរថយន្តឥតគិតថ្លៃជាមួយសុវត្ថិភាព 24/7។ យើងក៏ផ្តល់ស្ថានីយ៍បញ្ចូលថ្មរថយន្តអគ្គិសនីផងដែរ។",
    category: "convenience"
  },
  {
    id: 3,
    icon: Utensils,
    title: "Fine Dining",
    titleKh: "អាហារប្រណីត",
    description: "Multiple restaurants with international cuisine",
    descriptionKh: "ភោជនីយដ្ឋានជាច្រើនជាមួយម្ហូបអន្តរជាតិ",
    details: "Experience culinary excellence at our 3 restaurants featuring Khmer, Asian, and international cuisines prepared by award-winning chefs.",
    detailsKh: "បទពិសោធន៍ឧត្តមភាពធ្វើម្ហូបនៅភោជនីយដ្ឋាន 3 កន្លែងរបស់យើង ដែលមានម្ហូបខ្មែរ អាស៊ី និងអន្តរជាតិ ដែលរៀបចំដោយចុងភៅដែលឈ្នះពាន។",
    category: "dining"
  },
  {
    id: 4,
    icon: Waves,
    title: "Swimming Pool",
    titleKh: "អាងហែលទឹក",
    description: "Outdoor infinity pool with city views",
    descriptionKh: "អាងហែលទឹកខាងក្រៅជាមួយទិដ្ឋភាពទីក្រុង",
    details: "Relax in our stunning infinity pool overlooking the city skyline. Pool bar service available with tropical cocktails and light snacks.",
    detailsKh: "សម្រាកនៅអាងហែលទឹកដ៏ស្រស់ស្អាតរបស់យើងដែលមើលទៅលើផ្ទៃមេឃទីក្រុង។ មានសេវាកម្មបារអាងហែលទឹកជាមួយស្រាក្រឡុក និងអាហារស្រាល។",
    category: "recreation"
  },
  {
    id: 5,
    icon: Dumbbell,
    title: "Fitness Center",
    titleKh: "មជ្ឈមណ្ឌលហាត់ប្រាណ",
    description: "24/7 fully equipped gym facility",
    descriptionKh: "កន្លែងហាត់ប្រាណដែលមានឧបករណ៍ពេញលេញ 24/7",
    details: "State-of-the-art fitness center with modern equipment, personal trainers available, and group fitness classes including yoga and pilates.",
    detailsKh: "មជ្ឈមណ្ឌលហាត់ប្រាណទំនើបជាមួយឧបករណ៍ទំនើប គ្រូបង្វឹកផ្ទាល់ខ្លួន និងថ្នាក់ហា��់ប្រាណជាក្រុមរួមទាំងយោគា និង pilates។",
    category: "wellness"
  },
  {
    id: 6,
    icon: Heart,
    title: "Spa & Wellness",
    titleKh: "ស្ប៉ា និងសុខភាព",
    description: "Full-service spa with traditional treatments",
    descriptionKh: "ស្ប៉ាសេវាកម្មពេញលេញជាមួយការព្យាបាលបែបប្រពៃណី",
    details: "Indulge in our luxury spa featuring traditional Khmer massages, aromatherapy, and modern wellness treatments in a serene environment.",
    detailsKh: "ចូលរួមនៅស្ប៉ាប្រណីតរបស់យើងដែលមានម៉ាស្សាខ្មែរបែបប្រពៃណី ការព្យាបាលដោយក្លិនក្រអូប និងការព្យាបាលសុខភាពទំនើបនៅក្នុងបរិយាកាសស្ងប់ស្ងាត់។",
    category: "wellness"
  },
  {
    id: 7,
    icon: Shield,
    title: "24/7 Security",
    titleKh: "សុវត្ថិភាព 24/7",
    description: "Round-the-clock security and concierge service",
    descriptionKh: "សេវាកម្មសុវត្ថិភាព និងអ្នកទទួលភ្ញៀវពេញមួយថ្ងៃ",
    details: "Professional security team and concierge service available 24/7 to ensure your safety and assist with any requests during your stay.",
    detailsKh: "ក្រុមសុវត្ថិភាពវិជ្ជាជីវៈ និងសេវាកម្មអ្នកទទួលភ្ញៀវ 24/7 ដើម្បីធានាសុវត្ថិភាពរបស់អ្នក និងជួយសំណើរណាមួយក្នុងអំឡុងពេលស្នាក់នៅ។",
    category: "service"
  },
  {
    id: 8,
    icon: Plane,
    title: "Airport Transfer",
    titleKh: "ការដឹកជញ្ជូនព្រលានយន្តហោះ",
    description: "Complimentary airport shuttle service",
    descriptionKh: "សេវាកម្មរថយន្តដឹកជញ្ជូនព្រលានយន្តហោះឥតគិតថ្លៃ",
    details: "Free airport transfer service available upon request. Luxury vehicles with professional drivers for a comfortable journey to and from the airport.",
    detailsKh: "សេវាកម្មដឹកជញ្ជូនព្រលានយន្តហោះឥតគិតថ្លៃតាមការស្នើសុំ។ រថយន្តប្រណីតជាមួយអ្នកបើកបរវិជ្ជាជីវៈសម្រាប់ការធ្វើដំណើរស្រួលស្រាយទៅ និងពីព្រលានយន្តហោះ។",
    category: "convenience"
  }
];

const categories = [
  { id: "all", label: "All Amenities", labelKh: "សេវាកម្មទាំងអស់" },
  { id: "wellness", label: "Wellness", labelKh: "សុខភាព" },
  { id: "dining", label: "Dining", labelKh: "អាហារ" },
  { id: "recreation", label: "Recreation", labelKh: "កម្សាន្ត" },
  { id: "convenience", label: "Convenience", labelKh: "���ាពងាយស្រួល" },
  { id: "service", label: "Service", labelKh: "សេវាកម្ម" }
];

export default function AmenitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedAmenity, setExpandedAmenity] = useState<number | null>(null);
  const [language] = useState<"en" | "kh">("en"); // This would come from context in real app

  const filteredAmenities = selectedCategory === "all" 
    ? amenities 
    : amenities.filter(amenity => amenity.category === selectedCategory);

  const toggleExpanded = (amenityId: number) => {
    setExpandedAmenity(expandedAmenity === amenityId ? null : amenityId);
  };

  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "en" ? "Hotel Amenities" : "សេវាកម្មសណ្ឋាគារ"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en" 
              ? "Discover our comprehensive range of amenities designed to make your stay exceptional"
              : "រកឃើញសេវាកម្មដ៏ទូលំទូលាយរបស់យើងដែលរចនាឡើងដើម្បីធ្វើឱ្យការស្នាក់នៅរបស់អ្នកពិសេស"
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="text-sm"
            >
              {language === "en" ? category.label : category.labelKh}
            </Button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity) => (
            <Card 
              key={amenity.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <Collapsible
                open={expandedAmenity === amenity.id}
                onOpenChange={() => toggleExpanded(amenity.id)}
              >
                <CollapsibleTrigger asChild>
                  <div>
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <amenity.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-lg">
                        {language === "en" ? amenity.title : amenity.titleKh}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {language === "en" ? amenity.description : amenity.descriptionKh}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 text-center">
                      <Button variant="ghost" size="sm" className="text-primary">
                        {expandedAmenity === amenity.id ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            {language === "en" ? "Less Info" : "ព័ត៌មានតិច"}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            {language === "en" ? "More Info" : "ព័ត៌មានបន្ថែម"}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0 border-t">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {language === "en" ? amenity.details : amenity.detailsKh}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {language === "en" ? "Ready to Experience Luxury?" : "រួចរាល់ដើម្បីបទពិសោធន៍ប្រណីត?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "en" 
                ? "Book your stay today and enjoy all our premium amenities"
                : "កក់ការស្នាក់នៅរបស់អ្នកថ្ងៃនេះ និងរីករាយជាមួយសេវាកម្មប្រណីតទាំងអស់របស់យើង"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                {language === "en" ? "Book Now" : "កក់ឥឡូវនេះ"}
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                {language === "en" ? "Contact Us" : "ទាក់ទងយើង"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}