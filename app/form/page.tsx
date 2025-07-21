import HeaderContainer from "../components/form_screen/HeaderContainer";
import FormContent from "../components/form_screen/FormContent";

const FormPage = () => {
	return (
		<div
			className="
      w-[100%] md:w-[750px] xl:w-[1100px]
      flex flex-col 
      justify-start items-center 
      pt-[50px] pb-[100px]
      gap-y-[55px]
      "
		>
			<HeaderContainer />
			<FormContent />
		</div>
	);
};

export default FormPage;
