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
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "filesystem"],
			}),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "github-light",
					dark: "github-dark",
				},
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
		],
	},
}

export default config