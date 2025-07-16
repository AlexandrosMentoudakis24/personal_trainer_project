const SquareIndexIndicator = ({ isActive }: { isActive: boolean }) => {
	const bgColor = isActive
		? "bg-testimonialsActiveIndexBgColor"
		: "bg-testimonialsInactiveIndexBgColor";

	return <span className={`w-[15px] h-[15px] ${bgColor}`}></span>;
};

export default SquareIndexIndicator;
