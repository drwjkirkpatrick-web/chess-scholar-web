# Lesson Plan 88: The Nimzo-Indian Defense

> *Chess Scholar Volume 2: The Opening Encyclopedia — Module 5: Indian Defenses*

---

# Lesson Plan 88: The Nimzo-Indian Defense

**Module Reference:** Prompt 88 — lesson-88-nimzo-indian.md  
**Duration:** 80 min  
**Age Group:** 12–14  
**Chess Skill Level:** ♖ Rook Tier  
**Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the Nimzo-Indian Defense through move 10 for both White and Black.
2. **Explain** the ...Bb4 pin and the doubled pawn strategy that makes the Nimzo a positional masterpiece.
3. **Value** prophylaxis — understanding that pinning the knight on c3 is as much about preventing as attacking.

## Key Inquiry Question

> How does pinning the knight on c3 win the game before any pieces are captured — and why is the Nimzo a positional masterpiece?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or printed notation sheets
- Printed diagrams of the Nimzo-Indian tabiya and doubled pawn positions
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Nimzo-Indian Defense entry

---

## Chess Persona: The Bishop

**Piece:** ♗ Bishop  
**Value:** 3 points  
**Movement:** Diagonally any number of squares  
**Persona Trait:** Bishop Pin Strategy  
**Why this piece?** The Nimzo-Indian is named after its signature move: ...Bb4. The bishop on b4 pins the knight on c3, paralyzing White's entire position. Like the Bishop that controls a long diagonal, the Nimzo-Indian teaches us that a single pin can shape the entire game.  
**Historical Note:** The Nimzo-Indian was developed by Aron Nimzowitsch in the early 20th century. It was revolutionary: instead of occupying the center, Black controlled it and created long-term positional pressure. Nimzowitsch's book "My System" (1925) made this opening famous and changed how chess was played forever.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4. Ask: "Black has pinned the knight on c3. White hasn't made a mistake, so why does this pin matter?"

- *What does the pin on c3 prevent?* — It prevents White from playing e4 (because Nc3 can't support it) and prepares ...Bxc3 to double White's pawns.
- *Why does Black want doubled pawns?* — Because doubled c-pawns are weak and can't control the center properly. Black gets long-term pressure.
- *Can White ignore the pin?* — White can play 4.Qc2, 4.e3, or 4.a3, but each move has drawbacks.

Explain: *Today we'll study the Nimzo-Indian Defense using the Bishop as our guide — a single pin that controls the whole board.*

### Step 1: Opening Identity — The Nimzo-Indian Story (20 min)

**Origin Story:**
Aron Nimzowitsch introduced this system in the 1910s and 1920s as part of his hypermodern philosophy. He believed that controlling the center was more important than occupying it. The ...Bb4 pin was his signature weapon. "My System" (1925) became one of the most influential chess books ever, and the Nimzo-Indian became a permanent part of opening theory. Every world champion from Capablanca to Carlsen has played it.

**Famous Practitioners:**
- **Aron Nimzowitsch** — the creator; his games are still studied a century later
- **Mikhail Botvinnik** — used the Nimzo to build his scientific, positional style
- **Anatoly Karpov** — ground out countless wins with the Nimzo's quiet pressure
- **Vladimir Kramnik** — modern master of the Nimzo's subtle positional ideas

**Key Position Diagram — The Nimzo-Indian Tabiya:**
After 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3 O-O 5.Bd3 d5 6.Nf3 c5 7.O-O dxc4 8.Bxc4 Nbd7 9.Qe2 b6 10.Rd1 cxd4 11.exd4 Bb7, Black has the bishop pair, pressure on d4, and a rock-solid position. White's doubled c-pawns (if ...Bxc3 happened earlier) are a long-term weakness.

```
8  r . . q r k .
7  p . n b p p p
6  . p . p n . .
5  . . . . . . .
4  . B . P . . .
3  . . N . . . .
2  P P . . Q P P
1  R . B . R . K
   a b c d e f g h
```

### Step 2: Core Ideas — Strategic Goals for Both Sides (15 min)

**Strategic Goal:**
- **Black:** Pin the c3-knight, force or invite ...Bxc3 to create doubled pawns, then use the bishop pair and superior pawn structure to grind out a win. The Nimzo is about long-term positional advantages, not quick attacks.
- **White:** Avoid doubled pawns (with 4.Qc2 or 4.a3), accept the doubled pawns but build a strong center (4.e3), or play 4.f3 to support e4 and challenge the pin.

**Typical Middlegame Plans:**
- **Black:** ...Bb7 (fianchetto), ...Ne4 (attacking c3 and f2), ...f5 (challenging e4), ...Qe7/...Rfd8 (adding pressure). The key: use the two bishops to control open diagonals.
- **White:** If pawns are doubled on c3, play for d5 breaks, use the open e-file, and try to exchange Black's active bishops. If White avoided doubled pawns, build a center with e4.

**Common Endgames:**
- Bishop pair vs. bishop+knight endgames heavily favor Black.
- Rook endgames with Black's better pawn structure (no doubled pawns) are typical winning efforts.
- If White has the bishop pair and no doubled pawns, the endgame is roughly equal.

### Step 3: Critical Lines — Main Line, Deviation, and Trap (15 min)

**Main Line — The Rubinstein Variation (4.e3):**
```
1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3 O-O 5.Bd3 d5 6.Nf3 c5 7.O-O dxc4 8.Bxc4 Nbd7
```
White plays solidly, accepting that Black will have active piece play. This is one of the most important lines in chess.

**Deviation — The Leningrad Variation (4.Bg5):**
```
1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Bg5 h6 5.Bh4 c5 6.d5 b5 7.dxe6 fxe6 8.cxb5 d5
```
This wild line involves White pinning the knight and Black sacrificing pawns for rapid development. Very sharp and tactical.

**Common Trap — The Early ...Bxc3 Blunder:**
```
1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Qc2?? O-O 5.a3 Bxc3 6.Qxc3 Ne4 7.Qc2 Qa5+
```
White plays 4.Qc2 carelessly. After 7...Qa5+, White loses the c4-pawn or gets mated. Moral: in the Nimzo, every move must respect Black's tactical potential.

### Step 4: PGN Study — Famous Game (15 min)

```pgn
[Event "Nottingham"]
[Site "Nottingham ENG"]
[Date "1936.08.17"]
[Round "4"]
[White "Botvinnik, Mikhail"]
[Black "Nimzowitsch, Aron"]
[Result "1-0"]
[Opening "Nimzo-Indian Defense: Rubinstein Variation"]

1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3 O-O 5.Bd3 d5 6.Nf3 c5 7.O-O dxc4 8.Bxc4 Nbd7
9.Qe2 b6 10.Rd1 cxd4 11.exd4 Bb7 12.Bg5 Bxc3 13.bxc3 Qc7 14.Rac1 Rfe8 15.Bd3
Rac8 16.h3 Qd6 17.c4 Qe7 18.Qe3 Ng4 19.Qf4 Ndf6 20.Bxf6 Nxf6 21.c5 Nd5 22.Qg5
f5 23.Qxe7 Rxe7 24.cxb6 axb6 25.Bb5 Rf8 26.Ne5 Bc8 27.Rc4 Bd7 28.Bd3 Be8 29.Ra4
Ra7 30.Rxa7 Rxa7 31.Rc1 Rxa2 32.Rc8 Kf8 33.Rxe8+ Kxe8 34.Bb5+ Kd8 35.Nc6+ Kc7
36.Nxa5 Ra1+ 37.Kh2 bxa5 38.Bd3 h6 39.Bxf5 Kd6 40.Bg6 Kd5 41.Bf7+ Kxd4 42.Bxe6
Ne7 43.f3 Nd5 44.Bf7 Nc3 45.Bc4 Kc5 46.Be2 Nd5 47.Bd3 a4 48.Kg3 a3 49.Bc2 Kd4
50.h4 Ne3 51.Ba4 Nxg2 52.Kxg2 Kc3 53.h5 Kb2 54.Bd7 a2 55.Ba4 Kc3 56.Bd7 Kd4
57.Kf2 Ke5 58.Ke3 Kf6 59.Kf4 Kg7 60.Kg4 Kh8 61.Kf5 Kg7 62.Ke6 Kh8 63.Kf7 g6
64.hxg6 1-0
```

*Botvinnik defeats Nimzowitsch himself in the opening that bears Nimzowitsch's name. A beautiful positional grind where White's pressure on the queenside eventually converts to a winning endgame. The exchange on c3 and subsequent weak dark squares are instructive.*

### Step 5: Practice Drills (10 min)

**Drill 1 — Memorization:**
Memorize the Nimzo-Indian move order: 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3 O-O 5.Bd3 d5 6.Nf3 c5 7.O-O.

**Drill 2 — Recognition:**
Show positions from the Nimzo-Indian, Bogo-Indian, and Queen's Indian. Ask students to identify the Nimzo by the ...Bb4 pin on c3.

**Drill 3 — Decision-making:**
After 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4, White has choices: 4.Qc2 (avoids doubled pawns), 4.e3 (solid), 4.a3 (forces the bishop to decide). Which would you choose as a positional player? As a tactical player?

### Step 6: Sharing & Feedback (5 min)

- **What's working:** "Your understanding of the ...Bb4 pin and doubled pawn strategy is excellent."
- **One thing to try:** "Look at what happens if White plays 4.f3 — how does Black respond without the pin on c3?"
- **Question:** "Why do you think the Nimzo-Indian is banned in some opening systems where White avoids 3.Nc3?"

---

## Assessment

| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|----------|------------------------|-------------------|------------|--------------|
| Move Knowledge | Cannot recall first 4 moves | Recalls with prompting | Recalls Nimzo Rubinstein through move 10 | Recalls Leningrad and 4.Qc2 systems |
| Strategic Understanding | Cannot explain ...Bb4 pin | Explains with prompting | Explains doubled pawn plan | Explains bishop pair advantage |
| Practical Application | Cannot play the opening | Plays but forgets ...O-O | Plays Nimzo correctly from either side | Adapts to White's anti-Nimzo systems |

---

## Extended Activity

**Nimzo-Indian Deep Dive:** Study one famous Nimzo-Indian game (Botvinnik-Nimzowitsch 1936, or Karpov-Korchnoi). Write out the first 15 moves and annotate Black's ...Bb4/...Bxc3 plan and White's response.

---

## Differentiation

| For learners who need more support | For advanced learners |
|-------------------------------------|----------------------|
| Focus only on the Rubinstein (4.e3) | Study the 4.Qc2 and 4.f3 systems |
| Use a physical bishop to trace the b4-a5 diagonal | Analyze why 3.Nf3 avoids the Nimzo entirely |
| Pair with a partner to practice ...Bxc3 | Investigate the Romanishin Variation (4...d5) |

---

## Teacher Reflection

- [ ] Did learners understand why ...Bb4 is so powerful?
- [ ] Was the "pin controls the board" metaphor engaging?
- [ ] Could learners distinguish between Nimzo, Bogo, and Queen's Indian?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

| Framework | Strand | Level |
|-----------|--------|-------|
| USCF / FIDE | Opening | 1400–2200 |
| Chess.com Lessons | Openings | Intermediate–Advanced |
| Skill Tier | Rook | Rook Tier progression |
