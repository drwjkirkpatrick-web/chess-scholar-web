# Lesson Plan 07: Special Moves: Castling

> *Safety first; king + rook teamwork.*

---

**Module Reference:** Prompt 07 — lesson-07-castling.md  
**Duration:** 60 min  
**Age Group:** 8-10  
**Chess Skill Level:** ♙ Pawn Tier  
**Tool:** Physical board (primarily)

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Execute** castling correctly — king-side and queen-side.
2. **Identify** all conditions that make castling illegal.
3. **Value** teamwork — understanding that the King and Rook protect each other by working together.

## Key Inquiry Question

> How do the King and Rook team up to keep the King safe — and when is the best time to castle?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed diagram showing before/after castling positions
- Red and green markers to label "safe" and "unsafe" conditions
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Castling entry

---

## Chess Persona: The King & Rook

**Piece:** King & Rook  
**Value:** Special move (King = infinite, Rook = 5)  
**Movement:** The King moves two squares toward a Rook, and the Rook jumps over the King to land on the square next to it  
**Persona Trait:** Teamwork & Safety  
**Why this piece?** Castling is the only move in chess where two pieces move at once. It symbolizes teamwork and mutual protection: the King tucks itself behind a wall of Pawns, and the Rook moves from the corner to the center of the board, ready to attack. This teaches that the best defense is not one hero standing alone, but two pieces working in coordination.  
**Historical Note:** Castling did not exist in the original Indian game of chaturanga. The King started in the center and had to fend for itself. As chess evolved in Europe during the Middle Ages, players noticed that the King was too vulnerable in the center, and the Rook was trapped in the corner. European players invented castling (originally called "the King's leap") as a way to solve both problems at once. The modern rules were standardized in the 17th century. Interestingly, there were once two forms: "free castling" (the King could move anywhere behind the Rook) and "close castling" (our modern rule). "Free castling" was still played in parts of Italy until the 19th century!

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Set up the starting position. Ask a student to move the King one square toward the corner. Then ask: "What if the King could move TWO squares and bring his castle with him?"

- "Why would the King want to move to the corner instead of staying in the center?" *Because the corner is safer — the King can hide behind Pawns.*
- "Why does the Rook jump over the King?" *So the Rook comes out of the corner and into the game.*
- "Can you castle anytime you want?" *No — there are special rules!*

Explain: *Today we learn the most important special move in chess: castling. It is the only move where TWO pieces move at once, and it is all about teamwork and safety.*

### Step 1: Concept Introduction — How to Castle (15-20 min)

**Teach the two types of castling:**

**King-side castling (short castling):**
- White: King on e1 moves to g1; Rook on h1 moves to f1.
- Black: King on e8 moves to g8; Rook on h8 moves to f8.
- Notation: 0-0

**Queen-side castling (long castling):**
- White: King on e1 moves to c1; Rook on a1 moves to d1.
- Black: King on e8 moves to c8; Rook on a8 moves to d8.
- Notation: 0-0-0

**Demonstration with notation:**

```
Starting position (White only):
King on e1, Rook on h1, Rook on a1.

King-side castle: 1. 0-0
Result: King on g1, Rook on f1.

Queen-side castle: 1. 0-0-0
Result: King on c1, Rook on d1.
```

**The four conditions that must ALL be true:**
1. The King and the castling Rook have **not moved yet** in the game.
2. There are **no pieces between** the King and the Rook.
3. The King is **not in check** right now.
4. The King does **not pass through check** and does **not end in check** — every square the King crosses (including the final square) must be safe.

**Demonstration of illegal castling:**

```
Position 1 (illegal — piece in between):
White King on e1, White Bishop on f1, White Rook on h1.
Cannot castle king-side because the Bishop blocks the path.
```

```
Position 2 (illegal — King in check):
White King on e1.
Black Rook on e8 attacking e1.
White cannot castle while in check.
```

```
Position 3 (illegal — King passes through check):
White King on e1, White Rook on h1, empty squares f1 and g1.
Black Bishop on c5 attacking f1.
White cannot castle king-side because the King would pass through f1, which is under attack.
```

**Key teaching point:** Castling is the only move where pieces move together, and it is the single most important move for King safety in the opening. Most games should be castled by move 10.

### Step 2: Guided Practice — Castle Detective (15-20 min)

Students work in pairs.

**Activity:** The teacher sets up 8 different positions on the demonstration board. For each position, students must determine:
- Can White castle king-side?
- Can White castle queen-side?
- Which rule (if any) prevents castling?

```
Position 1:
White King e1, White Rook h1. No pieces between. White has not moved either. No checks. → BOTH legal!

Position 2:
White King e1 (already moved once!), White Rook h1. → King-side illegal because King moved.

Position 3:
White King e1, White Rook h1, White Knight g1. → King-side illegal because Knight blocks.

Position 4:
White King e1, White Rook a1, empty d1. Black Queen on d8. → Queen-side legal IF d1 is not attacked.

Position 5:
White King e1, White Rook h1. Black Bishop on a6 attacking g1. → King-side illegal because g1 is attacked.

Position 6:
White King e1, White Rook h1. Black Knight on f3 attacking e1 and g1... wait, Knight on f3 attacks e1, g1, h2, h4, g5, e5, d4, d2. So f3 attacks g1. King passes through g1 → illegal!

Position 7:
White King e1, White Rook a1. Black Rook on d8 attacking d1. Queen-side illegal because d1 is attacked.

Position 8:
White King e1 (already moved to e2 and back to e1 — counts as moved!), White Rook h1. → Illegal because King moved, even though it returned to e1.
```

[Checklist for students:]
- [ ] I checked if the King has moved before.
- [ ] I checked if the Rook has moved before.
- [ ] I verified there are no pieces between the King and Rook.
- [ ] I confirmed the King is not currently in check.
- [ ] I checked that every square the King crosses is safe.
- [ ] I identified which rule prevents castling when it is illegal.

### Step 3: Independent Practice — Build and Break Castling (10-15 min)

**Challenge:** Set up a position where White CAN castle king-side. Then change ONE thing to make it illegal. Then change it back. Repeat for queen-side. Can you create a position where BOTH king-side and queen-side are illegal for different reasons?

```
Starting position for challenge:
White: King e1, Rooks a1 and h1, other pieces in standard starting positions.
Black: Standard starting position.
```

**Task 1:** Make king-side castling illegal by moving a piece in between.  
**Task 2:** Make queen-side castling illegal by putting the King in check.  
**Task 3:** Make both illegal at the same time.

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Student builds a legal castling position | Understands all four conditions |
|| Student identifies exactly which rule is broken | Can articulate the four conditions clearly |
|| Student creates a position where both sides are illegal | Demonstrates deep understanding of all conditions |

[Student checklist:]
- [ ] I built a position where king-side castling is legal.
- [ ] I made it illegal by changing one thing and named the rule.
- [ ] I built a position where queen-side castling is legal.
- [ ] I made it illegal by changing one thing and named the rule.
- [ ] I created at least one tricky position to challenge my partner.

### Step 4: Sharing & Feedback (5-10 min)

Learners present their "tricky positions." Use the critique framework:
- **What's working:** "You remembered that the King cannot pass through check — that is the rule most people forget!"
- **One thing to try:** "Try creating a position where the King is NOT in check, but castling is still illegal. What rule applies?"
- **Question:** "Why do you think castling is the only move where two pieces move at the same time? What would chess be like without it?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Executing Castling | Cannot perform the move correctly | Performs king-side but confuses queen-side | Executes both king-side and queen-side correctly every time | Explains the notation difference (0-0 vs 0-0-0) |
|| Identifying Illegal Conditions | Cannot identify any illegal conditions | Identifies 1-2 conditions with prompting | Identifies all four conditions independently | Creates puzzles testing all four conditions |
|| Board/Tool Use | Cannot set up castling positions | Sets up with help | Sets up independently and verifies all conditions | Uses the board to demonstrate teaching positions |

---

## Extended Activity

**Castle Race:** Students play a mini-game where the first player to castle legally wins. They must set up the board properly and castle by the rules.

**Physical Activity:** "Castle Formation" — two students hold hands (King and Rook) and must move together across the room, but only if a "referee" confirms all four conditions are met.

**Digital Activity:** Practice castling on lichess.org/learn.

**Teaching Activity:** Teach a parent or sibling the four rules of castling and test them with a quiz.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Create a visual checklist of the four conditions on a card they can keep | Introduce the concept of "castling into it" — when castling puts the King in more danger, not less |
|| Practice king-side only before introducing queen-side | Challenge them to explain why castling queen-side is often riskier (the King is farther from the corner) |
|| Use color-coded markers: green for safe squares, red for attacked squares | Ask them to find a famous game where castling decided the outcome |

---

## Teacher Reflection

- [ ] Did learners understand the four conditions for castling?
- [ ] Was the King-and-Rook teamwork metaphor engaging?
- [ ] Could learners identify illegal castling positions?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Special Moves / Opening | Pre-rating |
|| Chess.com Lessons | Board & Rules | Basics |
|| Skill Tier | Pawn Tier | ♙ Foundation |