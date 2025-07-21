export enum AvailableFormInputType {
	PersonalTraining = "personal-training",
	PersonalTrainingAndDietPlan = "personal-training-and-diet-plan",
	DietPlan = "diet-plan",
}

export interface Program {
	id: string;
	type: AvailableFormInputType;
	title: string;
	description: string;
	isPrimaryCardProgram: boolean;
}

export const availablePrograms: Program[] = [
	{
		id: "diet-plan",
		type: AvailableFormInputType.PersonalTraining,
		title: "Πλάνο Διατροφής",
		description:
			"Αυτό το πρόγραμμα περιλαμβάνει την δημιουργία ενός εξατομικευμένου διατροφικού πλάνου, προσαρμοσμένο πάνω στους στόχους και τις ανάγκες σου.",
		isPrimaryCardProgram: false,
	},
	{
		id: "personal-training-and-diet-plan",
		type: AvailableFormInputType.PersonalTrainingAndDietPlan,
		title: "Personal Training & Πλάνο Διατροφής",
		description:
			"Αυτό το πρόγραμμα περιλαμβάνει το ολοκληρωμένο πακέτο μας, εξατομικευμένα προγράμματα άσκησης και διατροφής + Καθοδήγηση και εβδομαδιαία παρακολούθηση προόδου.",
		isPrimaryCardProgram: true,
	},
	{
		id: "personal-training",
		type: AvailableFormInputType.PersonalTraining,
		title: "Personal Training",
		description:
			"Αυτό το πρόγραμμα περιλαμβάνει την δημιουργία ενός εξατομικευμένου προγράμματος ασκήσεων, καθοδήγηση και παρακολούθηση προόδου.",
		isPrimaryCardProgram: false,
	},
];
