"use client";

import ExtraInformationText from "../ui/texts/ExtraInformationText";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import TitleText from "../texts/TitleText";

const HomeContainer = () => {
	return (
		<>
			<TitleText text="ΜΕΤΑΜΟΡΦΩΝΟΝΤΑΣ ΤΙΣ ΠΡΟΚΛΗΣΕΙΣ ΣΕ ΘΡΙΑΜΒΟΥΣ!" />
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
