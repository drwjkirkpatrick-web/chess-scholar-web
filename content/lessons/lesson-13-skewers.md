# Lesson Plan 13: Skewers

> *Flip the pin upside down — the Rook's X-ray attack.*

---

# Lesson Plan 13: Skewers

**Module Reference:** Prompt 13 — lesson-13-skewers.md  
**Duration:** 60 min  
**Age Group:** 10-12  
**Chess Skill Level:** ♘ Knight Tier  
**Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Distinguish** between a pin and a skewer.
2. **Create** a skewer along a rank, file, or diagonal.
3. **Value** reversal — understanding that flipping a pattern (pin → skewer) creates a new weapon.

## Key Inquiry Question

> What happens when you flip a pin upside down — and how does the Rook's straight line become an X-ray weapon?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed skewer puzzle diagrams (5 positions)
- Flashcards with "PIN" on one side and "SKEWER" on the other for quick identification drills
- Rook-shaped tokens for marking skewering pieces
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Skewers entry

---

## Chess Persona: The Rook

**Piece:** Rook  
**Value:** 5 points  
**Movement:** Horizontally and vertically any number of squares  
**Persona Trait:** Directness & X-Ray Power  
**Why this piece?** The Rook commands entire ranks and files. In a skewer, the Rook attacks a valuable piece (often the King or Queen), and when that piece moves aside, a less valuable piece behind it is exposed and captured. The Rook's straight-line power makes it the most natural skewer weapon — especially in endgames where open files allow the Rook to see all the way across the board. The Rook's ability to operate on both ranks and files also means it can create horizontal skewers that Bishops cannot.  
**Historical Note:** The Rook represents a castle tower, and its ability to "see" along straight lines made it the symbol of surveillance in medieval strategy manuals. The skewer was called the "sweep" in 19th-century chess literature because the Rook sweeps along the line, capturing everything in its path. In the famous 1851 "Immortal Game" between Adolf Anderssen and Lionel Kieseritzky, Anderssen used a Rook skewer to win material after a spectacular Queen sacrifice.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Set up a position with White Rook on h1, Black King on h8, and Black Knight on h5. Ask students what happens if White plays a move that checks the King.

- If the Rook checks the King on h8, what must Black do? *Move the King out of check.*
- After the King moves, what happens to the Knight on h5? *The Rook captures it!*
- How is this different from a pin? *In a pin, the less valuable piece is in front and frozen. In a skewer, the MORE valuable piece is in front and must move, exposing the piece behind.*

Explain: *Today we'll learn about skewers — the evil twin of the pin. In a pin, the less valuable piece is stuck in front. In a skewer, the MORE valuable piece is in front and must move, exposing the piece behind to capture. Sir Tower the Rook is our guide — his straight lines become X-ray weapons that see through the King to the prize behind.*

### Step 1: Concept Introduction — Pin vs. Skewer (15-20 min)

Teach the core distinction. A skewer is a tactical motif where a long-range piece attacks two enemy pieces aligned on the same line, with the MORE valuable piece in front. When the front piece moves to safety, the piece behind is exposed and captured.

**The Skewer Formula:**
Piece A (valuable) is attacked. Piece A MUST move. Piece B (less valuable) is then captured by the same attacking piece.

**Pin vs. Skewer Comparison:**

| Feature | Pin | Skewer |
|---------|-----|--------|
| Which piece is in front? | Less valuable | More valuable |
| Can the front piece move? | No (absolute) or badly (relative) | Yes — and must! |
| What happens to the back piece? | Exposed to future attack | Captured immediately |
| Typical target behind front piece | King or Queen | Knight, Bishop, Rook, or Queen |

**Rook Skewer on the h-file:**

```
White Rook on h1. Black King on h8, Black Knight on h5.

    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   | k |
7 |   |   |   |   |   |   |   | p |
6 |   |   |   |   |   |   |   |   |
5 |   |   |   |   |   |   |   | n |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   | R |
```

White plays **1.Rh5+!** The Rook gives check to the King on h8 by moving to h5? No — the Rook is already on h1. Actually, the Rook on h1 ALREADY attacks h8 through h7, h6, h5. But h5 is occupied by the Knight, which blocks the check. This is a PIN on the Knight!

For a SKEWER, the more valuable piece must be in FRONT. So let us set up:

**White Rook on h1. Black King on h5, Black Queen on h8.**
The King (more valuable) is in front of the Queen. The Rook on h1 attacks h5. But again, the position would have the King in check already.

To create a skewer from a legal position, we remove a blocker:
**White Rook on a1. Black King on a5, Black Queen on a8, Black pawn on a7.**
White plays **1.Rxa7+!** The Rook captures the pawn on a7. Now the Rook is on a7, checking the King on a5? a7 to a5 is the same file, 2 squares. Yes! The King is in check. The King must move (e.g., Kb6). Then White plays **2.Rxa8**, capturing the Queen.

```
    a   b   c   d   e   f   g   h
8 | q |   |   |   |   |   |   |   |
7 | p |   |   |   |   |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 | k |   |   |   |   |   |   |   |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 | R |   |   |   |   |   |   |   |
```

**1.Rxa7+ Kb6 2.Rxa8** wins the Queen.

In this sequence, the Rook removes the blocking pawn, checks the King (front piece), and then captures the Queen (back piece). This demonstrates the skewer pattern: attack the front piece, and when it moves, win the back piece.

**Bishop Skewer on the Diagonal:**

```
White Bishop on a3. Black pawn on b4, Black King on c5, Black Rook on e7.

    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   |   |
7 |   |   |   |   | r |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 |   |   | k |   |   |   |   |   |
4 |   | p |   |   |   |   |   |   |
3 | B |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

White plays **1.Bxb4+!** The Bishop captures the pawn on b4. From b4, the Bishop attacks c5 (King). Check! The King must move. Then White plays **2.Bxe7**, capturing the Rook on e7.

**Key teaching point:** Skewers work best when the front piece is a King (forced to move by check) or when it is under attack and must escape. The skewer is most common in endgames with Rooks because open files allow long lines.

### Step 2: Guided Practice — Skewer or Pin? (15-20 min)

Walk through a hands-on activity. Students set up positions and identify whether it's a pin or skewer.

**Position 1:** White Rook on e1. Black Knight on e5, Black Queen on e8. Pin or skewer?
*Pin! The Knight (less valuable) is in front of the Queen (more valuable). The Rook on e1 pins the Knight to the Queen.*

**Position 2:** White Bishop on a3. Black pawn on b4, Black King on c5, Black Rook on e7. Pin or skewer?
*Skewer! After Bxb4+, the King is in front of the Rook. The Bishop checks the King, and after it moves, the Rook falls.*

**Position 3:** White Queen on d1. Black Knight on d5, Black King on d8. Pin or skewer?
*Pin! The Knight is pinned to the King along the d-file.*

**Position 4:** White Rook on h1. Black King on h5, Black Bishop on h8. Pin or skewer?
*Skewer! The King is more valuable and in front. If White can check the King, the Bishop behind is lost.*

[Checklist for students:]
- [ ] I set up Position 1 and identified it as a pin
- [ ] I set up Position 2 and identified it as a skewer
- [ ] I explained the difference: pin = less valuable in front, frozen; skewer = more valuable in front, must move
- [ ] I found a skewer on my own board by placing a Rook and two enemy pieces on the same file
- [ ] I can name the three pieces that skewer: Rook, Bishop, Queen

### Step 3: Independent Practice — The Skewer Challenge (10-15 min)

**Challenge:** Students receive 4 diagrams. For each, they must: (a) identify if it's a skewer or pin, (b) name the attacking piece, and (c) write the move sequence that wins material.

||| Position | Success Metric |
|||------------------------|------------------|
|| Diagram 1: Rook skewer | Correctly identifies skewer and winning sequence |
|| Diagram 2: Bishop skewer | Correctly identifies skewer and winning sequence |
|| Diagram 3: Pin | Correctly identifies pin (not a skewer) |
|| Diagram 4: No skewer | Explains why no skewer exists |

**Diagram 1:** White Rook on a1. Black pawn on a7, Black King on a5, Black Queen on a8.
*Solution: 1.Rxa7+ Kb6 2.Rxa8 wins the Queen.*

**Diagram 2:** White Bishop on c4. Black pawn on d5, Black King on e6, Black Knight on f7.
*c4-d5-e6-f7 diagonal. 1.Bxd5+ Ke7 (or Kf6) 2.Bxf7 wins the Knight.*

**Diagram 3:** White Queen on h1. Black Bishop on h6, Black King on h8.
*Pin! The Bishop is pinned to the King.*

**Diagram 4:** White Rook on c1. Black King on e5, Black Queen on e8.
*No skewer or pin — the pieces are not on the same file (c-file vs e-file).*

[Student checklist:]
- [ ] I solved Diagram 1 with the correct move sequence
- [ ] I solved Diagram 2 with the correct move sequence
- [ ] I correctly identified Diagram 3 as a pin and explained why
- [ ] I correctly identified Diagram 4 as having no skewer
- [ ] I created my own skewer position on the board

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "You correctly saw that the King must move when in check, leaving the back piece unguarded."
- **One thing to try:** "After you spot a potential skewer, check if there is a blocking piece you need to remove first."
- **Question:** "Can a Knight ever create a skewer? Why or why not?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Identifying skewers | Cannot distinguish skewer from pin | Recognizes skewers with hints after teacher setup | Identifies skewers independently in new positions | Creates original skewer puzzles and explains why they work |
||| Creating skewers | Cannot set up a skewer on an open board | Can set up a skewer with guidance | Creates skewers using Rook or Bishop in practice | Combines skewers with pins and forks in combination puzzles |
||| Board/Tool Use | Cannot use board to set up positions | Basic setup with help | Competently sets up and tests positions | Expert use + creates physical puzzle cards |

---

## Extended Activity

**Skewer Collector:** Students find or create 5 skewer positions from real games or puzzles. They write the move notation and draw arrows showing the line of attack. Bring to next class for the "Tactics Museum" bulletin board.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Use only Rook skewers on files and ranks (easier to visualize) | Include diagonal skewers with Bishops |
||| Provide pre-drawn arrows on diagrams showing the line of attack | Analyze famous games where a skewer decided the outcome |
||| Pair work: one student places the skewer, the other identifies front and back pieces | Create a puzzle where the "obvious" skewer fails and a different tactic wins |

---

## Teacher Reflection

- [ ] Did learners understand the difference between a skewer and a pin?
- [ ] Was the Rook persona engaging? Did they connect it to X-ray power?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Tactics | 400–800 |
||| Chess.com Lessons | Tactics — Skewers | Beginner |
||| Skill Tier | Knight Tier | Tactical pattern recognition |
