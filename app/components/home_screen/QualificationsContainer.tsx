import QualificationsCard from "../ui/cards/QualificationsCard";

const QualificationsContainer = () => {
	return (
		<div className="w-full flex flex-row justify-center items-center py-[25px] gap-x-[40px]">
			<div className="flex flex-col gap-y-[30px]">
				<div className="flex flex-col text-left gap-y-[15px]">
					<span className="font-bold text-5xl text-white">
						Προσόντα - Ικανότητες
					</span>
					<span className="text-xl text-gray-500 font-bold tracking-wide">
						Είμαι πιστοποιημένος γυμνάστης με πάνω από 5 χρόνια εμπειρίας,{" "}
						<br />
						με εξειδίκευση στην προσωπική προπόνηση και τη διατροφή. <br />
						Έχω πάθος να βοηθάω τους ανθρώπους να μεταμορφώνουν τη ζωή τους{" "}
						<br />
						και στοχεύω στη δημιουργία ενός φιλόξενου περιβάλλοντος <br />
						όπου όλοι μπορούν να ευδοκιμήσουν, ανεξάρτητα από <br />
						το επίπεδο φυσικής κατάστασης.
					</span>
				</div>
				<div className="flex flex-row justify-start items-center gap-x-[16px]">
					<QualificationsCard qualificationText="CPT" />
					<QualificationsCard qualificationText="CFT" />
					<QualificationsCard qualificationText="CN" />
				</div>
			</div>
			<div className="w-[550px] h-[500px] rounded-md border-[2px] border-white"></div>
		</div>
	);
};

export default QualificationsContainer;
