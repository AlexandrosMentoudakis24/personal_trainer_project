const ExtraInformationText = ({ text }: { text: string }) => {
	return (
		<span
			className="
          text-md md:text-2xl 
          text-center md:text-center
          text-secondaryFgColor font-bold tracking-wide
          "
		>
			{text}
		</span>
	);
};

export default ExtraInformationText;
