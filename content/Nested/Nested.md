---
title: Nested Page
date: 2026-03-15

draft: false
publish: true

description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
image: "assets/kiwi-logo.jpg"
---

# Title

This is a **nested** file! **kiwi**


> [!tip]
> You can deploy the documentation automatically using GitHub Actions.

> [!warning]
> You can deploy the documentation automatically using GitHub Actions.

> [!bug]
> You can deploy the documentation automatically using GitHub Actions.

> [!info]
> You can deploy the documentation automatically using GitHub Actions.

Code block

```ts {3-5}
transformers: [
	Plugin.CrawlLinks({
		markdownLinkResolution: "shortest",
		openLinksInNewTab: true,
		lazyLoad: true,
	}),
]
```