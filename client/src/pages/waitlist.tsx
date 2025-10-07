import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import WaitlistForm from "@/components/WaitlistForm";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuccessModal from "@/components/SuccessModal";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Waitlist Form Section */}
      <section className="py-24 px-6 relative" id="waitlist">
        <div className="max-w-2xl mx-auto">
          <WaitlistForm onSuccess={handleFormSuccess} />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Success Modal */}
      <SuccessModal 
        open={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
}
