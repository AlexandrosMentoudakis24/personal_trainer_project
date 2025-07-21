"use client";

import { useState } from "react";

import PrivacyPolicyContainer from "../privacy_policy/PrivacyPolicyContainer";
import SingleFormInputRow from "../ui/user_inputs/SingleFormInputRow";
import PrimaryButton from "../ui/buttons/PrimaryButton";

import { formInputs } from "@/app/data/form_screen/FormInputs";

const FormContent = () => {
	const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] =
		useState<boolean>(false);

	return (
		<div className="w-full flex flex-col justify-start items-start px-[10px] gap-y-[20px]">
			<SingleFormInputRow userInputs={[formInputs[0], formInputs[1]]} />
			<SingleFormInputRow userInputs={[formInputs[2], formInputs[3]]} />
			<SingleFormInputRow
				userInputs={[formInputs[4], formInputs[5], formInputs[6]]}
			/>
			<SingleFormInputRow userInputs={[formInputs[7]]} />
			<SingleFormInputRow userInputs={[formInputs[8]]} />
			<SingleFormInputRow userInputs={[formInputs[9]]} />
			<SingleFormInputRow userInputs={[formInputs[10]]} />
			<SingleFormInputRow userInputs={[formInputs[11]]} />
			<SingleFormInputRow userInputs={[formInputs[12]]} />
			<SingleFormInputRow userInputs={[formInputs[13]]} />
			<SingleFormInputRow userInputs={[formInputs[14]]} />
			<SingleFormInputRow userInputs={[formInputs[15]]} />
			<PrivacyPolicyContainer
				isPrivacyPolicyAccepted={isPrivacyPolicyAccepted}
				onPrivacyPolicyStateChangedHandler={() => {
					setIsPrivacyPolicyAccepted((prevState) => !prevState);
				}}
			/>
			<span className="w-full h-[65px] grid place-items-center mt-[15px]">
				<PrimaryButton
					text="Υποβολή"
					onButtonClickHandler={() => {
						if (!isPrivacyPolicyAccepted) {
							alert("You must accept our Privacy Policy first!");

							return;
						}
					}}
				/>
			</span>
		</div>
	);
};

export default FormContent;
