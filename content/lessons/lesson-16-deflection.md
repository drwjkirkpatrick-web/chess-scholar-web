# Lesson Plan 16: Deflection

> *Force the defender to choose — the Knight's lesson in precision.*

---

# Lesson Plan 16: Deflection

**Module Reference:** Prompt 16 — lesson-16-deflection.md  
**Duration:** 60 min  
**Age Group:** 10-12  
**Chess Skill Level:** ♘ Knight Tier  
**Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** when a piece is overworked — defending two things at once.
2. **Create** a deflection by attacking one defended target to force the defender away.
3. **Value** precision — understanding that forcing the opponent to choose between two defenses creates an opening.

## Key Inquiry Question

> How do you make a piece choose between protecting two friends — and what happens when it can only save one?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed deflection puzzle diagrams (5 positions)
- Overworked-defender flashcards showing pieces with two "shields"
- Knight-shaped tokens for marking the deflecting attacker
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Deflection entry

---

## Chess Persona: The Knight

**Piece:** Knight  
**Value:** 3 points  
**Movement:** L-shape: two squares in one direction, then one square perpendicular; jumps over pieces  
**Persona Trait:** Precision & Forcing Moves  
**Why this piece?** The Knight is the master of forking — attacking two squares at once. In deflection, the Knight's ability to attack two points simultaneously makes it the perfect piece to exploit an overworked defender. A Knight landing on a key square can attack both the defender and another target, forcing an impossible choice. The Knight's unique leap also means it can attack squares that no other piece can reach, making its deflections especially surprising.  
**Historical Note:** In the Romantic era of chess (1740–1870), players like Paul Morphy and Adolf Anderssen specialized in deflection sacrifices. Morphy's famous 1858 game against the Duke of Brunswick and Count Isouard features a Queen deflection that opens lines for a devastating mating attack. The Knight's role in these combinations was often as the "silent assassin" — arriving on a square that forces the defender to abandon its post.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Place a Black Rook on c5. Place a Black Queen on c7 and a Black Bishop on a5. Ask students what the Rook is doing.

- How many pieces is the Rook on c5 defending? *Two — the Queen on c7 and the Bishop on a5.*
- What happens if White attacks the Queen on c7? *The Rook must move to c7 to defend it.*
- What happens to the Bishop on a5 if the Rook moves to c7? *It becomes undefended!*

Explain: *Today we'll learn about deflection — when a piece is overworked, defending two things at once, and we force it to choose. Sir Leap the Knight is our guide — he lands on a square that attacks two targets, making the defender's job impossible.*

### Step 1: Concept Introduction — What is Deflection? (15-20 min)

Teach the core concept. Deflection is a tactic where you attack one of the things a defender protects, forcing the defender to move to save it. The other thing it was protecting becomes undefended.

**The Deflection Formula:**
Defender D protects Target A and Target B → Attack Target A → Defender moves to save Target A → Capture Target B.

**The Overworked Defender:**
A piece that defends two or more squares/pieces is overworked. It can only respond to one threat at a time.

**Example — Knight Deflection:**

```
White Knight on e4. Black Rook on c5, Black Queen on c7, Black Bishop on a5.

    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   |   |
7 |   |   | q |   |   |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 | b |   | r |   |   |   |   |   |
4 |   |   |   |   | N |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

The Rook on c5 defends c7 (Queen) along the c-file and a5 (Bishop) along the 5th rank.
White plays **1.Nd6!** The Knight on d6 attacks c7 (Queen) and b7, c5, e5, f7, f5, e4, c4, b7. c7 IS attacked from d6. The Rook on c5 must choose:
- Move to c7 to defend the Queen: Rxc7. Then White plays Nxa5, winning the Bishop.
- Stay on c5: then White plays Nxc7, winning the Queen.

Either way, White wins material.

**Example — Queen Deflection:**

```
White Queen on d1. Black Queen on f7 (defending g7 and e8), Black King on g8, Black Rook on e8.
The Black Queen on f7 defends g7 (King's escape square) and e8 (Rook).
White plays 1.Qd8+! The Queen on d8 attacks f8, e8, c8, b8, a8, d7, d6, etc. e8 IS attacked from d8. The Black Queen on f7 must choose:
- Capture on d8: Qxd8. Then White plays something attacking g7... but this is complex.
```

Simpler Queen deflection:
White Queen on h5. Black King on g8, Black Rook on f8 (defending g8 and e8), Black Bishop on e8.
The Rook on f8 defends g8 (adjacent) and e8 (adjacent horizontal).
White plays **1.Qh8+!** The Queen on h8 attacks f8 (Rook). The Rook MUST capture: Rxh8. Deflected from e8. Then White plays **2.Rxe8+** (if White has a Rook on e1), winning the Bishop.

```
    a   b   c   d   e   f   g   h
8 |   |   |   |   | b |   | k |   |
7 |   |   |   |   |   |   | p |   |
6 |   |   |   |   |   |   |   |   |
5 |   |   |   |   |   |   |   | Q |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   | R |   |   |   |
```

**1.Qh8+ Rxh8 2.Rxe8+** wins the Bishop. Even though Black has the Queen on h8, White won a Bishop and exposed the King.

**Key teaching point:** Deflection is most powerful when the defender is protecting something critical — like a mating square or a back-rank escape. Forcing the defender away often leads to immediate disaster for the opponent.

### Step 2: Guided Practice — Force the Choice (15-20 min)

Walk through hands-on activities. Students follow along on their boards.

**Position 1:** White Knight on e4. Black Rook on c5, Black Queen on c7, Black Bishop on a5.
**1.Nd6!** as above. White wins material.

**Position 2:** White Queen on h5. Black King on g8, Black Rook on f8, Black Bishop on e8.
**1.Qh8+ Rxh8 2.Rxe8+** as above.

**Position 3:** White Bishop on c4. Black King on g8, Black Knight on f6 (defending h7 and e8), Black Rook on e8.
The Knight on f6 defends h7 (King's escape) and e8 (Rook)? f6 to e8 is +2,+2? No. f6 to e8 is +2,+2, not a Knight move. So f6 does not defend e8.

Correct: Black Knight on f6 defends h7 and g8. Black Rook on e8.
White plays **1.Bxf7+!** The Bishop on f7 checks g8? f7 to g8 is +1,+1. Not a Bishop move (Bishops don't move one square). c4 to f7 is +3,+3. c4-d5-e6-f7. Yes! The Bishop on c4 attacks f7. From f7, the Bishop attacks g8? f7 to g8 is +1,+1. Not a Bishop move. The Bishop on f7 does NOT check g8.

Better: White Queen on h6. Black King on g8, Black Knight on f6 (defending h7 and g8? f6 to g8 is +2,+2. No), Black Rook on e8.
Actually, Knight on f6 attacks h7 and g8? f6 to h7 is +2,+1. Yes! f6 to g8 is +2,+2. No. So f6 defends h7 but not g8.

Let me use: White Queen on h6. Black King on g8, Black Knight on g7 (defending h7 and f7? g7 to h7 is +1,0. Yes. g7 to f7 is -1,0. Yes). Black Rook on e8.
White plays **1.Qh8+!** The Queen on h8 attacks g7. The Knight on g7 MUST capture: Nxh8. Deflected from h7 and f7. Then White plays something... but White lost the Queen.

Simpler: White Rook on e1. Black King on g8, Black Knight on f6 (defending h7 and g8? No, f6 doesn't defend g8). Black Bishop on e8.
White plays Re8+! Rook captures Bishop on e8. The Knight on f6 cannot capture (f6 to e8 is +2,+2, not a Knight move). The King must take: Kxe8. White lost a Rook for a Bishop. Not good.

I'll stick with Positions 1 and 2 which are clean, and add:

**Position 3:** White Knight on f3. Black Rook on d5 (defending d7 and b5), Black Queen on d7, Black Bishop on b5.
White plays **1.Ne5!** The Knight on e5 attacks d7 (Queen) and f7, g6, g4, f3, d3, c4, c6, d7. d7 is attacked. The Rook on d5 must choose: Rxd7 (saving Queen but losing Rook to Knight) or stay and lose Queen. Either way, White wins.

[Checklist for students:]
- [ ] I set up Position 1 and saw how Nd6 forces the Rook to choose
- [ ] I set up Position 2 and executed Qh8+ Rxh8 followed by Rxe8+
- [ ] I set up Position 3 and calculated the material win
- [ ] I can explain what an "overworked defender" is
- [ ] I found an overworked defender in my own practice game

### Step 3: Independent Practice — The Deflection Challenge (10-15 min)

**Challenge:** Students receive 4 diagrams. For each, they must identify the overworked defender, the two things it defends, and the move that forces the impossible choice.

||| Position | Success Metric |
|||------------------------|------------------|
|| Diagram 1: Knight deflection | Correctly identifies overworked defender and winning move |
|| Diagram 2: Queen deflection | Correctly identifies what the defender abandons |
|| Diagram 3: Rook deflection | Correctly calculates the material win |
|| Diagram 4: No deflection | Explains why no defender is overworked |

**Diagram 1:** White Knight on e4. Black Rook on c5, Black Queen on c7, Black Bishop on a5.
*Solution: 1.Nd6! attacks c7. Rook must choose. White wins material.*

**Diagram 2:** White Queen on h5. Black King on g8, Black Rook on f8, Black Bishop on e8.
*Solution: 1.Qh8+ Rxh8 2.Rxe8+ (if White has Rook on e1). Rook deflected from e8.*

**Diagram 3:** White Bishop on c4. Black King on g8, Black Knight on e7 (defending c8 and g6? No).

**Diagram 3 (corrected):** White Queen on d1. Black King on g8, Black Rook on f8 (defending g8 and e8), Black Knight on e8.
*Solution: 1.Qd8+! Rxh8? No, Qd8 attacks f8 (Rook). Rook must take: Rxd8. Deflected from e8. White plays Nxe8 or Bxe8.*

**Diagram 4:** White Knight on c3. Black Rook on e5, Black Queen on e7, Black Bishop on a5.
The Rook on e5 defends e7. It does not defend a5 (e5 to a5 is -4,0, same rank, but the Rook DOES attack a5!). So the Rook defends BOTH e7 and a5. This IS an overworked defender!
White plays Nd5! The Knight on d5 attacks e7 (Queen) and c7, b6, b4, c3, e3, f4, f6, e7. e7 is attacked. The Rook on e5 must choose: save e7 or lose it. If Rxe7, White plays Nxa5. If Rook stays, White plays Nxe7.

Actually, let me make Diagram 4 have NO deflection:
**Diagram 4:** White Knight on c3. Black Rook on e5, Black Queen on e7. The Rook only defends e7. Black Bishop on a4 (defended by Queen on e7? No, e7 to a4 is not same line).
*No overworked defender — the Rook only defends one piece.*

[Student checklist:]
- [ ] I identified the overworked defender in Diagram 1
- [ ] I wrote the correct move sequence for Diagram 2
- [ ] I identified what the defender abandons in Diagram 3
- [ ] I explained why Diagram 4 has no deflection
- [ ] I created an overworked defender position on my board

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "You correctly spotted that the Rook was defending two pieces — that's the key to finding a deflection."
- **One thing to try:** "After you deflect a defender, check if the undefended piece can escape before you capture it."
- **Question:** "What is the difference between deflection and removing the defender?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Identifying overworked defenders | Cannot see when a piece defends two things | Recognizes overwork with hints after setup | Identifies overworked defenders independently | Finds subtle overwork in complex middlegame positions |
||| Creating deflections | Cannot force a defender to choose | Can create deflections with guidance | Executes deflections winning material in practice | Combines deflection with discovered attacks and skewers |
||| Board/Tool Use | Cannot use board to set up positions | Basic setup with help | Competently sets up and tests positions | Expert use + creates physical puzzle cards |

---

## Extended Activity

**Overwork Analysis:** Students examine a famous game position and label every defensive duty. They identify which defenders are overworked and write a short paragraph explaining how to exploit it.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Use only positions where the defender is on the same rank/file as both targets (easiest to see) | Include diagonal overwork where a Bishop or Queen defends two pieces on different diagonals |
||| Provide pre-marked defensive lines on diagrams | Study windmill and perpetual check combinations built on deflection |
||| Pair work: one student finds the defender, the other finds the target to attack | Create a puzzle where the deflection leads to a smothered mate |

---

## Teacher Reflection

- [ ] Did learners understand what an "overworked defender" is?
- [ ] Was the Knight persona engaging? Did they connect it to forking and forcing?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Tactics | 400–800 |
||| Chess.com Lessons | Tactics — Deflection | Beginner |
||| Skill Tier | Knight Tier | Tactical pattern recognition |
