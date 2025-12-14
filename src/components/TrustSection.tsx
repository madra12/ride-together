import { Shield, Users, Leaf, CreditCard } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "All members are verified with ID and reviews from fellow travelers.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a trusted community of people sharing rides and experiences.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint by sharing rides instead of driving alone.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay safely through our platform with multiple payment options.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We prioritize safety, community, and sustainability in every ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
