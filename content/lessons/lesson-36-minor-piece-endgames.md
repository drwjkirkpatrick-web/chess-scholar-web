# Lesson Plan 36: Minor Piece Endgames

> **Module Reference:** Prompt 36 — lesson-36-minor-piece-endgames.md
> **Duration:** 80 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♖ Rook Tier (1200–1600)
> **Tool:** Physical board + analysis engine

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Evaluate** whether bishop or knight is stronger in a given endgame.
2. **Explain** why same-color bishop endgames are often draws.
3. **Value** nuance — understanding that the same pieces behave differently when most other pieces are gone.

## Key Inquiry Question

> Why is a Bishop sometimes a hero and sometimes a prisoner in the endgame — and how do you know which one you have?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/practice
- Analysis engine (Stockfish via lichess.org/analysis)
- Printed diagrams of bishop vs knight and same-color bishop positions
- Optional: Raspberry Pi with browser for low-resource settings

---

## Chess Persona: The Bishop & Knight

**Piece:** Bishop & Knight  
**Value:** 3 points each  
**Movement:** Bishop — diagonals; Knight — L-shape jump  
**Persona Trait:** Different Strengths  
**Why these pieces?** Bishop and knight endgames reveal the fundamental difference between the two minor pieces. The bishop's long-range power vs the knight's ability to control any color square creates fascinating imbalances. Understanding which piece is better in which position is a hallmark of strong endgame play.  
**Historical Note:** In the 1992 World Championship match between Fischer and Spassky, several games hinged on bishop vs knight endgames. The chess world still debates which minor piece is "better" — but the true answer is: it depends on the position. Capablanca was famous for winning knight endgames where others would draw.

---

## Lesson Development

### Introduction (10 min)

**Hook:** Show a position with bishop vs knight and ask students: "You have to choose — bishop or knight. Which one do you keep?" Reveal that the answer depends entirely on the pawn structure.

*Hook questions:*
- "If all the pawns were on one side of the board, which piece would you prefer?" *—The knight, because the bishop needs open diagonals.*
- "If pawns are on both sides, which piece dominates?" *—The bishop, because it can defend and attack on both wings simultaneously.*
- "Why do two bishops beat bishop + knight in most endgames?" *—Because together they control both colors, leaving no safe squares for the enemy king or pawns.*

Explain: *Today we study minor piece endgames — where the Bishop and Knight reveal their true characters. The Rook Tier is about calculation, and choosing the right minor piece is a calculation of position, not just points.*

### Step 1: Concept Introduction — Bishop vs Knight (20 min)

**When the Bishop is Better: Open Positions, Both Wings**

```
White: Bd4, Pf2, Pg3, Ph4, Kg2
Black: Nf6, Pf7, Pg6, Ph7, Kg8

White's bishop controls the a1-h8 diagonal and can influence both sides of the board.
Black's knight is limited to squares it can reach in one move.
```

**When the Knight is Better: Closed Positions, One Wing**

```
White: Nd4, Pf4, Pg4, Ph3, Kh2
Black: Bc6, Pf6, Pg7, Ph7, Kh8

The pawns block the bishop's diagonals.
The knight can hop to strong outposts that the bishop cannot reach.
```

**Key Rule: The Bishop Likes Open, the Knight Likes Closed**
- Open position + pawns on both wings = Bishop advantage
- Closed position + pawns clustered = Knight advantage
- Pawns on one color = Bishop can be bad (blocked by its own pawns)

**Key teaching point:** In endgames, the bishop's speed matters more than ever. A bishop can stop a passed pawn from across the board; a knight must physically travel there.

[Student checklist:]
- [ ] I can identify when a position favors the bishop
- [ ] I can identify when a position favors the knight
- [ ] I understand why pawn structure determines which minor piece is stronger

### Step 2: Guided Practice — Same-Color Bishop Endgames (20 min)

**Why Same-Color Bishop Endgames Are Draws**

When both sides have bishops on the same color (e.g., both light-squared bishops), certain positions become impossible to win even with an extra pawn.

```
White: Bf4, Pa5, Kg2
Black: Bd6, Pa6, Kg7

Both bishops control light squares.
White's extra a-pawn can only promote on a8 — a dark square.
The black bishop can never control a8, but the black king can block the pawn.
With correct defense, Black draws.
```

**Winning Technique: The Wrong Corner**

In bishop + pawn vs bishop (same color), the defender wants their king in the "wrong corner" — the corner the bishop cannot control. For a light-squared bishop, the wrong corners are a1 and h8.

```
White: Bg2, Pg5, Kg3
Black: Be6, Kg7

Black's king wants to reach h8 (the wrong corner for White's light-squared bishop).
If Black reaches h8, it's a draw because White cannot force the king away.
```

**Key teaching point:** Same-color bishop endgames are often draws because the defender can use the "wrong corner" to escape. The attacker must know how to prevent the king from reaching that sanctuary.

[Checklist for students:]
- [ ] I know what "same-color bishops" means
- [ ] I can identify the "wrong corner" for a bishop
- [ ] I understand why same-color bishop endgames tend to be draws

### Step 3: Independent Practice — Minor Piece Evaluation (20 min)

**Challenge:** Students receive 5 positions and must evaluate whether bishop or knight is better and why.

**Position 1:**
```
White: Bc4, Pa4, Pb3, Pc2, Kg1
Black: Ne5, Pa7, Pb7, Pc6, Kg8
Pawns on both sides, relatively open.

Answer: Bishop is better — controls both wings.
```

**Position 2:**
```
White: Nd5, Pf5, Pg4, Ph3, Kf2
Black: Bd6, Pf7, Pg7, Ph7, Kf8
Pawns locked, position closed.

Answer: Knight is better — can find strong outposts.
```

**Position 3 (Same-color bishops):**
```
White: Bf3, Pg4, Kg2
Black: Be6, Pg7, Kg8

Question: Can White win?
Answer: Difficult — black king defends g7, and if White pushes g5, the black bishop can control key squares.
```

||| Position | Success Metric |
|||------------------------|------------------|
|| Bishop-favoring position | Correctly identify bishop advantage |
|| Knight-favoring position | Correctly identify knight advantage |
|| Same-color bishop endgame | Determine if it's winning or drawn |

[Student checklist:]
- [ ] I evaluated each position correctly
- [ ] I explained my reasoning using pawn structure
- [ ] I used the analysis engine to verify my evaluations

### Step 4: Sharing & Feedback (10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your evaluation of Position 2 was spot-on — the knight thrives in closed positions where the bishop is blocked."
- **One thing to try:** "In same-color bishop endgames, try to calculate whether the defending king can reach the wrong corner before you assume it's winning."
- **Question:** "If you had bishop vs knight and your opponent had a pawn on each wing, what would you try to do to the pawn structure?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Bishop vs Knight Evaluation | Cannot identify which is better | Identifies with prompting | Evaluates independently with reasoning | Predicts how pawn changes affect evaluation |
|| Same-Color Bishop Theory | Cannot explain wrong corner | Identifies wrong corner | Explains drawing technique | Applies to novel positions |
|| Board/Tool Use | Cannot set up endgames | Sets up with help | Sets up and analyzes independently | Uses engine to test hypotheses |

---

## Extended Activity

**Minor Piece Study:** Research three famous games where bishop vs knight was decisive. Write a paragraph for each explaining why the winning side's minor piece was better suited to the position.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Start with only bishop vs knight, no pawns | Study opposite-color bishop endgames (often draw but can attack) |
|| Use simplified positions with fewer pawns | Analyze Fischer's minor piece endgames from his 1972 match |
|| Pair work: one evaluates, one verifies with engine | Study "fortress" positions in minor piece endgames |

---

## Teacher Reflection

- [ ] Did learners understand when bishop is better than knight and vice versa?
- [ ] Was the Bishop & Knight persona (different strengths, nuance) engaging? Did they connect it to the endgame concept?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Endgame | 1200–1600 |
|| Chess.com Lessons | Endgames | Intermediate |
|| Skill Tier | Rook Tier | Rook Tier (Lessons 31–40) |