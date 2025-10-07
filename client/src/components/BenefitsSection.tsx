import { Trophy, Users, Sparkles, Shield, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "99% Win Rate",
    description: "Access proven strategies from professional players with verified track records",
  },
  {
    icon: Users,
    title: "Elite Community",
    description: "Network with high-stakes players and share insights in our private forums",
  },
  {
    icon: Sparkles,
    title: "VIP Tables",
    description: "Exclusive access to premium baccarat tables with higher limits and better odds",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced bankroll strategies to protect your capital and maximize returns",
  },
  {
    icon: TrendingUp,
    title: "Live Analytics",
    description: "Real-time game statistics and pattern recognition powered by AI",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock expert assistance and personalized coaching sessions",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Join <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Baccarat Elite</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Experience unparalleled advantages designed for serious players
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover-elevate active-elevate-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-yellow-500/20 mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
