"use client";

import { useRouter } from "next/navigation";

import ExtraInformationText from "../ui/texts/ExtraInformationText";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import TitleText from "../texts/TitleText";

const HomeContainer = () => {
	const router = useRouter();

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<TitleText text="ΜΕΤΑΜΟΡΦΩΝΟΝΤΑΣ ΤΙΣ ΠΡΟΚΛΗΣΕΙΣ ΣΕ ΘΡΙΑΜΒΟΥΣ!" />
			<ExtraInformationText
				text="
				Σκοπός μου είναι να σε βοηθήσω να πετύχεις τους στόχους σου. Μαζί θα
				χτίσουμε μια πιο δυνατή και υγιή εκδοχή του εαυτού σου.
        "
			/>
			<div className="w-[170px] h-[60px] mt-[10px]">
				<PrimaryButton
					text="Ξεκίνα τώρα"
					onButtonClickHandler={() => {
						router.push("./form");
					}}
				/>
			</div>
		</div>
	);
};

export default HomeContainer;
