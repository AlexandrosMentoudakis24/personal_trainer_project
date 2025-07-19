const HeaderContainer = () => {
	return (
		<div
			className="
      flex flex-col
      justify-start items-center text-center
      text-2xl text-white
      tracking-wide
      gap-y-[25px]
      "
		>
			<span className="text-primaryRedColor font-bold">
				Online Personal Trainer Coaching
			</span>
			<span className="text-5xl text-white font-bold">Φόρμα Αίτησης</span>
			<span className="text-[20px] text-slate-300 px-[10px]">
				Έτοιμος να μεταμορφώσεις το σώμα και το μυαλό σου; <br />
				Συμπλήρωσε την παρακάτω φόρμα και ας χτίσουμε μαζί την καλύτερη εκδοχή
				του εαυτού σου.
			</span>
		</div>
	);
};

export default HeaderContainer;
