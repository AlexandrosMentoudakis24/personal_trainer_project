import NavigationBar from "../navigation_bar/NavigationBar";

const AppBarWithFooter = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
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
				{children}
			</div>
		</div>
	);
};

export default AppBarWithFooter;
