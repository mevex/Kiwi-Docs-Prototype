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
		baseUrl: "mevex.github.io/Kiwi-Docs-Prototype",
		ignorePatterns: [".obsidian"],
		defaultDateType: "modified",
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				title: "Outfit",
				header: {
					name: "Outfit",
					weights: [400, 800],
					includeItalic: false,
				},
				body: {
					name: "Outfit",
					weights: [400, 800],
					includeItalic: false,
				},
				code: "JetBrains Mono",
			},
			colors: {
				lightMode: {
					light: "#faf8f8",
					lightgray: "#e5e5e5",
					gray: "#b8b8b8",
					darkgray: "#4e4e4e",
					dark: "#2b2b2b",
					secondary: "#284b63",
					tertiary: "#84a59d",
					highlight: "rgba(143, 159, 169, 0.15)",
					textHighlight: "#fff23688",
				},
				darkMode: {
					light: "#161616",
					lightgray: "#704d25",
					gray: "#646464",
					darkgray: "#d4d4d4",
					dark: "#ffffff",
					secondary: "#a8d500",
					tertiary: "rgba(168, 213, 0, 0.8)",
					highlight: "rgba(168, 168, 168, 0.15)",
					textHighlight: "rgba(168, 213, 0, 0.8)",
				}
			}
		},
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