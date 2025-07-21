import Link from "next/link";

import { NavigationbarItemType } from "@/app/types/NavigationBarItemType";

const NavigationBarItem = ({
	navBarItem,
	isActive,
	onLinkClickHandler,
}: {
	navBarItem: NavigationbarItemType;
	isActive: boolean;
	onLinkClickHandler: () => void;
}) => {
	const linkStyle = isActive
		? "text-white bg-primaryButtonBgColor"
		: "text-gray-400 bg-transparent";

	return (
		<Link
			href={`/${navBarItem.target}`}
			onClick={onLinkClickHandler}
			className={`
        h-[50px] 
        flex flex-row 
        justify-center items-center 
        text-center text-md 
        font-bold 
        rounded-md 
        ${linkStyle}
        px-[16px]
      `}
		>
			{navBarItem.title}
		</Link>
	);
};

export default NavigationBarItem;
