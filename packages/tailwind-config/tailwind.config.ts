import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./providers/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
};
export default config;
