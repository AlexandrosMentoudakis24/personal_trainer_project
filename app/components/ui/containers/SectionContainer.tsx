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
      w-[100%] md:w-[70%] lg:w-[60%] 
      grid place-items-center
      flex-wrap
      text-white text-wrap
      px-[20px]
      py-[25px] md:py-[50px] lg:py-[100px]
      gap-y-[30px]
    "
		>
			{children}
		</section>
	);
};

export default SectionContainer;
