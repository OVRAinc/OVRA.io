export const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

export const fadeInUpScroll = {
	initial: {
		y: 60,
		opacity: 0,
	},
	onScroll: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};
export const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const swipeScreen = {
	initial: {
		width: "100%",
	},
	animate: {
		width: "0%",
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		width: "100%",
	},
};
