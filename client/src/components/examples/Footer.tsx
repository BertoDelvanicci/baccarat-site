export default function Footer() {
  return (
    <footer className="bg-[#0d0000] border-t border-red-800 text-center text-gray-400 py-6 text-sm">
      <p>
        © {new Date().getFullYear()} Baccarat Waitlist. All Rights Reserved.
      </p>
      <p className="mt-2">
        Crafted with <span className="text-red-600">♥</span> for true Baccarat enthusiasts.
      </p>
    </footer>
  );
}
