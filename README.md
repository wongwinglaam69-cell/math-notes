# My Mathematics Notes

A personal website of math notes built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/),
with full LaTeX rendering via MathJax.

## Features

- Markdown + LaTeX math ($inline$ and $$display$$)
- Automatic sidebar navigation by topic
- Full-text search
- Dark/light theme toggle
- Tags for cross-topic discovery
- Theorem / Definition / Proof callout boxes
- One-command deploy to GitHub Pages via Actions

## Local Development

### 1. Create a virtual environment

```bash
python -m venv .venv
source .venv/bin/activate    # Windows: .venv\Scripts\activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Serve locally (auto-reload)

```bash
mkdocs serve
```

Open <http://127.0.0.1:8000>.

### 4. Build for production

```bash
mkdocs build
```

Static files land in `site/`.

## Adding a New Note

1. Create `docs/<topic>/<note>.md`.
2. Add YAML frontmatter:
   ```yaml
   ---
   title: My Note
   tags: [topic, subtopic]
   ---
   ```
3. Register it in `mkdocs.yml` under `nav:`:
   ```yaml
   nav:
     - Algebra:
         - algebra/index.md
         - My Note: algebra/my-note.md
   ```

## Writing Math

Inline: `$E = mc^2$` → $E = mc^2$

Display:
```
$$
\int_a^b f(x)\, dx
$$
```

Theorem/Definition/Proof boxes:
```html
<div class="theorem" markdown>
Statement here with $math$.
</div>
```

## Deploy

Push to `main` — GitHub Actions builds and publishes to the `gh-pages`
branch automatically. Enable Pages in repo settings (source = `gh-pages`).

## License

MIT (or your choice).