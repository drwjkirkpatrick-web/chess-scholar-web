# Lesson Plan 35: Pawn Endgames

> **Module Reference:** Prompt 35 — lesson-35-pawn-endgames.md
> **Duration:** 80 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♖ Rook Tier (1200–1600)
> **Tool:** Physical board + analysis engine

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Apply** opposition, triangulation, and the square rule in pawn endgames.
2. **Evaluate** whether a pawn will queen before the enemy King can stop it.
3. **Value** purity — understanding that pawn endgames teach you how pieces truly move because there are no tricks, only truth.

## Key Inquiry Question

> How can two Kings and a few pawns contain more depth than a board full of pieces — and why is the opposition the most important concept in chess?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/practice
- Analysis engine (Stockfish via lichess.org/analysis)
- Printed diagrams of opposition positions
- Optional: Raspberry Pi with browser for low-resource settings

---

## Chess Persona: The Pawn

**Piece:** Pawn  
**Value:** 1 point  
**Movement:** One square forward (two on first move), captures diagonally  
**Persona Trait:** The Purest Chess  
**Why this piece?** When all other pieces are gone, only pawns and kings remain. Pawn endgames strip away complexity and force students to understand the raw geometry of chess — opposition, triangulation, and zugzwang. The Pawn teaches that even the smallest piece, in the right structure, determines the game's outcome.  
**Historical Note:** Philidor called pawns "the soul of chess" in 1749. His insight — that pawn structure determines strategy — remains true today. Every pawn endgame is a mathematical puzzle where one wrong step means the difference between winning and drawing.

---

## Lesson Development

### Introduction (10 min)

**Hook:** Set up a position with two kings and one pawn. Ask students: "If I offered you $100 to tell me who wins this position, could you?" Show them that even the simplest positions contain deep calculation.

*Hook questions:*
- "Why do grandmasters call pawn endgames 'the purest form of chess'?" *—Because with no pieces left to create tricks, only calculation and geometry matter.*
- "What can two kings and one pawn teach us that a full board cannot?" *—The opposition, triangulation, and zugzwang — concepts hidden by complexity when more pieces are present.*
- "If you had to bet on a pawn race, what math would you use?" *—The square rule and counting tempi.*

Explain: *Today we study pawn endgames — where the Pawn, our smallest piece, becomes our greatest teacher. No tricks, no tactics. Only truth.*

### Step 1: Concept Introduction — Opposition and Triangulation (20 min)

**The Opposition: Kings Facing Off**

When two kings face each other with one square between them, the player who does NOT have to move has the opposition.

```
White: Kd4
Black: Kd6

The kings face each other on the d-file with d5 between them.
If it's Black's turn, White has the opposition.
White's goal: move the king to maintain opposition while advancing pawns.

Example sequence:
1...Ke6 2. Kc5! (maintaining opposition from the side)
2...Kd7 3. Kd5! (direct opposition again)
3...Ke7 4. Ke5 (White advances, Black must retreat)
```

**Triangulation: Creating Zugzwang**

Triangulation is when one king makes a triangle-shaped maneuver to force the opponent into zugzwang — a position where any move they make worsens their position.

```
White: Ke4, Pf4, Pg4
Black: Ke6

1. Kd4! (beginning the triangle)
1...Kd6
2. Ke3! (completing the triangle — now it's Black's turn)
2...Kd5 (forced — but now)
3. f5! (White makes progress because Black had to move)
```

**Key teaching point:** Opposition is the single most important concept in pawn endgames. The king that can force the other to move first gains the decisive advantage. Triangulation is a tool to create that forcing move.

[Student checklist:]
- [ ] I can identify when kings are in opposition
- [ ] I know which side has the opposition
- [ ] I understand what triangulation means and why it works

### Step 2: Guided Practice — The Square Rule (20 min)

**The Square Rule: Can the King Catch the Pawn?**

Draw an imaginary square from the pawn to the promotion square. If the enemy king is inside or can enter the square on its turn, it can catch the pawn.

```
White: Kh5, Pd5
Black: Kf6

The square of the d5 pawn: d5-d8-a8-a5-d5.
The king on f6 is INSIDE the square.
Black can catch the pawn.

If the king were on h8 (outside the square), Black could not catch it.
```

**The Rule with Kings Already Blocking:** If the defending king is directly in front of the pawn (on the same file), the square rule changes — the king must also control the promotion square.

```
White: Kd5, Pd6
Black: Kd8

Black's king is in front of the pawn, blocking it.
But if White plays 1. Kc6!, Black must move: 1...Ke8 2. d7+ Kd8 3. Kd6! — zugzwang!
3...K any 4. d8=Q
```

**Key teaching point:** The square rule is a quick calculation tool, but it assumes an empty board. When kings block each other, zugzwang and opposition take over.

[Checklist for students:]
- [ ] I can draw the square of any pawn
- [ ] I can determine if the enemy king can catch it
- [ ] I know when the square rule doesn't apply (king blocking)

### Step 3: Independent Practice — Pawn Endgame Challenge (20 min)

**Challenge:** Students receive 5 positions. They must determine the result using opposition, triangulation, or the square rule.

**Position 1 (Opposition):**
```
White: Kf3, Pf4, Pg5
Black: Kf7
White to move — how does White win?

Answer: 1. Kg4! (maintaining the opposition)
1...Ke6 2. Kh5 (gaining ground)
```

**Position 2 (Triangulation):**
```
White: Ke4, Pd5
Black: Ke7
White to move — use triangulation

Answer: 1. Kd4! Kd7 2. Ke5! Ke7 3. d6+ Kd7 4. Kd5 (zugzwang)
```

**Position 3 (Square Rule):**
```
White: Pb4, Kg2
Black: Kg7
Black to move — can Black catch the pawn?

Answer: The square of b4 is b4-b7-e7-e4. Kg7 is outside. White promotes.
```

||| Position | Success Metric |
|||------------------------|------------------|
|| Opposition drill | Correctly identify and use opposition |
|| Triangulation puzzle | Execute triangulation to create zugzwang |
|| Square rule test | Correctly determine pawn race outcome |

[Student checklist:]
- [ ] I correctly used opposition in Position 1
- [ ] I found the triangulation in Position 2
- [ ] I applied the square rule in Position 3

### Step 4: Sharing & Feedback (10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your triangulation was clean — you forced zugzwang exactly when you needed it."
- **One thing to try:** "Try calculating the square rule before you start moving — it saves time in a real game."
- **Question:** "If the defending king starts inside the square, what other concept do you need besides the square rule?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Opposition | Cannot identify opposition | Identifies with prompting | Uses opposition independently | Explains why it wins |
|| Triangulation | Cannot create zugzwang | Creates zugzwang with hints | Triangulates independently | Recognizes triangulation patterns instantly |
|| Board/Tool Use | Cannot verify with engine | Basic engine use | Verifies positions competently | Uses engine to explore variations |

---

## Extended Activity

**Pawn Endgame Journal:** Solve 5 pawn-only positions on lichess.org/practice each day for a week. Write one sentence per position explaining whether you used opposition, triangulation, or the square rule.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Start with king and pawn vs king only | Study "corresponding squares" — advanced opposition theory |
|| Use colored markers on the board to show the square | Analyze Réti's famous study (1921) — a pawn endgame masterpiece |
|| Pair work: one plays White, one Black | Study pawn endgames from Capablanca's games |

---

## Teacher Reflection

- [ ] Did learners understand opposition and zugzwang?
- [ ] Was the Pawn persona (purity, mathematical truth) engaging? Did they connect it to the endgame concept?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Endgame | 1200–1600 |
|| Chess.com Lessons | Endgames | Intermediate |
|| Skill Tier | Rook Tier | Rook Tier (Lessons 31–40) |