import SquareIndexIndicator from "../ui/index_indicators/SquareIndexIndicators";

const TestimonialsIndexingContainer = () => {
	return (
		<div className="h-[20px] w-full flex flex-row justify-center items-center py-[10px] gap-x-[15px]">
			<SquareIndexIndicator isActive={true} />
			<SquareIndexIndicator isActive={false} />
			<SquareIndexIndicator isActive={false} />
			<SquareIndexIndicator isActive={false} />
		</div>
	);
};

export default TestimonialsIndexingContainer;
