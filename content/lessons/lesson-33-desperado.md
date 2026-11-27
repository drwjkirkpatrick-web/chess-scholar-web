# Lesson Plan 33: Advanced Tactics: Desperado

> **Module Reference:** Prompt 33 — lesson-33-desperado.md
> **Duration:** 80 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♖ Rook Tier (1200–1600)
> **Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** when a doomed piece can capture something on its way out.
2. **Calculate** a desperado sequence that minimizes losses.
3. **Value** resilience — understanding that even a losing piece can fight back before it falls.

## Key Inquiry Question

> What can a doomed piece do before it falls — and how do you make your last move count?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Analysis engine (Stockfish via lichess.org/analysis)
- Printed diagrams of desperado positions
- Optional: Raspberry Pi with browser for low-resource settings

---

## Chess Persona: The Bishop

**Piece:** Bishop  
**Value:** 3 points  
**Movement:** Diagonals — any number of squares along diagonals  
**Persona Trait:** Going Down Swinging  
**Why this piece?** The Bishop is often trapped, pinned, or attacked with no escape. But before it falls, the Bishop can often capture something — a pawn, a knight, or even a rook — making its final moments devastating. The desperado spirit is the Bishop's last stand: when there's no escape, make your final act meaningful.  
**Historical Note:** The term "desperado" in chess comes from the Spanish word for a reckless adventurer. In the 19th century, romantic players like Adolf Anderssen often played "immortal" games where pieces were sacrificed not because they were winning, but because they were going down anyway — and the chaos that followed was worth more than the piece. The desperado captures this spirit: when your piece is lost, maximize its final move.

---

## Lesson Development

### Introduction (10 min)

**Hook:** Set up a position where a piece is trapped. Ask: "This knight is trapped. Should you just let it die?" Show that the trapped piece can capture a queen on its way out.

*Hook questions:*
- "If your piece is definitely going to be captured, should you just accept it?" *—No! If it's going down anyway, make it take something with it.*
- "What's the difference between a desperado and a normal capture?" *—A desperado happens when your piece is ALREADY doomed. You're not saving it — you're maximizing its last move.*
- "Can a desperado turn a losing position into a draw or even a win?" *—Yes! Sometimes the chaos from a desperado creates unexpected chances.*

Explain: *Today we learn the desperado — the art of making a doomed piece's final move count. The Bishop is our guide: when trapped, go down swinging.*

### Step 1: Concept Introduction — What is Desperado? (20 min)

**Definition:** A desperado is a tactic where a piece that is doomed (about to be captured with no escape) makes a capture or creates a threat before it is taken, often changing the outcome of the sequence.

**Example 1: Trapped Piece Takes Something**

```
White: Bc4, Nf3, O-O
Black: Be7, Nf6, O-O

Black's knight on f6 is attacked by White's bishop and has no safe square.
Instead of retreating (which loses the knight anyway), Black plays:
1...Nxe4! (desperado — the knight is doomed, so it captures a pawn first)
2. Bxe7 Nxf6+ (the knight checks on the way out!)
3. Bxf6 Nxe7 (Black has minimized the loss)
```

**Example 2: Desperado in a Trap**

```
White: Qd1, Bc4, Nf3
Black: Qd8, Be7, Nf6

White's bishop on c4 is trapped by ...d5.
Instead of retreating, White plays:
1. Bxf7+! (desperado — the bishop is trapped, so it gives check first)
1...Kxf7 2. Nxe5+ (forking king and queen!)
2...Ke8 3. Nxc6 (White has won a pawn and the initiative)
```

**Example 3: Desperado in a Complicated Sequence**

```
White: Qd1, Bc4, Nf3, Ng5
Black: Qd8, Be7, Nf6

Black's knight on f6 is attacked by the bishop and the knight.
Black plays 1...Nxe4! (desperado)
2. Nxe4 (White captures)
2...d5! (Black attacks both the bishop and the knight)
3. Bd3 dxe4 (Black has turned a lost piece into a strong central pawn)
```

**Key teaching point:** The desperado is not about saving the piece — it's about making the piece's last move as damaging as possible. Ask: "If this piece is going down anyway, what can it capture or threaten before it falls?"

[Student checklist:]
- [ ] I understand what a desperado is
- [ ] I can identify when a piece is doomed with no escape
- [ ] I know to look for a capture or threat before the piece falls

### Step 2: Guided Practice — Finding the Desperado (20 min)

**Position 1:**

```
White: Bc4, Nf3, O-O
Black: Be7, Nf6, O-O

White's bishop on c4 is trapped after ...d5.
Students must find the desperado.

Answer: 1. Bxf7+! Kxf7 2. Nxe5+ (fork)
```

**Position 2:**

```
White: Qd1, Bc4, Nf3
Black: Qd8, Be7, Nf6

Black's knight on f6 is attacked by White's bishop and queen.
Students find the desperado.

Answer: 1...Nxe4! (capturing the pawn before the knight falls)
2. Nxe4 d5 (attacking the bishop and knight)
```

**Position 3:**

```
White: Rd1, Bc4, Nf3
Black: Rd8, Be7, Nf6

White's rook on d1 is attacked by Black's queen.
Students find the desperado.

Answer: 1. Rxd7! (desperado — the rook is doomed, so it takes a pawn first)
1...Qxd7 2. Bxf7+ (now the bishop gives check, forking king and queen)
```

[Checklist for students:]
- [ ] I found the desperado in Position 1
- [ ] I found the desperado in Position 2
- [ ] I found the desperado in Position 3

### Step 3: Independent Practice — Desperado Challenge (20 min)

**Challenge:** Students receive 5 positions where a piece is doomed. They must find the desperado move.

**Position 1:**
```
White: Bc4, Nf3, O-O
Black: Be7, Nf6, O-O

White's bishop is trapped.

Answer: 1. Bxf7+! Kxf7 2. Nxe5+
```

**Position 2:**
```
White: Qd1, Bc4, Nf3
Black: Qd8, Be7, Nf6

Black's knight is trapped.

Answer: 1...Nxe4! 2. Nxe4 d5
```

**Position 3:**
```
White: Rd1, Bc4, Nf3
Black: Rd8, Be7, Nf6

White's rook is trapped.

Answer: 1. Rxd7! Qxd7 2. Bxf7+
```

**Position 4:**
```
White: Qd1, Bc4, Nf3, Ng5
Black: Qd8, Be7, Nf6

Black's knight is trapped by the bishop and knight.

Answer: 1...Nxe4! 2. Nxe4 d5 3. Bd3 dxe4
```

**Position 5:**
```
White: Bc4, Nf3, O-O
Black: Be7, Nf6, O-O

White's bishop is trapped.

Answer: 1. Bxf7+! Kxf7 2. Ng5+ (forking king and queen)
```

||| Position | Success Metric |
|||------------------------|------------------|
|| Trapped bishop | Found check desperado |
|| Trapped knight | Found capture desperado |
|| Trapped rook | Found exchange desperado |

[Student checklist:]
- [ ] I found the desperado in at least 3 of 5 positions
- [ ] I explained why the desperado was better than letting the piece fall
- [ ] I used the analysis engine to verify my answers

### Step 4: Sharing & Feedback (10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your desperado in Position 5 was brilliant — you turned a trapped bishop into a winning attack."
- **One thing to try:** "When you see a piece is trapped, don't immediately retreat. Ask: 'What can it do on the way out?' That one question will save you many points."
- **Question:** "Can a desperado ever be wrong? When should you NOT play a desperado?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Identify Desperado | Cannot see desperado chances | Finds with prompting | Finds independently | Finds in non-obvious positions |
|| Calculate Consequences | Cannot calculate after desperado | Calculates 1-2 moves | Calculates 3+ moves | Evaluates if desperado is best |
|| Board/Tool Use | Cannot verify with engine | Basic verification | Verifies and explains | Uses engine to compare alternatives |

---

## Extended Activity

**Desperado Journal:** Review 5 of your own games. For each, find a moment where a piece was trapped and ask: "Could I have played a desperado?" Write the position and what you would do differently.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Start with obvious trapped pieces | Study Anderssen's "Immortal Game" for multiple desperado examples |
|| Provide the hint "the piece is trapped — what can it capture?" | Create original positions with hidden desperado opportunities |
|| Use only positions with 1 clear desperado | Analyze master games for desperado moments |

---

## Teacher Reflection

- [ ] Did learners understand the concept of desperado?
- [ ] Was the Bishop persona (going down swinging, resilience) engaging? Did they connect it to the tactical concept?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Tactics | 1200–1600 |
|| Chess.com Lessons | Tactics | Intermediate |
|| Skill Tier | Rook Tier | Rook Tier (Lessons 31–40) |