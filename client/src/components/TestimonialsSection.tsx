import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Professional Player",
    initials: "MC",
    rating: 5,
    text: "The strategies I learned here transformed my game completely. My win rate has never been higher.",
  },
  {
    name: "Sarah Williams",
    role: "VIP Member",
    initials: "SW",
    rating: 5,
    text: "Best investment I've made. The community support and insider tips are worth every penny.",
  },
  {
    name: "David Rodriguez",
    role: "Elite Player",
    initials: "DR",
    rating: 5,
    text: "From beginner to pro in 6 months. The personalized coaching made all the difference.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Elite Players</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Join thousands of winners who've elevated their game
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-primary/30">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-yellow-500 text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Member Count */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/5 rounded-full px-8 py-4 border border-white/10">
            <div className="flex -space-x-2">
              {['AK', 'JL', 'MR', 'SB'].map((initials, i) => (
                <Avatar key={i} className="w-10 h-10 border-2 border-background">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-yellow-500 text-white text-xs font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-foreground/80 font-medium">
              Join <span className="text-primary font-bold">1,000+</span> Elite Members
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
