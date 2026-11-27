# Lesson Plan 31: Calculation Technique

> **Module Reference:** Prompt 31 — lesson-31-calculation-technique.md
> **Duration:** 80 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♖ Rook Tier (1200–1600)
> **Tool:** Physical board + analysis engine

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Apply** the calculation method: candidate moves → forcing lines → evaluation.
2. **Calculate** 2-3 moves ahead consistently.
3. **Value** discipline — understanding that calculation is a muscle that strengthens with practice.

## Key Inquiry Question

> How do grandmasters see five moves ahead — and what technique lets you calculate deeper without getting lost?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Analysis engine (Stockfish via lichess.org/analysis)
- Printed calculation worksheets with candidate move positions
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Calculation Technique entry

---

## Chess Persona: The Rook

**Piece:** Rook  
**Value:** 5 points  
**Movement:** Straight lines — any number of squares along ranks or files  
**Persona Trait:** Deep Thinking  
**Why this piece?** The Rook is the piece of calculation — it must think in straight lines, plan corridors, and visualize open files before they exist. Just as the Rook needs to calculate where the open file will be in 10 moves, students must learn to calculate forcing lines step by step. The Rook teaches that power without precision is wasted.  
**Historical Note:** The Rook was originally a chariot in Indian chaturanga, symbolizing swift but directed power. In the 1960s, Soviet trainer Mark Dvoretsky revolutionized chess calculation training by developing the "candidate moves" method — the exact technique we teach today. Dvoretsky's students included Artur Yusupov and Sergei Dolmatov, all of whom became world-class players through disciplined calculation training.

---

## Lesson Development

### Introduction (10 min)

**Hook:** Show a position with a tactical combination. Ask: "How many moves ahead did you calculate?" Then reveal that the combination was 5 moves deep — and the grandmaster found it by following a system, not by "seeing" it magically.

*Hook questions:*
- "When you look at a chess position, what do you look at first?" *—Most players look at random moves. Grandmasters look at candidate moves systematically.*
- "Why do strong players say 'I calculate' instead of 'I see'?" *—Because calculation is a trainable skill, not a gift. They follow a method.*
- "What happens if you try to calculate every possible move?" *—You get lost. The trick is to calculate only the most forcing lines.*

Explain: *Today we learn the Rook's secret: calculation is not magic — it's a method. We will practice the candidate moves → forcing lines → evaluation system until it becomes automatic.*

### Step 1: Concept Introduction — The Calculation Method (20 min)

**Step 1A: Candidate Moves**

Before calculating, identify the 2-4 most promising moves. These are your "candidate moves." Do not calculate random moves — select candidates based on:
- Checks
- Captures
- Threats
- Forcing moves

```
White to move. Black's queen is on d5, undefended.

Candidate moves:
1. Nxd5 (capture)
2. Qxd5 (capture)
3. Bb5+ (check)
4. e4 (threatening the queen and opening lines)
```

**Step 1B: Forcing Lines**

For each candidate move, calculate the most forcing response from your opponent. A forcing line is a sequence where both players have only one or two reasonable moves.

```
Candidate: 1. Nxd5

Forcing line:
1. Nxd5 Nxd5 (Black must recapture)
2. Qxd5 Qxd5 (Black must recapture)
3. Bxd5 (White wins a pawn)

Or if Black doesn't recapture:
1. Nxd5 Qxd2+ (Black checks)
2. Kxd2 Nxd5 (now Black has recovered)
3. Bxd5 (still equal)
```

**Step 1C: Evaluation**

At the end of each forcing line, evaluate the position. Ask:
- Who has more material?
- Whose pieces are more active?
- Who has a safer king?
- Who controls more space?

```
After 1. Nxd5 Nxd5 2. Qxd5 Qxd5 3. Bxd5:
Evaluation: White has an extra pawn, equal piece activity. Slightly better for White.
```

**Key teaching point:** Calculation is not about seeing everything — it's about seeing the most important things. Candidate moves narrow your focus. Forcing lines keep you from getting lost. Evaluation tells you if the line is worth playing.

[Student checklist:]
- [ ] I can identify 2-4 candidate moves in a position
- [ ] I understand what a forcing line is
- [ ] I can evaluate the end of a forcing line

### Step 2: Guided Practice — Calculation Drills (20 min)

**Drill 1: Candidate Move Selection**

```
White: Qd1, Bc4, Nf3, O-O, pawns on e4, d4, c3, f2, g2, h2
Black: Qd8, Bc5, Nf6, O-O, pawns on e5, d5, c6, f7, g7, h7

White to move. List candidate moves:
- 1. Nxe5 (capture on e5)
- 1. exd5 (opening the center)
- 1. Bg5 (pinning the knight)
- 1. dxe5 (capturing in the center)
```

**Drill 2: Forcing Line Calculation**

```
White: Qd1, Rd1, Bc4, Nf3, O-O, pawns on e4, d4, c3, f2, g2, h2
Black: Qd8, Rd8, Bc5, Nf6, O-O, pawns on e5, d5, c6, f7, g7, h7

Candidate: 1. e5!?

Forcing line:
1. e5 Ne4 (or Nd7)
2. exd6 Nxd6 (if ...Nxd6)
3. Bg5! (pinning the knight, threatening Bxf6)
3...Be7 4. Bxf6 Bxf6 5. dxc6 (White has broken through)
```

**Drill 3: Evaluation**

```
After the line above:
- Material: roughly equal (pawn structure changed)
- Activity: White's pieces are more active
- King safety: Black's king is exposed
- Space: White controls more central squares

Evaluation: Better for White.
```

[Checklist for students:]
- [ ] I listed candidate moves for Drill 1
- [ ] I calculated a forcing line for Drill 2
- [ ] I evaluated the final position in Drill 3

### Step 3: Independent Practice — Calculation Challenge (20 min)

**Challenge:** Students receive 4 positions. For each, they must:
1. List candidate moves
2. Calculate the most forcing line for the best candidate
3. Evaluate the final position

**Position 1:**
```
White: Qd1, Bc4, Nf3, O-O, pawns on e4, d4, c3, f2, g2, h2
Black: Qd8, Be7, Nf6, O-O, pawns on e5, d5, c6, f7, g7, h7

Candidate moves: Nxe5, exd5, Bg5, dxe5

Best candidate: exd5! cxd5 2. Nxe5 Nxe5 3. Qxd5 (White wins a pawn)
```

**Position 2:**
```
White: Qd2, Bg5, Nf3, O-O, pawns on e4, d4, c3, f2, g2, h2
Black: Qd8, Be7, Nf6, O-O, pawns on e5, d5, c6, f7, g7, h7

Candidate moves: Bxf6, e5, dxe5, Qe2

Best candidate: Bxf6! Bxf6 2. e5! Be7 3. exd6 Bxd6 4. Qxd5 (White has broken through)
```

**Position 3:**
```
White: Qd1, Rd1, Bc4, Nf3, O-O, pawns on e4, d4, c3, f2, g2, h2
Black: Qd8, Rd8, Bc5, Nf6, O-O, pawns on e5, d5, c6, f7, g7, h7

Candidate moves: e5, Nxe5, Bg5, dxe5

Best candidate: e5! Ne4 2. exd6 Nxd6 3. Bg5 Be7 4. Bxf6 Bxf6 5. dxc6 (White's pieces are active)
```

||| Position | Success Metric |
|||------------------------|------------------|
|| Candidate moves | Listed 2-4 candidates |
|| Forcing line | Calculated at least 3 moves deep |
|| Evaluation | Assessed material, activity, king safety |

[Student checklist:]
- [ ] I listed candidate moves for each position
- [ ] I calculated a forcing line at least 3 moves deep
- [ ] I evaluated the final position using the criteria

### Step 4: Sharing & Feedback (10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your candidate move selection was excellent — you identified the forcing moves first."
- **One thing to try:** "When you calculate, try to visualize the position after each move without moving the pieces. This trains your mental board."
- **Question:** "What would happen if your opponent doesn't play the move you calculated? Does that mean your calculation was wrong?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Candidate Moves | Cannot identify candidates | Identifies 1-2 candidates | Identifies 2-4 relevant candidates | Prioritizes candidates by forcing strength |
|| Forcing Lines | Cannot calculate 2 moves | Calculates 2 moves with prompting | Calculates 3+ moves independently | Calculates 4+ moves with branches |
|| Board/Tool Use | Cannot use analysis engine | Basic use to verify lines | Verifies and compares own analysis | Uses engine to explore sidelines |

---

## Extended Activity

**Calculation Journal:** For one week, solve 3 tactics puzzles per day on lichess.org. For each puzzle, write down: (1) candidate moves, (2) the forcing line you calculated, (3) the final evaluation. Compare your calculations with the engine's top line.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Start with mate-in-2 puzzles only | Study Dvoretsky's "Calculation" chapter from Dvoretsky's Endgame Manual |
|| Use physical pieces to trace the line | Solve blindfold calculation exercises (visualize without looking) |
|| Provide the first candidate move | Analyze master games, predicting moves 3-5 deep at critical moments |

---

## Teacher Reflection

- [ ] Did learners understand the candidate moves → forcing lines → evaluation method?
- [ ] Was the Rook persona (deep thinking, precision) engaging? Did they connect it to the calculation concept?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Tactics / Calculation | 1200–1600 |
|| Chess.com Lessons | Tactics | Intermediate |
|| Skill Tier | Rook Tier | Rook Tier (Lessons 31–40) |