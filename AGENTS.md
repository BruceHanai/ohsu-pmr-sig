# OHSU PM&R Student Interest Group

## Brand
- This is a student interest group site, not an official OHSU institutional website. Preserve the visible disclaimer.
- Never use, recreate, trace, approximate, modify, or imitate the OHSU logo or its recognizable elements. Never create an unofficial logo lockup. Use a typographic identity only.
- Match the OHSU homepage typography: Lato throughout (300/400/700), including editorial copy, with Helvetica/Arial fallbacks. This supersedes the earlier Noto Serif body-copy preference.
- Keep approved cool palette values in public/tokens.css: charcoal #545859, blue #0057B7, light blue #4698CA. These come from the supplied Colors screenshot. Neutral surface colors are explicitly project-specific.
- Use the user-specified primary UI blue #0e4d8f for navigation, footer, and primary headings. Pill buttons use linear-gradient(to top,#ffc529,#ffd769), reversed to bottom on hover without an outer highlight. Preserve the screenshot palette as reference tokens.
- Favor white space and charcoal with restrained blue accents. Light blue is decorative; do not use it for small text on white.
- Use minimal flat icons if needed; no shaded, skeuomorphic icons. No logo assets from brand screenshots may enter the public folder.

## Accessibility
- Target WCAG 2.2 AA. Use semantic landmarks, one h1, logical headings, meaningful link names, keyboard access, visible unobscured focus, and a skip link.
- Maintain 4.5:1 normal text contrast, 3:1 large text and meaningful UI contrast. Do not communicate information through color alone.
- Support 320 CSS-pixel reflow, 200% text enlargement and 400% browser zoom. Provide at least 24px targets (prefer 44px), reduced motion, and meaningful image alternatives.
- Check desktop and mobile layout and keyboard navigation after meaningful UI changes. Automated checks do not establish conformance alone.

## Content and data
- Never commit real student/member data, mailing lists, patient information, private contact details, secrets, credentials, or API keys. Ignore rules are not a security boundary.
- Do not invent events, people, affiliations, dates, contact addresses, registration links, or endorsements. Keep honest empty states until confirmed information is provided.
- This starter collects no data. A future signup/contact integration needs deliberate privacy and accessibility review.

## Development
- Static HTML and reusable CSS live in public/. No build step or dependencies required.
- Serve only public/ in local development and deployment. Never expose the repository root.
- Preserve the user's GitHub + Cloudflare Pages choice. Do not casually change deployment, DNS, email, or security settings.
- Keep source and documentation aligned. Do not claim full accessibility conformance without an audit.

- Text links on white/light surfaces use #0057B7 with #003f85 on hover. Header/footer links remain white with gold hover; gradient buttons retain dark text.

- Headings on light backgrounds use #585e60. Linked heading text retains the link blue; hero headings remain white.

- Header navigation links use #0c3e73 as their hover background.

- Header navigation text stays white on hover, over #0c3e73; do not turn it yellow.

- Dark mode follows system preference until toggled; saved preference stays on the device. Use light text and blue links on dark surfaces. Let the Luma iframe inherit the selected color scheme; do not force light mode or invert its contents.
