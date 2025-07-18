import ExtraInformationText from "../ui/texts/ExtraInformationText";
import StatisticsCard from "../ui/cards/StatisticsCard";

const AboutMeContainer = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center text-center gap-y-[25px]">
				<span className="font-bold text-4xl text-white">ΠΟΙΟΣ ΕΙΜΑΙ?</span>
				<ExtraInformationText
					text="
					Είμαι ένας πιστοποιημένος Personal Trainer με υπόβαθρο στην επιστήμη
					της άσκησης. Δημιουργώ εξατομικευμένα προγράμματα για να βοηθήσω τους
					πελάτες μου να επιτύχουν στόχους όπως απώλεια λίπους, μυϊκή ανάπτυξη
					και βελτιωμένη απόδοση.
          "
				/>
				<div className="flex flex-row flex-wrap justify-center items-center mt-[10px] gap-x-[20px] gap-y-[15px]">
					<StatisticsCard
						cardInfos={{
							id: "1",
							primaryText: "15+",
							secondaryText: "Ευχαριστημένοι Πελάτες",
						}}
					/>
					<StatisticsCard
						cardInfos={{
							id: "2",
							primaryText: "5",
							secondaryText: "Χρόνια Εμπειρίας",
						}}
					/>
					<StatisticsCard
						cardInfos={{
							id: "3",
							primaryText: "7",
							secondaryText: "Χρόνια στον Αθλητισμό",
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default AboutMeContainer;
