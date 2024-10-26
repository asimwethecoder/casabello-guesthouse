import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AttractionsSection = () => {
  const attractions = [
    {
      name: "Naval Hill",
      description: "Scenic viewpoint with a giant Nelson Mandela statue.",
      distance: "10 minutes drive",
    },
    {
      name: "Free State National Botanical Garden",
      description: "Beautiful gardens showcasing indigenous plants.",
      distance: "15 minutes drive",
    },
    {
      name: "National Museum",
      description:
        "Explore the natural and cultural history of the Free State.",
      distance: "5 minutes drive",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-8">
          Explore Bloemfontein
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle>{attraction.name}</CardTitle>
                <CardDescription className="text-sm text-primary">
                  {attraction.distance}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {attraction.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
