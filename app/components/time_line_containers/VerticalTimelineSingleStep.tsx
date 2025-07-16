import { TimelineStep } from "@/app/types/TimelineStepType";

const VerticalTimelineSingleStep = ({ step }: { step: TimelineStep }) => {
	return (
		<div className="w-full flex flex-row items-center gap-x-6">
			{/* Step Circle Index Indicator */}
			<div className="flex-shrink-0 w-[90px] h-[90px] grid place-items-center rounded-full border-2 border-primaryButtonBgColor">
				<span className="text-[35px] font-bold text-white">{step.icon}</span>
			</div>

			{/* Step Title */}
			<span className="text-3xl text-white tracking-wide font-bold">
				{step.title}
			</span>
		</div>
	);
};

export default VerticalTimelineSingleStep;
