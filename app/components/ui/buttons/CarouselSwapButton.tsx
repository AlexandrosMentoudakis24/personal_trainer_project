import { JSX } from "react";

const CarouselSwapButton = ({
	icon,
	callbackFn,
}: {
	icon: JSX.Element;
	callbackFn: () => void;
}) => {
	return (
		<button className="hover:cursor-pointer" onClick={callbackFn}>
			{icon}
		</button>
	);
};

export default CarouselSwapButton;
