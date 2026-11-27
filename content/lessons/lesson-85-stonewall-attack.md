# Lesson Plan 85: The Stonewall Attack

> *Chess Scholar Volume 2: The Opening Encyclopedia — Module 4: Closed Games (1.d4 d5)*

---

# Lesson Plan 85: The Stonewall Attack

**Module Reference:** Prompt 85 — lesson-85-stonewall-attack.md  
**Duration:** 60 min  
**Age Group:** 10–12  
**Chess Skill Level:** ♗ Bishop Tier  
**Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the Stonewall Attack through move 8 for both White and Black.
2. **Explain** the fixed pawn chain (f4/e3/d4) and the kingside attack plan.
3. **Value** commitment — understanding that committing to a plan fully is better than half-measures.

## Key Inquiry Question

> How does the Stonewall's rigid pawn structure become a launching pad for kingside attacks — and why is rigidity sometimes a strength?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or printed notation sheets
- Printed diagrams of the Stonewall pawn structure
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Stonewall Attack entry

---

## Chess Persona: The Pawn

**Piece:** ♙ Pawn  
**Value:** 1 point  
**Movement:** One square forward (two on first move), diagonal capture  
**Persona Trait:** Rigid but Powerful  
**Why this piece?** The Stonewall Attack is defined by its pawn triangle on f4, e3, and d4 — a rigid, fixed structure that looks like a wall. Like Pawns locked in place, the Stonewall seems immobile, but it provides a rock-solid base for a kingside pawn storm. The Pawn teaches us that sometimes standing firm is more powerful than advancing.  
**Historical Note:** The Stonewall is actually the Dutch Defense reversed — White copies Black's Dutch setup. It was popular in the early 20th century among club players who wanted a simple attacking system. Today it is less common at the top level but remains a favorite in rapid and blitz.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show the position after 1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4. Ask: "White has built a triangle of pawns on f4, e3, and d4. They can't move backward or sideways. Is this a bad structure?"

- *Why would White lock their own pawns?* — To build an unshakable center and prepare a kingside attack.
- *What is White's attack plan?* — Push g4, h4, and maybe even sacrifice on h7.
- *Can Black exploit the rigid pawns?* — Yes! Black can play ...cxd4, opening the c-file, or attack the e3 weakness with ...Ne4 and ...Bd6.

Explain: *Today we'll learn the Stonewall Attack using the Pawn as our guide — a rigid wall that hides a battering ram.*

### Step 1: Opening Identity — The Stonewall Story (15 min)

**Origin Story:**
The Stonewall Attack is essentially the Dutch Defense in reverse. In the Dutch, Black plays ...f5, ...e6, and ...d6 to build a kingside attack. The Stonewall copies this idea for White: f4, e3, d4, with Bd3 and Nf3 supporting. The opening was popular in the early 1900s among attacking players who wanted to avoid deep opening theory. It fell out of favor at the top level because Black's ...c5/...cxd4 break is effective, but it remains a dangerous club weapon.

**Famous Practitioners:**
- **Savielly Tartakower** — experimented with Stonewall structures in the 1920s and 1930s
- **Rudolf Spielmann** — an attacking master who loved fixed-pawn attacking systems
- **Simon Williams** — modern GM who champions the Dutch and respects the Stonewall as its mirror
- **Judit Polgár** — used Stonewall-like structures in rapid games to go straight for the king

**Key Position Diagram — The Stonewall Structure:**
After 1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4 Bg4 6.Nf3 e6 7.Nbd2 Bd6 8.O-O O-O, White has the Stonewall triangle in place. The dark-squared bishop is outside the chain on d3, and the plan is ...Qe1-h4, g4, h4, and maybe sacrifices on h7.

```
8  r . b q k . r
7  p p p . . p p p
6  . . n b p n . .
5  . . p p . . . .
4  . . . . P . . .
3  . . P B . N . .
2  P P N P . P P P
1  R . . Q . R K
   a b c d e f g h
```

### Step 2: Core Ideas — Strategic Goals for Both Sides (10 min)

**Strategic Goal:**
- **White:** Build the f4-e3-d4 triangle, place the dark-squared bishop on d3 (outside the chain), and launch a kingside attack with Qf3/h4, g4, and h4. The fixed center allows White to ignore the center and focus on mating Black.
- **Black:** Exploit the rigidity by opening lines with ...cxd4, targeting the e3 weakness, or posting a knight on e4. Black can also exchange dark-squared bishops to reduce White's attacking potential.

**Typical Middlegame Plans:**
- **White:** Qe1-h4 (or Qf3), Nbd2-f1-g3, g4-g5, h4-h5. Sometimes Bxh7+ sacrifices.
- **Black:** ...cxd4 (opening the c-file), ...Ne4 (attacking e3 and the bishop on d3), ...Qb6 (pressuring b2), or ...Bd6 (trading the dark-squared bishops).

**Common Endgames:**
- Stonewall endgames are rare — the opening is all about the middlegame attack.
- If the attack fails, White's rigid pawn structure and weak e3 square can become long-term liabilities.
- Black often has the better endgame if they survive the attack.

### Step 3: Critical Lines — Main Line, Deviation, and Trap (10 min)

**Main Line — Standard Stonewall:**
```
1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4 Bg4 6.Nf3 e6 7.Nbd2 Bd6 8.O-O O-O
```
White has the Stonewall structure and prepares Qe1-h4 or Qf3 with a kingside attack.

**Deviation — The Staunton Gambit Hybrid:**
```
1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4 c4 6.Bc2 b5
```
Black plays ...c4 early, locking the queenside. White must adapt and may play for e4 breaks instead of the pure Stonewall attack.

**Common Trap — The e3 Weakness Trap:**
```
1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4 Bg4 6.Nf3 e6 7.Nbd2 cxd4 8.exd4 Bd6 9.O-O Ne4
```
Black plays ...Ne4, hitting the weak e3 pawn. If White plays 10.Qe1, Black can play ...Qb6 with pressure on b2 and e3. Moral: the Stonewall's rigidity creates targets — White must be careful not to fall behind in development.

### Step 4: PGN Study — Famous Game (10 min)

```pgn
[Event "Simul"]
[Site "Netherlands"]
[Date "1933.??.??"]
[White "Colle, Edgard"]
[Black "Unknown"]
[Result "1-0"]
[Opening "Stonewall Attack"]

1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4 Bg4 6.Nf3 e6 7.Nbd2 Bd6 8.O-O O-O
9.Qe1 cxd4 10.cxd4 Nb4 11.Bb1 Qc7 12.Qh4 h6 13.Ne5 Be7 14.Nxg4 Nxg4 15.Qxg4
Nf6 16.Qh4 Ne4 17.Nxe4 dxe4 18.Bxh6 gxh6 19.Qxh6 f5 20.Bxe4 Rf6 21.Qh7+ Kf7
22.g4 Qd8 23.g5 Rh6 24.g6+ Rxg6+ 25.Bxg6+ Kxg6 26.Qxg7+ Kh5 27.Qh7+ Kg4
28.Qg6+ Kh3 29.Qg3# 1-0
```

*Colle himself demonstrates the classic Stonewall attack: build the triangle, transfer the queen to the kingside, and sacrifice on h6 to open lines. The king hunt from h5 to h3 is a model of Stonewall attacking play.*

### Step 5: Practice Drills (10 min)

**Drill 1 — Memorization:**
Set up the Stonewall structure from memory: pawns on f4, e3, d4, c3; bishop on d3; knights on f3 and d2. Practice placing White's pieces in the Stonewall pattern.

**Drill 2 — Recognition:**
Show positions from the Stonewall, London, and Colle. Ask students to identify the Stonewall by its f4-e3-d4 triangle. Then show a position with ...cxd4 — is it still a Stonewall?

**Drill 3 — Decision-making:**
After 1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6, White has a choice: 5.f4 (Stonewall) or 5.Nf3 (Colle). Which opening is more committal, and what does that mean for Black's chances to counterattack?

### Step 6: Sharing & Feedback (5 min)

- **What's working:** "Your Stonewall structure is correctly set up with the triangle and Bd3."
- **One thing to try:** "Consider what happens if Black plays ...Bd6 and offers a bishop trade — should White always keep the dark-squared bishop?"
- **Question:** "When would you choose the Stonewall over the London or Colle?"

---

## Assessment

| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|----------|------------------------|-------------------|------------|--------------|
| Move Knowledge | Cannot recall Stonewall pawns | Recalls with prompting | Recalls Stonewall through move 8 | Recalls deviations and Black's ...c5 plans |
| Strategic Understanding | Cannot explain the triangle | Explains with prompting | Explains kingside attack plan | Explains e3 weakness and how Black exploits it |
| Practical Application | Cannot play the opening | Plays but misses f4 | Plays Stonewall correctly | Adapts when Black plays ...cxd4 early |

---

## Extended Activity

**Stonewall Attack Diary:** Play 3 games as White with the Stonewall Attack. After each game, write: (1) did you achieve the f4-e3-d4 triangle? (2) did you launch a kingside attack? (3) did you win, lose, or draw, and why?

---

## Differentiation

| For learners who need more support | For advanced learners |
|-------------------------------------|----------------------|
| Focus only on the first 6 moves | Study the Dutch Defense (Black's version of the Stonewall) |
| Use color-coded pawns for the triangle | Analyze how Black's ...Ne4 attacks e3 |
| Pair with a partner to trace the attack | Investigate the Staunton Gambit as a hybrid approach |

---

## Teacher Reflection

- [ ] Did learners understand why White builds the f4-e3-d4 triangle?
- [ ] Was the "rigid but powerful" metaphor engaging?
- [ ] Could learners distinguish between Stonewall, Colle, and London?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

| Framework | Strand | Level |
|-----------|--------|-------|
| USCF / FIDE | Opening | 800–1400 |
| Chess.com Lessons | Openings | Beginner–Intermediate |
| Skill Tier | Bishop | Bishop Tier progression |
