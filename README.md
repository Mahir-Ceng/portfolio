# Mahir-Ceng | Developer Portfolio

A personal developer portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step: open `index.html` and it works.

<!-- After enabling GitHub Pages, add your live link here:
**Live site:** https://github.com/Mahir-Ceng/portfolio
-->

## Features

- Responsive layout with a mobile hamburger menu
- Dark / light theme toggle (remembers your choice)
- Animated particle background and typing effect in the hero section
- Scroll reveal animations, 3D card tilt and a scroll progress bar
- Skills section with technology logos and level bars
- Projects section, "Journey" timeline and CV download button
- Contact form with validation
- Accessibility: skip link, labelled form fields, keyboard-friendly menu and `prefers-reduced-motion` support
- SEO basics: meta description, Open Graph tags and favicon

## Tech stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no libraries)

## Project structure

```
.
├── index.html
├── style.css
├── script.js
├── images/
│   └── profile.jpg
└── cv/
    └── Mahir-CV.pdf
```

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Mahir-Ceng/portfolio.git
   ```
2. Open `index.html` in your browser.

## Customize

- **Texts and links:** edit `index.html`.
- **Skill levels:** change the `--level` value of each `.skill-bar` in `index.html`.
- **Colors:** change the CSS variables at the top of `style.css`.
- **Contact form:** set `FORM_ENDPOINT` at the top of `script.js` to a [Formspree](https://formspree.io) URL to receive messages directly. While it is empty, the form opens the visitor's email app instead.

## Contact

- Email: suleymanmahir52@gmail.com
- GitHub: [@Mahir-Ceng](https://github.com/Mahir-Ceng)
