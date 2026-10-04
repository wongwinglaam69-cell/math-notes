---
title: Limits
tags:
  - analysis
  - limits
---

# Limits

## 1. The $\varepsilon$-$\delta$ Definition

<div class="definition" markdown>
Let $f : D \to \mathbb{R}$ and let $a$ be a limit point of $D$. We say

$$
\lim_{x \to a} f(x) = L
$$

if for every $\varepsilon > 0$, there exists $\delta > 0$ such that

$$
0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon.
$$
</div>

## 2. Basic Limit Laws

If $\lim_{x\to a} f(x) = L$ and $\lim_{x\to a} g(x) = M$, then:

- $\lim_{x \to a} (f + g)(x) = L + M$
- $\lim_{x \to a} (fg)(x) = LM$
- If $M \neq 0$, $\lim_{x \to a} (f/g)(x) = L/M$

## 3. An Important Limit

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1.
$$

<div class="proof" markdown>
For $0 < x < \pi/2$, consider the unit circle. Comparing areas of the
inscribed triangle, the sector, and the outer triangle gives

$$
\sin x < x < \tan x.
$$

Dividing by $\sin x$ and taking reciprocals:

$$
\cos x < \frac{\sin x}{x} < 1.
$$

By the squeeze theorem and $\cos x \to 1$ as $x \to 0$, the result follows.
</div>

## Exercises

1. Prove that $\lim_{x \to 2} (3x + 1) = 7$ from the definition.
2. Show that $\lim_{x \to 0} x^2 \sin(1/x) = 0$.