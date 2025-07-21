import UserFormSelectInput from "./UserFormSelectInput";
import UserTextInput from "./UserTextInput";

import {
	AvailableFormInputType,
	FormUserInputField,
	UserInput,
	UserSelectInput,
} from "@/app/types/UserInput";

const configureGridClass = (totalSubGridsSum: number) => {
	const gridClassNameInfos = "grid grid-cols-1 ";

	switch (totalSubGridsSum) {
		case 1:
			return `${gridClassNameInfos} md:grid-cols-1`;
		case 2:
			return `${gridClassNameInfos} md:grid-cols-2`;
		case 3:
			return `${gridClassNameInfos} md:grid-cols-3`;
		default:
			return `${gridClassNameInfos} md:grid-cols-1`;
	}
};

const constructFormFieldElement = (userInput: FormUserInputField) => {
	switch (userInput.type) {
		case AvailableFormInputType.Select:
			return <UserFormSelectInput userInput={userInput as UserSelectInput} />;
		default:
			return <UserTextInput userInput={userInput as UserInput} />;
	}
};

const SingleFormInputRow = ({
	userInputs,
}: {
	userInputs: FormUserInputField[];
}) => {
	const totalInputsSum = userInputs.length;

	const gridClassNameInfos = configureGridClass(totalInputsSum);

	return (
		<div className={`w-full ${gridClassNameInfos} gap-x-[15px] gap-y-[20px]`}>
			{userInputs.map((userInput) => {
				return (
					<div key={userInput.id} className="col-span-1">
						{constructFormFieldElement(userInput)}
					</div>
				);
			})}
		</div>
	);
};

export default SingleFormInputRow;
