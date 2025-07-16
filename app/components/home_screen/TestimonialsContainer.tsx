"use client";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import ClientsTestimonialsCardsContainer from "../clients_testimonials/ClientTestimonialsCardsContainer";
import { clientsTestimonials } from "@/app/data/home_screen/ClientsTestimonials";
import CarouselSwapButton from "../ui/buttons/CarouselSwapButton";
import TestimonialsIndexingContainer from "./TestimonialsIndexingContainer";

const TestimonialsContainer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center py-[35px] gap-y-[45px]">
			<span className="text-5xl text-white font-bold">
				Ακούστε τους πελάτες μας
			</span>
			<div className="w-full flex flex-row justify-between items-center">
				<CarouselSwapButton
					icon={<IoIosArrowBack size={50} />}
					callbackFn={() => {
						console.log("pressed");
					}}
				/>
				<ClientsTestimonialsCardsContainer testimonials={clientsTestimonials} />
				<CarouselSwapButton
					icon={<IoIosArrowForward size={50} />}
					callbackFn={() => {
						console.log("pressed");
					}}
				/>
			</div>
			<TestimonialsIndexingContainer />
		</div>
	);
};

export default TestimonialsContainer;
