"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Waves,
  Dumbbell,
  Heart,
  Shield,
  CreditCard,
  Award,
  Globe
} from "lucide-react";

const footerLinks = {
  hotel: {
    title: "Hotel",
    titleKh: "សណ្ឋាគារ",
    links: [
      { label: "About Us", labelKh: "អំពីយើង", href: "/about" },
      { label: "Our Story", labelKh: "រឿងរ៉ាវរបស់យើង", href: "/story" },
      { label: "Careers", labelKh: "ការងារ", href: "/careers" },
      { label: "Press", labelKh: "សារព័ត៌មាន", href: "/press" },
      { label: "Awards", labelKh: "រង្វាន់", href: "/awards" }
    ]
  },
  services: {
    title: "Services",
    titleKh: "សេវាកម្ម",
    links: [
      { label: "Rooms & Suites", labelKh: "បន្ទប់ និងបន្ទប់ធំ", href: "/rooms" },
      { label: "Dining", labelKh: "អាហារ", href: "/dining" },
      { label: "Spa & Wellness", labelKh: "ស្ប៉ា និងសុខភាព", href: "/spa" },
      { label: "Events", labelKh: "ព្រឹត្តិការណ៍", href: "/events" },
      { label: "Business Center", labelKh: "មជ្ឈមណ្ឌលអាជីវកម្ម", href: "/business" }
    ]
  },
  support: {
    title: "Support",
    titleKh: "ជំនួយ",
    links: [
      { label: "Contact Us", labelKh: "ទាក់ទងយើង", href: "/contact" },
      { label: "FAQ", labelKh: "សំណួរញឹកញាប់", href: "/faq" },
      { label: "Booking Help", labelKh: "ជំនួយកក់", href: "/booking-help" },
      { label: "Cancellation", labelKh: "បោះបង់", href: "/cancellation" },
      { label: "Guest Services", labelKh: "សេវាកម្មភ្ញៀវ", href: "/guest-services" }
    ]
  },
  policies: {
    title: "Policies",
    titleKh: "គោលការណ៍",
    links: [
      { label: "Privacy Policy", labelKh: "គោលការណ៍ឯកជនភាព", href: "/privacy" },
      { label: "Terms of Service", labelKh: "លក្ខខណ្ឌសេវាកម្ម", href: "/terms" },
      { label: "Cookie Policy", labelKh: "គោលការណ៍ Cookie", href: "/cookies" },
      { label: "Accessibility", labelKh: "ភាពងាយស្រួល", href: "/accessibility" }
    ]
  }
};

const amenityIcons = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Parking" },
  { icon: Coffee, label: "Coffee" },
  { icon: Utensils, label: "Dining" },
  { icon: Waves, label: "Pool" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Heart, label: "Spa" },
  { icon: Shield, label: "Security" }
];

const certifications = [
  { icon: Award, label: "5-Star Hotel" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: Globe, label: "Global Standards" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [language] = useState<"en" | "kh">("en"); // This would come from context in real app

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {language === "en" 
                ? "Stay Updated with Our Latest Offers" 
                : "ទទួលបានព័ត៌មានថ្មីៗអំពីការផ្តល់ជូនរបស់យើង"
              }
            </h3>
            <p className="text-lg mb-6 text-white/90">
              {language === "en"
                ? "Subscribe to our newsletter and be the first to know about exclusive deals and events"
                : "ចុះឈ្មោះទទួលព័ត៌មាន និងក្លាយជាអ្នកដំបូងដែលដឹងអំពីការផ្តល់ជូនពិសេស និងព្រឹត្តិការណ៍"
              }
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={language === "en" ? "Enter your email" : "បញ្ចូលអ៊ីមែលរបស់អ្នក"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-black"
                required
              />
              <Button type="submit" variant="secondary" className="px-8">
                {language === "en" ? "Subscribe" : "ចុះឈ្មោះ"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Hotel Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold">
                  {language === "en" ? "Royal Hotel" : "ហូតែល រ៉ូយ៉ាល់"}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {language === "en"
                  ? "Experience luxury and comfort in the heart of Cambodia. Our award-winning hotel offers exceptional service and world-class amenities for an unforgettable stay."
                  : "បទពិសោធន៍ប្រណីត និងភាពស្រួលស្រាយនៅកណ្តាលប្រទេសកម្ពុជា។ សណ្ឋាគារដែលឈ្នះពានរបស់យើងផ្តល់សេវាកម្មពិសេស និងសេវាកម្មកម្រិតពិភពលោកសម្រាប់ការស្នាក់នៅដែលមិនអាចបំភ្លេចបាន។"
                }
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">123 Royal Street, Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">+855 23 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">info@royalhotel.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">
                    {language === "en" ? "24/7 Reception" : "ការទទួលភ្ញៀវ 24/7"}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-lg font-semibold mb-4">
                  {language === "en" ? section.title : section.titleKh}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        {language === "en" ? link.label : link.labelKh}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="my-12 bg-gray-700" />

          {/* Amenities Icons */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold mb-6 text-center">
              {language === "en" ? "Our Amenities" : "សេវាកម្មរបស់យើង"}
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {amenityIcons.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 group">
                  <div className="p-3 bg-gray-800 rounded-full group-hover:bg-primary transition-colors">
                    <amenity.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-400">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 mr-2">
                {language === "en" ? "Follow Us:" : "តាមដានយើង:"}
              </span>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <cert.icon className="w-5 h-5" />
                  <span className="text-sm">{cert.label}</span>
                </div>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Royal Hotel. {language === "en" ? "All rights reserved." : "រក្សាសិទ្ធិគ្រប់យ៉ាង។"}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {language === "en" ? "Designed with ❤️ in Cambodia" : "រចនាដោយ ❤️ នៅកម្ពុជា"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}