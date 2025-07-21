"use client";

import VerticalTimeline from "../time_line_containers/VerticalTimeline";
import ExtraInformationText from "../ui/texts/ExtraInformationText";
import PrimaryButton from "../ui/buttons/PrimaryButton";

import { timelineSteps } from "@/app/data/home_screen/TimelineSteps";

const WorkProcessContainer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center py-[35px] gap-y-[35px]">
			<div className="flex flex-col justify-start items-center text-center text-wrap gap-y-[25px]">
				<span className="text-5xl text-white font-bold">
					Δες πώς δουλεύουμε
				</span>
				<ExtraInformationText text="Βήμα-Βήμα όλη η διαδικασία που ακολουθούμε από την γνωριμία, την πρώτη προπόνηση αλλά και μέχρι την τελευταία ημέρα που θα δουλέψουμε μαζί" />
			</div>
			<div className="w-fullmt-[20px]">
				<VerticalTimeline timelineSteps={timelineSteps} />
			</div>
			<div className="w-full grid place-items-center mt-[30px]">
				<span className="w-[190px] h-[65px]">
					<PrimaryButton onButtonClickHandler={() => {}} text="Ξεκίνα Τώρα" />
				</span>
			</div>
		</div>
	);
};

export default WorkProcessContainer;
