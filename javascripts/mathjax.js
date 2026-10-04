window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams"
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  svg: { fontCache: "global" }
};

// After each page load, re-typeset the TOC + nav
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();

  // Target the right-sidebar TOC and left sidebar too
  const toc = document.querySelectorAll(
    ".md-nav__link, .md-nav__title, .md-sidebar--secondary"
  );
  toc.forEach(el => el.classList.add("arithmatex"));

  MathJax.texReset();
  MathJax.typesetPromise();
});