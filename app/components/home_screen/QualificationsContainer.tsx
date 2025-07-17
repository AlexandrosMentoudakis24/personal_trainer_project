import QualificationsCard from "../ui/cards/QualificationsCard";
import ExtraInformationText from "../ui/texts/ExtraInformationText";

const QualificationsContainer = () => {
	return (
		<div className="w-full flex flex-row justify-center items-center py-[25px] gap-x-[40px]">
			<div className="flex flex-col justify-center items-center gap-y-[30px]">
				<div className="flex flex-col justify-center items-center text-center gap-y-[15px]">
					<span className="font-bold text-5xl text-white">
						Προσόντα - Ικανότητες
					</span>
					<ExtraInformationText
						text="Είμαι πιστοποιημένος γυμνάστης με πάνω από 5 χρόνια εμπειρίας, με
						εξειδίκευση στην προσωπική προπόνηση και τη διατροφή. Έχω πάθος να
						βοηθάω τους ανθρώπους να μεταμορφώνουν τη ζωή τους και στοχεύω στη
						δημιουργία ενός φιλόξενου περιβάλλοντος όπου όλοι μπορούν να
						ευδοκιμήσουν, ανεξάρτητα από το επίπεδο φυσικής κατάστασης."
					/>
				</div>
				<div className="flex flex-row justify-start items-center gap-x-[16px]">
					<QualificationsCard qualificationText="CPT" />
					<QualificationsCard qualificationText="CFT" />
					<QualificationsCard qualificationText="CN" />
				</div>
			</div>
		</div>
	);
};

export default QualificationsContainer;
