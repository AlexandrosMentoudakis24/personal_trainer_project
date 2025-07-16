"use client";

import { useState } from "react";

import { NavigationBarLinks } from "@/app/data/NavigationBarLinks";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import NavigationBarItem from "./NavigationBarItem";
import Image from "next/image";

const NavigationBar = () => {
	const [activeLinkId, setActiveLinkId] = useState<string>("home");

	return (
		<div className="w-full h-full flex flex-row justify-between items-center text-center bg-navigationBarBgColor px-[25px]">
			<Image
				src="/logo_icon.jpg"
				className="rounded-full"
				alt="Prime Trainer Logo"
				width={70}
				height={70}
			/>
			<div
				className="
        hidden [@media(min-width:1010px)]:flex
        h-full flex-row 
        justify-center items-center text-center 
        gap-x-[20px]
        "
			>
				{NavigationBarLinks.map((link) => {
					return (
						<NavigationBarItem
							key={link.id}
							navBarItem={link}
							isActive={link.id === activeLinkId}
							onLinkClickHandler={() => {
								setActiveLinkId(link.id);
							}}
						/>
					);
				})}
			</div>
			<div>
				<PrimaryButton text="Ξεκίνα Τώρα" onButtonClickHandler={() => {}} />
			</div>
		</div>
	);
};

export default NavigationBar;
