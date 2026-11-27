# Lesson Plan 81: The Slav Defense

> *Chess Scholar Volume 2: The Opening Encyclopedia — Module 4: Closed Games (1.d4 d5)*

---

# Lesson Plan 81: The Slav Defense

**Module Reference:** Prompt 81 — lesson-81-slav-defense.md  
**Duration:** 70 min  
**Age Group:** 12–14  
**Chess Skill Level:** ♗ Bishop Tier  
**Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the Slav Defense through move 8 for both White and Black.
2. **Explain** the ...c6/...dxc4/...b5 pawn capture plan and why the c8-bishop stays active.
3. **Value** solidity — understanding that the Slav combines a rock-solid center with genuine counterattacking potential.

## Key Inquiry Question

> How does the Slav Defense protect d5 while keeping the c8-bishop active — and why is it a favorite at all levels?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or printed notation sheets
- Printed diagrams of the Slav tabiya position
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Slav Defense entry

---

## Chess Persona: The Pawn

**Piece:** ♙ Pawn  
**Value:** 1 point  
**Movement:** One square forward (two on first move), diagonal capture  
**Persona Trait:** Solid Foundation  
**Why this piece?** The Slav Defense is built on the humble c6 and d5 pawns. Like a Pawn, the Slav is not flashy, but it provides an unshakable foundation that supports everything else. The Pawn teaches us that sometimes the simplest moves create the strongest structures.  
**Historical Note:** The Slav became popular in the early 20th century when Slavic masters (hence the name) demonstrated that Black could defend d5 without locking in the c8-bishop, as in the Queen's Gambit Declined.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show the position after 1.d4 d5 2.c4 c6. Ask students: "Black has just played ...c6. Is this a weak move? It looks like Black is blocking their own bishop!" Reveal that ...c6 is actually the Slav Defense, one of the most solid and popular replies to the Queen's Gambit.

- *Why doesn't Black play ...e6 here?* — Because ...e6 blocks the c8-bishop forever.
- *How does ...c6 support d5?* — It adds a second defender, making d5 almost impossible to undermine.
- *What is Black's dream square for the c8-bishop?* — c8-bishop → f5 or g4, outside the pawn chain.

Explain: *Today we'll learn the Slav Defense using the Pawn as our guide — a humble but powerful opening system.*

### Step 1: Opening Identity — The Slav Story (15-20 min)

**Origin Story:**
The Slav Defense traces its modern form to the early 1900s, when players from Slavic countries popularized it as a way to defend d5 without the cramped positions of the French or QGD. The key insight: by playing ...c6 instead of ...e6, Black keeps the c8-bishop's diagonal open. The opening gained worldwide fame after being adopted by World Champions like Capablanca and Botvinnik.

**Famous Practitioners:**
- **Anatoly Karpov** — used the Slav to grind down opponents in quiet positional battles
- **Viswanathan Anand** — played the Slav in multiple World Championship matches, including against Kramnik
- **Wesley So** — a modern grandmaster who trusts the Slav's solidity at the highest level
- **Judit Polgár** — employed the Slav to build patient, long-term advantages

**Key Position Diagram — The Slav Tabiya:**
After 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O O-O, the board shows Black's solid structure with the bishop outside the pawn chain on f5, and White controlling the center with pawns and pieces. Black's plan: develop with ...Nbd7, ...h6 (to prevent Bg5), and later ...c5 or ...b5.

```
8  r n b q k . r
7  p . p . p p p
6  . p . p n . .
5  . . . . . b .
4  . B . . . . .
3  . . N . N . .
2  P P . P P P P
1  R . B Q . R K
   a b c d e f g h
```

### Step 2: Core Ideas — Strategic Goals for Both Sides (15-20 min)

**Strategic Goal:**
- **Black:** Maintain a solid pawn chain, develop the c8-bishop outside the pawn chain (to f5 or g4), and aim for ...c5 or ...e5 breaks to activate the remaining pieces.
- **White:** Build a strong center, control more space, and use the extra central influence to create kingside threats or exploit Black's slightly passive setup.

**Typical Middlegame Plans:**
- Black plays ...Nbd7, ...e6 (if not already played), and looks for the right moment to break with ...c5 or advance ...e5
- White often expands with e4, gaining central space, and may play Ne5 to pressure f7 or trade pieces to exploit space
- Both sides castle kingside; opposite-side castling is rare in the Slav

**Common Endgames:**
- Slav endgames often feature a good knight vs. bad bishop (if Black's bishop is traded) or bishop pair vs. knight pair
- Passed d-pawn endgames favor White if they can push d5; Black aims to keep the d-file blocked
- Rook endgames with balanced pawns are frequent and highly instructive

### Step 3: Critical Lines — Main Line, Deviation, and Trap (10-15 min)

**Main Line (5-8 moves):**
```
1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O Nbd7
```
Black has the bishop outside on f5, a solid center, and healthy development. The game is balanced but rich in ideas.

**Deviation — The Chebanenko Slav (4...a6):**
```
1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 a6
```
Black prepares ...b5, keeping the option to capture on c4 and defend the pawn with ...b5. This sideline is tricky and avoids early exchanges.

**Common Trap — The Pseudo-Slav Trap:**
```
1.d4 d5 2.c4 c6 3.Nc3 dxc4?? 4.e4 b5 5.a4 b4 6.Na2
```
Black takes too early without ...Nf6. White wins the b4-pawn and gets a crushing position. Moral: don't capture on c4 until Nf6 is developed and you can hold the pawn.

### Step 4: PGN Study — Famous Game (10 min)

```pgn
[Event "World Championship Match"]
[Site "Moscow RUS"]
[Date "1985.10.15"]
[Round "16"]
[White "Karpov, Anatoly"]
[Black "Kasparov, Garry"]
[Result "0-1"]
[Opening "Slav Defense"]

1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5 6.Ne5 e6 7.f3 Bb4 8.e4 Bxe4
9.fxe4 Nxe4 10.Bd2 Qxd4 11.Nxe4 Qxe4+ 12.Qe2 Bxd2+ 13.Kxd2 Qd5+ 14.Kc2 Na6
15.Nxc4 Qc5 16.Qe5 Qxe5 17.Nxe5 Nb4+ 18.Kb3 Nd5 19.Bc4 f6 20.Nd3 Ke7 21.Rac1
Rd8 22.Rhd1 Rd7 23.Nb4 Nxb4 24.Kxb4 Rad8 25.Rxd7+ Rxd7 26.b3 Rd2 27.Rg1 Rxg2
28.Rxg2 Kd6 29.Rxg7 h6 30.Rxg6 Kc7 31.Rg7+ Kb6 32.Rg6 Kc7 33.Rg7+ Kb6 34.Rg6
1/2-1/2
```

*Note: While the result was a draw, this game illustrates the sharp but solid nature of the Slav at the highest level. Kasparov as Black achieved a comfortable position and even won a pawn.*

### Step 5: Practice Drills (10-15 min)

**Drill 1 — Memorization:**
Set up the following position from memory after 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O O-O. Practice placing all pieces for both sides.

**Drill 2 — Recognition:**
Show students positions from different Queen's Gambit lines. Can they identify which is Slav (c6, e6 not yet played, bishop free), QGD (e6, c8-bishop blocked), or QGA (dxc4 early)?

**Drill 3 — Decision-making:**
In the position after 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3, ask: "Should Black play 4...dxc4 or 4...e6?" Discuss when each is appropriate.

### Step 6: Sharing & Feedback (5 min)

Learners present their drill solutions. Use the critique framework:
- **What's working:** "Your board setup shows you understand the ...Bf5 development idea."
- **One thing to try:** "Consider what happens if White plays 5.e3 instead of 5.a4 — how does Black's plan change?"
- **Question:** "In what other openings does Black develop the c8-bishop outside the pawn chain?"

---

## Assessment

| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|----------|------------------------|-------------------|------------|--------------|
| Move Knowledge | Cannot recall first 4 moves | Recalls with prompting | Recalls Slav through move 8 | Recalls 10+ moves and deviations |
| Strategic Understanding | Cannot explain why ...c6 is played | Explains with prompting | Explains ...c6/...Bf5 plan independently | Explains plans for both White and Black |
| Practical Application | Cannot play the opening | Plays but mixes up Slav with QGD | Plays the chosen Slav line correctly | Adapts when opponent deviates |

---

## Extended Activity

**Slav Repertoire Builder:** Choose one main line (4.Nc3 dxc4) and one sideline (Chebanenko 4...a6) to study at home. Record 5 key positions from each in a notebook with annotations.

---

## Differentiation

| For learners who need more support | For advanced learners |
|-------------------------------------|----------------------|
| Focus only on the first 6 moves | Study the Exchange Slav (3.cxd5 cxd5) and its plans |
| Use physical pieces to trace ...Bf5 | Analyze Karpov's Slav games in depth |
| Pair with a partner to set up positions | Investigate the Semi-Slav transition (adding ...e6) |

---

## Teacher Reflection

- [ ] Did learners understand the difference between ...c6 (Slav) and ...e6 (QGD)?
- [ ] Was the Pawn persona engaging? Did they connect it to the solid foundation concept?
- [ ] Could learners complete the memorization and recognition drills?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

| Framework | Strand | Level |
|-----------|--------|-------|
| USCF / FIDE | Opening | 1000–1600 |
| Chess.com Lessons | Openings | Intermediate |
| Skill Tier | Bishop | Bishop Tier progression |
