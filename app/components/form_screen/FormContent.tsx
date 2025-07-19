import SingleFormInputRow from "../ui/user_inputs/SingleFormInputRow";

import { formInputs } from "@/app/data/form_screen/FormInputs";

const FormContent = () => {
	return (
		<div className="w-full flex flex-col justify-start items-start px-[10px] gap-y-[20px]">
			<SingleFormInputRow userInputs={[formInputs[0], formInputs[1]]} />
			<SingleFormInputRow userInputs={[formInputs[2]]} />
			<SingleFormInputRow userInputs={[formInputs[3]]} />
			<SingleFormInputRow
				userInputs={[formInputs[4], formInputs[5], formInputs[6]]}
			/>
		</div>
	);
};

export default FormContent;
