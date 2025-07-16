const SectionContainer = ({
	children,
	sectionId,
}: Readonly<{
	children: React.ReactNode;
	sectionId: string;
}>) => {
	return (
		<section
			id={sectionId}
			className="
      w-full 
      md:w-[70%] xl:w-[40%]
      grid place-items-center
      text-white
      py-[25px] md:py-[50px] lg:py-[100px]
      gap-y-[30px]
    "
		>
			{children}
		</section>
	);
};

export default SectionContainer;
