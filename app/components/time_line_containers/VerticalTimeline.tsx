import { TimelineStep } from "@/app/types/TimelineStepType";
import VerticalTimelineSingleStep from "./VerticalTimelineSingleStep";

const VerticalTimeline = ({
	timelineSteps,
}: {
	timelineSteps: TimelineStep[];
}) => {
	const halfArrayLength = Math.round(timelineSteps.length / 2);

	const firstSlice = timelineSteps.slice(0, halfArrayLength);
	const secondSlice = timelineSteps.slice(halfArrayLength);

	return (
		<div className="w-full grid grid-cols-2 place-items-center gap-x-[35px] gap-y-[35px]">
			<div className="col-span-1 w-full flex flex-col gap-y-[35px]">
				{firstSlice.map((step) => {
					return <VerticalTimelineSingleStep key={step.id} step={step} />;
				})}
			</div>
			<div className="col-span-1 w-full flex flex-col gap-y-[35px]">
				{secondSlice.map((step) => {
					return <VerticalTimelineSingleStep key={step.id} step={step} />;
				})}
			</div>
		</div>
	);
};

export default VerticalTimeline;
