import { ClientTestimonialType } from "@/app/types/ClientTestimonialType";

const ClientsTestimonialsCard = ({
  testimonial,
}: {
  testimonial: ClientTestimonialType;
}) => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-[40px]">
      <div className="flex flex-col justify-start items-start text-left rounded-xl bg-testimonialsCardBgColor p-[40px] gap-y-[32px]">
        <span className="max-w-[500px] text-[28px] text-wrap text-testimonialsCardContentTextColor">
          {testimonial.content}
        </span>
        <span className="text-[20px] text-testimonialsCardCreatorTextColor">
          {testimonial.creator}
        </span>
      </div>
      <div className="w-[300px] h-[400px] border-2 rounded-xl border-white"></div>
    </div>
  );
};

export default ClientsTestimonialsCard;
