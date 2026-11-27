# Lesson Plan 56: The Ruy Lopez (Spanish)

> **Module Reference:** Prompt 56 — lesson-56-ruy-lopez.md
> **Duration:** 70 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♗ Bishop Tier
> **Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the Ruy Lopez Exchange and Closed variations through move 8.
2. **Explain** why 3.Bb5 is more subtle than 3.Bc4 — it pressures the knight, not the pawn.
3. **Value** patience — understanding that the Spanish takes time to unfold but rewards deep study.

## Key Inquiry Question

> Why is the Ruy Lopez called "the Spanish Torture" — and how does a simple bishop move on move 3 create decades of theory?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or analysis board
- Printed diagram of Ruy Lopez tabiya after 3...a6
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `OPENINGS-CURRICULUM.md` — Open Games (1.e4 e5) entry

---

## Chess Persona: The Bishop

**Piece:** Bishop ♗  
**Value:** 3  
**Movement:** Diagonally, any number of squares  
**Persona Trait:** The Eternal Opening  
**Why this piece?** The Ruy Lopez is defined by the bishop's journey to b5, where it pins the knight and indirectly pressures the e5 pawn. Unlike the Italian Game's flashy c4-bishop, the Spanish bishop is patient and strategic — it waits, it pins, and it builds pressure move by move. Like the bishop, this opening rewards players who can see far into the future.  
**Historical Note:** The Ruy Lopez is named after a Spanish priest, Ruy López de Segura, who analyzed it in his 1561 book — one of the first systematic chess works ever published. It has been played at the highest level for over 450 years.

---

## Opening Identity

### Origin Story
The Ruy Lopez (Spanish Opening) arises after 1.e4 e5 2.Nf3 Nc6 3.Bb5. Instead of the immediate attack on f7 (3.Bc4), White places the bishop on b5 to **pin the knight**. The idea is subtle: if the knight moves, White can take it and double Black's pawns, or win the e5 pawn. This pin is not a direct threat — it is a long-term pressure that forces Black to think carefully about every move. The Ruy Lopez is the most deeply studied opening in chess, with world champions dedicating their careers to its nuances.

### Famous Practitioners
- **Ruy López de Segura (c.1530–1580):** The Spanish priest who gave the opening its name and first analyzed it systematically.
- **Emanuel Lasker:** The second World Champion used the Ruy Lopez to win grueling positional battles.
- **Anatoly Karpov:** The 12th World Champion was a master of the Closed Ruy Lopez, squeezing opponents from seemingly equal positions.
- **Viswanathan Anand:** The Indian legend played both sides of the Ruy Lopez at world championship level, proving its eternal relevance.

### Key Position Diagram (The Ruy Lopez Tabiya)
```
8 | r . b q k b n r
7 | p p p p . p p p
6 | . . n . . . . .
5 | . B . . p . . .
4 | . . . . P . . .
3 | . . . . . N . .
2 | P P P P . P P P
1 | R N B Q K . N R
    a b c d e f g h

After 1.e4 e5 2.Nf3 Nc6 3.Bb5 — the bishop pins the knight.
```

---

## Core Ideas

### Strategic Goal
White's goal is **long-term pressure** on Black's position. The pin on the knight makes it hard for Black to maintain the e5 pawn and develop freely. Black's goal is to **break the pin** and **equalize** through active counterplay, usually with ...a6, ...b5, and ...d5 or ...d6.

### Typical Middlegame Plans
- **White (Closed Ruy Lopez):** After 3...a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3, White prepares d4 and builds a kingside attack with pieces, not pawns.
- **White (Exchange Ruy Lopez):** After 3...a6 4.Bxc6 dxc6, White has simplified to a favorable endgame where Black's doubled pawns are a long-term target.
- **Black (Closed):** Play ...a6, ...b5, ...d6, ...Be7, ...O-O, and then counterattack with ...d5 or piece pressure on the queenside.
- **Black (Exchange):** Use the bishop pair and active pieces to compensate for the doubled pawns. Aim for ...f5 breaks.

### Common Endgames
The Exchange Variation often leads to **bishop vs. knight** endgames where White tries to exploit Black's weak pawn structure. The Closed Variation leads to **complex middlegames** that may simplify to **rook endgames** with a slight pull for White.

---

## Critical Lines

### Main Line: The Closed Ruy Lopez
```
1.e4 e5      2.Nf3 Nc6      3.Bb5 a6      4.Ba4 Nf6
5.O-O Be7    6.Re1 b5       7.Bb3 d6      8.c3 O-O
9.h3         (White prepares d4 and prevents ...Bg4)
```
This is the Closed Ruy Lopez — the main line that has been analyzed to move 30 and beyond. Both sides have solid, flexible positions.

### Deviation/Sideline: The Exchange Variation (4.Bxc6)
```
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6
```
White trades the bishop for the knight, doubling Black's pawns. This sideline is less popular at the top level because it is easier to draw, but it is an excellent teaching tool for understanding pawn structure.

### Common Trap: The Noah's Ark Trap
```
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O d6 6.d4 b5 7.Bb3 Nxd4!
```
Black sacrifices a pawn to trap White's bishop. If White takes on d4, Black plays ...exd4 and ...c5, winning the bishop on b3.
**Teaching point:** In the Ruy Lopez, Black's ...b5 advance is not just defensive — it can become a weapon.

---

## PGN Study: Famous Game

```pgn
[Event "World Championship Match"]
[Site "Moscow"]
[Date "1985.??.??"]
[White "Karpov, Anatoly"]
[Black "Kasparov, Garry"]
[Result "0-1"]

1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6
8.c3 O-O 9.h3 Bb7 10.d4 Re8 11.a4 h6 12.Nbd2 exd4 13.cxd4 Nb4
14.Qe2 c5 15.dxc5 dxc5 16.Qc4 Nxc4 17.Bxc4 bxc4 18.Nxc4 Qc7
19.Na3 Rac8 20.Rb1 Bc6 21.Nc2 Bf8 22.b3 Nd7 23.Bb2 Nb6 24.Rbd1 Nxa4
25.bxa4 c4 26.Re3 Rcd8 27.Rxd8 Rxd8 28.Rc3 Qb7 29.Ne3 cxb3
30.Rxb3 Qa7 31.Kh2 Rd2 32.Bc1 Rxf2 33.Nd4 Ba4 34.Rb2 Rxb2
35.Bxb2 Qb7 36.Bc3 a5 37.Nd5 Bxc3 38.Nxc3 a4 39.Nd5 a3 40.Nb4 Bb5
41.Nb3 a2 42.Nc2 Qc6 43.Na1 Qc1 44.Nb3 Qxa1 45.Nxa1 a1=Q
46.Nb3 Qb1 47.Nd2 Qc2 48.Nf3 Bc4 49.Kg3 Qd3+ 50.Kh4 Qf3
51.g3 Qxf2+ 52.Kh3 Qf1+ 53.Kh4 Bf7 54.g4 h5 55.gxh5 Bxh5
56.Ng5 Qg2 57.h4 Bg6 58.e5 Qg4#
0-1
```
**Analysis:** Karpov vs. Kasparov, 1985 — the most famous Ruy Lopez in history. Kasparov, playing Black, survives White's tiny edge and then explodes in the endgame. It shows why the Ruy Lopez is called the Spanish Torture: White has a small advantage for a long time, but one mistake turns the tables.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show the position after 1.e4 e5 2.Nf3 Nc6 3.Bb5 and ask: "Why did White put the bishop on b5 instead of c4? It doesn't attack f7 anymore — so what's the point?"

- What does the bishop on b5 do to the knight on c6? *(It pins it — the knight cannot move without exposing the king.)*
- If the knight on c6 moves, what can White do? *(Take it with Bxc6, doubling Black's pawns, or win the e5 pawn.)*
- Why is the Ruy Lopez harder to play than the Italian Game? *(It is slower and more positional — you need patience.)*

Explain: *Today we study the Ruy Lopez — the oldest, most respected, and most deeply studied opening in chess. It is not flashy. It is slow, patient, and deadly. World champions have spent their entire careers trying to master it.*

### Step 1: Concept Introduction — The Pin (15-20 min)

Set up the Ruy Lopez: 1.e4 e5 2.Nf3 Nc6 3.Bb5.

**Key teaching point:** A pin is when a piece cannot move because moving it would expose a more valuable piece behind it. Here, the knight on c6 is pinned to the king on e8.

Show why this matters:
- If Black plays ...Nf6, the knight defends e5 — but ...d6 is still needed to support it.
- If Black plays ...d6, the bishop on b5 is still annoying.
- Black's natural plan is ...a6, forcing the bishop to retreat. But even after ...a6, the bishop goes to a4 and the pin is recreated!

Compare 3.Bc4 (Italian) vs. 3.Bb5 (Spanish):
- **Bc4:** Attacks f7 immediately. Flashy, direct, tactical.
- **Bb5:** Pins the knight. Subtle, slow, positional.

Have students trace the pin on the board and discuss which they find harder to face as Black.

### Step 2: Guided Practice — Closed vs. Exchange (15-20 min)

**Activity:** "Spanish Duel." In pairs, students play both the Closed and Exchange variations.

Closed:
```
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6
```

Exchange:
```
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O
```

[Checklist for students:]
- [ ] Play the Closed Ruy Lopez through move 7
- [ ] Play the Exchange Ruy Lopez through move 5
- [ ] Identify the doubled pawns in the Exchange and explain why they are weak
- [ ] Explain why Black plays ...a6 in both lines
- [ ] Compare: which variation would you rather play as Black?

**Key teaching point:** The Exchange Variation is easier to learn but harder to win with. The Closed Variation is the real battleground — it requires deep understanding of plans, not just moves.

### Step 3: Independent Practice — The Spanish Test (10-15 min)

**Challenge:** Students analyze three positions and decide which is a Ruy Lopez:

|| Position | Is this a Ruy Lopez? | Why or why not? |
||----------|---------------------|-----------------|
|| 1.e4 e5 2.Nf3 Nc6 3.Bb5 | Yes | Classic Spanish |
|| 1.e4 e5 2.Nf3 Nc6 3.Bc4 | No | This is the Italian Game |
|| 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 | Partially | Exchange Variation of the Spanish |

[Student checklist:]
- [ ] Play the Closed Ruy Lopez from memory through move 7
- [ ] Explain the pin on c6
- [ ] Identify the strategic difference between Closed and Exchange
- [ ] Explain to a partner why the Ruy Lopez is called "the Spanish Torture"

### Step 4: Sharing & Feedback (5-10 min)

Pairs share their comparisons and discuss which variation they prefer.

Use the critique framework:
- **What's working:** "You correctly identified the pin and explained why ...a6 is necessary — that's the heart of the Ruy Lopez."
- **One thing to try:** "In the Exchange, try to attack the doubled pawns with your rooks on the d-file."
- **Question:** "If Black never plays ...a6, what happens to the bishop on b5? Does it stay forever?"

---

## Assessment

|| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Move Knowledge | Cannot recall 3.Bb5 | Recalls with prompting through move 5 | Recalls Closed and Exchange independently through move 8 | Recalls Noah's Ark Trap and ...d5 break |
|| Strategic Understanding | Cannot explain the pin | Explains that Bb5 pins the knight | Explains long-term pressure and pawn structure independently | Compares Ruy Lopez to Italian and explains when to choose each |
|| Practical Application | Cannot play Ruy Lopez without help | Plays but mixes up Closed/Exchange | Plays chosen line correctly for both colors | Adapts when opponent deviates (e.g., ...Nf6 before ...a6) |

---

## Extended Activity

**"Spanish Historian":** Students research the 1985 Karpov-Kasparov match and find the exact game in the Ruy Lopez. They write 5 sentences explaining how Kasparov turned a "slightly worse" position into a win.

---

## Differentiation

|| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Focus only on the Exchange Variation (simpler) | Analyze the Marshall Attack (3...a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5!) |
|| Practice the pin concept with a separate bishop and knight | Compare the Closed Ruy Lopez to the Berlin Defense (1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6) |
|| Use a diagram showing doubled pawns | Explore the Arkhangelsk and Moller variations |

---

## Teacher Reflection

- [ ] Did learners understand the difference between the Italian (Bc4) and Spanish (Bb5)?
- [ ] Was the Bishop persona effective in connecting patience to the opening?
- [ ] Could learners play both Closed and Exchange variations?
- [ ] What would I change next time — should I introduce the Marshall Attack or keep it classical?

---

## Elo & Skill Cross-Reference

|| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Opening | 800–1200 |
|| Chess.com Lessons | Openings | Intermediate |
|| Skill Tier | Bishop Tier | Pawn → King progression |
