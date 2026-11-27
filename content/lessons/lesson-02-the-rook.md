# Lesson Plan 02: The Rook

> *Straight lines; castles and corridors.*

---

**Module Reference:** Prompt 02 — lesson-02-the-rook.md  
**Duration:** 60 min  
**Age Group:** 8-10  
**Chess Skill Level:** ♙ Pawn Tier  
**Tool:** Physical board (primarily)

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Move** a Rook correctly along ranks and files.
2. **Calculate** how many squares a Rook controls from any given position.
3. **Value** directness — understanding that sometimes the straight path is the most powerful.

## Key Inquiry Question

> How does the Rook charge straight down a corridor — and when is the direct path more powerful than the clever one?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed diagrams of Rook positions
- Ruler or straight edge (optional — to demonstrate "straight lines")
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Rook Movement entry

---

## Chess Persona: The Rook

**Piece:** Rook  
**Value:** 5 points  
**Movement:** Any number of squares horizontally (along ranks) or vertically (along files), but cannot jump over other pieces  
**Persona Trait:** Directness & Power  
**Why this piece?** The Rook teaches that clarity and straight lines have power. Unlike the sneaky Knight or the color-bound Bishop, the Rock storms down open files and ranks without deviation. For beginners learning to see the board, the Rook's movement is the easiest to visualize and the most rewarding when they learn to place it on open lines.  
**Historical Note:** The Rook represents a castle or chariot. In Persian chess (shatranj), the piece was called "rukh," meaning chariot — a war vehicle that charged straight at enemy lines. When chess reached medieval Europe, the chariot became a castle tower because European players had never seen chariots in battle. The castle imagery stuck, and today the Rook is the only piece whose name describes a building, not a person or animal.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Place a Rook on an empty board at d4. Ask students: "If this Rook could run as fast as it wants, how many squares could it reach in one move?"

- "Can the Rook move diagonally like a Bishop?" *No — only straight along ranks and files.*
- "What happens if a Pawn is sitting on d6? Can the Rook on d4 jump over it?" *No — the Rook cannot jump. It must stop before the blocking piece or capture it if it is an enemy piece.*
- "Why do you think the Rook is worth 5 points while the Pawn is worth only 1?" *Because it controls many more squares and is much more powerful.*

Explain: *Today we meet the Rook — the castle tower that charges straight ahead. The Rook teaches us that the direct path is often the strongest path.*

### Step 1: Concept Introduction — Rook Movement & Open Lines (15-20 min)

**Teach Rook movement:**
- The Rook moves any number of squares **along a rank** (horizontal row) or **along a file** (vertical column).
- The Rook **cannot move diagonally** and **cannot jump** over any piece.
- If an enemy piece sits on a square the Rook could reach, the Rook may capture it by moving to that square.
- The Rook stops at the edge of the board — there are no "wrap-around" moves.

**Demonstrate counting squares:**

```
Empty board. White Rook on d4.
```

From d4, the Rook controls:
- Along the d-file: d1, d2, d3, d5, d6, d7, d8 (7 squares)
- Along the 4th rank: a4, b4, c4, e4, f4, g4, h4 (7 squares)
- Total: **14 squares** on an empty board from the center!

Now compare:

```
White Rook on a1 (corner of the board).
```

From a1, the Rook controls:
- Along the a-file: a2, a3, a4, a5, a6, a7, a8 (7 squares)
- Along the 1st rank: b1, c1, d1, e1, f1, g1, h1 (7 squares)
- Total: **14 squares** — the same!

Wait: "Does a Rook in the corner control as many squares as a Rook in the center?"

*On an empty board, yes — 14 squares from any edge or center square! But in a real game, pieces block the Rook, so a Rook in the center often has more open lines in practice.*

**Key teaching point:** The Rook is most powerful on **open files** (files with no Pawns) and **open ranks**. Its power depends on open corridors.

### Step 2: Guided Practice — Rook Patrol (15-20 min)

Students work in pairs. Set up the following position:

```
White Rook on a1.
White Pawns on a2, b2, c2.
Black Pawns on a7, b7, c7.
Black Rook on h8.
```

**Activity:** The White Rook's mission is to travel from a1 to h1 along the first rank, but the path is blocked by White Pawns. Students must figure out how to move the White Pawns (using normal Pawn moves from Lesson 1) to clear a path for the Rook.

Then: The White Rook travels up the h-file to capture the Black Rook on h8. But Black Pawns block the h-file. Can White clear the way?

[Checklist for students:]
- [ ] I can move the Rook any number of squares along a rank or file.
- [ ] I remember that the Rook cannot jump over pieces.
- [ ] I moved White Pawns out of the way to create an open rank for the Rook.
- [ ] I counted how many squares the Rook controls before and after the path was cleared.
- [ ] I captured the enemy Rook on h8.

### Step 3: Independent Practice — Corridor Capture Challenge (10-15 min)

**Challenge:** Set up this position on your board:

```
White Rook on e1.
Black pieces: Pawns on e2 (blocking!), a5, c5, e5, g5; Knight on b5; Bishop on d5; Rook on e8.
```

**Task:** The White Rook must capture as many Black pieces as possible in 5 moves. Remember: the Rook can only move along ranks and files, and cannot jump. Which pieces can it reach? Which are blocked? Can it capture the Black Rook on e8?

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Student captures at least 2 pieces | Understands Rook movement along ranks and files |
|| Student correctly identifies blocked pieces | Understands that pieces block the Rook's path |
|| Student explains why the Rook cannot capture e8 without clearing e2 | Understands line-of-sight blocking |

[Student checklist:]
- [ ] I set up the challenge position correctly.
- [ ] I moved only along ranks and files.
- [ ] I did not try to jump over any piece.
- [ ] I wrote down each capture in notation (e.g., Rxa5).
- [ ] I identified which pieces were unreachable.

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions. Use the critique framework:
- **What's working:** "You used the entire rank to move — that is exactly how the Rook is supposed to work!"
- **One thing to try:** "What if you placed the Rook on the same file as a bunch of enemy pieces with nothing in between? That is called an open file, and it is the Rook's happy place."
- **Question:** "If you had a Rook on an open file with no pieces blocking, how many enemy pieces could you threaten at once?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Rook Movement | Cannot move Rook correctly even with help | Moves along ranks/files but tries diagonal occasionally | Moves and captures correctly on every turn | Explains why open files make Rooks more powerful |
|| Counting Squares | Cannot count controlled squares | Counts with teacher prompting | Counts squares independently from any Rook position | Calculates how blocking pieces reduce the Rook's range |
|| Board/Tool Use | Cannot set up position correctly | Sets up with occasional errors | Sets up accurately and quickly | Creates original challenge positions for peers |

---

## Extended Activity

**Rook's Road Map:** At home, students draw an empty chessboard and place a Rook on 5 different squares. For each square, they color in all squares the Rook could reach. They bring their maps to the next lesson.

**Physical Activity:** Using a grid on the floor, students take turns being the "Rook" — they must move only in straight lines (walking, not jumping) to tag a target.

**Digital Activity:** Solve "Rook" puzzles on lichess.org/learn.

**Teaching Activity:** Teach a family member how the Rook moves and why it is worth 5 points.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Use a ruler on the board to show the "straight line" the Rook travels | Introduce the concept of "doubled Rooks" — two Rooks on the same open file |
|| Start with the Rook on an empty board; add blocking pieces one at a time | Challenge them to set up a position where a Rook forks two pieces |
|| Pair with a notation-confident partner | Ask them to explain why a Rook on the 7th rank is especially powerful |

---

## Teacher Reflection

- [ ] Did learners understand Rook movement along ranks and files?
- [ ] Was the Rook persona engaging? Did they connect directness to the Rook's movement?
- [ ] Could learners complete the Corridor Capture Challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Piece Movement | Pre-rating |
|| Chess.com Lessons | Board & Rules | Basics |
|| Skill Tier | Pawn Tier | ♙ Foundation |