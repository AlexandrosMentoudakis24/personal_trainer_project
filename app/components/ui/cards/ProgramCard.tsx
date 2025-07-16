"use client";

import { Program } from "@/app/data/home_screen/AvailablePrograms";
import PrimaryButton from "../buttons/PrimaryButton";

const ProgramCard = ({
	program,
	isPrimaryCard,
}: {
	program: Program;
	isPrimaryCard: boolean;
}) => {
	return (
		<div
			className={`
      ${isPrimaryCard ? "w-[400px] h-[500px]" : "w-[380px] h-[450px]"}
      flex flex-col 
      justify-center items-center 
      ${isPrimaryCard ? "border-[3px] border-red-500" : "border-[2px] border-secondaryFgColor"}
      rounded-[20px]
      transition-all duration-300 transform 
      hover:cursor-pointer
      hover:scale-[1.025]
      ${isPrimaryCard ? "hover:shadow-[0_0_20px_15px_rgba(255,0,0,0.6)]" : "hover:shadow-[0_0_20px_15px_rgba(255,255,255,0.5)]"}
      px-[25px] py-[50px]
      gap-y-[30px]
    `}
		>
			<span className="text-2xl text-center text-white font-bold">
				{program.title}
			</span>
			<span className="text-xl text-secondaryFgColor tracking-wide">
				{program.subscription + " " + "Συνδρομή"}
			</span>
			<span className="text-lg text-center text-wrap text-secondaryFgColor">
				{program.description}
			</span>
			<div>
				<PrimaryButton text="Ξεκίνα" onButtonClickHandler={() => {}} />
			</div>
		</div>
	);
};

export default ProgramCard;
