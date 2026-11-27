# Lesson Plan 86: The King's Indian Defense

> *Chess Scholar Volume 2: The Opening Encyclopedia — Module 5: Indian Defenses*

---

# Lesson Plan 86: The King's Indian Defense

**Module Reference:** Prompt 86 — lesson-86-kings-indian.md  
**Duration:** 80 min  
**Age Group:** 12–14  
**Chess Skill Level:** ♖ Rook Tier  
**Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the King's Indian Defense through move 10 for both White and Black.
2. **Explain** the ...d6/...e5 pawn chain and the kingside attack that makes the KID famous.
3. **Value** bravery — understanding that allowing White the center can lead to one of chess's most devastating counter-attacks.

## Key Inquiry Question

> How does the King's Indian turn a passive-looking setup into one of chess's most explosive attacks — and why do attackers love it?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or printed notation sheets
- Printed diagrams of the KID tabiya and the Mar del Plata position
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — King's Indian Defense entry

---

## Chess Persona: The Bishop

**Piece:** ♗ Bishop  
**Value:** 3 points  
**Movement:** Diagonally any number of squares  
**Persona Trait:** Dynamic and Brave  
**Why this piece?** In the King's Indian, Black's dark-squared bishop on g7 is the soul of the position. It sits behind the ...d6/...e5 pawn chain and fires along the h8-a1 diagonal. Like the Bishop that seems blocked but suddenly dominates, the KID teaches us that power can be hidden behind a wall of pawns.  
**Historical Note:** The King's Indian became popular in the 1940s–1950s thanks to Soviet players like Isaac Boleslavsky and David Bronstein. It was a hypermodern revelation: let White build a center, then attack it. Bobby Fischer and Garry Kasparov later made it their weapon of choice in must-win games.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show 1.d4 Nf6 2.c4 g6. Ask: "Black has allowed White to build a big center with pawns on c4 and d4. Is Black being passive? Or is this a trap?"

- *Why does Black let White have the center?* — Because White's center becomes a target. It's hard to defend a big center.
- *Where does Black's attack come from?* — The kingside! ...f5, ...g5, ...Nf6-h5-f4, and the g7-bishop blasting through.
- *Is the King's Indian risky?* — Yes! If White breaks in the center first, Black can be crushed. But if Black gets there first, it's checkmate.

Explain: *Today we'll study the King's Indian Defense using the Bishop as our guide — a piece hidden behind pawns that suddenly explodes with power.*

### Step 1: Opening Identity — The King's Indian Story (20 min)

**Origin Story:**
The King's Indian was considered dubious for centuries. The idea of letting White build a center with d4/c4/Nc3/e4 seemed to violate classical principles. But in the mid-20th century, Soviet players proved that the center could be attacked later. The opening exploded in popularity when Bobby Fischer used it to win the 1972 World Championship. Garry Kasparov later made it his main weapon, scoring some of the most famous attacking victories in chess history.

**Famous Practitioners:**
- **Garry Kasparov** — perhaps the greatest KID player ever; his games against the Mar del Plata Variation are legendary
- **Bobby Fischer** — won crucial games with the KID, including against Petrosian and Taimanov
- **Teimour Radjabov** — modern "King's Indian warrior" who plays it almost exclusively
- **Hikaru Nakamura** — uses the KID in rapid and blitz for its attacking potential

**Key Position Diagram — The Mar del Plata Tabiya:**
After 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Nd3 f5 11.exf5 Nxf5 12.f3, White has a space advantage on the queenside, but Black is preparing ...g5, ...h5, ...Nf5-h4, and a terrifying kingside attack.

```
8  r . b q . r k
7  p p p n b p p .
6  . . . p . . n .
5  . . . P . n . .
4  . . P . . . . .
3  . . N . . P . .
2  P P . . B P P P
1  R . B Q . R K
   a b c d e f g h
```

### Step 2: Core Ideas — Strategic Goals for Both Sides (15 min)

**Strategic Goal:**
- **Black:** Build a solid kingside with ...g6/...Bg7/...d6, then strike with ...e5 and ...f5. Transfer pieces to the kingside and checkmate White before White breaks on the queenside.
- **White:** Maintain the big center, expand on the queenside with c5/b4/a4, and keep the king safe. If White can open files on the queenside before Black opens the kingside, White wins.

**Typical Middlegame Plans:**
- **Black (Kingside attack):** ...f5, ...g5, ...h5, ...Nf5-h4, ...Bh6 (trading the dark-squared bishop to open the g-file), queen to h4 or g4, rook lift to g8 or h8.
- **White (Queenside attack):** c5, b4, a4, Nc3-b5 or Nd2-c4, opening files on the queenside and using the space advantage.

**Common Endgames:**
- If the kingside attack succeeds, there is no endgame — checkmate ends the game.
- If White survives the attack, the endgame often favors White due to the extra space and better pawn structure.
- Rook endgames with White's passed queenside pawns vs. Black's damaged kingside are typical.

### Step 3: Critical Lines — Main Line, Deviation, and Trap (15 min)

**Main Line — Classical Variation:**
```
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7
```
This is the Classical KID. Black will play ...Nd7, ...f5, and build the kingside attack.

**Deviation — The Sämisch Variation (5.f3):**
```
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 c5 7.d5 e6 8.Nge2 exd5 9.cxd5
```
White plays f3 to prevent ...Bg4 and prepare a kingside pawn storm. This is one of White's most aggressive systems.

**Common Trap — The Early ...Nxe4 Blunder:**
```
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5?? 8.Qxd8 Rxd8 9.Nxe5
```
Black recaptures with the d-pawn automatically, but White wins a pawn with Nxe5. Moral: always recapture on e5 with the knight, not the pawn.

### Step 4: PGN Study — Famous Game (15 min)

```pgn
[Event "World Championship Match"]
[Site "Moscow RUS"]
[Date "1990.10.08"]
[Round "8"]
[White "Kasparov, Garry"]
[Black "Karpov, Anatoly"]
[Result "1-0"]
[Opening "King's Indian Defense: Classical Variation, Mar del Plata"]

1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7
10.Nd3 f5 11.exf5 Nxf5 12.Nxf5 gxf5 13.Bh5 Nf6 14.Bd3 e4 15.Bc2 Qe8 16.Be3 Qg6
17.Bd4 Bd7 18.Qd2 Rae8 19.Rae1 Qh6 20.Qxh6 Bxh6 21.b3 Bg7 22.g3 Nd5 23.Bxg7 Kxg7
24.Ne2 Nf6 25.Rd1 b6 26.Kg2 h5 27.Kf2 h4 28.gxh4 f4 29.Rg1+ Kf7 30.h5 Rh8 31.h4 Rxh5
32.Rxg6 Kxg6 33.Rg1+ Kf7 34.Rg7+ Ke8 35.Rxg8+ Nxg8 36.Nxf4 Rxh4 37.Nxd6+ Kd8
38.Nxe8 Kxe8 39.Bxe4 Bc6 40.Bxc6+ Nf6 41.c5 bxc5 42.d6 c4 43.bxc4 Kd8 44.c5 Ne4+
45.Ke3 Nxc5 46.Bb5 a6 47.Bxa6 Ne6 48.Bb5 Kd7 49.Bd3 Nc5 50.Bg6 Rh3+ 51.Kd4 Rf3
52.Bh5 Rf4+ 53.Ke3 Rf6 54.Bg4+ Ke8 55.d7+ Nxd7 56.Kd4 Rf7 57.Kc5 Kd8 58.Bf3 Rf5
59.Kd6 Nf6 60.Bd5 Ne8+ 61.Ke6 Rf6+ 62.Kxe8 Rf8+ 63.Kd6 Rf6+ 64.Kc5 Rf5 65.Kd6 1-0
```

*Kasparov (as White!) defeats Karpov in one of the most famous King's Indian games ever. Kasparov's kingside attack is relentless, and he converts to a winning endgame. Notice how White's attack on the kingside and Black's counterplay on the queenside create a race.*

### Step 5: Practice Drills (10 min)

**Drill 1 — Memorization:**
Memorize the KID move order: 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7.

**Drill 2 — Recognition:**
Show positions from the KID, Grünfeld, and Pirc. Ask students to identify the KID by its ...g6/...Bg7/...d6/...e5 pawn chain (the "KID triangle").

**Drill 3 — Decision-making:**
In the position after 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5, White plays 7.O-O Nc6 8.d5 Ne7. Should Black now play 9...Nd7 (preparing ...f5) or 9...c6 (challenging the center)? Discuss the character of each plan.

### Step 6: Sharing & Feedback (5 min)

- **What's working:** "Your understanding of the ...e5/...f5 kingside plan is excellent."
- **One thing to try:** "Look at what happens if White plays the Sämisch (5.f3) — how does Black's plan change without ...Bg4?"
- **Question:** "Why do you think the King's Indian is less popular at the very top level today than it was in Kasparov's era?"

---

## Assessment

| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|----------|------------------------|-------------------|------------|--------------|
| Move Knowledge | Cannot recall first 4 moves | Recalls with prompting | Recalls KID Classical through move 10 | Recalls Mar del Plata and Sämisch lines |
| Strategic Understanding | Cannot explain ...e5/...f5 | Explains with prompting | Explains kingside attack + queenside counter | Explains why the center is a target |
| Practical Application | Cannot play the opening | Plays but forgets ...Bg7 | Plays KID correctly from either side | Adapts to White's different systems |

---

## Extended Activity

**KID Attack Diary:** Play 3 games as Black with the King's Indian Defense. After each game, answer: (1) did you achieve ...e5 and ...f5? (2) did you attack on the kingside? (3) did you win, lose, or draw, and why?

---

## Differentiation

| For learners who need more support | For advanced learners |
|-------------------------------------|----------------------|
| Focus only on the Classical KID (4...Bg7 5...d6 6...e5) | Study the Sämisch and Averbakh (6.Be2 e5 7.d5) systems |
| Use the "KID triangle" mnemonic (g6/Bg7/d6/e5) | Analyze Kasparov's KID games in depth |
| Pair with a partner to practice the kingside attack | Investigate the Benoni transposition from the KID |

---

## Teacher Reflection

- [ ] Did learners understand the hypermodern idea of allowing the center?
- [ ] Was the "hidden bishop" metaphor engaging?
- [ ] Could learners distinguish between KID and Grünfeld?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

| Framework | Strand | Level |
|-----------|--------|-------|
| USCF / FIDE | Opening | 1400–2200 |
| Chess.com Lessons | Openings | Intermediate–Advanced |
| Skill Tier | Rook | Rook Tier progression |
