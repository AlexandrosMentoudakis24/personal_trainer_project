export type AvailableFormInputTypes = "text" | "number" | "select";
export type AvailableInputTypes = Extract<
	AvailableFormInputTypes,
	"text" | "number"
>;
export type AvailableSelectType = Extract<AvailableFormInputTypes, "select">;

export interface UserInput {
	id: string;
	type: AvailableInputTypes;
	name: string;
	label: string;
	placeholder: string;
	isRequired: boolean;
}

export interface UserSelectInput {
	id: string;
	type: AvailableSelectType;
	name: string;
	label: string;
	isRequired: boolean;
	availableOptions: UserSelectInputOption[];
}

export interface UserSelectInputOption {
	id: string;
	value: string;
	placeholder: string;
}

export type FormUserInputField = UserInput | UserSelectInput;
