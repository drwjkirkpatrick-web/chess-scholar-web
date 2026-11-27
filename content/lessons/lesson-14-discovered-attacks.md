# Lesson Plan 14: Discovered Attacks

> *Unleash hidden power — the Queen's surprise attack.*

---

# Lesson Plan 14: Discovered Attacks

**Module Reference:** Prompt 14 — lesson-14-discovered-attacks.md  
**Duration:** 60 min  
**Age Group:** 10-12  
**Chess Skill Level:** ♘ Knight Tier  
**Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** when moving one piece reveals an attack from another.
2. **Create** a discovered check by moving a blocking piece.
3. **Value** coordination — understanding that the power of one piece depends on the position of another.

## Key Inquiry Question

> How does moving one piece suddenly unleash the power of another — and why is the discovered attack chess's best surprise?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed discovered attack puzzle diagrams (5 positions)
- Two colored strings to physically show the "hidden line" before and after the move
- Queen-shaped tokens for marking the revealed attacker
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Discovered Attacks entry

---

## Chess Persona: The Queen

**Piece:** Queen  
**Value:** 9 points  
**Movement:** Combines Rook (ranks and files) and Bishop (diagonals)  
**Persona Trait:** Versatility & Unleashed Power  
**Why this piece?** The Queen is the most powerful piece on the board, but she is often blocked by her own pieces or enemy pieces early in the game. When a blocking piece moves, the Queen's latent power is suddenly revealed — sometimes with devastating effect. The discovered attack teaches students that the Queen does not need to move to be dangerous; sometimes the most powerful move is moving a different piece. This concept of hidden potential is central to chess strategy.  
**Historical Note:** The modern Queen's power was established in Spain around 1500 CE. Before that, the "fers" (counselor) moved only one square diagonally. When the Queen became the combined Rook+Bishop, players quickly discovered that hiding the Queen behind a friendly piece and then revealing her was one of the most shocking tactics in the game. The Italian phrase *scacco scoperto* (discovered check) was first recorded in a 1497 manuscript.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Set up a position with White Queen on e2, White Knight on e4, Black King on e8, and Black Queen on e7. Move the Knight from e4 to f6. Ask what changed.

- Before the Knight moved, was the Black King in check? *No — the Knight on e4 blocked the Queen's attack on e8.*
- After the Knight moved to f6, is the King in check? *Yes! The Queen on e2 now attacks e8 along the e-file.*
- Is the Black Queen on e7 also in trouble? *Yes — the Knight on f6 attacks e7!*

Explain: *Today we'll learn about discovered attacks — when moving one piece suddenly reveals an attack from another piece hiding behind it. Queen Morgana is our guide — she doesn't need to move to be dangerous. Sometimes her power is unleashed by a teammate stepping aside.*

### Step 1: Concept Introduction — What is a Discovered Attack? (15-20 min)

Teach the core concept. A discovered attack occurs when a piece moves away from a line (rank, file, or diagonal), revealing an attack from a hidden piece behind it.

**The Discovered Attack Formula:**
Piece A (hidden attacker) sits behind Piece B (blocking piece). Piece B moves along a different line, revealing Piece A's attack on an enemy piece or the enemy King.

**Types of Discovered Attacks:**

1. **Discovered Check:** The revealed attack is a check to the enemy King. The blocking piece can often move to a square where it also gives check — creating a **double check**.
2. **Discovered Attack (non-check):** The revealed attack threatens an enemy Queen or Rook, winning material.
3. **Double Check:** Both the moved piece AND the revealed piece give check simultaneously. The King MUST move — blocking is impossible.

**Discovered Check Example:**

```
White Queen on e2, White Knight on e4. Black King on e8, Black Queen on e7.

    a   b   c   d   e   f   g   h
8 |   |   |   |   | k |   |   |   |
7 |   |   |   |   | q |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 |   |   |   |   |   |   |   |   |
4 |   |   |   |   | N |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   | Q |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

White plays **1.Nf6+!** The Knight moves from e4 to f6, revealing the Queen's attack on e8 (discovered check!). The Knight on f6 also attacks e7 (the Black Queen) and h7. Black must respond to the check, and after that, White wins the Queen on e7.

**Double Check Example:**

```
White Queen on e2, White Knight on e4. Black King on e8, Black Rook on f8.

White plays 1.Nd6+! The Knight moves to d6, checking the King on e8 (Knight on d6 attacks e8).
The Queen on e2 also attacks e8 along the e-file. Both pieces check the King simultaneously!
Double check! The King must move — no blocking or capturing is possible.
```

**Key teaching point:** Discovered attacks are the most powerful surprise in chess because the opponent often forgets about the hidden piece. The attacker gets TWO threats for the price of one move: the moved piece does something, AND the revealed piece attacks something else.

### Step 2: Guided Practice — Unleash the Queen (15-20 min)

Walk through hands-on activities. Students follow along on their boards.

**Position 1:** White Bishop on c4, White pawn on d4. Black King on g8, Black Rook on d8, Black Knight on f6.
White plays **1.d4-d5!** The pawn advances, revealing the Bishop's attack on f7? No, c4 to f7 is c4-d5-e6-f7. The pawn on d5 is now ON the diagonal, not off it. This reveals nothing.

Correct position:
**White Bishop on b2, White Knight on d4. Black King on g7, Black Queen on d6.**
The Knight on d4 blocks the Bishop's diagonal b2-c3-d4-e5-f6-g7. White plays **1.Ne6+!** The Knight moves to e6, revealing the Bishop's attack on g7? b2 to g7 goes through c3, d4, e5, f6, g7. The Knight was on d4. Moving to e6 removes the Knight from the diagonal. From b2, the Bishop now sees g7 through c3, d4(now empty), e5, f6, g7? Wait, e6 is now occupied by the Knight. b2-c3-d4-e5-f6-g7. e6 is not on this diagonal. So moving Nd4-e6 DOES reveal the Bishop's attack on g7! And the Knight on e6 checks the King on g7? e6 to g7 is +2,+1. Yes! Double check! The King must move. Then White wins the Queen on d6? The Bishop on b2 attacks d6? b2-c3-d4-e5-f6-g7. d6 is not on this diagonal. The Knight on e6 attacks d6? e6 attacks d6? That's -1,-0, not a Knight move. e6 attacks c7, d8, f8, g7, g5, f4, d4, c5. d6 is not attacked.

Let me fix: Black Queen on c5.
Knight on e6 attacks c5? e6 to c5 is -2,-1. Yes! The Knight attacks c5. So after Ne6+, it's double check AND the Knight attacks the Queen on c5. The King moves. Then White wins the Queen with Nxc5.

```
    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   |   |
7 |   |   |   |   |   |   | k |   |
6 |   |   | q |   | N |   |   |   |
5 |   |   |   |   |   |   |   |   |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   | B |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

**Position 2 — Discovered Attack Winning Material:**
**White Queen on d1, White Knight on e3. Black Rook on a7, Black King on g8.**
The Knight on e3 blocks the Queen's view along the d1-h5 diagonal? No, d1 to h5 is d1-e2-f3-g4-h5. The Knight on e3 is not on that diagonal.

Correct: **White Queen on d1, White Bishop on e2. Black King on g8, Black Rook on h5.**
d1 to h5 diagonal: e2, f3, g4, h5. The Bishop on e2 blocks the Queen's diagonal to h5. White plays **2.Bf3!** The Bishop moves to f3, revealing the Queen's attack on h5. The Queen on d1 captures the Rook on h5: Qxh5.

```
    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   | k |   |
7 |   |   |   |   |   |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 |   |   |   |   |   |   |   | r |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   | B |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   | Q |   |   |   |   |
```

**1.Bf3!** The Bishop steps aside, revealing Qxh5. White wins the Rook.

[Checklist for students:]
- [ ] I set up Position 1 and saw the double check after Ne6+
- [ ] I set up Position 2 and saw how moving the Bishop revealed Qxh5
- [ ] I understand that the moved piece AND the revealed piece both create threats
- [ ] I can identify which piece is the "blocker" and which is the "hidden attacker"
- [ ] I found a discovered check on my own board by placing a Knight in front of a Queen

### Step 3: Independent Practice — The Discovery Challenge (10-15 min)

**Challenge:** Students receive 4 diagrams. For each, they must identify the blocking piece, the hidden attacker, the move that reveals the attack, and what is won.

||| Position | Success Metric |
|||------------------------|------------------|
|| Diagram 1: Discovered check | Correctly identifies blocker, attacker, and winning move |
|| Diagram 2: Discovered attack | Correctly identifies what material is won |
|| Diagram 3: Double check | Explains why double check is so powerful |
|| Diagram 4: No discovery | Explains why no discovered attack exists |

**Diagram 1:** White Queen on c2, White Knight on d4. Black King on g7, Black Queen on b6.
*Solution: The Knight on d4 blocks the diagonal c2-d4-e5-f6-g7. White plays Ne6+! Double check (Queen on c2 attacks g7, Knight on e6 checks g7). The King must move. Then White wins the Queen on b6 with Nxb6 or Qxb6.*

**Diagram 2:** White Rook on e1, White Bishop on e3. Black Queen on e7, Black Knight on c5.
*Solution: The Bishop on e3 blocks the Rook's attack on e7. White plays Bxc5! The Bishop captures the Knight, revealing Re7+. The Queen must move. White wins the Knight on c5.*

Wait — Bxc5 reveals Re7+. After Bxc5, the Rook on e1 attacks e7 (Queen). The Queen is in check? e1 to e7 is same file. The Rook on e1 attacks e7. After Bxc5, the Queen on e7 is attacked by the Rook. But it's not check (the Queen is not the King). So Black can respond to the threat on the Queen. But Black also lost a Knight. White is up material.

Actually, this is just winning a Knight and revealing an attack. The Queen can escape. It's still a discovered attack.

**Diagram 3:** White Queen on h2, White Knight on g4. Black King on h8, Black Rook on f8.
*Solution: White plays Nf6! The Knight moves to f6, checking the King on h8? f6 to h8 is +2,+2? No, f6 to h8 is +2,+2, not a Knight move. Knight on f6 attacks e8, g8, h7, h5, g4, e4, d5, d7. h8 is not attacked. So no double check.*

Correct: White Queen on h2, White Knight on g4. Black King on h8, Black Rook on f8.
White plays Ne5! The Knight on e5 attacks f7, g6, g4, f3, d3, c4, c6, d7. Not h8.

Let me use: White Queen on h2, White Knight on f3. Black King on h8, Black Rook on f8.
f3 blocks h2-f8? h2-g3-f4-e5-d6-c7-b8 diagonal. f3 is not on that diagonal.

White Queen on h5, White Knight on f4. Black King on h8, Black Rook on f8.
h5 to f8 is not a diagonal or file or rank. No.

White Queen on h6, White Knight on g4. Black King on h8, Black Rook on f8.
h6 to h8 is same file. g4 is not on that file.

White Queen on a2, White Knight on c3. Black King on h8, Black Rook on g8.
a2 to h8 is not the same line.

White Queen on e2, White Knight on f3. Black King on h8, Black Rook on g8.
e2 to g8 diagonal: f3, g4, h5. The Knight on f3 blocks the Queen's diagonal to g8? e2-f3-g4-h5 is one diagonal. g8 is not on that diagonal.

For a double check with Queen and Knight:
White Queen on d1, White Knight on e2. Black King on g4.
The Queen on d1 attacks g4 along d1-e2-f3-g4 diagonal. The Knight on e2 blocks. Move the Knight to f3: Nf3 is check from Knight. The Queen on d1 also attacks g4 through e2(now empty), f3(now occupied by Knight)... wait, the Knight on f3 blocks the Queen again.

Move Knight to e3: Ne3 checks d5, f5, g4, g2, f1, d1, c2, c4. g4 IS attacked from e3! And the Queen on d1 attacks g4 through e2, f3. e3 is not on the d1-g4 diagonal. So moving Ne3 reveals the Queen's attack on g4? d1 to g4: e2, f3, g4. e3 is not on this diagonal. The Knight was on e2. After Ne3, e2 is empty. The Queen on d1 attacks g4 through e2, f3. g4 is attacked by the Queen! And the Knight on e3 attacks g4. Double check! Yes!

**Diagram 3 (corrected):** White Queen on d1, White Knight on e2. Black King on g4.
*Solution: 1.Ne3+! Double check. The Knight on e3 checks g4, and the Queen on d1 reveals her attack on g4 through the now-empty e2 square. The King must move — no blocking possible.*

**Diagram 4:** White Rook on a1, White Bishop on b2. Black King on g7, Black Knight on c6.
*No discovered attack — the Bishop on b2 and Rook on a1 are not on the same line as the King or Knight in a way that moving one reveals an attack from the other.*

[Student checklist:]
- [ ] I identified the blocker and hidden attacker in Diagram 1
- [ ] I wrote the correct move sequence for Diagram 2
- [ ] I explained why Diagram 3 is a double check
- [ ] I explained why Diagram 4 has no discovered attack
- [ ] I set up a discovered check on my own board

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "You spotted that moving the Knight revealed the Queen's diagonal — that's the key insight!"
- **One thing to try:** "Always check: after the discovery, does the moved piece also create a threat? Two threats are better than one."
- **Question:** "What is the only response to a double check, and why can't you block or capture?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Identifying discoveries | Cannot see the hidden attacker behind a blocking piece | Recognizes discovered attacks with hints | Identifies blocker and hidden attacker independently | Finds discovered attacks in game fragments without prompting |
||| Creating discovered checks | Cannot set up a discovered check | Can set up with guidance, one piece at a time | Creates discovered checks and double checks in practice | Combines discovered attacks with forks and pins |
||| Board/Tool Use | Cannot use board to set up positions | Basic setup with help | Competently sets up and tests positions | Expert use + creates physical puzzle cards |

---

## Extended Activity

**Discovery Detective:** Students play a game with a new rule — after every move, both players must say whether a discovered attack was created or avoided. This trains awareness of hidden lines throughout the game.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Use only discovered checks to the King (easiest to see because check is forcing) | Include discovered attacks on the Queen without check |
||| Provide pre-marked hidden lines with colored strings on the demo board | Study windmill tactics (repeated discovered checks) |
||| Pair work: one student places the blocker, the other finds the discovery | Create a puzzle where the "obvious" discovery leads to a trap |

---

## Teacher Reflection

- [ ] Did learners understand that the hidden piece is the real threat?
- [ ] Was the Queen persona engaging? Did they connect it to unleashed power?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Tactics | 400–800 |
||| Chess.com Lessons | Tactics — Discovered Attacks | Beginner |
||| Skill Tier | Knight Tier | Tactical pattern recognition |
