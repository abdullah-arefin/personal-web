# Personal Homepage — CSE 391 Assignment 1

This is a responsive, multi-page personal website starter. It is intentionally filled with clearly marked demo content so you can personalize it before submitting.

## Folder structure

```text
asg/
├── index.html                 # Main personal homepage
├── pages/
│   └── hobbies.html           # Example internal page
├── css/
│   └── styles.css             # All shared styling
├── js/
│   └── script.js              # Theme, location, date, and year behavior
└── assets/
    └── profile-placeholder.svg # Local image; replace with your own photo
```

## Personalization checklist

1. In `index.html` and `pages/hobbies.html`, replace `Your Name`, the demo biography, education, skills, interests, quote, and favorites.
2. Replace the links marked `DEMO LINKS` with your real GitHub, LinkedIn, email, and other profiles.
3. Replace `assets/profile-placeholder.svg` with a local image such as `assets/profile.jpg`, then update the `src` and `alt` text in `index.html`.
4. Replace the Unsplash URL with a relevant image. For a fully self-contained submission, download an appropriately licensed image into `assets/` and use a local path.
5. Replace `your.email@example.com` in the contact form action. A `mailto:` form opens the visitor's email client; a server-side form service is needed for silent web submission.
6. Update the BRAC University and CSE 391 Discord links if your instructor supplied a specific Discord invite URL.

## Running locally

No build tools are required. Open `index.html` in a browser, or serve the folder from a local web server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publishing with GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its default branch.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
4. Wait for GitHub to provide the public URL.

Keep the relative file paths unchanged. GitHub Pages is case-sensitive, so `css/styles.css` and `CSS/styles.css` are different paths.

## Requirement coverage

- Semantic HTML structure with header, navigation, main sections, and footer.
- Same-page anchor navigation and an internal `pages/hobbies.html` page.
- External links including BRAC University and a CSE 391 Discord placeholder.
- Local placeholder image plus a remote image, responsive table with striped rows, borders, `rowspan`, and `colspan`.
- External CSS, small inline semantic formatting, hover effects, responsive layout, animation, and dark/light mode.
- JavaScript-generated page location, last-modified date, and copyright year.
- Contact form bonus using `mailto:`.

## Validation

Before submitting, validate both HTML files at [W3C Markup Validation Service](https://validator.w3.org/) and validate `css/styles.css` at the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Fix any warnings caused by your own customizations, especially malformed URLs or missing image alternative text.
