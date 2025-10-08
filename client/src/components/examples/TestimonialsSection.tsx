import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia R.",
    quote: "Absolutely stunning Baccarat experience. The exclusivity and detail were unmatched!",
  },
  {
    name: "Liam D.",
    quote: "Joining the waitlist was the best decision. The team’s attention to elegance shows everywhere.",
  },
  {
    name: "Olivia P.",
    quote: "Luxury, simplicity, and class — Baccarat redefined. Can't wait for the next event.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-red-600 via-yellow-500 to-red-500 bg-clip-text text-transparent">
        What Our Members Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="bg-[#1a0000] p-8 rounded-2xl border border-red-700 shadow-lg hover:shadow-yellow-500/20 transition-all"
          >
            <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
            <p className="text-yellow-400 font-semibold">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
