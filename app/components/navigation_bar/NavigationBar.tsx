"use client";

import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../ui/buttons/PrimaryButton";
import NavigationBarItem from "./NavigationBarItem";

import { navigationBarLinks } from "@/app/data/NavigationBarLinks";

const NavigationBar = () => {
	return (
		<div className="w-full h-full flex flex-row justify-between items-center text-center bg-navigationBarBgColor px-[25px]">
			<Link href={"/"}>
				<Image
					src="/logo_icon.jpg"
					className="rounded-full"
					alt="Prime Trainer Logo"
					width={70}
					height={70}
				/>
			</Link>
			<div
				className="
        hidden [@media(min-width:1010px)]:flex
        h-full flex-row 
        justify-center items-center text-center 
        gap-x-[20px]
        "
			>
				{navigationBarLinks.map((link) => {
					return <NavigationBarItem key={link.id} navBarItem={link} />;
				})}
			</div>
			<div>
				<PrimaryButton text="Ξεκίνα Τώρα" onButtonClickHandler={() => {}} />
			</div>
		</div>
	);
};

export default NavigationBar;
