# Mahir-Ceng multilingual portfolio

## Included files
- `index.html` — updated page with language selector and translation keys
- `style.css` — original styles plus Arabic RTL and language-selector styles
- `script.js` — original interactions with localized typing effect, theme/menu labels and contact-form messages
- `js/language.js` — English, Turkish and Arabic translations and saved-language handling

## How to use
1. Keep the `images/` and `cv/` folders from your original project in the same project root.
2. Replace your existing `index.html`, `style.css`, and `script.js` with the files in this package.
3. Create/keep the `js/` folder and put `language.js` inside it.
4. Open `index.html` with Live Server or your usual local web server.

English remains the default language for first-time visitors. The selected language is saved in `localStorage` under `site-language`. Arabic automatically switches the document to right-to-left (`dir="rtl"`).
