const TitleText = ({ text }: { text: string }) => {
	return (
		<span
			className="
          w-[700px]
          text-4xl
          text-center md:text-center
          text-wrap
          font-bold tracking-wide
      bg-blue-500
          "
		>
			{text}
		</span>
	);
};

export default TitleText;
