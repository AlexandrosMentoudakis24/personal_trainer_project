import QuestionsAndAnswersContainer from "./components/home_screen/QuestionsAndAnswersContainer";
import QualificationsContainer from "./components/home_screen/QualificationsContainer";
import TestimonialsContainer from "./components/home_screen/TestimonialsContainer";
import WorkProcessContainer from "./components/home_screen/WorkProcessContainer";
import ComingSoonContainer from "./components/home_screen/ComingSoonContainer";
import SectionContainer from "./components/ui/containers/SectionContainer";
import ProgramsContainer from "./components/home_screen/ProgramsContainer";
import AboutMeContainer from "./components/home_screen/AboutMeContainer";
import NavigationBar from "./components/navigation_bar/NavigationBar";
import HomeContainer from "./components/home_screen/HomeContainer";

export default function Home() {
	return (
		<div className="relative w-screen min-h-screen overflow-x-hidden">
			{/* === Foreground Content === */}
			<div className="relative z-10 text-white flex flex-col items-center min-w-screen">
				{/* Navigation Bar */}
				<div className="fixed w-full h-[110px] grid place-items-center top-0 left-0 z-20">
					<NavigationBar />
				</div>

				{/* Spacer to push content below fixed nav */}
				<div className="h-[110px]" />

				<div className="w-full flex flex-col justify-center items-center overflow-auto gap-y-[50px]">
					<SectionContainer sectionId="home">
						<HomeContainer />
					</SectionContainer>
					<SectionContainer sectionId="about">
						<AboutMeContainer />
					</SectionContainer>
					<SectionContainer sectionId="qualifications">
						<QualificationsContainer />
					</SectionContainer>
					<SectionContainer sectionId="timeline">
						<WorkProcessContainer />
					</SectionContainer>
					<SectionContainer sectionId="programs">
						<ProgramsContainer />
					</SectionContainer>
					<SectionContainer sectionId="testimonials">
						<TestimonialsContainer />
					</SectionContainer>
					<SectionContainer sectionId="questions">
						<QuestionsAndAnswersContainer />
					</SectionContainer>
					<SectionContainer sectionId="coming-soon">
						<ComingSoonContainer />
					</SectionContainer>
				</div>
			</div>
		</div>
	);
}
