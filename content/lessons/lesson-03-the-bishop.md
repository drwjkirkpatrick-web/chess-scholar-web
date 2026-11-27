# Lesson Plan 03: The Bishop

> *Diagonal vision; color squares.*

---

**Module Reference:** Prompt 03 — lesson-03-the-bishop.md  
**Duration:** 60 min  
**Age Group:** 8-10  
**Chess Skill Level:** ♙ Pawn Tier  
**Tool:** Physical board (primarily)

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Move** a Bishop correctly along diagonals.
2. **Identify** which color squares each bishop controls and why bishops are stuck on one color.
3. **Value** specialized vision — understanding that seeing from a unique angle is a strength, not a weakness.

## Key Inquiry Question

> How does the Bishop see the board from its diagonal angle — and why is being "stuck" on one color actually a strength?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Colored markers or stickers (two colors) to highlight light and dark squares
- Printed diagrams showing Bishop diagonal patterns
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Bishop Movement entry

---

## Chess Persona: The Bishop

**Piece:** Bishop  
**Value:** 3 points  
**Movement:** Any number of squares diagonally; cannot jump over pieces  
**Persona Trait:** Vision & Diagonals  
**Why this piece?** The Bishop sees the board differently from every other piece. While the Rook sees straight lines and the Knight hops in L-shapes, the Bishop glides along diagonals, controlling squares of a single color. This teaches students that having a unique perspective — even one that seems limiting — is a valuable asset. One Bishop sees all the light squares; the other sees all the dark squares. Together, they see everything.  
**Historical Note:** In medieval chess, the Bishop was not a religious figure but a ship (in Russian, it is still called "slon," meaning elephant). In the original Indian game of chaturanga, this piece was an elephant that moved diagonally because elephants were believed to charge forward while archers shot diagonally from atop them. When chess spread to Europe, the elephant became a Bishop — partly because the piece's split top (on some sets) looked like a bishop's mitre (hat). Today it is the "Bishop" in English but still an elephant in Russian and a camel in some Asian traditions!

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Place a Bishop on c1. Ask: "Without moving it, can anyone tell me every square this Bishop can reach?"

- "Why can the Bishop reach a3 but not a2?" *Because a3 is on the same diagonal (a3-b4-c5-d6-e7-f8), while a2 is on a different angle.*
- "If I put a Bishop on c1 and another Bishop on f1, will they ever visit the same squares?" *No — one stays on light squares, the other on dark squares.*
- "Is being 'stuck' on one color a weakness or a strength?" *It is a specialization — like wearing glasses that see one thing very clearly.*

Explain: *Today we meet the Bishop — the piece that sees the world through diagonals. Its unique view is exactly what makes it powerful.*

### Step 1: Concept Introduction — Diagonal Movement & Color-Boundness (15-20 min)

**Teach Bishop movement:**
- The Bishop moves any number of squares **diagonally** — always staying on the same color square.
- The Bishop **cannot move horizontally or vertically** (that is the Rook's job).
- The Bishop **cannot jump** over pieces.
- If an enemy piece sits on a diagonal square, the Bishop can capture it.

**Color demonstration:**

```
White Bishop starts on c1 (a dark square).
```

Trace its diagonal: c1 → d2 → e3 → f4 → g5 → h6. All these squares are **dark squares**. This Bishop will never, ever step on a light square.

Now place the other White Bishop on f1 (a light square):

```
White Bishop on f1.
```

Trace its diagonal: f1 → e2 → d3 → c4 → b5 → a6. All **light squares**.

**Key insight:** Each army starts with two Bishops — one on a light square, one on a dark square. Together they control both colors; alone each is "color-bound."

**Counting squares:**

```
White Bishop on d4 (center).
```

From d4, trace all four diagonals:
- Northwest: c5, b6, a7 (3 squares)
- Northeast: e5, f6, g7, h8 (4 squares)
- Southwest: c3, b2, a1 (3 squares)
- Southeast: e3, f2, g1 (3 squares)
- Total: **13 squares** controlled from the center!

Compare to the corner:

```
White Bishop on a1 (corner, light square).
```

Only one diagonal: b2, c3, d4, e5, f6, g7, h8 (7 squares). The corner Bishop is much more limited.

**Key teaching point:** The Bishop is stronger in the **center** where its diagonals stretch far in all four directions. A Bishop trapped in the corner is called a "tall pawn" because it controls so few squares.

### Step 2: Guided Practice — Bishop's Color Quest (15-20 min)

Students pair up with boards.

**Activity Part 1:** Remove all pieces except the four Bishops (White Bishops on c1 and f1; Black Bishops on c8 and f8). Move each Bishop along its diagonals and answer:
- Which color is your Bishop on?
- How many squares can it reach from its starting square?
- What is the farthest square it can reach?

**Activity Part 2:** Place a Pawn on d4. Now place a Bishop on c3. Can the Bishop capture the Pawn? *Yes — d4 is on the same diagonal.* Place a Bishop on c5. Can it capture the Pawn on d4? *No — c5 and d4 are not on the same diagonal.*

```
Challenge position:
White Bishop on c3.
Black Pawns on d4, e5, f6.
White Bishop on c3 can capture d4, but not e5 or f6 in one move.
```

[Checklist for students:]
- [ ] I can trace a Bishop's diagonal in all four directions.
- [ ] I know my Bishop's color (light or dark) and that it never changes.
- [ ] I can count how many squares my Bishop controls.
- [ ] I can capture an enemy piece on the same diagonal.
- [ ] I can explain why a Bishop cannot reach a square of the opposite color.

### Step 3: Independent Practice — The Invisible Wall Challenge (10-15 min)

**Challenge:** Set up this position:

```
White Bishop on c1 (dark squares).
Black King on g7 (dark square).
Black Pawns on e5 (light square) and f6 (light square).
```

**Task:** The White Bishop wants to check the Black King. Can it? What squares could the Bishop move to that would attack g7? Now move the Black King to g8 (a light square). Can the c1 Bishop ever check it? Why or why not?

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Student correctly identifies that c1 Bishop can check g7 | Understands same-color diagonal connection |
|| Student correctly identifies that c1 Bishop cannot check g8 | Understands color-boundness prevents opposite-color contact |
|| Student explains the "invisible wall" concept | Can articulate that color divides the board into two worlds |

[Student checklist:]
- [ ] I identified the color of every piece on the board.
- [ ] I traced the diagonal from c1 to g7 and confirmed they match.
- [ ] I explained why the Bishop cannot reach g8.
- [ ] I found at least one square the Bishop could move to that checks g7.

### Step 4: Sharing & Feedback (5-10 min)

Learners present their findings. Use the critique framework:
- **What's working:** "You correctly saw that g7 and c1 are on the same diagonal — that is exactly the Bishop's specialty!"
- **One thing to try:** "Try placing both White Bishops on the board. Can they ever attack the same square? What if they work together?"
- **Question:** "If you only had one Bishop left in the endgame, which color squares could you never control? How would that change your strategy?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Bishop Movement | Cannot move diagonally; tries horizontal/vertical | Moves diagonally but occasionally forgets color-boundness | Moves correctly and identifies light vs dark squares consistently | Explains why two Bishops together are stronger than one |
|| Color-Boundness | Does not understand the color concept | Can identify their Bishop's color with prompting | Knows instantly which color any square is and whether their Bishop can reach it | Creates puzzles exploiting color-boundness |
|| Board/Tool Use | Cannot set up challenge position | Sets up with help | Sets up independently and accurately | Modifies positions to test new hypotheses |

---

## Extended Activity

**Bishop's Map:** Students color all the light squares one color and all the dark squares another on a paper board. They trace the paths of both Bishops from starting squares and mark every reachable square.

**Physical Activity:** "Diagonal Tag" — on a floor grid, students move only on diagonal steps (like Bishops) to reach a target.

**Digital Activity:** Complete Bishop puzzles on lichess.org/learn.

**Teaching Activity:** Explain to a peer why the Bishop is "stuck" on one color and why that is not a weakness.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Use colored paper under the board so light/dark squares are visually distinct | Introduce the concept of the "good Bishop" vs "bad Bishop" (though full coverage comes in Bishop Tier) |
|| Practice with only one Bishop at a time; add the second later | Challenge them to set up a position where a single Bishop checkmates a lone King |
|| Use verbal prompts: "Is that square the same color as where you started?" | Ask them to calculate why a Bishop + King cannot force checkmate against a lone King |

---

## Teacher Reflection

- [ ] Did learners understand diagonal movement?
- [ ] Was the Bishop persona engaging? Did they see color-boundness as a feature, not a bug?
- [ ] Could learners complete the Invisible Wall Challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Piece Movement | Pre-rating |
|| Chess.com Lessons | Board & Rules | Basics |
|| Skill Tier | Pawn Tier | ♙ Foundation |