import { Search, MessageCircle, Car } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search your ride",
    description: "Enter your departure and destination to find available rides that match your schedule.",
  },
  {
    icon: MessageCircle,
    title: "Connect with drivers",
    description: "Message drivers directly, ask questions, and confirm the details of your journey.",
  },
  {
    icon: Car,
    title: "Enjoy the ride",
    description: "Meet at the pickup point, share the journey, and save money while reducing your carbon footprint.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started is easy. Find your ride in just three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30" />
              )}

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
