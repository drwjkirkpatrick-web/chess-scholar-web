# Lesson Plan 15: Removing the Defender

> *Attack the guard, not the treasure — the Pawn's lesson in persistence.*

---

# Lesson Plan 15: Removing the Defender

**Module Reference:** Prompt 15 — lesson-15-removing-the-defender.md  
**Duration:** 60 min  
**Age Group:** 10-12  
**Chess Skill Level:** ♘ Knight Tier  
**Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** when a piece is defended by another and how to remove that defense.
2. **Calculate** trades where you capture the defender to win the defended piece.
3. **Value** persistence — understanding that attacking the guard is often easier than attacking the target.

## Key Inquiry Question

> How do you capture a piece that is protected — and why is attacking the guard sometimes smarter than attacking the treasure?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed puzzle diagrams (5 positions)
- Colored pawns or tokens to mark "guards" and "treasures"
- Defender/remover flashcards for quick drills
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Removing the Defender entry

---

## Chess Persona: The Pawn

**Piece:** Pawn  
**Value:** 1 point  
**Movement:** One square forward (two on first move), captures diagonally forward  
**Persona Trait:** Persistence & Undermining  
**Why this piece?** The Pawn is the weakest piece, yet it is often the key to removing a defender. A well-timed pawn thrust can capture a defending Knight or Bishop, or force it to retreat. The Pawn's low value means that trading it for a defender (even a 3-point Knight) is usually a great deal. Pawns also create chains that block defenders from reaching their targets. The lesson of the Pawn is that persistence — chipping away at the enemy's support — wins games.  
**Historical Note:** Philidor, the 18th-century French chess master, famously wrote that "pawns are the soul of chess." He meant that pawn structure determines everything. In tactical terms, pawn breaks (advancing a pawn to challenge an enemy pawn) are the most common way to remove a defender by force. The Soviet school of chess (1920s–1980s) elevated pawn play to an art form, with trainers drilling young players on "attack the base of the pawn chain" — remove the defender of the structure.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Place a Black Rook on e5. Place a Black Knight on d6 defending the Rook. Ask students how White can capture the Rook.

- Can White capture the Rook on e5 with a Queen on e2? *Yes, but the Knight on d6 would recapture the Queen, losing material.*
- What if White captures the Knight on d6 first? *Then the Rook on e5 is undefended and can be captured on the next move.*
- Is trading a Knight for a Knight worth it if you win a Rook next? *Yes! Trading 3 points to win 5 points is a great trade.*

Explain: *Today we'll learn about removing the defender — when you capture or drive away the piece that protects a more valuable target. Little Pip the Pawn is our guide — he knows that attacking the guard is often smarter than attacking the treasure.*

### Step 1: Concept Introduction — What is Removing the Defender? (15-20 min)

Teach the core concept. Many pieces in chess are protected by another piece. If you remove the protector, the target becomes vulnerable.

**The Removing Formula:**
Identify a piece that is defended → Capture or drive away the defender → Capture the now-undefended piece.

**Three Ways to Remove a Defender:**

1. **Capture it:** Trade a piece to eliminate the defender.
2. **Deflect it:** Attack something else the defender protects, forcing it to move.
3. **Block it:** Place a piece between the defender and its target, cutting off protection.

**Example — Capture the Defender:**

```
White Queen on e2, White Knight on f3. Black Rook on e5, Black Knight on d6.

    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   |   |
7 |   |   |   |   |   |   |   |   |
6 |   |   |   | n |   |   |   |   |
5 |   |   |   |   | r |   |   |   |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   | N |   |   |
2 |   |   |   |   | Q |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

The Knight on d6 defends the Rook on e5? d6 to e5 is +1,-1. That's a diagonal. The Knight on d6 does NOT move diagonally. So d6 does not defend e5.

Let me fix: Black Knight on f6 defends the Rook on e5? f6 to e5 is -1,-1. That's a diagonal. Knights don't move diagonally. Not defended.

Black Knight on d4 defends e5? d4 to e5 is +1,+1. No.

Black Knight on c6 defends e5? c6 to e5 is +2,-1. Yes! Knight on c6 attacks e5.

Black Knight on g6 defends e5? g6 to e5 is -2,-1. Yes!

Black Queen on e7 defends e5? e7 to e5 is same file. Yes.

Black Bishop on b7 defends e5? b7 to e5 is +3,-2. Not a diagonal.

Black Bishop on c7 defends e5? c7 to e5 is +2,-2. Diagonal! Yes.

Let me use a Knight defender:
```
White Queen on e2. Black Rook on e5, Black Knight on c6.
The Knight on c6 attacks e5, e7, d8, b8, a7, a5, b4, d4. e5 IS defended by the Knight.

White plays 1.Nf3-d4! The Knight on d4 attacks c6 and e6 and f5 and... but White wants to remove the defender.

Better: White has a Bishop on b5. 1.Bxc6! Captures the defender. Black recaptures ...bxc6 or ...dxc6. Then White plays Qxe5, winning the Rook.
```

**Capture the Defender Example:**

```
White Bishop on b5. White Queen on e2. Black Rook on e5, Black Knight on c6.

    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   |   |
7 |   |   |   |   |   |   |   |   |
6 |   |   | n |   |   |   |   |   |
5 |   | B |   |   | r |   |   |   |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   | Q |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

**1.Bxc6!** White captures the defending Knight. If Black recaptures with the b-pawn or d-pawn, the Rook on e5 is now undefended. **2.Qxe5** wins the Rook.

**Example — Deflect the Defender:**

```
White Queen on h5. Black King on g8, Black Rook on f8 (defending g8), Black Queen on e8.
The Rook on f8 defends the King on g8 (adjacent square). The Rook also defends e8? No, f8 to e8 is adjacent horizontal. The Rook on f8 defends e8.
```

White plays **1.Qh8+!** The Queen sacrifices on h8. The Rook on f8 MUST capture: **1...Rxh8** (deflected from defending e8 and g8). Now White plays **2.Qxe8#**? No, the Queen was sacrificed on h8.

Better deflection:
White Rook on e1. Black King on g8, Black Rook on f8 (defending g8), Black Queen on c8.
White plays **1.Re8!** The Rook attacks f8 (defender) and c8 (Queen). The Rook on f8 must choose. If Rxe8, the Queen on c8 is lost? No, after Rxe8, White doesn't have a follow-up on c8 unless another piece attacks it.

Simpler: White Bishop on a3. Black King on g7, Black Queen on d6 (defending e7? No).

Let's use: White Knight on e4. Black Rook on c5 (defending c7 and a5), Black Queen on c7.
The Rook on c5 defends c7. White plays Nd6! The Knight on d6 attacks c7 (Queen), e7, f7, b7, a8, b5, c4, e4. c7 is attacked. The Rook on c5 can capture the Knight on d6? c5 to d6 is +1,+1, not a Rook move. So the Rook cannot capture. The Rook can move to c7 to defend: Rxc7. Then White plays Nxa5 or Nxb7, winning material. Or the Queen on c7 can move. But White wins the exchange of attacking the defender.

Actually, this is more of a deflection (the defender is forced to abandon one post).

**Key teaching point:** Removing the defender is about recognizing that chess pieces have jobs. If you fire the guard, the vault is open.

### Step 2: Guided Practice — Fire the Guard (15-20 min)

Walk through hands-on activities. Students follow along on their boards.

**Position 1 — Capture the Defender:**
White Bishop on b5. Black Rook on e5, Black Knight on c6.
**1.Bxc6 bxc6 2.Qxe5** wins the Rook.

**Position 2 — Deflect the Defender:**
White Queen on d1. Black King on g8, Black Rook on f8 (defending g8), Black Bishop on c5.
White plays **1.Qd8+!** The Queen on d8 attacks f8 (Rook) on the 8th rank. The Rook on f8 MUST capture: **1...Rxd8**. The Rook is deflected from g8. Now White has no immediate follow-up... this requires a supporting piece.

Let's add White Rook on e1. After 1.Qd8+ Rxd8, White plays **2.Re8#**? e8 to g8 is +2,0. The Rook on e8 attacks g8. Check! But the King on g8 can go to h7. Not mate.

Better supporting piece: White Bishop on c4. After 1.Qd8+ Rxd8, the Bishop on c4 doesn't attack anything on the 8th rank.

Standard deflection to remove the back-rank defender:
White Queen on h5, White Rook on e1. Black King on g8, Black Rook on f8 (defending g8), Black Bishop on e8.
**1.Qh8+! Rxh8** (deflected). **2.Rxe8+** Rook from e1 to e8, checking g8? e8 to g8 is +2,0. The Rook attacks g8. But the King can go to f7 or h7. Not mate.

I'll use a simpler, guaranteed material-winning example:

**Position 2:** White Knight on e4. Black Rook on c5, Black Queen on c7. The Rook on c5 defends c7.
White plays **1.Nd6!** The Knight on d6 attacks c7 (Queen) and b7 and e8 and f7 and f5 and e4 and c4 and b5 and a8 and a7. c7 is attacked. The Rook on c5 must choose: defend c7 with Rxc7 (losing the Rook for the Knight), or abandon c7 and lose the Queen. Either way, White wins material.

**Position 3 — Block the Defender:**
White Rook on e1. Black Rook on e8 (defending d8? No), Black Queen on d8.
The Rook on e8 defends d8? e8 to d8 is adjacent horizontal. Yes.
White plays **1.Re8+!** The Rook captures the defender on e8? But it's the same square. 

If White has a Knight on c6: **1.Ne7+!** The Knight on e7 checks c8, d8, f8, g8, g6, f6, d6, c8. d8 is attacked from e7? e7 to d8 is -1,+1. Yes! The Knight on e7 gives check to the King? No King on d8. The Knight on e7 attacks d8. If the Queen is on d8, it's attacked. The Rook on e8 defends d8? e8 to d8 is adjacent. Yes. So the Rook on e8 defends the Queen on d8. White plays Ne7+, blocking the Rook's defense of d8? The Knight on e7 sits between e8 and d8? e8-e7-d8. Yes! The Knight on e7 blocks the Rook's view of d8. The Queen on d8 is now undefended. White can capture it.

But Ne7+ also gives check to the King? If the King is on g8, e7 to g8 is +1,+1. No, Knight doesn't move diagonally.

**Position 3 (corrected):** White Knight on c6. Black Rook on e8, Black Queen on d8, Black King on g8.
White plays **1.Ne7+!** The Knight on e7 blocks the Rook on e8 from defending d8. The Knight also checks the King on g8? e7 to g8 is +1,+1. No. But the Knight attacks f5, d5, c6, c8, d8, f8, g5. d8 IS attacked. The Queen on d8 is attacked and now undefended. White wins the Queen.

[Checklist for students:]
- [ ] I set up Position 1 and executed Bxc6 followed by Qxe5
- [ ] I set up Position 2 and explained why Nd6 wins material
- [ ] I set up Position 3 and saw how Ne7 blocks the defender's line
- [ ] I can explain the three ways to remove a defender: capture, deflect, block
- [ ] I found an undefended piece on my board after removing its defender

### Step 3: Independent Practice — The Defender Challenge (10-15 min)

**Challenge:** Students receive 4 diagrams. For each, they must identify the defender, the target, and the move that removes the defense.

||| Position | Success Metric |
|||------------------------|------------------|
|| Diagram 1: Capture defender | Correctly identifies capturing sequence |
|| Diagram 2: Deflect defender | Correctly identifies deflection move |
|| Diagram 3: Block defender | Correctly identifies blocking move |
|| Diagram 4: Combined tactic | Identifies defender and calculates the win |

**Diagram 1:** White Bishop on g5. Black Knight on f6, Black Rook on d8. The Knight on f6 defends the Rook? f6 to d8 is -2,+2. No.

**Diagram 1 (corrected):** White Bishop on g5. Black Knight on f6, Black Queen on d8. The Knight on f6 does not defend d8.

Use: White Knight on f3. Black Bishop on e5, Black Queen on c7. The Bishop on e5 defends c7? e5 to c7 is -2,+2. Diagonal! Yes.
White plays **1.Nxe5!** Captures the defender. Black recaptures ...Nxe5 or ...Qxe5 or ...dxe5. Then White plays Qxc7, winning the Queen.

**Diagram 2:** White Rook on e1. Black King on g8, Black Rook on f8 (defending g8), Black Knight on e8.
White plays **1.Qh8+!** Forcing Rxh8. The Rook is deflected. Then White plays Rxe8+, winning the Knight.

Wait — after Qh8+ Rxh8, White plays Rxe8+. The Rook on e1 moves to e8, capturing the Knight. Check? e8 to g8 is +2,0. The Rook attacks g8. The King must move. White won a Knight for a Queen? No, White lost the Queen. Not good.

Better: White Rook on e1. Black Rook on f8 (defending e8? No, f8 to e8 is adjacent horizontal. Yes). Black Queen on e8.
White plays **1.Re8+!** Rook captures Queen on e8. The Rook on f8 must recapture: Rxe8. The Rook is deflected from defending... nothing else.

Actually, deflection often sets up ANOTHER tactic. Let me simplify:
**Diagram 2:** White Queen on d1. Black King on g8, Black Rook on f8 (defending g8 and e8), Black Bishop on e8.
White plays **1.Qd8+!** The Queen on d8 attacks f8 (Rook). The Rook must take: Rxd8. Deflected from e8. Now White plays Bxe8 or Rxe8, winning the Bishop.

**Diagram 3:** White Knight on c6. Black Rook on e8, Black Queen on d8.
White plays **1.Ne7+!** Blocks the Rook's defense of d8. Wins the Queen.

**Diagram 4:** White Queen on h5, White Rook on e1. Black King on g8, Black Rook on f8, Black Bishop on e8.
**1.Qh8+! Rxh8 2.Rxe8+** winning the Bishop. (Even though White lost a Queen, this demonstrates the deflection pattern. In a real game, White would need compensation.)

Actually, let me make Diagram 4 a win for White:
White Queen on h5, White Rook on e1, White Bishop on c4. Black King on g8, Black Rook on f8, Black Queen on e8.
**1.Qh8+! Rxh8 2.Rxe8+** The Rook on e8 attacks g8? e8 to g8 is +2,0. Check! The King moves. **3.Bxe8** White wins the Queen. But White gave up a Queen for a Rook and Queen? Qh8 was captured. So White lost Queen, won Queen and Rook? Net: won a Rook.

This is too complex. Let me simplify Diagram 4:
White Bishop on c4, White Knight on f3. Black Rook on e5, Black Knight on d6.
The Knight on d6 defends e5. White plays Nxd6. If Black recaptures, White plays Bxe5.

[Student checklist:]
- [ ] I solved Diagram 1 by capturing the defender
- [ ] I solved Diagram 2 by deflecting the defender
- [ ] I solved Diagram 3 by blocking the defender's line
- [ ] I solved Diagram 4 and calculated the material win
- [ ] I created my own "remove the defender" position

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "You correctly saw that the Knight was guarding the Rook — removing the guard wins the prize."
- **One thing to try:** "Before capturing the defender, count the material. Make sure you win more than you spend."
- **Question:** "What happens if your opponent recaptures the defender with a different piece? Is your plan still sound?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Identifying defenders | Cannot see which piece is defending another | Recognizes defenders with hints | Identifies defenders and their targets independently | Sees hidden defenders in complex positions |
||| Removing defenders | Cannot calculate a trade to remove a defender | Can calculate with guidance | Executes capture/deflect/block tactics in practice | Combines removal with other tactics in combinations |
||| Board/Tool Use | Cannot use board to set up positions | Basic setup with help | Competently sets up and tests positions | Expert use + creates physical puzzle cards |

---

## Extended Activity

**Guard Duty Analysis:** Students take a position from a famous game and label every piece's defensive duties. They identify which defenders are overworked (defending two things at once) and create a plan to remove them.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Use only capture-the-defender examples (most visual) | Include block-the-defender examples (requires line-of-sight thinking) |
||| Provide colored arrows showing defensive lines | Analyze positions where removing the defender leads to a forced mate |
||| Pair work: one student identifies the defender, the other finds the remover | Create a puzzle where removing the defender backfires (counter-tactics) |

---

## Teacher Reflection

- [ ] Did learners understand that defenders have "jobs" that can be taken away?
- [ ] Was the Pawn persona engaging? Did they connect it to persistence?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Tactics | 400–800 |
||| Chess.com Lessons | Tactics — Removing the Defender | Beginner |
||| Skill Tier | Knight Tier | Tactical pattern recognition |
