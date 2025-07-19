import HeaderContainer from "../components/form_screen/HeaderContainer";
import FormContent from "../components/form_screen/FormContent";

const FormPage = () => {
	return (
		<div className="w-[100%] md:w-[60%] xl-[50%] flex flex-col justify-start items-center py-[50px] gap-y-[55px]">
			<HeaderContainer />
			<FormContent />
		</div>
	);
};

export default FormPage;
