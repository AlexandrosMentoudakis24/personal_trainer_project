import { ClientTestimonialType } from "@/app/types/ClientTestimonialType";
import ClientsTestimonialsCard from "./ClientTestimonialsCard";

const ClientsTestimonialsCardsContainer = ({
  testimonials,
}: {
  testimonials: ClientTestimonialType[];
}) => {
  return (
    <div>
      {testimonials.map((t) => {
        return <ClientsTestimonialsCard key={t.id} testimonial={t} />;
      })}
    </div>
  );
};

export default ClientsTestimonialsCardsContainer;
