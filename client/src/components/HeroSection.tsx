import { Sparkles, Crown } from "lucide-react";
import baccaratTableImg from "@assets/240_F_887069667_3dkMfr3V0KZY64w783NFNO2q2eURlIUs_1759875111099.jpg";
import cardImg from "@assets/240_F_458186344_Dw0uenV5NZvVkWMXCPMMteMWr9egyjp0_1759875111099.jpg";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${baccaratTableImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      </div>

      {/* Floating Card Animation */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20 animate-float hidden md:block">
        <img src={cardImg} alt="" className="w-32 h-auto rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Limited Spots Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fadeIn">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
          <span className="text-sm font-medium text-foreground tracking-wide uppercase">
            Only 50 Spots Remaining
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Baccarat</span>{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Elite
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Join the most exclusive baccarat community
        </p>
        
        <p className="text-base md:text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          Access professional strategies, VIP tables, and personalized mentorship from world-class players
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "99.2%", label: "Success Rate" },
            { value: "$2M+", label: "Members Won" },
            { value: "24/7", label: "VIP Support" },
            { value: "1000+", label: "Elite Members" },
          ].map((stat, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-serif mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  );
}
