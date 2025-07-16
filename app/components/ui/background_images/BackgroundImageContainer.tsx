const BackgroundImageContainer = ({ imageUrl }: { imageUrl: string }) => {
	return (
		<>
			<div
				className={`absolute inset-0 bg-[url('/${imageUrl}')] bg-contain bg-start bg-repeat z-0`}
			/>

			{/* === Dark Transparent Overlay === */}
			<div className="absolute inset-0 bg-black/80 z-0" />
		</>
	);
};

export default BackgroundImageContainer;
