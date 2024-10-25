import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Casabello Guest House
              </h1>
            </div>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/rooms"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  Rooms
                </Link>
                <Link
                  href="/bookings"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Welcome to Casabello
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Experience luxury and comfort in our beautiful guest house
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
