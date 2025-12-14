import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const popularRoutes = [
  {
    from: "New York",
    to: "Boston",
    price: "$25",
    duration: "4h",
    rides: 156,
    rating: 4.8,
  },
  {
    from: "Los Angeles",
    to: "San Francisco",
    price: "$35",
    duration: "6h",
    rides: 243,
    rating: 4.9,
  },
  {
    from: "Chicago",
    to: "Detroit",
    price: "$20",
    duration: "5h",
    rides: 89,
    rating: 4.7,
  },
  {
    from: "Seattle",
    to: "Portland",
    price: "$15",
    duration: "3h",
    rides: 178,
    rating: 4.8,
  },
  {
    from: "Miami",
    to: "Orlando",
    price: "$18",
    duration: "4h",
    rides: 134,
    rating: 4.6,
  },
  {
    from: "Austin",
    to: "Houston",
    price: "$22",
    duration: "3h",
    rides: 112,
    rating: 4.9,
  },
];

export function PopularRoutes() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Routes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of travelers on these frequently shared routes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{route.from}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <div className="flex-1 text-right">
                    <p className="font-semibold text-foreground">{route.to}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary">{route.price}</span>
                    <span className="text-sm text-muted-foreground">{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium">{route.rating}</span>
                    <span className="text-xs text-muted-foreground">({route.rides} rides)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
