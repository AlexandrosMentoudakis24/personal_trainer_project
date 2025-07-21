import {
	AvailableFormInputType,
	FormUserInputField,
} from "@/app/types/UserInput";

export const formInputs: FormUserInputField[] = [
	{
		id: "first-name",
		type: AvailableFormInputType.Text,
		label: "Όνομα",
		name: "first-name",
		placeholder: "Όνομα",
		isRequired: true,
	},
	{
		id: "last-name",
		type: AvailableFormInputType.Text,
		label: "Επίθετο",
		name: "last-name",
		placeholder: "Επίθετο",
		isRequired: true,
	},
	{
		id: "email",
		type: AvailableFormInputType.Text,
		label: "Email",
		name: "email",
		placeholder: "Email",
		isRequired: true,
	},
	{
		id: "telephone",
		type: AvailableFormInputType.Number,
		label: "Τηλέφωνο",
		name: "telephone",
		placeholder: "Τηλέφωνο",
		isRequired: true,
	},
	{
		id: "gender",
		label: "Φύλο",
		name: "gender",
		type: AvailableFormInputType.Select,
		isRequired: true,
		availableOptions: [
			{ id: "male", value: "male", placeholder: "Άνδρας" },
			{ id: "female", value: "female", placeholder: "Γυναίκα" },
		],
	},
	{
		id: "height",
		type: AvailableFormInputType.Number,
		label: "Ύψος",
		name: "height",
		placeholder: "Ύψος σε εκατοστά (π.χ. 180)",
		isRequired: true,
	},
	{
		id: "weight",
		type: AvailableFormInputType.Number,
		label: "Βάρος",
		name: "weight",
		placeholder: "Βάρος σε κιλά (π.χ. 80)",
		isRequired: true,
	},
	{
		id: "age",
		type: AvailableFormInputType.Number,
		label: "Ηλικία",
		name: "age",
		placeholder: "Ηλικία",
		isRequired: true,
	},
	{
		id: "weekly-training-time",
		type: AvailableFormInputType.Number,
		label: "Πόσες ημέρες μπορείς να προπονηθείς ανά εβδομάδα?",
		name: "weekly-training-time",
		placeholder:
			"Πόσες ημέρες μπορείς να αφιερώσεις για προπόνηση ανά εβδομάδα (π.χ. 4)",
		isRequired: true,
	},
	{
		id: "daily-training-hours",
		type: AvailableFormInputType.Number,
		label: "Πόσες ώρες μπορείς να προπονηθείς ανά ημέρα",
		name: "daily-training-hours",
		placeholder: "Πόσες ώρες έχεις ελεύθερες ανά ημέρα (π.χ. 3)",
		isRequired: true,
	},
	{
		id: "training-equipment",
		type: AvailableFormInputType.Select,
		label: "Σε τι είδους εξοπλισμό έχεις πρόσβαση για τις προπονήσεις σου?",
		name: "training-equipment",
		isRequired: true,
		availableOptions: [
			{
				id: "home-with-equipment",
				value: "home-with-equipment",
				placeholder: "Έχω εξοπλισμό στο σπίτι",
			},
			{
				id: "gym",
				value: "gym",
				placeholder: "Θα πηγαίνω γυμναστήριο",
			},
			{
				id: "home-without-equipment",
				value: "home-without-equipment",
				placeholder: "Σπίτι αλλά χωρίς εξοπλισμό",
			},
		],
	},
	{
		id: "sport-engagement",
		type: AvailableFormInputType.Select,
		label: "Έχεις ξανά ασχοληθεί με τον αθλητισμό?",
		name: "sport-engagement",
		isRequired: true,
		availableOptions: [
			{
				id: "1",
				value: "none",
				placeholder: "Καθόλου",
			},
			{
				id: "2",
				value: "1-2",
				placeholder: "Λίγο (1 με 2 χρόνια)",
			},
			{
				id: "3",
				value: "3-4",
				placeholder: "Αρκετά (3 με 4 χρόνια)",
			},
			{
				id: "4",
				value: "4+",
				placeholder: "Πολύ (πάνω από 4 χρόνια)",
			},
		],
	},
	{
		id: "injuries",
		type: AvailableFormInputType.Select,
		label: "Είχες κάποιο πρόσφατο τραυματισμό ή πρόβλημα υγείας?",
		name: "injuries",
		isRequired: true,
		availableOptions: [
			{
				id: "1",
				value: "none",
				placeholder: "Τίποτα από τα δύο",
			},
			{
				id: "2",
				value: "injury",
				placeholder: "Είχα τραυματισμό",
			},
			{
				id: "3",
				value: "health-problem",
				placeholder: "Είχα πρόβλημα υγείας",
			},
			{
				id: "4",
				value: "injury-and-health-problem",
				placeholder: "Είχα και από τα δύο",
			},
		],
	},
	{
		id: "goals",
		type: AvailableFormInputType.Select,
		label: "Ποιος είναι ο στόχος σου?",
		name: "goals",
		isRequired: true,
		availableOptions: [
			{
				id: "1",
				value: "muscle-power",
				placeholder: "Αύξηση μυϊκής μάζας",
			},
			{
				id: "2",
				value: "lose-weights",
				placeholder: "Μείωση λίπους",
			},
			{
				id: "3",
				value: "better-physical-state",
				placeholder: "Βελτίωση φυσικής κατάστασης",
			},
			{
				id: "4",
				value: "stress-relief",
				placeholder: "Εκτόνωση / Απώλεια άγχους",
			},
		],
	},
	{
		id: "program",
		type: AvailableFormInputType.Select,
		label: "Ενδιαφέρομαι για:",
		name: "program",
		isRequired: true,
		availableOptions: [
			{
				id: "1",
				value: "personalized-program",
				placeholder: "Training Program - Εξατομικευμένο πρόγραμμα άσκησης",
			},
			{
				id: "2",
				value: "personalized-diet",
				placeholder: "Nutrition Diet Plan - Εξατομικευμένο πρόγραμμα διατροφής",
			},
			{
				id: "3",
				value: "personalized-program-and-diet",
				placeholder:
					"Training And Nutrition Plans - Εξατομικευμένα προγράμματα άσκησης και διατροφής",
			},
		],
	},
	{
		id: "budget",
		type: AvailableFormInputType.Number,
		label:
			"Ποιο είναι το μέγιστο χρηματικό ποσό (budget) που μπορείς να διαθέσεις ανά μήνα?",
		name: "budget",
		placeholder: "Διαθέσιμο budget ανά μήνα (π.χ. 50)",
		isRequired: true,
	},
];
