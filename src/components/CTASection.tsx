import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to start sharing rides?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Whether you're looking to save money on your commute or want to offer rides and earn extra income, join our community today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Find a Ride
            </Button>
            <Button variant="heroOutline" size="xl">
              <Car className="w-5 h-5" />
              Offer a Ride
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
