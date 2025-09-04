# GitHub Projects Landing Page

A simple Bootstrap landing page that displays and previews multiple projects hosted on GitHub. Each project is stored in a separate JSON file for easy updates.

---

## Features

- Responsive project cards with Bootstrap 5
- Fetch and preview each project’s `index.html` from a GitHub repo/folder
- “Update” button for individual projects
- “Update All” button to refresh all previews at once
- Easy project management via `projects.json`

---

## File Structure

```
project-landing/
├── index.html
├── main.js
├── projects.json
├── README.md
├── assets/
│ ├── favicon.ico
│ └── custom.css
```


---

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/) (CSS + JS via CDN)
- Modern browser with `fetch` support
- Local HTTP server (required to load `projects.json`)

---

## Running Locally

1. Clone or download the repository
2. Open a terminal in the project folder
3. Run a local HTTP server:

**Python 3**
```bash
python3 -m http.server
npx http-server .
