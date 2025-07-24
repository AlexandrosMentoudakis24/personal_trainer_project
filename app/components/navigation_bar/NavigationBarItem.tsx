import Link from "next/link";

import { NavigationbarItemType } from "@/app/types/NavigationBarItemType";

const NavigationBarItem = ({
	navBarItem,
}: {
	navBarItem: NavigationbarItemType;
}) => {
	return (
		<Link
			href={`/${navBarItem.target}`}
			className="
        relative inline-block 
        h-[40px] 
        text-xl font-bold tracking-wide
        after:content-[''] after:absolute after:left-0 
        after:-bottom-0 after:w-0 after:h-[3px]
        after:bg-primaryRedColor
        after:rounded-full
        after:transition-all after:duration-500 hover:after:w-full
        px-[16px]
      "
		>
			{navBarItem.title}
		</Link>
	);
};

export default NavigationBarItem;
