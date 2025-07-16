"use client";

import ExtraInformationText from "../ui/texts/ExtraInformationText";
import PrimaryButton from "../ui/buttons/PrimaryButton";

const HomeContainer = () => {
	return (
		<>
			<span
				className="
          text-xl sm:text-2xl md:text-4xl
          text-center md:text-center
          font-bold tracking-wide
          "
			>
				ΜΕΤΑΜΟΡΦΩΝΟΝΤΑΣ <br /> ΤΙΣ ΠΡΟΚΛΗΣΕΙΣ ΣΕ ΘΡΙΑΜΒΟΥΣ!
			</span>
			<ExtraInformationText
				text="
				Σκοπός μου είναι να σε βοηθήσω να πετύχεις τους στόχους σου. Μαζί θα
				χτίσουμε μια πιο δυνατή και υγιή εκδοχή του εαυτού σου.
        "
			/>
			<div className="w-[170px] h-[60px] mt-[10px]">
				<PrimaryButton text="Ξεκίνα τώρα" onButtonClickHandler={() => {}} />
			</div>
		</>
	);
};

export default HomeContainer;
