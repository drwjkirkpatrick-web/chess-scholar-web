# Lesson Plan 55: The Fried Liver Attack

> **Module Reference:** Prompt 55 — lesson-55-fried-liver-attack.md
> **Duration:** 70 min
> **Age Group:** 10-12
> **Chess Skill Level:** ♘ Knight Tier
> **Tool:** Physical board + PGN viewer

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Execute** the Fried Liver Attack against the Two Knights Defense.
2. **Defend** against the Fried Liver using the Traxler or ...Na5 lines.
3. **Value** calculation — understanding that sharp attacks require precise defense.

## Key Inquiry Question

> Is the Fried Liver Attack a brilliant trap or a reckless gamble — and how do you survive it as Black?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer or analysis board
- Printed diagram of the Fried Liver position after 6.Nxf7
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `OPENINGS-CURRICULUM.md` — Open Games (1.e4 e5) entry

---

## Chess Persona: The Knight

**Piece:** Knight ♘  
**Value:** 3  
**Movement:** L-shape; jumps over pieces  
**Persona Trait:** Aggressive Surprise  
**Why this piece?** The Fried Liver Attack is defined by the knight's leap to g5 and then the thunderbolt sacrifice on f7. Like the knight's ability to jump over obstacles and land on unexpected squares, this opening bypasses normal development and strikes directly at the king. It is the ultimate surprise attack.  
**Historical Note:** The name "Fried Liver" comes from a mistranslation of the Italian "Fegatello," meaning "little liver." The idea is that Black's king is cooked like a liver over a fire — a grim but memorable image!

---

## Opening Identity

### Origin Story
The Fried Liver Attack arises after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5?! 6.Nxf7! White sacrifices a knight on f7 to expose the black king. If Black plays accurately, the attack can be refuted — but many players crumble under the pressure. The Fried Liver is one of the most famous attacking patterns in chess and a rite of passage for every young player.

### Famous Practitioners
- **Rudolf Spielmann (1883–1942):** The "Master of Attack" who loved sharp openings like the Fried Liver and showed they could be played at master level.
- **Bobby Fischer:** Fischer analyzed the Fried Liver and considered it dangerous enough that he avoided the Two Knights Defense as Black.
- **Internet Chess Culture:** The Fried Liver has become legendary in online chess, where it is one of the most feared weapons in blitz and bullet games.
- **Youth Coaches:** Countless coaches teach the Fried Liver as a way to show students the power of development and initiative over material.

### Key Position Diagram (The Fried Liver Sacrifice)
```
8 | r . b q k b . r
7 | p p p p . N p p
6 | . . n . . . . .
5 | . . . n . . . .
4 | . . . . . . B .
3 | . . . . . . . .
2 | P P P P . P P P
1 | R N B Q K . . R
    a b c d e f g h

After 6.Nxf7! — White sacrifices a knight to rip open Black's kingside.
```

---

## Core Ideas

### Strategic Goal
White's goal is **checkmate or winning the queen** by exposing the black king. The sacrifice on f7 destroys Black's pawn shield and activates every white piece. Black's goal is **survival** — return material, block lines, and castle if possible. If Black survives the first 10 moves, they are usually winning because of the extra piece.

### Typical Middlegame Plans
- **White:** After 6.Nxf7 Kxf7 7.Qf3+ Ke6 8.Nc3, White's plan is to bring more pieces to the attack. The queen checks on f3, the knight comes to c3 (attacking d5), and the bishop on c4 supports everything. The rook on f1 may join via f3 or e1.
- **Black:** The king must walk to safety. The best defense is ...Ke6 (not ...Kg8, which loses the rook) followed by ...Ne7 or ...Nd4 to block checks. Black must also develop the bishop on c8 to defend the queen.

### Common Endgames
If Black survives, they are usually **up a knight** and heading for a winning endgame. If White succeeds, the game ends in **checkmate**. The Fried Liver is an all-or-nothing opening — there are few draws.

---

## Critical Lines

### Main Line: The Fried Liver Accepted
```
1.e4 e5      2.Nf3 Nc6      3.Bc4 Nf6      4.Ng5 d5
5.exd5 Nxd5?! (5...Na5 is safer — see below)
6.Nxf7!      Kxf7
7.Qf3+       Ke6
8.Nc3        (White threatens Nxd5 and discovers an attack on the queen)
```
This is the classic Fried Liver. Black's king is on e6, exposed to checks and pins.

### Deviation/Sideline: The Traxler Defense (4...Bc5!)
```
1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 Bc5!
```
Black ignores the threat to f7 and attacks f2. This is the best practical defense for young players because it avoids the Fried Liver entirely and creates wild complications.

### Safe Defense: The Morphy Defense (5...Na5)
```
1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Na5
```
Black gives back the pawn but kicks White's bishop and avoids the Fried Liver entirely. This is the recommended defense for beginners.

---

## PGN Study: Famous Game

```pgn
[Event "Training Game"]
[Site "Internet"]
[Date "2010.??.??"]
[White "Anonymous"]
[Black "Anonymous"]
[Result "1-0"]

1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5 6.Nxf7 Kxf7
7.Qf3+ Ke6 8.Nc3 Nce7 9.d4 c6 10.Bg5 h6 11.Bxe7 Qxe7 12.O-O-O Kd7
13.Rhe1 Qd6 14.dxe5 Nxe5 15.Qf7+ Be7 16.Rxe5 Qxe5 17.Qxg7 Rf8
18.Bf7 Rxf7 19.Qxf7 Qe6+ 20.Qxe6+ Kxe6 21.Ne4
1-0
```
**Analysis:** A typical internet Fried Liver. Black accepts the sacrifice but cannot navigate the complications. White's queen and pieces swarm the exposed king. Notice how every white move is a check, capture, or threat.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show the position after 6.Nxf7 and ask: "Would you sacrifice your knight here? Your opponent would be up a whole knight — but their king would be exposed forever."

- What happens if Black takes the knight on f7? *(The king must move, and White's queen checks forever.)*
- What is the best square for the black king after Kxf7? *(Ke6 — the only square where the king doesn't get mated immediately.)*
- Is the Fried Liver good for White or Black if both play perfectly? *(Black is better — but "if both play perfectly" is a big if!)*

Explain: *Today we study the Fried Liver Attack — one of the most feared weapons in youth chess. We will learn both how to play it as White and how to survive it as Black. Because knowing the trap is the best way to avoid it.*

### Step 1: Concept Introduction — The f7 Sacrifice (15-20 min)

Set up the Fried Liver position: 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5 6.Nxf7.

**Key teaching point:** The square f7 is the weakest in Black's position at the start — defended only by the king. Sacrificing on f7 is a classic pattern in many openings.

Show the forced line after 6...Kxf7 7.Qf3+:
- 7...Ke6 is the only good square (7...Kg8?? 8.Qf7#)
- 8.Nc3 attacks the knight on d5 and threatens discovered checks
- Black's king is a target in the center of the board

Have students physically play through 6.Nxf7 Kxf7 7.Qf3+ Ke6. Ask them to count how many squares the black king controls from e6 (only a few!) and how many white pieces are ready to attack (queen, bishop, soon knight and rooks).

Now show the safe defense: 5...Na5. Explain that giving back the pawn (5...Na5 forces 6.Bb5+ c6 7.dxc6 bxc6) is better than accepting the Fried Liver.

### Step 2: Guided Practice — Fried Liver Survival Drill (15-20 min)

**Activity:** "Survive the Storm." In pairs, students alternate playing White and Black in the Fried Liver.

```
1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5 6.Nxf7 Kxf7 7.Qf3+ Ke6 8.Nc3
```

[Checklist for students:]
- [ ] Play the Fried Liver line through move 8
- [ ] Identify all checks White has in the position after 8.Nc3
- [ ] Find Black's best move: ...Ne7, ...Nd4, or ...Nb4?
- [ ] Explain why 5...Na5 avoids the Fried Liver
- [ ] Switch colors and try to survive as Black

**Key teaching point:** As Black, your first priority is king safety. As White, your first priority is bringing more pieces to the attack. Speed matters more than material.

### Step 3: Independent Practice — Trap or Treat? (10-15 min)

**Challenge:** Students face four positions and decide whether to play the Fried Liver or avoid it:

|| Position | Play Fried Liver? | Why? |
||----------|-------------------|------|
|| 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 | Not yet | Need ...d5 and ...Nxd5 first |
|| 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5 | Yes! | All conditions met |
|| 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Na5 | No | ...Na5 avoids the trap |
|| 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 Bc5 | No | Traxler counterattacks f2 |

[Student checklist:]
- [ ] Play the Fried Liver from White's perspective
- [ ] Defend against it using 5...Na5
- [ ] Identify f7 as the critical weak square in Black's position
- [ ] Explain to a partner why initiative can be worth more than a knight

### Step 4: Sharing & Feedback (5-10 min)

Pairs share their games and discuss what worked.

Use the critique framework:
- **What's working:** "You found the king on e6 and kept checking — that's the Fried Liver spirit."
- **One thing to try:** "After ...Ke6, play Nc3 to attack d5 and open lines for your bishop on c4."
- **Question:** "If Black plays 5...Na5 instead, what is your new plan as White?"

---

## Assessment

|| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Move Knowledge | Cannot recall the sacrifice | Recalls 6.Nxf7 with prompting | Recalls the main line through 8.Nc3 and ...Ke6 | Recalls ...Na5 defense and Traxler counterattack |
|| Strategic Understanding | Cannot explain why f7 is weak | Explains f7 is only defended by the king | Explains initiative vs. material independently | Explains when Fried Liver is sound and when it fails |
|| Practical Application | Cannot play Fried Liver without help | Plays but misses checks after ...Ke6 | Plays Fried Liver correctly as White and survives as Black | Adapts when opponent avoids the line (e.g., ...Na5) |

---

## Extended Activity

**"Fried Liver Detective":** Students play 5 blitz games online or with a partner, starting with 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6. They record how many times the Fried Liver occurred and which side won. They write 2 sentences about whether the Fried Liver is a "real" opening or just a trick.

---

## Differentiation

|| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Focus only on the ...Na5 defense (safer and simpler) | Analyze the computer evaluation of 6.Nxf7 — is it winning for Black? |
|| Practice the first 6 moves only | Explore the Traxler (4...Bc5) as a complete alternative |
|| Use a visual diagram showing all checks after ...Ke6 | Compare Fried Liver to the Lolli Attack and the Ponziani Trap |

---

## Teacher Reflection

- [ ] Did learners understand that the Fried Liver is a high-risk, high-reward weapon?
- [ ] Was the Knight persona effective in connecting the jump to surprise attacks?
- [ ] Could learners defend against the Fried Liver as Black?
- [ ] What would I change next time — should I teach ...Na5 first or the main line first?

---

## Elo & Skill Cross-Reference

|| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Opening | 500–900 |
|| Chess.com Lessons | Openings | Intermediate |
|| Skill Tier | Knight Tier | Pawn → King progression |
