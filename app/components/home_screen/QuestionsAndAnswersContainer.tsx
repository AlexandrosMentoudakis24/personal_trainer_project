import ExpandableCardWithSubTitleText from "../ui/expandable_cards/ExpandableCardWithSubTitleText";

import { questionsAndAnswers } from "@/app/data/home_screen/QuestionsAndAnswers";
import ExtraInformationText from "../ui/texts/ExtraInformationText";

const QuestionsAndAnswersContainer = () => {
	return (
		<>
			<div className="w-full flex flex-col justify-start items-center gap-y-[20px]">
				<span className="text-5xl text-white font-bold">Συχνές Ερωτήσεις</span>
				<ExtraInformationText text="Είμαι εδώ για να σε βοηθήσω!" />
			</div>
			<div className="w-full flex flex-col justify-center gap-y-[30px]">
				{questionsAndAnswers.map((qa) => {
					return (
						<ExpandableCardWithSubTitleText
							key={qa.id}
							title={qa.question}
							innerContentText={qa.answer}
						/>
					);
				})}
			</div>
		</>
	);
};

export default QuestionsAndAnswersContainer;
