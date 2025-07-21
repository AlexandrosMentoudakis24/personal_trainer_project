import { FaCheck } from "react-icons/fa6";

const PrivacyPolicyContainer = ({
	isPrivacyPolicyAccepted,
	onPrivacyPolicyStateChangedHandler,
}: {
	isPrivacyPolicyAccepted: boolean;
	onPrivacyPolicyStateChangedHandler: () => void;
}) => {
	const acceptanceButtonStyle = isPrivacyPolicyAccepted
		? "text-black font-extrabold border-none bg-primaryRedColor"
		: "border-[2px] border-white bg-transparent";

	return (
		<div
			className="
      w-full 
      flex flex-row 
      justify-start items-center 
      text-left 
      mt-[15px]
      gap-x-[10px]
      "
		>
			<button
				className={`
        w-[27px] h-[27px] 
        grid place-items-center 
        text-center 
        rounded-md 
        cursor-pointer
        ${acceptanceButtonStyle}
        `}
				onClick={() => {
					onPrivacyPolicyStateChangedHandler();
				}}
			>
				{isPrivacyPolicyAccepted && <FaCheck size={20} />}
			</button>
			<span className="text-xl font-extrabold">
				Συμφωνώ και αποδέχομαι την{" "}
				<a
					className="text-xl text-blue-500 font-semibold"
					target="_blank"
					href="./privacy-policy"
				>
					Πολιτική Απορρήτου.
				</a>
			</span>
		</div>
	);
};

export default PrivacyPolicyContainer;
