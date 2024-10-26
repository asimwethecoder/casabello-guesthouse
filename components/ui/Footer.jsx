import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Casabello Guest House
            </h4>
            <p className="text-gray-300">123 Zastron Street</p>
            <p className="text-gray-300">Bloemfontein</p>
            <p className="text-gray-300">Phone: (051) 123-4567</p>
            <p className="text-gray-300">Email: info@casabello.co.za</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/rooms", label: "Rooms" },
                { href: "/bookings", label: "Book Now" },
                { href: "/amenities", label: "Amenities" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { href: "#", label: "Facebook" },
                { href: "#", label: "Instagram" },
                { href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {currentYear} Casabello Guest House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
