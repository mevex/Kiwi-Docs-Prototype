---
title: Nested Page
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
lang: en
draft: false
---

# Title

This is a **nested** file! **kiwi**

Internal link [[Build System]]


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