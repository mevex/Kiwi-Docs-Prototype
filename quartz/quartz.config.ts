import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { CustomOgImages } from "./quartz/plugins/emitters/ogImage"

const config: QuartzConfig = {
	configuration: {
		pageTitle: "Kiwi Documentation",
		enableSPA: true,
		enablePopovers: true,
		analytics: null,
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				title: "Roboto",
				header: "Roboto",
				body: "Roboto",
				code: "JetBrains Mono",
			},
			colors: {
				lightMode: {
					light: "#2b2b2b",
					// lightgray: "rgba(78, 78, 78, 1.0)",
					lightgray: "rgba(255, 78, 78, 1.0)",
				},
				darkMode: {
					light: "#161618",
					// lightgray: "rgb(57, 54, 57, 1.0)",
					lightgray: "rgb(57, 255, 57, 1.0)",
				}
			}
		}
	},
	plugins: {
		transformers: [],
		filters: [],
		emitters: []
	}
}

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