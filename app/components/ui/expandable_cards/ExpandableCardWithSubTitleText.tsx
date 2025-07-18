"use client";

import { IoArrowDown } from "react-icons/io5";

import { useState } from "react";

const ExpandableCardWithSubTitleText = ({
	title,
	innerContentText,
}: {
	title: string;
	innerContentText: string;
}) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			className="
      w-full
      flex flex-col
      rounded-lg
      overflow-hidden 
      transition-all duration-500 ease-in-out 
      text-white
      bg-transparent 
      px-4 py-3
      gap-y-[10px]
      "
		>
			{/* Question Section */}

			<div
				onClick={() => setExpanded((prev) => !prev)}
				className="
        w-full 
        flex flex-row 
        justify-between items-center
        cursor-pointer 
        border-b-[2px] border-slate-300
        pb-[15px]
        "
			>
				<h2 className="text-2xl font-bold tracking-wide">{title}</h2>
				<span
					className={`transition-transform duration-500 ${
						expanded ? "rotate-180" : "rotate-0"
					}`}
				>
					<IoArrowDown size={28} />
				</span>
			</div>

			{/* Answer Section */}
			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0 mt-0"
				}`}
			>
				<p className="text-2xl text-slate-400">{innerContentText}</p>
			</div>
		</div>
	);
};

export default ExpandableCardWithSubTitleText;
