---
title: Ring Theory
tags:
  - algebra
  - rings
---

# Ring Theory

## 1. Definition

<div class="definition" markdown>
A **ring** is a triple $(R, +, \cdot)$ such that:

- $(R, +)$ is an abelian group.
- Multiplication is associative: $(ab)c = a(bc)$.
- Distributivity holds: $a(b+c) = ab + ac$ and $(a+b)c = ac + bc$.
</div>

If $R$ also has a multiplicative identity $1$, we call $R$ a **unital
ring**. If $ab = ba$ for all $a,b$, $R$ is **commutative**.

## 2. Ideals

A subset $I \subseteq R$ is an **ideal** if:

1. $(I, +)$ is a subgroup of $(R, +)$.
2. For all $r \in R$ and $x \in I$: $rx \in I$ and $xr \in I$.

The quotient $R / I$ inherits a ring structure.

<div class="theorem" markdown>
**First Isomorphism Theorem for Rings.** If $\varphi : R \to S$ is a
ring homomorphism, then

$$
R / \ker \varphi \cong \operatorname{im} \varphi.
$$
</div>

## 3. Polynomial Rings

For a commutative ring $R$, $R[x]$ is the ring of polynomials with
coefficients in $R$. If $R$ is a field, $R[x]$ is a Euclidean domain.

## Exercises

1. Show that $\mathbb{Z}/n\mathbb{Z}$ is a field iff $n$ is prime.
2. Prove that every ideal of $\mathbb{Z}$ is principal.