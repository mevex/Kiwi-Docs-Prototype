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

export default config