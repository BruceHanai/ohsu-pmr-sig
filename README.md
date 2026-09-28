# OHSU PM&R Student Interest Group

Editable, dependency-free website starter. This represents a student interest group, not an official OHSU institutional site. It uses a text identity and no OHSU logo.

## Preview locally

From this project folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Open http://localhost:8000. Stop with Control-C. You can also open public/index.html directly. Internet access loads Google Fonts; readable fallback fonts work offline.

## Edit

- public/index.html — page content and reusable semantic section patterns.
- public/tokens.css — palette, fonts, spacing, and semantic design tokens.
- public/styles.css — shared layout, buttons, navigation, panels, and responsive styles.
- AGENTS.md — permanent brand, accessibility, and data-handling requirements.
- docs/SETUP.md — GitHub, Cloudflare Pages, domain, and email setup.
- docs/BRAND.md — reference provenance and color limitations.

No install, compilation, or build command is needed. The deployable output is public/. Do not deploy the repository root.

## Content status

The introduction is draft copy. Events and membership/contact channels have honest pending states because no confirmed information was provided. Before launch, approve the copy and add real public contact/join details and confirmed events. Do not add a fake email address or inactive registration button.

## Accessibility verification

The starter includes semantic landmarks, logical headings, a skip link, visible focus, generous touch targets, responsive reflow, and high-contrast text. Check keyboard navigation, screen-reader reading order, mobile widths, 200% text enlargement, and 400% zoom before launch. This is designed toward WCAG 2.2 AA; a complete conformance audit has not been performed.

## Distribution

artifacts/ohsu-pmr-sig-starter.zip contains the editable source and documentation, excluding Git history. It is a snapshot; regenerate it after changes. No hosting or external accounts are configured by this package.
