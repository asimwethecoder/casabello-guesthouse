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

export const RoomsSection = () => {
  const rooms = [
    {
      title: "Luxury Suite",
      image: "/placeholder.svg",
      description:
        "Experience comfort and luxury in our beautifully designed luxury suite.",
      price: "R1,500 per night",
    },
    {
      title: "Garden View Room",
      image: "/placeholder.svg",
      description:
        "Enjoy peaceful views of our garden from this comfortable room.",
      price: "R1,200 per night",
    },
    {
      title: "Family Room",
      image: "/placeholder.svg",
      description:
        "Spacious accommodation perfect for families traveling together.",
      price: "R1,800 per night",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Rooms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.title} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle>{room.title}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {room.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>{room.description}</CardDescription>
                <Button asChild className="mt-4 w-full">
                  <Link
                    href={`/rooms/${room.title
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
