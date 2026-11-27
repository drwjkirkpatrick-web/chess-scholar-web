# Lesson Plan 83: The London System

> *Chess Scholar Volume 2: The Opening Encyclopedia — Module 4: Closed Games (1.d4 d5)*

---

# Lesson Plan 83: The London System

**Module Reference:** Prompt 83 — lesson-83-london-system.md  
**Duration:** 60 min  
**Age Group:** 10–12  
**Chess Skill Level:** ♗ Bishop Tier  
**Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the London System through move 8 for both White and Black.
2. **Explain** why the London is popular with beginners and professionals alike — its universal setup and easy-to-learn plans.
3. **Value** consistency — understanding that a reliable opening builds confidence and frees mental energy for middlegame play.

## Key Inquiry Question

> How does the London System's simple setup work against almost anything Black plays — and why do some players call it "boring" while others call it "bulletproof"?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or printed notation sheets
- Printed diagrams of the London setup
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — London System entry

---

## Chess Persona: The Bishop

**Piece:** ♗ Bishop  
**Value:** 3 points  
**Movement:** Diagonally any number of squares  
**Persona Trait:** Universal and Reliable  
**Why this piece?** The London System is named after its signature move: Bf4. The bishop on f4 is the soul of the opening — solid, reliable, and always ready to support the center. Like the Bishop, the London System stays on its color, does its job quietly, and never lets you down.  
**Historical Note:** The London System gets its name from a tournament in London in 1922 where several masters employed it. It was considered somewhat old-fashioned until the 2010s, when elite players like Gata Kamsky and later Magnus Carlsen and Levon Aronian revived it as a dangerous surprise weapon.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Ask students: "What if I told you there is an opening where White plays the same moves almost every time, no matter what Black does? Is that lazy or genius?" Reveal the London System: 1.d4 d5 2.Bf4. The bishop goes to f4 before the knight even moves.

- *Why does White play Bf4 so early?* — To control e5 and support d4 before developing the knight.
- *Can Black stop this plan?* — Black can play ...Nf6, ...e6, ...c5, but White still gets a solid position.
- *Why do people call it "boring"?* — Because the games can be slow and positional, not full of wild tactics.

Explain: *Today we'll learn the London System using the Bishop as our guide — a quiet, reliable, and surprisingly dangerous piece.*

### Step 1: Opening Identity — The London Story (15 min)

**Origin Story:**
The London System was first played in the 19th century but gained its name at the 1922 London tournament. For decades it was seen as a "system" for players who didn't want to study opening theory. That changed in the 2010s when elite grandmasters realized the London's simple setup could lead to dangerous kingside attacks. Today it is one of the most popular openings at all levels.

**Famous Practitioners:**
- **Gata Kamsky** — revived the London at the highest level with aggressive e4/e5 pawn breaks
- **Magnus Carlsen** — has used the London to win rapid and blitz games with devastating effect
- **Levon Aronian** — plays a creative, attacking version of the London with early Nf3, e3, Bd3, Nd2
- **Simon Williams ("GingerGM")** — popularized the London through YouTube and showed its attacking potential

**Key Position Diagram — The London Setup:**
After 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 c5 5.c3 Nc6 6.Nbd2 Be7 7.h3 O-O 8.Bd3, White has the classic London structure: pawns on c3/d4/e3, bishop on d3, other bishop on f4, knights on f3/d2. The plan: play Ne5, support with f3/g4, and attack on the kingside.

```
8  r . b q . r k
7  p p . p b p p
6  . . n . n . .
5  . . p p . . .
4  . . . . B . .
3  . . P . N P .
2  P P . P P . P
1  R . . Q . R K
   a b c d e f g h
```

### Step 2: Core Ideas — Strategic Goals for Both Sides (10 min)

**Strategic Goal:**
- **White:** Build a solid, harmonious setup with pawns on c3/d4/e3, bishops on d3 and f4, knights on f3 and d2. Then expand on the kingside with e4 or Ne5/f4/g4.
- **Black:** Challenge White's passive setup with ...c5, ...Qb6, or ...Nc6. Aim to prove that White's "system" is too slow by creating active piece play.

**Typical Middlegame Plans:**
- **White:** Play Ne5, support with f3, then g4 and h4 to build a kingside pawn storm. Sometimes White plays c4 to challenge the center.
- **Black:** Play ...Qb6 to pressure b2, ...Ne4 to trade pieces, or ...b5/...c4 to gain queenside space.

**Common Endgames:**
- London endgames tend to be quiet and positional. White's bishop pair is a key asset.
- If Black can trade the dark-squared bishops, White's kingside attack is harder to achieve.
- Minor piece endgames favor White if the bishops remain; Black prefers knight+bishop vs. bishop pair.

### Step 3: Critical Lines — Main Line, Deviation, and Trap (10 min)

**Main Line — Standard London:**
```
1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 c5 5.c3 Nc6 6.Nbd2 Be7 7.Bd3 O-O 8.O-O
```
White has a comfortable position and prepares Ne5 or Re1 with e4.

**Deviation — The Jobava London (2.Nc3 / early Qb3):**
```
1.d4 d5 2.Bf4 Nf6 3.Nc3 c5 4.e3 Nc6 5.Nb5 e5 6.dxe5 Ne4 7.f3 Bc5 8.b4
```
This wilder line, associated with Baadur Jobava, involves Nc3 and early Qb3, leading to very sharp and unusual positions.

**Common Trap — The ...Qb6 Pin Trap:**
```
1.d4 d5 2.Bf4 c5 3.e3 Nc6 4.Nf3 Qb6 5.Nbd2 Qxb2?? 6.Rb1 Qa3 7.Bc7
```
Black grabs the b2-pawn greedily, but White traps the queen with Rb1 and Bc7. Moral: never take a pawn in the opening without checking if the queen can be trapped.

### Step 4: PGN Study — Famous Game (10 min)

```pgn
[Event "Tata Steel Rapid"]
[Site "Kolkata IND"]
[Date "2018.11.10"]
[Round "6"]
[White "Carlsen, Magnus"]
[Black "Mamedyarov, Shakhriyar"]
[Result "1-0"]
[Opening "London System"]

1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Bd6 5.Nbd2 Bxf4 6.exf4 O-O 7.Bd3 c5 8.dxc5
Qc7 9.g3 Qxc5 10.O-O Nc6 11.Nb3 Qd6 12.Qe2 b6 13.Rfd1 Bb7 14.Be4 Rac8 15.c3
Rfd8 16.Rac1 h6 17.Nbd4 Nxd4 18.Nxd4 Qc5 19.Bd3 Nd7 20.Qe3 Qd6 21.Qe2 Qc5
22.Be4 Nf6 23.Bb7 Rc7 24.Be4 Rcc8 25.b4 Qc7 26.Qb2 Nxe4 27.Qxe4 Rxd4 28.cxd4
Qxc1 29.Rxc1 Rxc1+ 30.Kg2 Rc2 31.Qe5 f6 32.Qe3 Rxa2 33.h4 Bc8 34.g4 Kf7 35.g5
hxg5 36.hxg5 fxg5 37.Qxg5 Rb2 38.Qf4+ Ke7 39.Qg5+ Kf7 40.Qf4+ Ke7 41.Qg5+ Kf7
42.Qh5+ Ke7 43.Qxg5+ Kd7 44.Qf4 Rb1 45.Qf7+ Kd6 46.Qxg8 Rxb4 47.Qf8+ Kc6
48.Qc8+ Kb5 49.Qxc8 Rxd4 50.Qxe6 Kc5 51.Qf5+ Kc6 52.Qf6+ Kc5 53.Qf5+ Kc6
54.Qf6+ Kc5 55.f5 b5 56.f6 b4 57.f7 Rf4 58.Qe5+ Kc6 59.Qe8+ Kc5 60.f8=Q
1-0
```

*Carlsen shows that even in a "boring" London, the World Champion can grind out a win by transforming the position and outplaying his opponent in a complex endgame.*

### Step 5: Practice Drills (10 min)

**Drill 1 — Memorization:**
Set up the London System position from memory after 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 c5 5.c3 Nc6 6.Nbd2 Be7 7.Bd3 O-O 8.O-O.

**Drill 2 — Recognition:**
Show positions from the London, Queen's Gambit, and Colle System. Ask students to identify which is which based on bishop placement (Bf4 vs. Bg5 vs. Bf4 on d3).

**Drill 3 — Decision-making:**
After 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3, Black plays 4...c5. Should White play 5.c3 (solid) or 5.dxc5 (open)? Discuss the character of each choice.

### Step 6: Sharing & Feedback (5 min)

- **What's working:** "Your London setup shows excellent understanding of the Bf4/Bd3 coordination."
- **One thing to try:** "Consider how Black might try to make your bishop on f4 'bad' by playing ...Nh5."
- **Question:** "When would you choose the London over the Queen's Gambit?"

---

## Assessment

| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|----------|------------------------|-------------------|------------|--------------|
| Move Knowledge | Cannot recall first 3 moves | Recalls with prompting | Recalls London through move 8 | Recalls Jobava and standard lines |
| Strategic Understanding | Cannot explain Bf4 idea | Explains with prompting | Explains solid setup + kingside plan | Explains how Black challenges the London |
| Practical Application | Cannot play the opening | Plays but forgets c3/e3 | Plays London correctly from either side | Adapts setup based on Black's replies |

---

## Extended Activity

**London Repertoire Builder:** Play 5 games as White using only the London System. Record your moves and note whether you achieved the Bf4/Bd3/Nf3/Nd2 setup. After each game, identify one moment where knowing the system helped you.

---

## Differentiation

| For learners who need more support | For advanced learners |
|-------------------------------------|----------------------|
| Use a fixed move order: 1.d4 2.Bf4 3.e3 4.Nf3 5.c3 | Study the Jobava London (2.Nc3) and compare |
| Focus only on the standard setup | Analyze how Black can play ...Ne4 to challenge Bf4 |
| Pair with a partner for move repetition | Investigate the Queen's Indian setup against the London |

---

## Teacher Reflection

- [ ] Did learners understand why Bf4 is played before Nf3?
- [ ] Was the Bishop persona engaging? Did they connect it to reliability?
- [ ] Could learners set up the London position from memory?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

| Framework | Strand | Level |
|-----------|--------|-------|
| USCF / FIDE | Opening | 800–1600 |
| Chess.com Lessons | Openings | Beginner–Intermediate |
| Skill Tier | Bishop | Bishop Tier progression |
