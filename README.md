# 📝 Medium Clone — Web Development Internship Project

[![Internship Task](https://img.shields.io/badge/Internship%20Task-Coding%20Blocks-orange?style=for-the-badge&logo=codeforces)](https://codingblocks.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-2EA44F?style=for-the-badge)](https://sanjeet3065.github.io/Medium-Clone/)

A responsive, pixel-conscious front-end clone of the popular blogging platform **Medium**. This project was developed as a hands-on **Internship Task during the Coding Blocks Internship Program**, and it focuses on recreating a premium reading experience using semantic HTML, modern CSS, and interactive vanilla JavaScript.

## 🌐 Live Demo

Open the project here: [Medium Clone Demo](https://sanjeet3065.github.io/Medium-Clone/)

---

## 🎓 Internship Task Context & Background

> **Task Assignment:** Front-End Clone & Interactive UI Development  
> **Organization:** Coding Blocks  
> **Role:** Web Development Intern  
> **Focus Areas:** Semantic Markup, CSS Flexbox Layouts, Responsive Breakpoints, and Dynamic DOM Manipulation  

During the internship at **Coding Blocks**, interns were tasked with reverse-engineering and replicating the core user interface and interactions of a major web platform. This project serves as a practical implementation of that challenge, emphasizing clean structure and responsive layouts.
- Translating real-world UI/UX designs into clean, maintainable HTML/CSS code.
- Building robust component layouts without external UI frameworks (No Bootstrap/Tailwind — pure vanilla CSS).
- Implementing dynamic, event-driven user interaction using vanilla JavaScript DOM APIs.
- Ensuring mobile-first adaptability with off-canvas navigation and responsive breakpoints.

---

## ✨ Features

- 🧭 **Medium-Inspired Navigation Bar**
  - Brand header with iconic Medium logo typography.
  - Sleek search input pill with embedded Font Awesome icon.
  - Call-to-action buttons (`Get app`, `Write`), notification bell, and user avatar.
- 📱 **3-Column Desktop Layout (Flexbox)**
  - **Left Sidebar:** Quick navigation links (Home, Library, Profile, Stories, Stats).
  - **Main Feed:** Curated stream of blog cards featuring author thumbnail, publication name, article title, short synopsis, and reading time metadata.
  - **Right Sidebar:** Staff Picks section and clickable Recommended Topic pills (`Programming`, `JavaScript`, `Web Development`, `Technology`).
- ✍️ **Interactive Story Publishing Modal**
  - Click on the **"Write"** button in the navbar to trigger a modal editor.
  - Live form validation: ensures titles and story bodies are not empty.
  - Dynamic publishing: prepends newly created stories straight to the top of the feed (`feed.prepend()`) with instant "Just Now" timestamps.
  - Form state reset and modal auto-close upon publishing.
- 📲 **Fully Responsive & Mobile-Optimized**
  - Hamburger menu toggle (`.menu-btn`) for screens below `768px`.
  - Smooth off-canvas sliding navigation drawer (`left: -250px` to `0`).
  - Graceful degradation: hides secondary sidebars to keep reading experience distraction-free on smartphones.

---

## 🛠️ Tech Stack & Tools

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure (`<header>`, `<aside>`, `<main>`, `<article>`) |
| **CSS3** | Flexbox layouts, custom transitions, media queries, modern typography |
| **JavaScript (ES6+)** | Event listeners, DOM manipulation, dynamic element creation, form validation |
| **Font Awesome 6.7.2** | Icons for search, hamburger menu, notifications, write icon, and user profiles |
| **Picsum Photos API** | Dynamic placeholder avatars for publications and authors |

---

## 📁 Project Architecture

```plaintext
Medium-Clone/
├── index.html           # Semantic document structure & layout definitions
├── medium.css           # Styling rules, Flexbox grid, animations & media queries
├── medium.js            # DOM logic (modal toggle, story creation, mobile drawer)
├── README.md            # Comprehensive project documentation
└── .vscode/             # Editor workspace preferences
```

---

## 🔬 Codebase Analysis & Technical Highlights

### 1. Semantic Architecture (`index.html`)
The HTML is structured with modern HTML5 semantics for accessibility and clear hierarchy:
- `<header class="navbar">` encapsulates brand identity, search, and navigation CTAs.
- `<div class="container">` coordinates the primary 3-column desktop layout.
- `<aside class="left-sidebar">` and `<aside class="right-sidebar">` provide contextual navigation and recommendations.
- `<main class="feed">` hosts individual `<article class="post">` elements containing author metadata, headers, excerpts, and reading times.
- `<div class="editor-modal">` serves as an accessible overlay container for the story creation dialog.

### 2. Layout & Responsive Design (`medium.css`)
- **CSS Flexbox**: Employs flexible container proportions (`width: 18%` for left nav, `width: 52%` for main feed, `width: 30%` for right widgets) replicating Medium's signature reading proportion.
- **Off-Canvas Mobile Drawer**:
  ```css
  @media (max-width: 768px) {
    .left-sidebar {
      position: fixed;
      top: 70px;
      left: -250px;
      width: 250px;
      height: 100vh;
      background: white;
      transition: 0.3s;
      z-index: 500;
    }
    .left-sidebar.active {
      left: 0;
    }
  }
  ```
- **Modal Overlay**: Uses modern `inset: 0` fixed positioning with semi-transparent alpha backgrounds (`rgba(0, 0, 0, 0.5)`).

### 3. JavaScript Event Engine (`medium.js`)
- **Dynamic DOM Creation**: Rather than re-rendering the whole page, new posts are created in-memory with `document.createElement("article")` and inserted at the beginning of the feed using `feed.prepend()`.
- **Defensive Validation**: Checks for whitespace-only or empty strings before publishing to preserve data cleanliness.
- **State Class Toggling**: Toggles `.show` and `.active` classes to coordinate CSS transitions declaratively.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
You only need a modern web browser (Google Chrome, Firefox, Microsoft Edge, or Safari).

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sanjeet3065/Medium-Clone.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Medium-Clone
   ```

3. **Open the application:**
   - Double click `index.html` to launch it directly in your default browser.
   - Alternatively, use the **Live Server** extension in VS Code (`Right click on index.html` ➔ `Open with Live Server`).

---

## 🎯 Key Learnings & Internship Takeaways

Working on this task during the **Coding Blocks Internship** provided deep practical experience in:
1. **Translating Design Specs into Code:** Analyzing real-world web apps and deconstructing complex interfaces into structured, reusable components.
2. **Vanilla JS Mastery:** Developing core interactive functionalities without relying on third-party libraries or frameworks.
3. **Responsive Web Design:** Mastering media queries and mobile layout considerations (collapsing navigation, touch targets, off-canvas drawers).
4. **Clean Code & Git Practices:** Maintaining an organized repository structure with meaningful documentation.

---

## 👨‍💻 Author

**Sanjeet Chauhan**  
- **GitHub:** [@Sanjeet3065](https://github.com/Sanjeet3065)
- **Role:** Web Development Intern @ [Coding Blocks](https://codingblocks.com/)

---

## 📄 License & Attribution

This project is created strictly for **educational and learning purposes** as part of an internship task assigned by **Coding Blocks**. All design likeness and branding are the property of [Medium](https://medium.com/), used here for learning and UI replication purposes only.
