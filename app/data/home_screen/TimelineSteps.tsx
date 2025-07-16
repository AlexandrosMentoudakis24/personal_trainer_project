import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { BsJournalCheck } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { BsPersonVideo } from "react-icons/bs";

import { TimelineStep } from "@/app/types/TimelineStepType";

export const timelineSteps: TimelineStep[] = [
	{
		id: "1",
		icon: <MdOutlineArticle />,
		title: "Αποστολή Φόρμας Επικοινωνίας",
	},
	{
		id: "2",
		icon: <BsJournalCheck />,
		title: "Έλεγχος Στοιχείων Φόρμας",
	},
	{
		id: "3",
		icon: <BsPersonVideo />,
		title: "Προγραμματισμός Βίντεο-Κλήσης",
	},
	{
		id: "4",
		icon: <LuBookOpenText />,
		title: "Καταγραφή Στόχων και Απαιτήσεων",
	},
	{
		id: "5",
		icon: <RiCalendarScheduleLine />,
		title: "Δημιουργία προγράμματος/των",
	},
	{
		id: "6",
		icon: <GiProgression />,
		title: "Παρακολούθηση Απόδοσης και Εξέλιξης",
	},
];
