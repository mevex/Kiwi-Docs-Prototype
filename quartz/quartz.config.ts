import { CustomOgImages } from "./quartz/plugins/emitters/ogImage"

const config: QuartzConfig = {
	configuration: {
		ignorePatterns: [],
	},
	plugins: {
		transformers: [],
		filters: [],
		emitters: [
			CustomOgImages({
				// colorScheme: "lightMode", // what colors to use for generating image, same as theme colors from config, valid values are "darkMode" and "lightMode"
				width: 160, // width to generate with (in pixels)
				height: 160, // height to generate with (in pixels)
				excludeRoot: false, // wether to exclude "/" index path to be excluded from auto generated images (false = use auto, true = use default og image)
			}),
		],
	},
}

export default config