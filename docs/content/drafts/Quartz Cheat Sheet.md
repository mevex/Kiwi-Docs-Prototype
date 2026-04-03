---
title: Quartz Cheat Sheet
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
lang: en
---

This page will serve as a repository for resources and references that may be useful when drafting future notes.

# Frontmatter Options

The frontmatter is the YAML block at the top of a note that controls metadata for both Quartz’s site generation and SEO/social previews. It is enclosed between two `---` lines at the beginning of the file.

**title:** Replace the note name as page title and browser tab title.

**description:** Short summary used for SEO and page previews (like shared links previews).

**draft:** `true/false` Excludes page from building if true.

**lang:** Specifies the language of the page using ISO 639-1 codes (en, it). Useful for accessibility (screen readers) and SEO.

**aliases:** \[Alias1, Alias2, Alias3\] List of alternative names of the note for backlinks and search.

**tags:** \[Tag1, Tag2, Tag3\] List of tags for grouping and filtering.