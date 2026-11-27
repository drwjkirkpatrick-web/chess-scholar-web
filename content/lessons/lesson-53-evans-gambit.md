# Lesson Plan 53: The Evans Gambit

> **Module Reference:** Prompt 53 — lesson-53-evans-gambit.md
> **Duration:** 70 min
> **Age Group:** 10-12
> **Chess Skill Level:** ♘ Knight Tier
> **Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the Evans Gambit accepted and declined through move 8.
2. **Calculate** the compensation White gets for the sacrificed pawn — rapid development, open lines, and initiative.
3. **Value** courage — understanding that giving up a pawn for rapid development is a valid and historically celebrated strategy.

## Key Inquiry Question

> Why would White give away a pawn on move 4 — and how does the Evans Gambit turn opening theory into an adventure?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or analysis board
- Printed diagram of Evans Gambit accepted position
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `OPENINGS-CURRICULUM.md` — Open Games (1.e4 e5) entry

---

## Chess Persona: The Knight

**Piece:** Knight ♘  
**Value:** 3  
**Movement:** L-shape (2 squares in one direction, 1 in the other); can jump over pieces  
**Persona Trait:** Romantic Aggression  
**Why this piece?** The Evans Gambit is like the Knight's leap — bold, surprising, and seemingly reckless, yet landing exactly where it needs to be. This opening sacrifices material for rapid piece activity, just as the knight sacrifices straight-line control for creative, unexpected power.  
**Historical Note:** The Evans Gambit was named after Captain William Davies Evans, a Welsh sea captain who first played it in 1824. Evans reportedly invented the gambit during a sea voyage to surprise his opponents — fitting for an opening that relies on shock and speed.

---

## Opening Identity

### Origin Story
The Evans Gambit arises after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4. On move 4, White sacrifices a pawn to lure Black's bishop away from the center and seize the initiative. If Black accepts (4...Bxb4), White plays c3 and d4, building a massive central pawn front while Black's pieces scramble to catch up in development. If Black declines (4...Bb6), White has gained a tempo and space for free.

### Famous Practitioners
- **Captain Evans (1790–1872):** The inventor and namesake, an amateur who created one of the most enduring gambits in chess.
- **Adolf Anderssen (1818–1879):** The "Immortal Game" hero who used the Evans Gambit to fuel his brilliant attacking style.
- **Garry Kasparov (b. 1963):** In 1995, Kasparov played the Evans Gambit against Anand in a serious game — proving that even in the computer age, this 19th-century weapon still bites.
- **Bobby Fischer:** Fischer analyzed the Evans Gambit extensively and called it one of the best gambits available to White.

### Key Position Diagram (Evans Gambit Accepted)
```
8 | r . b q k b n r
7 | p p p p . p p p
6 | . . n . . . . .
5 | . . . . p . . .
4 | . b . . P . . .
3 | . . . . . N . .
2 | P P P P . P P P
1 | R N B Q K . N R
    a b c d e f g h

After 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 — White has sacrificed a pawn.
```

---

## Core Ideas

### Strategic Goal
White **sacrifices a pawn** to gain **three things**: (1) a lead in development, (2) control of the center with c3 and d4, and (3) open lines for rapid attack. Black's goal is to **survive the storm** — return the extra pawn if necessary, complete development, and reach an endgame where the extra pawn matters.

### Typical Middlegame Plans
- **White:** Play c3 (attacking the bishop), d4 (claiming the center), and develop the queen's knight to c3. The queen often goes to b3 or a4 to pile pressure on f7. White's rooks will find open files quickly.
- **Black (if accepted):** The bishop on b4 is exposed. Black should consider ...Ba5 to retreat, or ...Bc5 to return to safety. Black must develop quickly with ...Nf6, ...d6, and castle. Holding onto the pawn with ...b5 or ...a5 is dangerous — development is more important than material.
- **Black (if declined):** After 4...Bb6, White plays a2-a4 and a4-a5 to chase the bishop, gaining space and time.

### Common Endgames
If White's attack fails, Black may emerge with an extra pawn in an endgame. However, if White succeeds, the game often ends in the middlegame with a checkmate. The Evans Gambit is not an endgame opening — it is a **middlegame weapon**.

---

## Critical Lines

### Main Line: Evans Gambit Accepted
```
1.e4 e5      2.Nf3 Nc6      3.Bc4 Bc5      4.b4 Bxb4
5.c3 Ba5     (Best retreat — the bishop stays active)
6.d4 exd4    (Black must release tension)
7.O-O        (White has a huge lead in development and open lines)
```
After 7.O-O, White has two pawns in the center (e4 and c3), a lead of 2-3 tempi, and active pieces. Black must be extremely careful.

### Deviation/Sideline: Evans Gambit Declined (4...Bb6)
```
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bb6
5.a4 a6      (White gains space; Black prevents a5)
6.Nc3 Nf6 7.d3 d6
```
White has gained space and a tempo without sacrificing material. The position is quieter but still favors White slightly.

### Common Trap: The Lolli Variation
```
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O dxc3
8.Qb3!     (Double attack on f7 and b4 — Black's position collapses)
```
If Black greedily takes a second pawn on c3, White's queen to b3 creates a devastating attack.

---

## PGN Study: Famous Game

```pgn
[Event "Immortal Game"]
[Site "London"]
[Date "1851.06.21"]
[White "Anderssen, Adolf"]
[Black "Kieseritzky, Lionel"]
[Result "1-0"]

1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3
8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6
14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6 Rg8
19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8
24.Bxe7#
1-0
```
**Analysis:** While not a pure Evans Gambit, Anderssen's Immortal Game shows the same spirit — sacrificing everything for open lines and a checkmate. In true Evans style, material means nothing compared to a lead in development.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Ask students: "Would you trade a pawn for three extra moves of development? What if it meant your opponent's king might not survive to the endgame?"

- If you give away a pawn on move 4, are you losing? *(Not necessarily — you gain time, space, and initiative.)*
- What does it mean to have the "initiative"? *(You are forcing your opponent to react to your threats instead of making their own plans.)*
- Can you name another opening where one side sacrifices a pawn? *(The King's Gambit — also a 1.e4 e5 opening.)*

Explain: *Today we study the Evans Gambit — an opening where White gives away a pawn on purpose. It was invented by a sea captain in 1824 and is still played by grandmasters today. Why? Because development is worth more than a pawn if you know how to use it.*

### Step 1: Concept Introduction — The Gambit Idea (15-20 min)

Set up the Evans Gambit position: 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4.

**Key teaching point:** A gambit is a voluntary sacrifice of material (usually a pawn) for compensation in development, space, or initiative.

Show both responses:
1. **4...Bxb4 (Accepted):** Black takes the pawn. White now has open lines and a chance to build a center with c3 and d4.
2. **4...Bb6 (Declined):** Black retreats. White has gained a tempo (Black moved the bishop twice) and space.

Discuss the compensation:
- White's c3 pawn attacks the bishop
- White's d4 pawn will claim the center
- Black's bishop on a5 or b6 is awkwardly placed
- White's pieces will flow out faster than Black's

Have students physically remove the b4 pawn when Black takes it, then watch White rebuild the center with c3 and d4. This tactile experience makes the gambit concrete.

### Step 2: Guided Practice — Gambit Accepted Drill (15-20 min)

**Activity:** "The Evans Experiment." In pairs, students play 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4. Then pause and evaluate.

```
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O
```

[Checklist for students:]
- [ ] Play the Evans Gambit accepted through move 7
- [ ] Count how many tempi (moves of development) each side has
- [ ] Identify White's open files and diagonals
- [ ] Suggest where Black's knight should go (...Nf6? ...Nge7?)
- [ ] Decide: is the extra pawn worth the lag in development?

**Key teaching point:** In gambit play, the side with the extra pawn is usually behind in development. The defender must catch up quickly or the attacker will crash through.

### Step 3: Independent Practice — Gambit or Not? (10-15 min)

**Challenge:** Students analyze three positions and decide whether the gambit was correct:

|| Position | Is the gambit justified? | Why? |
||----------|-------------------------|------|
|| A: White has 3 pieces out, Black has 1, White is down a pawn | Yes | Development lead is huge |
|| B: Both sides have equal development, White is down a pawn | No | No compensation for the pawn |
|| C: White has open lines but Black has castled safely | Maybe | Depends on White's attack |

[Student checklist:]
- [ ] Explain what compensation means in a gambit
- [ ] Play the Evans accepted from memory through move 7
- [ ] Explain why ...Bb6 is safer than ...Bxb4 for Black
- [ ] Evaluate a gambit position using development, king safety, and open lines

### Step 4: Sharing & Feedback (5-10 min)

Pairs share their evaluations and practice the main line together.

Use the critique framework:
- **What's working:** "Your d4 pawn controls the center and your pieces are ready to jump out. That's perfect Evans Gambit play."
- **One thing to try:** "Instead of 5...Ba5, try 5...Bc5 — it comes back to defend faster."
- **Question:** "If Black had declined with 4...Bb6, how would your plan change?"

---

## Assessment

|| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Move Knowledge | Cannot recall 4.b4 | Recalls with prompting through move 5 | Recalls Evans accepted/declined independently through move 8 | Recalls Lolli trap and explains it |
|| Strategic Understanding | Cannot explain gambit compensation | Explains "pawn for development" | Explains initiative, open lines, and development independently | Evaluates whether a gambit is sound in a new position |
|| Practical Application | Cannot play Evans without help | Plays but mixes up accepted/declined | Plays Evans correctly for both sides and both replies | Adapts when opponent deviates (e.g., ...Bc5 instead of ...Bxb4) |

---

## Extended Activity

**"Gambit Collector":** Students research one other famous gambit (King's Gambit, Queen's Gambit, Budapest Gambit) and write 3 sentences comparing it to the Evans Gambit. What is sacrificed, and what is gained?

---

## Differentiation

|| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Focus only on the declined variation (safer) | Analyze the Anderssen Immortal Game move by move |
|| Use a point system: count White's developed pieces vs. Black's | Compare Evans to the Morphy vs. Duke Opera Game (also an Italian) |
|| Practice the first 5 moves with a partner only | Explore what happens if Black plays ...d6 instead of ...exd4 |

---

## Teacher Reflection

- [ ] Did learners understand that a gambit is not just losing a pawn — it is an investment?
- [ ] Was the Knight persona effective in connecting bold, creative movement to the opening?
- [ ] Could learners explain why the Evans Gambit is still played after 200 years?
- [ ] What would I change next time — should I spend more time on the declined variation?

---

## Elo & Skill Cross-Reference

|| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Opening | 600–1000 |
|| Chess.com Lessons | Openings | Intermediate |
|| Skill Tier | Knight Tier | Pawn → King progression |
