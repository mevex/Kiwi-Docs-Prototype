import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
	configuration: {
		pageTitle: "Kiwi Documentation",
		enableSPA: true,
		enablePopovers: true,
		enableSitemap: true,
		enableRSS: false,
		analytics: null,
		baseUrl: "mevex.github.io/Kiwi-Docs-Prototype/",
		ignorePatterns: [".obsidian"],
		defaultDateType: "modified",
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
			Plugin.CrawlLinks({
				markdownLinkResolution: "shortest",
				openLinksInNewTab: true,
				lazyLoad: true,
			}),
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "git", "filesystem"],
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
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.Assets(),
			Plugin.ComponentResources(),
			Plugin.ContentIndex(),
			Plugin.ContentPage(),
			Plugin.CustomOgImages(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
		],
	},
}

export default config