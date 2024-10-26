import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Utensils, Wifi } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Casabello Guest House
              </h1>
            </div>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-6">
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
                  href="/amenities"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  Amenities
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

      <main className="flex-grow">
        <section className="relative h-[60vh]">
          <Image
            src="/casabello-welcome.jpeg?height=600&width=1200"
            alt="Casabello Guest House in Bloemfontein"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-extrabold sm:text-5xl mb-4">
                Welcome to Casabello Bloemfontein
              </h2>
              <p className="text-xl mb-8">
                Experience comfort and hospitality in the heart of the Free
                State
              </p>
              <Button asChild>
                <Link href="/bookings">Book Your Stay</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> Central Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Located in the heart of Bloemfontein, close to major
                  attractions and businesses.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wifi className="mr-2" /> Free Wi-Fi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay connected with our complimentary high-speed internet
                  access.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="mr-2" /> Traditional Breakfast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Start your day with a delicious Free State-inspired breakfast.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2" /> Flexible Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Easy reservation process with free cancellation options
                  available.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-8">
              Featured Rooms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Luxury Suite", "Garden View Room", "Family Room"].map(
                (room) => (
                  <Card key={room}>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={room}
                      width={400}
                      height={300}
                      className="rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{room}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Experience comfort and luxury in our beautifully
                        designed {room.toLowerCase()}.
                      </CardDescription>
                      <Button asChild className="mt-4">
                        <Link
                          href={`/rooms/${room
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            What Our Guests Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Thabo Molefe",
                comment: "Excellent service and beautiful rooms!",
              },
              {
                name: "Anita van der Merwe",
                comment:
                  "The breakfast was amazing. Will definitely come back!",
              },
              {
                name: "David Nkosi",
                comment:
                  "Perfect location and friendly staff. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{testimonial.comment}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-8">
              Explore Bloemfontein
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Naval Hill",
                  description:
                    "Scenic viewpoint with a giant Nelson Mandela statue.",
                },
                {
                  name: "Free State National Botanical Garden",
                  description:
                    "Beautiful gardens showcasing indigenous plants.",
                },
                {
                  name: "National Museum",
                  description:
                    "Explore the natural and cultural history of the Free State.",
                },
              ].map((attraction, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{attraction.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{attraction.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Casabello Guest House
              </h4>
              <p>123 Zastron Street, Bloemfontein</p>
              <p>Phone: (051) 123-4567</p>
              <p>Email: info@casabello.co.za</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link href="/bookings">Book Now</Link>
                </li>
                <li>
                  <Link href="/amenities">Amenities</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Casabello Guest House. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
