import { FormUserInputField } from "@/app/types/UserInput";

const UserTextInput = ({ userInput }: { userInput: FormUserInputField }) => {
	return (
		<div className="w-full flex flex-col justify-start items-start gap-y-[10px]">
			<label className="text-xl text-white" htmlFor={userInput.name}>
				{userInput.label}
			</label>
			<input
				className="
        w-full h-[50px] 
        text-lg text-white
        rounded-md border-2 border-white 
        focus:outline-none focus:border-primaryRedColor
        placeholder:text-lg placeholder:text-secondaryFgColor
        px-[10px]
        "
				type={userInput.type}
				name={userInput.name}
				placeholder={userInput.placeholder}
				required={userInput.isRequired}
			/>
		</div>
	);
};

export default UserTextInput;
