---
title: Chapter 3 The integers
tags:
  - MATH1090 Introduction to Set Theory
  - The integers
---

# Chapter 3

## 1. Peano's axiom

<div class="definition" markdown>
 We say the triple data of $(N, 0, S)$ or just $N$ for short is a <u>model of the natural numbers</u> if:

1. If $S(x)=S(y)$ for $x,y\in \mathbb{N}$, then $x=y$ ($S$ is injective).
2. For all $x \in \mathbb{N}$, $S(x)\neq x$ .
3. There is no $x\in \mathbb{N}$ such that $S(x)=0$.
4. <i>(Principle of Induction)</i> Suppose a predicate $P$ is true of $0$, and that whatever $P$ is true of $x$, it is also true of $S(x)$. Then $P$ is true for all $x\in \mathbb{N}$.
</div>

**Exercise 3.1.1** Show that the set $\{0,1,2\}$ with $S(0)=1, S(1)=2, S(2)=0$ <u>does not </u> satisfy all Peano axioms. Which axioms fail?
??? note "Solution"
    The third axiom failed, there shouldn't be any $S(x)=0$ but now we have $S(2)=0$, contradiction.

## 2. Defining arithmetic operations: $+$ and $\cdot$
<div class="definition" markdown>
First, we define $+$ : 

$$
\begin{cases}
  a+0=a\\
  a+S(b)=S(a+b)
\end{cases}
$$

and likewise with the order reversed.
</div>

**Exercise 3.2.1** Show that for all $n\in \mathbb{N}$, $0+n=n$.
??? note "Solution"
    
    We shall prove this by induction.

    Let $P(n)$ be the predicate $0+n=n$.

    By defintion we have $a+0=a$, substitute $a=0$, we get $0+0=0$, hence $P(0)$ is true.

    Assume $P(x)$ is true, i.e. $0+x=x$,

    consider $P(S(x))$,

    $$
    \begin{aligned}
    0+S(x) &= S(0+x) && \text{(by definition)} \\
    &= S(x) && \text{(by induction assumption)}
    \end{aligned}
    $$

    Therefore $P$ is also true of $S(x)$.

    By the principle of induction, $P$ is true of all $n\in \mathbb{N}$.

<div class="definition" markdown>
As with addition, we define $\cdot$ recursively too:

$$
\begin{cases}
a\cdot0=0\\
a\cdot S(b)=a+(a\cdot b)
\end{cases}
$$

This is well-defined again by the principle of induction.
</div>

**Exercise 3.2.2** Calculate $2\cdot 3$.
??? note "Solution"

    $$
    \begin{aligned}
    2\cdot 3 &= S(S(0)) \cdot S(S(S(0))) \\
    &= S(S(0)) + (S(S(0))\cdot S(S(0)))\\
    &= S(S(0)) + S(S(0)) + S(S(0))\cdot S(0)\\
    &=S(S(0)) + S(S(0)) + S(S(0)) + S(S(0))\cdot 0\\
    &=S(S(0)) + S(S(0)) + S(S(0)) + 0\\
    &=S(S(S(S(S(S(0))))))
    \end{aligned}
    $$

**Exercise 3.2.3** Show from the definitions that addition and multiplication are commutative and associative. 
??? note "Solution (addition is commutative)" 

    First we show addition is commutative.

    **Lemma:** $S(a)+b=S(a+b)$.
    <div class="proof" markdown>

    We can prove this by induction.

    For the base case, $S(a)+0=S(a)=0+S(a)$, by exercise 3.2.1.

    Now assume $P(b)$ is true, we consider $P(S(b))$

    $$
    \begin{aligned}
    S(a)+S(b)&=S(S(a)+b) && \text{(by definition of addition)}\\
    &=S(S(a+b)) && \text{(by induction assumption)}\\
    &=S(a+S(b)) && \text{(by definition of addition)}
    \end{aligned}
    $$

    Hence $P(b)$ is true for all $b\in \mathbb{N}$
    </div>
    Then we shall prove the statement by induction,

    Let $P(b)$ be the predicate such that $a+b=b+a$, for $a,b\in \mathbb{N}$.

    When $b=0$, proved in exercise 3.2.1.

    Assume $P$ is true for $b$, then consider $S(b)$,

    $$
    \begin{aligned}
    a+S(b)&=S(a+b)\\
    &=S(b+a)&& \text{(by induction assumption)}\\
    &=S(b)+a && \text{(by lemma)}
    \end{aligned}
    $$

    Hence $P$ is proved, addition is commutative.

??? note "Solution (addition is associative)"

    Now we show addition is associative, i.e. $(a+b)+c=a+(b+c)$ for $a,b,c\in \mathbb{N}$.

    We shall prove it by induction on $b$.

    When $b=0$, $(a+0)+c=a+c=a+(0+c)$. Note that we have $a+0=a$ by definition and $0+c=c$ from exercise 3.2.1.

    Now assume $(a+x)+c=a+(x+c)$, and consider $S(x)$,

    $$
    \begin{aligned}
    (a+S(x))+c&=S(a+x)+c && \text{(by definition)}\\
    &= c+S(a+x) && \text{(by commutativity)}\\
    &= S(c+a+x) && \text{(by definition)}\\
    &= S(a+x+c) && \text{(by commutativity)}\\
    &= a + S(x+c) && \text{(by definition)}\\
    &= a + (S(x)+c) && \text{(refer to lemma in proof of commutativity)}
    \end{aligned}
    $$

    by induction, addition is associative.

??? note "Solution (multiplication is commutative)"

    **Lemma 1.** $0\cdot a=0$.

    <div class="proof" markdown>
    We shall do this by induction.

    Base case: $0\cdot0=0$ by definition.

    Assume $0\cdot x=0$, then consider $S(x)$,

    $$
    \begin{aligned}
    0\cdot S(x)&=0+(0\cdot x) && \text{(by definition)}\\
    &= 0\cdot 0 && \text{(induction assumption)}\\
    &= 0\\
    \end{aligned}
    $$

    By induction, $0\cdot a=0$ for all $a\in \mathbb{N}$
    </div>

    **Lemma 2.** $S(a)\cdot b=(a\cdot b)+b$.

    <div class="proof" markdown>
    We prove this by induction on $b$.

    When $b=0$, $(a\cdot0)+0=0+0=0=S(a)\cdot 0$.

    Assume $S(a)\cdot x=(a\cdot x)+x$, consider:

    $$
    \begin{aligned}
    S(a)\cdot S(x)&== S(a)+(S(a)\cdot x) && \text{(by definition)}\\
    &= S(a)+(a\cdot x)+x && \text{(by induction assumption)}\\
    &= S(a)+x+(a\cdot x)\\
    &= S(x)+a+(a\cdot x) && \text{(from commutativity of addition)}\\
    &= S(x)+(a\cdot S(x)) && \text{(by definition)}\\
    &= (a\cdot S(x)) + S(x) && \text{(since addition is commutative)}
    \end{aligned}
    $$

    Hence, the lemma is proved.
    </div>



    Now, we can prove that multiplication is commutative using induction.

    Base case: $a\cdot0=0=0\cdot a$ (by lemma 1).

    Assume $a\cdot x=x\cdot a$,

    $$
    \begin{aligned}
    a\cdot S(x) &=a+(a\cdot x) && \text{(by definition)}\\
    &=a+(x\cdot a) && \text{(induction assumption)} \\
    &=(x\cdot a) + a && \text{(addition is commutative)} \\
    &=S(x)\cdot a && \text{(lemma 2)}
    \end{aligned}
    $$

    Hence by induction, multiplication is commutative.













