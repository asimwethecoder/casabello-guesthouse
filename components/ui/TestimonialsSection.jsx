import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Thabo Molefe",
      comment: "Excellent service and beautiful rooms!",
      rating: 5,
    },
    {
      name: "Anita van der Merwe",
      comment: "The breakfast was amazing. Will definitely come back!",
      rating: 5,
    },
    {
      name: "David Nkosi",
      comment: "Perfect location and friendly staff. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold text-center mb-8">
        What Our Guests Say
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {testimonial.comment}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
