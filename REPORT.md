# 📄 Assignment #4 — Responsive Web Design (Media Queries + Bootstrap Grid)

**Student:** Bek Madias
**Group:** SE_2430

---

## 🎯 Objective

The goal of this assignment is to learn how to create responsive web pages using **CSS Media Queries** and the **Bootstrap Grid system**.  
By the end of this assignment, I was able to design layouts that automatically adjust to different screen sizes (mobile, tablet, desktop) and efficiently use Bootstrap’s 12-column grid.

---

## 📝 Part 1 — Media Queries

### 🧪 Task 0. Responsive Typography

**Task:**

- Create a simple webpage with headings and paragraphs.
- Use media queries to change font sizes for mobile, tablet, and desktop.

**Implementation Details:**  
I created a webpage with `<h1>`, `<h2>`, and paragraphs. Then I applied different font sizes using `@media` for:

- **Mobile (max-width: 500px)** → small font
- **Tablet (max-width: 768px)** → medium font
- **Desktop (min-width: 769px)** → large font

---

### 🧪 Task 1. Responsive Layout with Media Queries

**Task:**

- Create a webpage with 3 boxes in a row.
- On desktop → all three side by side.
- On tablet → two boxes in a row.
- On mobile → boxes stacked vertically.
- Use **only CSS media queries** (no Bootstrap).

**Implementation Details:**  
I used `display: flex` and media queries to adjust `flex-direction` and `width` based on breakpoints:

- Desktop → 3 columns in a row.
- Tablet → 2 columns per row.
- Mobile → 1 column per row.

---

## 🧱 Part 2 — Bootstrap Grid System

### 🧪 Task 2. Bootstrap Responsive Columns

**Task:**

- Build a responsive layout using **Bootstrap’s 12-column grid**.
- Three columns:
  - Desktop → each column takes 4 columns (3 equal parts).
  - Tablet → 2 columns on the first row, 1 on the second.
  - Mobile → stacked vertically.

**Implementation Details:**  
I used Bootstrap classes:

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Column 1</div>
  <div class="col-12 col-md-6 col-lg-4">Column 2</div>
  <div class="col-12 col-md-6 col-lg-4">Column 3</div>
</div>
```

### 🧪 Task 3. Bootstrap Navigation Bar

**Task:**

- Create a responsive navigation bar using Bootstrap components.
- Logo on the left, links on the right.
- Collapses into a hamburger menu on smaller screens.

**Implementation Details:**  
I used the built-in **Bootstrap Navbar** with `.navbar-expand-lg` and `.navbar-toggler`.  
On large screens, the links are visible. On smaller screens, they collapse into a hamburger.

## 🧠 Part 3 — Combined Project

### 🧪 Task 4. Responsive Portfolio Page

**Task:**

- Create a portfolio page using both **Media Queries** and **Bootstrap Grid**.

**Structure:**

- **Header:** Bootstrap navbar
- **Main section:**
  - Left: portfolio projects (Bootstrap cards in a grid)
  - Right: sidebar with personal info & contact details
- **Footer:** across the bottom

Use media queries to adjust fonts, spacing, and visibility for mobile, tablet, and desktop.

**Implementation Details:**  
I combined Bootstrap grid classes for the main layout.  
Custom media queries were applied for font scaling and hiding certain sidebar details on smaller screens.  
The result is a clean, responsive portfolio that adapts well on all devices.

## 🧾 Summary of My Work Process

1. **Planned the layout** for each part (media queries first, then Bootstrap).
2. **Implemented basic structure** with HTML and CSS, ensuring it worked on desktop first.
3. **Added media queries** to control typography and layout on smaller screens.
4. **Integrated Bootstrap** for grid and navbar tasks.
5. **Combined both techniques** for the final portfolio page.
6. **Tested on different screen sizes** using Chrome DevTools to ensure proper responsiveness.
7. **Took screenshots** and documented everything in this report.

## ✅ Conclusion

Through this assignment, I learned how to:

- Use **CSS media queries** to create responsive designs manually.
- Use **Bootstrap's 12-column grid system** to build adaptive layouts faster.
- Combine both approaches to achieve clean and modern responsive websites.
