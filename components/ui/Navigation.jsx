import Link from "next/link";

const Navigation = () => {
  const navLinks = [
    { href: "/rooms", label: "Rooms" },
    { href: "/bookings", label: "Book Now" },
    { href: "/amenities", label: "Amenities" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="hidden sm:block">
      <div className="ml-10 flex items-baseline space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
