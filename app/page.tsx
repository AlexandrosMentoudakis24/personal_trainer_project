import QuestionsAndAnswersContainer from "./components/home_screen/QuestionsAndAnswersContainer";
import QualificationsContainer from "./components/home_screen/QualificationsContainer";
import TestimonialsContainer from "./components/home_screen/TestimonialsContainer";
import WorkProcessContainer from "./components/home_screen/WorkProcessContainer";
import SectionContainer from "./components/ui/containers/SectionContainer";
import ProgramsContainer from "./components/home_screen/ProgramsContainer";
import AboutMeContainer from "./components/home_screen/AboutMeContainer";
import HomeContainer from "./components/home_screen/HomeContainer";

export default function Home() {
	return (
		<div className="w-full flex flex-col justify-center items-center overflow-auto gap-y-[40px]">
			<SectionContainer sectionId="">
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
			{/*
        <SectionContainer sectionId="coming-soon">
          <ComingSoonContainer />
        </SectionContainer>
      */}
		</div>
	);
}
