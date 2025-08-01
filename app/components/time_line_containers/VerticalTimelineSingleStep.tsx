import { TimelineStep } from "@/app/types/TimelineStepType";

const VerticalTimelineSingleStep = ({ step }: { step: TimelineStep }) => {
	return (
		<div className="w-full flex flex-row items-center gap-x-6">
			{/* Step Circle Index Indicator */}
			<div className="flex-shrink-0 w-[80px] h-[80px] grid place-items-center rounded-full border-2 border-primaryButtonBgColor">
				<span className="text-[30px] font-bold text-white">{step.icon}</span>
			</div>

			{/* Step Title */}
			<span className="text-2xl text-white tracking-wide font-bold">
				{step.title}
			</span>
		</div>
	);
};

export default VerticalTimelineSingleStep;
