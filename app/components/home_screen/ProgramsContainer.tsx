import ProgramCard from "../ui/cards/ProgramCard";

import { availablePrograms } from "@/app/data/home_screen/AvailablePrograms";

const ProgramsContainer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center py-[35px] gap-y-[45px]">
			<div className="w-full flex flex-col justify-start items-center gap-y-[20px]">
				<span className="text-5xl text-white font-bold">
					Διαθέσιμα Προγράμματα
				</span>
				<span className="text-2xl text-secondaryFgColor font-semibold">
					Διάλεξε το πρόγραμμά σου
				</span>
			</div>
			<div className="w-full flex flex-row justify-center items-center gap-x-[50px]">
				{availablePrograms.map((p) => {
					return (
						<ProgramCard
							key={p.id}
							program={p}
							isPrimaryCard={p.isPrimaryCardProgram}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProgramsContainer;
