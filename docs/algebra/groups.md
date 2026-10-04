---
title: Group Theory
tags:
  - algebra
  - groups
---

# Group Theory

## 1. Definition of a Group

<div class="definition" markdown>
A **group** is a pair $(G, \cdot)$ where $G$ is a set and
$\cdot : G \times G \to G$ is a binary operation satisfying:

1. **Associativity:** $(ab)c = a(bc)$ for all $a,b,c \in G$.
2. **Identity:** there exists $e \in G$ such that $eg = ge = g$ for all $g \in G$.
3. **Inverses:** for each $g \in G$, there exists $g^{-1} \in G$ with $gg^{-1} = g^{-1}g = e$.
</div>

If additionally $ab = ba$ for all $a, b \in G$, the group is called **abelian**.

## 2. Subgroups

A subset $H \subseteq G$ is a **subgroup**, written $H \leq G$, if $H$
is itself a group under the restriction of $\cdot$.

!!! note "Subgroup Criterion"
    A nonempty $H \subseteq G$ is a subgroup iff for all $a, b \in H$,
    we have $ab^{-1} \in H$.

## 3. Lagrange's Theorem

<div class="theorem" markdown>
If $G$ is a finite group and $H \leq G$, then $|H|$ divides $|G|$,
and in fact

$$
|G| = [G : H] \cdot |H|.
$$
</div>

<div class="proof" markdown>
Consider the left cosets $gH = \{gh : h \in H\}$. They partition $G$,
and each has cardinality $|H|$ via the bijection $h \mapsto gh$.
Hence $|G| = k \cdot |H|$ where $k = [G : H]$ is the number of distinct
cosets.
</div>

### Corollaries

1. The order of any element $g \in G$ divides $|G|$.
2. If $|G| = p$ is prime, then $G \cong \mathbb{Z}/p\mathbb{Z}$.

## 4. Homomorphisms

A map $\varphi : G \to H$ is a **homomorphism** if
$\varphi(ab) = \varphi(a)\varphi(b)$ for all $a, b \in G$.

- $\ker \varphi = \{g \in G : \varphi(g) = e_H\}$ is a normal subgroup.
- $\operatorname{im} \varphi \leq H$.
- **First isomorphism theorem:** $G / \ker \varphi \cong \operatorname{im} \varphi$.

## Exercises

1. Show that $(\mathbb{Z}, +)$ is a group, but $(\mathbb{Z}, \cdot)$ is not.
2. Prove that every group of order $4$ is abelian.
3. Classify all groups of order $6$.