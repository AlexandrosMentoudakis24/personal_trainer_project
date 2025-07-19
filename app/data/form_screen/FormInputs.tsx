import { UserInput } from "@/app/types/UserInput";

export const formInputs: UserInput[] = [
	{
		id: "first-name",
		label: "Όνομα",
		name: "first-name",
		placeholder: "Όνομα",
		isRequired: false,
	},
	{
		id: "last-name",
		label: "Επίθετο",
		name: "last-name",
		placeholder: "Επίθετο",
		isRequired: false,
	},
	{
		id: "email",
		label: "Email",
		name: "email",
		placeholder: "Email",
		isRequired: false,
	},
	{
		id: "telephone",
		label: "Τηλέφωνο",
		name: "telephone",
		placeholder: "Τηλέφωνο",
		isRequired: false,
	},
	{
		id: "age",
		label: "Ηλικία",
		name: "age",
		placeholder: "Ηλικία",
		isRequired: false,
	},
	{
		id: "height",
		label: "Ύψος",
		name: "height",
		placeholder: "Ύψος (π.χ 180)",
		isRequired: false,
	},
	{
		id: "weight",
		label: "Βάρος",
		name: "weight",
		placeholder: "Βάρος (π.χ 80)",
		isRequired: false,
	},
];
