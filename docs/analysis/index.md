---
title: Analysis
tags:
  - analysis
---

# Analysis

Notes on real analysis and calculus.

## Contents

- [Limits](limits.md) — $\varepsilon$-$\delta$ definitions and properties.
- [Integration](integration.md) — Riemann integrals, FTC, and techniques.

## Core Definitions

- **Limit:** $\lim_{x \to a} f(x) = L$ iff for every $\varepsilon > 0$ there
  exists $\delta > 0$ such that $0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$.
- **Continuity:** $f$ is continuous at $a$ iff $\lim_{x \to a} f(x) = f(a)$.