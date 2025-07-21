const TitleText = ({ text }: { text: string }) => {
	return (
		<span
			className="
      text-2xl md:text-4xl
      text-center
      font-bold tracking-wide
      "
		>
			{text}
		</span>
	);
};

export default TitleText;
