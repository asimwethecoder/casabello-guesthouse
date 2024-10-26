import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => (
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
          Experience comfort and hospitality in the heart of the Free State
        </p>
        <Button asChild>
          <Link href="/bookings">Book Your Stay</Link>
        </Button>
      </div>
    </div>
  </section>
);
