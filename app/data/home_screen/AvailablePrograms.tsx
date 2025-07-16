export type Subscription = "Μηνιαία" | "Ετήσια";

export interface Program {
	id: string;
	title: string;
	description: string;
	subscription: Subscription;
	isPrimaryCardProgram: boolean;
}

export const availablePrograms: Program[] = [
	{
		id: "personal-training",
		title: "Personal Training",
		description:
			"Αυτό το πρόγραμμα περιλαμβάνει εξατομικευμένες προπονήσεις, καθοδήγηση και παρακολούθηση προόδου. Πρόγραμμα με μηνιαία συνδρομή.",
		subscription: "Μηνιαία",
		isPrimaryCardProgram: false,
	},
	{
		id: "personal-training-diet-plan-monthly",
		title: "Personal Training & Διατροφικό Πλάνο",
		description:
			"Αυτό το πρόγραμμα περιλαμβάνει όλα όσα προσφέρει το Πρόγραμμα Προσωπικής Προπόνησης, καθώς και εξατομικευμένο διατροφικό πλάνο. Πρόγραμμα με ετήσια συνδρομή.",
		subscription: "Ετήσια",
		isPrimaryCardProgram: true,
	},
	{
		id: "personal-training-diet-plan-yearly",
		title: "Personal Training & Διατροφικό Πλάνο",
		description:
			"Αυτό το πρόγραμμα περιλαμβάνει όλα όσα προσφέρει το Πρόγραμμα Προσωπικής Προπόνησης, καθώς και εξατομικευμένο διατροφικό πλάνο. Πρόγραμμα με μηνιαία συνδρομή.",
		subscription: "Μηνιαία",
		isPrimaryCardProgram: false,
	},
];
