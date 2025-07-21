"use client";

import { useRouter } from "next/navigation";

import PrimaryButton from "../buttons/PrimaryButton";

import { Program } from "@/app/data/home_screen/AvailablePrograms";

const ProgramCard = ({
	program,
	isPrimaryCard,
}: {
	program: Program;
	isPrimaryCard: boolean;
}) => {
	const router = useRouter();

	return (
		<div
			className={`
      ${isPrimaryCard ? "w-[450px]" : "w-[400px]"}
      flex flex-col 
      justify-center items-center 
      ${isPrimaryCard ? "border-[3px] border-red-500" : "border-[2px] border-secondaryFgColor"}
      rounded-[20px]
      transition-all duration-300 transform 
      hover:cursor-pointer
      hover:scale-[1.025]
      ${isPrimaryCard ? "hover:shadow-[0_0_20px_15px_rgba(255,0,0,0.6)]" : "hover:shadow-[0_0_20px_15px_rgba(255,255,255,0.5)]"}
      px-[25px] 
      ${isPrimaryCard ? "py-[50px]" : "py-[40px]"}
      gap-y-[30px]
    `}
		>
			<span className="text-3xl text-center text-white font-semibold">
				{program.title}
			</span>
			<span className="text-2xl text-center text-wrap text-secondaryFgColor font-bold">
				{program.description}
			</span>
			<div>
				<PrimaryButton
					text="Ξεκίνα"
					onButtonClickHandler={() => {
						router.push("./form");
					}}
				/>
			</div>
		</div>
	);
};

export default ProgramCard;
