"use client";

const PrimaryButton = ({
	text,
	onButtonClickHandler,
}: {
	text: string;
	onButtonClickHandler: () => void;
}) => {
	return (
		<button
			className="
      w-full h-full 
      hover:cursor-pointer
      grid place-items-center 
      rounded-md
      font-extrabold 
      text-center text-[22px] text-white
      bg-primaryButtonBgColor
      hover:opacity-80
      active:opacity-60
      px-[16px] py-[10px]
      "
			onClick={onButtonClickHandler}
		>
			{text}
		</button>
	);
};

export default PrimaryButton;
