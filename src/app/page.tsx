import HeroSection from "@/components/HeroSection";
import RoomShowcase from "@/components/RoomShowcase";
import AmenitiesSection from "@/components/AmenitiesSection";
import BookingWidget from "@/components/BookingWidget";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RoomShowcase />
      <AmenitiesSection />
      <BookingWidget />
    </div>
  );
}