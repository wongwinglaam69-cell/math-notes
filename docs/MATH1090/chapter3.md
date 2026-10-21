---
title: The integers
tags:
  - MATH1090 Introduction to Set Theory
  - The integers
---

# Chapter 3

## 1. Peano's axiom

<div class="definition" markdown>
 We say the triple data of $(N, 0, S)$ or just $N$ for short is a <u>model of the natural numbers</u> if:

1. If $S(x)=S(y)$ for $x,y\in N$, then $x=y$ ($S$ is injective).
2. For all $x \in N$, $S(x)\neq x$ .
3. There is no $x\in N$ such that $S(x)=0.
4. <i>(Principle of Induction)</i> Suppose a predicate $P$ is true of $0$, and that whatever $P$ is true of $x$, it is also true of $S(x)$. Then $P$ is true for all $x\in N$.

**Exercise 3.1.1** Show that the set $\{0,1,2\}$ with $S(0)=1, S(1)=2, S(2)=0$ <u>does not </u> satisfy all Peano axioms. Which axioms fail?
??? note "Solution"
    The third axiom failed, there shouldn't be any $S(x)=0$ but now we have $S(2)=0$, contradiction.
    


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