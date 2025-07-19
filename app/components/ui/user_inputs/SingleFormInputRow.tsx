import UserTextInput from "./UserTextInput";

import { UserInput } from "@/app/types/UserInput";

const SingleFormInputRow = ({ userInputs }: { userInputs: UserInput[] }) => {
	const totalInputsSum = userInputs.length;

	let gridClassNameInfos = "md:grid-cols-1";

	switch (totalInputsSum) {
		case 1:
			gridClassNameInfos = "md:grid-cols-1";
		case 2:
			gridClassNameInfos = "md:grid-cols-2";
		case 3:
			gridClassNameInfos = "md:grid-cols-3";
		default:
			gridClassNameInfos = "md:grid-cols-1";
	}

	return (
		<div
			className={`w-full grid grid-cols-1 ${gridClassNameInfos} gap-x-[15px] gap-y-[20px]`}
		>
			{userInputs.map((userInput) => {
				return (
					<div key={userInput.id} className="col-span-1">
						<UserTextInput userInput={userInput} />
					</div>
				);
			})}
		</div>
	);
};

export default SingleFormInputRow;
