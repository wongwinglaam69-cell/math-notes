---
title: Integration
tags:
  - analysis
  - integration
---

# Integration

## 1. The Riemann Integral

Given $f : [a, b] \to \mathbb{R}$ bounded, a **partition**
$P = \{x_0 < x_1 < \cdots < x_n\}$ of $[a,b]$ has mesh
$\|P\| = \max_i (x_i - x_{i-1})$.

Upper and lower sums:

$$
U(f, P) = \sum_{i=1}^n M_i \Delta x_i, \qquad
L(f, P) = \sum_{i=1}^n m_i \Delta x_i
$$

where $M_i = \sup_{[x_{i-1}, x_i]} f$ and $m_i = \inf_{[x_{i-1}, x_i]} f$.

$f$ is **Riemann integrable** if $\sup_P L(f, P) = \inf_P U(f, P)$; call
this common value $\int_a^b f$.

## 2. Fundamental Theorem of Calculus

<div class="theorem" markdown>
**FTC, Part I.** If $f$ is continuous on $[a,b]$ and
$F(x) = \int_a^x f(t)\, dt$, then $F$ is differentiable on $(a,b)$ and

$$
F'(x) = f(x).
$$
</div>

<div class="theorem" markdown>
**FTC, Part II.** If $f$ is integrable and $F$ is any antiderivative
of $f$, then

$$
\int_a^b f(x)\, dx = F(b) - F(a).
$$
</div>

## 3. Techniques

| Technique | When to use |
|-----------|-------------|
| Substitution | Composite integrands |
| Integration by parts | Products, $\int u \, dv = uv - \int v \, du$ |
| Partial fractions | Rational functions |
| Trigonometric substitution | $\sqrt{a^2 - x^2}$, etc. |

## Exercises

1. Compute $\int_0^1 x^2 \, dx$ directly from the definition.
2. Evaluate $\int_0^{\pi/2} \sin^2 x \, dx$ using $\sin^2 x = \frac{1 - \cos 2x}{2}$.