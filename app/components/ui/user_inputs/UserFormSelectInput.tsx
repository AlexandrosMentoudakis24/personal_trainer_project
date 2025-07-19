import { UserSelectInput } from "@/app/types/UserInput";

const UserFormSelectInput = ({ userInput }: { userInput: UserSelectInput }) => {
	return (
		<div className="w-full flex flex-col justify-start items-start gap-y-[10px] relative">
			<label className="text-xl text-white" htmlFor={userInput.name}>
				{userInput.label}
			</label>

			<div className="relative w-full">
				<select
					className="
          w-full h-[50px]
          appearance-none
          text-lg text-white
          bg-transparent
          rounded-md border-2 border-white
          focus:outline-none focus:border-primaryRedColor
          placeholder:text-lg placeholder:text-secondaryFgColor
          px-[10px] pr-[40px]  // space for arrow
        "
					name={userInput.name}
					required={userInput.isRequired}
				>
					{userInput.availableOptions.map((option) => (
						<option key={option.id} value={option.value}>
							{option.placeholder}
						</option>
					))}
				</select>

				{/* Downward arrow icon */}
				<div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-md">
					▼
				</div>
			</div>
		</div>
	);
};

export default UserFormSelectInput;
