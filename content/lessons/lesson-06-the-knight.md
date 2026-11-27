# Lesson Plan 06: The Knight

> *The L-shape; jumping over pieces.*

---

**Module Reference:** Prompt 06 — lesson-06-the-knight.md  
**Duration:** 60 min  
**Age Group:** 8-10  
**Chess Skill Level:** ♙ Pawn Tier  
**Tool:** Physical board (primarily)

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Move** the Knight correctly in an L-shape.
2. **Identify** why the Knight is the only piece that can jump over others.
3. **Value** creative movement — understanding that doing things differently is not wrong, it's a superpower.

## Key Inquiry Question

> How does the Knight's weird L-shaped jump make it the most creative piece — and when is being different an advantage?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed Knight-move diagrams showing the "L" pattern
- Horse figurine or toy to act as the Knight persona
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Knight Movement entry

---

## Chess Persona: The Knight

**Piece:** Knight  
**Value:** 3 points  
**Movement:** Two squares in one direction (horizontal or vertical), then one square perpendicular — forming an "L" shape; can jump over any piece  
**Persona Trait:** Creativity & Jumping  
**Why this piece?** The Knight is the "weirdo" of the chessboard — the only piece that does not move in a straight line and the only one that can jump over other pieces. This makes it the perfect symbol for creative thinking and non-traditional problem-solving. When the board is crowded and every straight line is blocked, the Knight hops over the chaos. For young learners, the Knight teaches that being different is not a disadvantage — it is a unique superpower that no one else has.  
**Historical Note:** The Knight has always been a horse rider. In chaturanga (6th-century India), the piece was "ashva" (horse). In Persian shatranj, it was "faras" (horse). In medieval Europe, it became the "Knight" — a mounted warrior. Interestingly, the Knight is the only piece whose movement has **never changed** in over 1,400 years of chess history. While the Queen gained superpowers, the Pawn learned to move two squares, and the Bishop stretched its legs, the Knight has always jumped in an L-shape. It is chess's most ancient and consistent piece.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Place a Knight on d4 and surround it with Pawns on every adjacent square (c3, c4, c5, d3, d5, e3, e4, e5). Ask: "Every square around the Knight is blocked. Can the Knight move?"

- "Can the Knight go straight forward like a Pawn?" *No — it moves in an L-shape.*
- "Can the Knight jump over the Pawns?" *Yes! The Knight is the only piece that can jump over friends and enemies.*
- "Why is the Knight worth 3 points — the same as a Bishop — when it seems so weird?" *Because jumping over pieces and landing on any color square makes it uniquely powerful in crowded positions.*

Explain: *Today we meet the Knight — the horse that leaps over walls. He teaches us that being different is not a weakness. It is a superpower.*

### Step 1: Concept Introduction — The L-Shape & Jumping (15-20 min)

**Teach Knight movement:**
- The Knight moves in an **"L" shape**: two squares in one direction (horizontal or vertical), then one square perpendicular.
- The Knight **can jump over any piece** — friendly or enemy — on its way. Only the destination square matters.
- The Knight **lands on a square of the opposite color** from where it started. From a light square, it always lands on a dark square, and vice versa.
- The Knight **cannot land on a square occupied by a friendly piece**, but it can capture an enemy piece on its landing square.

**Demonstrate the 8 possible squares from the center:**

```
White Knight on d4.
```

From d4, the Knight can jump to:
- b3, b5 (two left, one down/up)
- c2, c6 (one left, two down/up)
- e2, e6 (one right, two down/up)
- f3, f5 (two right, one down/up)

Total: **8 squares** from the center.

Now from a corner:

```
White Knight on a1.
```

From a1, the Knight can jump to:
- b3 (one right, two up)
- c2 (two right, one up)

Total: **2 squares** only! The corner is the Knight's worst position.

**Key teaching point:** The Knight is strongest in the **center** where all 8 L-shapes fit on the board. In the corner, it is much weaker. Unlike the Queen, the Knight does not need open lines — it thrives in chaos and crowded positions.

**Demonstration of jumping:**

```
White Knight on b1.
White Pawns on a2, b2, c2, d2.
```

The Knight on b1 wants to reach c3. It jumps over the Pawn on b2 (or a2, or c2) and lands on c3. The Pawns are untouched — the Knight simply hops over them.

**Key teaching point:** Because the Knight jumps, it is the only piece that can attack the Queen without the Queen being able to capture back (if protected). This makes the Knight a feared tactical weapon.

### Step 2: Guided Practice — Knight's Tour Warm-Up (15-20 min)

Students work in pairs.

**Activity Part 1:** Place a Knight on b1. Place a Black Pawn on c3. Students must move the Knight to capture the Pawn. The Knight has two ways to reach c3 from b1: directly (b1-c3) or via a3 or d2. Have them trace both paths.

**Activity Part 2:** Place White Pawns on d4, d5, e4, e5, f4, f5, g4, g5 (a wall of Pawns). Place a White Knight on c3. Can the Knight jump over the wall? Where can it land on the other side?

```
Position:
White Knight on c3.
White Pawns on d4, d5, e4, e5, f4, f5, g4, g5.
```

From c3, the Knight can jump to:
- b1, b5, d1, d5, e2, e4, a2, a4

Some of these are blocked by friendly Pawns (d5, e4, f4, g5, etc. — check each). The Knight can reach e2, e4 (if empty), d5 (if empty), b5, a4, a2, b1, d1. Students trace each L-shape.

[Checklist for students:]
- [ ] I can trace the L-shape: two squares one way, then one square perpendicular.
- [ ] I remember the Knight can jump over any piece on its path.
- [ ] I checked whether the landing square is empty or has an enemy piece.
- [ ] I counted how many squares my Knight controls from different positions.
- [ ] I can explain why the Knight is the only piece that changes square colors every move.

### Step 3: Independent Practice — Knight Fork Finder (10-15 min)

**Challenge:** Set up this position:

```
White Knight on c3.
Black pieces: King on e5, Queen on d5, Rook on e4.
```

**Task:** Can the Knight on c3 attack BOTH the King and the Queen in one move? What about the Queen and the Rook? What about the King and the Rook? This is called a "fork" — when one piece attacks two enemy pieces at once. Find all possible fork squares.

**Hint:** A Knight fork on d7 would attack e5 (King) and... does it attack d5 (Queen)? No. What about a Knight on d3? Attacks e5 (King) and... c5? Not helpful. Try e2? Attacks d4 (not occupied) and... f4 (not occupied). Try b5? Attacks d6 (not occupied) and c7 (not occupied).

Actually: Knight on c3 → d5 (attacks e7, c7, b4, f4, e6, c6, b2, f2). From d5, it attacks e7, c7, b4, f4, e6, c6, b2, f2. Does it attack e5 (King)? No. Does it attack d5 (Queen)? The Knight IS on d5 — that means it captures the Queen, not forks.

Let me make this work pedagogically:

```
Revised Position:
White Knight on c3.
Black King on e4.
Black Queen on c5.
Black Rook on e2.
```

From c3, where can the Knight move that attacks two pieces?
- d5 attacks e7, c7, b6, f6, e4, c4, b4, f4. e4 has the King! c4 is empty. Not a fork.
- e4? From c3 to e4: two right, one up. From e4, the Knight attacks d6, f6, g5, g3, d2, f2, c3, c5. c5 has the Queen! e4 has the King! Wait — the Knight cannot attack e4 FROM e4 because it is ON e4. That means it captures the King (illegal — cannot capture the King).

Let me fix this properly:

```
Final Position:
White Knight on d4.
Black King on f5.
Black Rook on e6.
```

From d4, Knight moves to e6? That is two right, two up — not an L-shape. Knight to f5? One right, one up — not an L-shape.

Correct fork:

```
White Knight on c4.
Black King on e5.
Black Queen on d6.
```

Knight from c4 → e5? Two right, one up. From e5, Knight attacks d7, f7, g6, g4, d3, f3, c4, c6. d6 has the Queen! So Knight to e5 attacks both e5 (King — captured!) and d6 (Queen). That is a fork!

Actually, let me simplify for 8-10 year olds:

```
Challenge Position:
White Knight on c3.
Black pieces on d5 and e4.
```

**Task:** Find a square the Knight can move to that attacks BOTH d5 and e4. 

Solution: Knight to f5 attacks d6, e7, g7, h6, h4, g3, e3, d4. No.
Knight to b5 attacks d6, c7, a7, a3, c3, d4. d4 is not occupied.
Knight to d5 attacks e7, c7, b6, f6, e4, c4, b4, f4. e4 is occupied! And d5 is where the Knight is — so it captures the piece on d5. But does it ALSO attack e4? Yes! From d5, the Knight attacks e4. So moving the Knight to d5 captures the piece on d5 AND attacks the piece on e4. That is a fork!

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Student identifies at least one fork square | Understands Knight attacks from landing square |
|| Student correctly traces L-shapes to verify | Can visualize Knight's reach from any square |
|| Student explains why the Knight is good at forks | Understands Knight attacks squares the enemy cannot easily see |

[Student checklist:]
- [ ] I set up the challenge position correctly.
- [ ] I traced the L-shape for every possible Knight move.
- [ ] I found a square where the Knight attacks two enemy pieces.
- [ ] I verified my answer by counting the L-shape.
- [ ] I wrote down my answer in notation (e.g., Nc3-d5).

### Step 4: Sharing & Feedback (5-10 min)

Learners present their fork findings. Use the critique framework:
- **What's working:** "You found that the Knight can attack two pieces at once — that is the Knight's signature move, and you discovered it!"
- **One thing to try:** "Try moving the Knight to the center of the board. How many more fork opportunities appear?"
- **Question:** "If the Knight could not jump over pieces, would it be stronger or weaker? Why?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Knight Movement | Cannot trace L-shape; moves randomly | Traces L-shape but occasionally lands on wrong square | Moves correctly and consistently lands on valid squares | Explains why the Knight is strongest in the center and weakest in the corner |
|| Jumping Understanding | Thinks Knight can be blocked | Understands jumping but sometimes forgets in practice | Always remembers Knight jumps over pieces | Creates crowded positions where only the Knight can attack |
|| Board/Tool Use | Cannot set up position | Sets up with help | Sets up independently and traces all 8 Knight moves from center | Teaches a peer the "clock face" method (2 o'clock, 4 o'clock, etc.) |

---

## Extended Activity

**Knight's Path:** Students place a Knight on a1 and try to reach h8 in the fewest moves possible. They record their path in notation. The answer is 6 moves (a1-b3-c5-d7-f8-h7-h8 is one possible path).

**Physical Activity:** "Horse Hops" — students hop in L-shapes on a floor grid (two steps forward, one step sideways). They cannot "land" on a square with another student.

**Digital Activity:** Complete Knight puzzles on lichess.org/learn.

**Teaching Activity:** Teach a family member the Knight's L-shape and why it can jump over pieces.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Use a "clock face" analogy: the Knight moves like the hands of a clock at 1:00 or 2:00 (2 squares + 1 square) | Introduce the concept of "outposts" — squares deep in enemy territory where the Knight cannot be chased by Pawns |
|| Practice Knight moves from a single square until all 8 destinations are memorized | Challenge them to find the minimum number of Knight moves between any two squares |
|| Use hand signals: two fingers one way, then thumb perpendicular | Ask them to explain why Knights are better than Bishops in closed positions |

---

## Teacher Reflection

- [ ] Did learners understand the L-shaped movement?
- [ ] Was the Knight persona engaging? Did they value being "different"?
- [ ] Could learners complete the Knight Fork Finder?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Piece Movement | Pre-rating |
|| Chess.com Lessons | Board & Rules | Basics |
|| Skill Tier | Pawn Tier | ♙ Foundation |