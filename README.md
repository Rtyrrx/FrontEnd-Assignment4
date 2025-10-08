# Assignment: Responsive Design and Bootstrap

This workspace contains solutions for all tasks:

- Part 1: Media Queries (no Bootstrap)
  - Task 0: Responsive Typography — `part1/task0-typography.html`
  - Task 1: Responsive Layout — `part1/task1-layout.html`
- Part 2: Bootstrap Grid System
  - Task 2: Bootstrap Responsive Columns — `part2/task2-bootstrap-grid.html`
  - Task 3: Bootstrap Navigation Bar — `part2/task3-bootstrap-navbar.html`
- Part 3: Combined Project
  - Task 4: Responsive Portfolio Page — `part3/task4-portfolio.html`

## How to run
Open the HTML files directly in your browser, or use a simple local server.

Windows (PowerShell):

```powershell
# Option 1: open files directly
start .\part1\task0-typography.html
start .\part1\task1-layout.html
start .\part2\task2-bootstrap-grid.html
start .\part2\task3-bootstrap-navbar.html
start .\part3\task4-portfolio.html

# Option 2: quick local server with Python (if installed)
python -m http.server 5500 ; start http://localhost:5500/
```

## Breakpoints used
- Mobile: < 576px (default styles where applicable)
- Tablet: 576px–991.98px
- Desktop: ≥ 992px

Part 1 uses only custom CSS and media queries (no Bootstrap). Part 2 and Part 3 use Bootstrap 5.3 via CDN.

## Notes
- Images use placeholder services (Picsum) to avoid external assets.
- CSS is kept minimal and commented for clarity.
- See `REPORT.md` for a ready-to-fill report template.
