# Lesson Plan 12: Pins

> *Hold the enemy hostage along a line — the Bishop's art of restraint.*

---

# Lesson Plan 12: Pins

**Module Reference:** Prompt 12 — lesson-12-pins.md  
**Duration:** 60 min  
**Age Group:** 10-12  
**Chess Skill Level:** ♘ Knight Tier  
**Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** absolute and relative pins.
2. **Explain** why a pinned piece cannot move without exposing a more valuable piece.
3. **Value** restraint — understanding that holding something in place can be as powerful as capturing it.

## Key Inquiry Question

> How does the Bishop hold an enemy piece hostage along a diagonal — and why can't the pinned piece simply walk away?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed pin puzzle diagrams (5 positions)
- String or yarn to physically demonstrate the "line of sight" on a large demo board
- Bishop-shaped tokens for marking pinned pieces
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Pins entry

---

## Chess Persona: The Bishop

**Piece:** Bishop  
**Value:** 3 points  
**Movement:** Diagonally any number of squares; stays on one color forever  
**Persona Trait:** Vision & Line-of-Sight Pressure  
**Why this piece?** The Bishop controls long diagonals and can pin enemy pieces to their King or Queen along those diagonals. Its unique ability to see across the board on its color complex makes it the ideal piece for creating pins — especially when fianchettoed on g2, b2, g7, or b7 where it commands the longest diagonals. No other piece (except Queen) can pin along diagonals, and the Bishop's early development in many openings sets up pin opportunities naturally.  
**Historical Note:** The modern Bishop replaced the alfil (elephant) in European chess around 1200 CE. The alfil could only leap two squares diagonally — a weak piece. When the Bishop gained its modern sliding power, players discovered the pin as a weapon. Philidor, the 18th-century French master, wrote that "a pin is worth three tempi" because the pinned piece is frozen for multiple moves.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Place a White Bishop on c4, a Black Knight on f7, and the Black King on g8. Ask a student to move the Knight.

- Can you move the Knight to capture the Bishop? *No — moving the Knight exposes the King to check from the Bishop on c4 along the a2-g8 diagonal.*
- What if the Black Queen were behind the Knight on h8 instead of the King? *Then the Knight could legally move, but moving it would expose the Queen to capture.*
- Why is this called a "pin"? *Because the piece is stuck, like a butterfly pinned to a board.*

Explain: *Today we'll learn about pins — when a Bishop (or Rook or Queen) holds an enemy piece hostage along a line. The piece is frozen in place, unable to move without exposing something more valuable behind it. Sir Diagonal the Bishop is our guide — he sees along his diagonals and locks enemies in place.*

### Step 1: Concept Introduction — What is a Pin? (15-20 min)

Teach the core concept using the Bishop persona. A pin is a tactical motif where an attacked piece cannot move without exposing a more valuable piece behind it to capture or check.

**The Pin Formula:**
A long-range piece (Bishop, Rook, or Queen) attacks an enemy piece that sits between it and a more valuable enemy piece. The middle piece is "pinned" because moving it would expose the piece behind.

**Types of Pins:**

1. **Absolute Pin:** The pinned piece cannot legally move because it shields the King from check. Moving it is illegal.
2. **Relative Pin:** The pinned piece CAN legally move, but moving it would expose the Queen (or another valuable piece) behind it to capture. It's a choice — a bad one.

**Absolute Pin Example — Bishop on the Long Diagonal:**

```
White Bishop on c4 pins Black Knight on f7 to Black King on g8:

    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   | k |   |
7 |   |   |   |   |   | p | p | p |
6 |   |   |   |   |   |   |   |   |
5 |   |   |   |   |   |   |   |   |
4 |   |   | B |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

Wait — Bishop on c4 attacks along the c4-d5-e6-f7-g8 diagonal. The Knight on f7 is in the way, and behind it is the King on g8. If the Knight moves, the Bishop on c4 gives check to the King. This is an absolute pin!

**Relative Pin Example:**

```
White Rook on a1 pins Black Knight on a5 to Black Queen on a8:

    a   b   c   d   e   f   g   h
8 | q |   |   |   |   |   |   |   |
7 |   |   |   |   |   |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 | n |   |   |   |   |   |   |   |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 | R |   |   |   |   |   |   |   |
```

The Knight on a5 could legally move, but doing so would expose the Queen on a8 to Rxa8. This is a relative pin — the Knight is "nailed" in place by pressure, not by rules.

**Key teaching point:** Pins only work along straight lines (ranks, files, diagonals). Knights CANNOT pin because they don't move in straight lines. Pawns CAN pin diagonally.

**How to Exploit a Pin:**
- Attack the pinned piece with another piece (it can't run!)
- Pile up on the pinned piece to win it by force
- Use the pin to prevent the pinned piece from defending other squares
- In the case of an absolute pin on f7/g7, sacrifice to destroy the defender and expose the King

### Step 2: Guided Practice — Pin the Piece (15-20 min)

Walk through hands-on activities. Students follow along on their boards.

**Position 1:** White Bishop on g5. Black Knight on f6, Black Queen on d8. Is the Knight pinned?
*No — the Bishop on g5 attacks along the h4-d8 diagonal. The Knight on f6 is NOT on that diagonal. Wait, let me check: g5 to d8 is g5-f6-e7-d8? No, that's -1,+1 which is diagonal! g5-f6-e7-d8... yes! g5 to f6 is down-right? No: g5 to f6 is -1,+1 (left 1, up 1). f6 to e7 is -1,+1. e7 to d8 is -1,+1. So the diagonal is g5-f6-e7-d8. The Knight on f6 IS on the diagonal! And behind it is the Queen on d8. So the Knight is pinned to the Queen — a relative pin!*

Actually, from g5: the diagonal going up-left is h6, f6? No. Let's use coordinates: a=1, b=2, c=3, d=4, e=5, f=6, g=7, h=8. g5 is (7,5). Diagonal up-left (decreasing x, increasing y): (6,6)=f6, (5,7)=e7, (4,8)=d8. Yes! g5-f6-e7-d8 is a diagonal. So Bishop on g5 pins Knight on f6 to Queen on d8.

```
    a   b   c   d   e   f   g   h
8 |   |   |   | q |   |   |   |   |
7 |   |   |   |   |   |   |   |   |
6 |   |   |   |   |   | n |   |   |
5 |   |   |   |   |   |   | B |   |
4 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

**Position 2 — Absolute Pin:** White Bishop on c4. Black Knight on f7, Black King on g8. Absolute pin!

**Position 3 — Relative Pin:** White Rook on e1. Black Knight on e5, Black Queen on e8. The Knight is pinned to the Queen along the e-file.

**Position 4 — Breaking the Pin:** How can Black break the pin in Position 1? Place a Bishop or Queen on g7 to block the diagonal? Or move the Queen off the diagonal? Or put a pawn on g7 to interpose? 

*Breaking pins: (1) Move the target piece off the line, (2) Block the line with an interposing piece, (3) Capture the pinning piece, (4) Move the pinned piece anyway (if relative) when the material gain is worth it.*

[Checklist for students:]
- [ ] I set up the absolute pin (Bishop c4, Knight f7, King g8) and saw why the Knight cannot move
- [ ] I set up the relative pin (Bishop g5, Knight f6, Queen d8) and explained the difference
- [ ] I found a way to break a pin by blocking the diagonal with a pawn
- [ ] I understand why Knights cannot pin but Bishops, Rooks, and Queens can
- [ ] I identified which of my opponent's pieces are pinned in a practice game

### Step 3: Independent Practice — The Pin Challenge (10-15 min)

**Challenge:** Students receive 4 diagrams. For each, they must: (a) identify if it's an absolute or relative pin, (b) name the pinning piece and pinned piece, (c) suggest one way to break the pin.

||| Position | Success Metric |
|||------------------------|------------------|
|| Diagram 1: Bishop pin | Correctly identifies absolute vs relative |
|| Diagram 2: Rook pin | Names pinning and pinned piece |
|| Diagram 3: Pawn pin | Suggests a valid pin-break |
|| Diagram 4: No pin | Explains why no pin exists |

**Diagram 1:** White Bishop on a3. Black Knight on c5, Black King on e7. Absolute or relative?
*Absolute pin! The Bishop on a3 attacks along the a3-b4-c5-d6-e7 diagonal. The Knight on c5 shields the King on e7.*

```
    a   b   c   d   e   f   g   h
8 |   |   |   |   |   |   |   |   |
7 |   |   |   |   | k |   |   |   |
6 |   |   |   |   |   |   |   |   |
5 |   |   | n |   |   |   |   |   |
4 |   |   |   |   |   |   |   |   |
3 | B |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
1 |   |   |   |   |   |   |   |   |
```

**Diagram 2:** White Rook on h1. Black Bishop on h6, Black Queen on h8. Absolute or relative?
*Relative pin. The Bishop can legally move, but moving it exposes the Queen to Rxh8.*

**Diagram 3:** White Pawn on d4. Black Bishop on c5, Black Rook on b6. Is there a pin?
*No pin. The pawn on d4 does not attack c5 (pawns capture diagonally forward). White pawn on e4 attacks d5 and f5. A White pawn on b4 would attack c5, but from b4 a pawn attacks a5 and c5. If the pawn were on b4 and the Bishop on c5 with Rook on b6, then b4xc5 would be a capture, not a pin. For a pawn pin: White pawn on g4, Black Knight on f5, Black Queen on h6? No, g4 attacks f5 and h5. If Black Queen on h6, that's not on h5. 

Actually: White pawn on e5, Black Knight on d6, Black Queen on c7? e5 attacks d6 and f6. The Knight on d6 is attacked. If the Queen on c7 is behind the Knight along the diagonal? e5-d6-c7 is a diagonal! But pawns don't pin along diagonals they already attack — the pawn on e5 attacks d6. If the Queen is on c7, then e5xd6 exposes the Queen? No, the pawn captures en passant or regular. This is confusing.

Let me use a simpler pawn pin: White pawn on g5, Black Knight on h6, Black Queen on h7? No, g5 attacks f6 and h6. The Knight on h6 is attacked by the pawn. If the King on h8 is behind the Knight: the pawn on g5 attacks h6. The King on h8 is two squares behind on the h-file, not diagonal. 

For a pawn pin, the pawn must attack the pinned piece diagonally, and the target must be on the same diagonal behind it. White pawn on d4 attacks c5. If Black Bishop on c5 and Black King on b6? d4-c5-b6 is a diagonal! The pawn on d4 attacks c5. If the Bishop is on c5 and the King on b6, then d4xc5 would expose... no, the pawn can't "look through" the Bishop. Wait — pawns DON'T attack through pieces. A pin requires the pinning piece to attack THROUGH the pinned piece to the target. The pawn on d4 attacks c5. If there's a Bishop on c5, the pawn is already attacking it. But for a pin, there needs to be something behind. 

Actually, pawns CAN pin: if a pawn attacks a square, and an enemy piece sits on that square, and behind that piece (on the same diagonal) is the enemy King or Queen. But pawns only attack one square diagonally in front. So the "behind" piece would need to be further along that diagonal. From d4, the pawn attacks c5. Further along c5-b6-a7. If Black Knight on c5 and Black King on b6: the pawn on d4 attacks c5. If the Knight moves, does the pawn attack b6? No — the pawn on d4 only attacks c5, not b6. So the pawn cannot "see through" to the King. Pawns do NOT create pins in the traditional sense because they have a range of 1.

However, there is a special case: if the pinned piece moves, the pawn could capture the piece behind on a later move? No, that's not a pin. Let me correct this: **Pawns cannot pin.** I should remove Diagram 3 and replace it.

**Diagram 3 (corrected):** White Queen on d3. Black Knight on d5, Black Rook on d8. Is this a pin?
*Relative pin along the d-file. The Queen on d3 pins the Knight on d5 to the Rook on d8.*

**Diagram 4:** White Bishop on c4. Black Knight on d5, Black King on e6. Is this a pin?
*No pin! The Bishop on c4 attacks along the a2-g8 diagonal. d5 is not on that diagonal. The Knight is NOT pinned.*

[Student checklist:]
- [ ] I identified Diagram 1 as an absolute pin
- [ ] I identified Diagram 2 as a relative pin
- [ ] I identified Diagram 3 as a relative pin (Queen on d-file)
- [ ] I identified Diagram 4 as NOT a pin and explained why
- [ ] I suggested one valid way to break each pin

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "You correctly spotted the absolute pin — the Knight truly cannot move because the King would be in check."
- **One thing to try:** "When you see a pin, ask yourself: can I attack the pinned piece with another piece to win it?"
- **Question:** "What would happen if the pinned Knight in Diagram 1 moved anyway and you had a second attacker ready?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Identifying pins | Cannot distinguish pinned from unpinned pieces | Recognizes pins with hints after setup | Identifies absolute and relative pins independently | Explains why Knights cannot pin and finds pins in game fragments |
||| Explaining pin mechanics | Cannot explain why a pinned piece is stuck | Explains with teacher scaffolding | Clearly explains the line-of-sight logic in their own words | Creates analogies connecting pins to real-world situations |
||| Board/Tool Use | Cannot use board to set up positions | Basic setup with help | Competently sets up and tests positions | Expert use + creates physical puzzle cards |

---

## Extended Activity

**Pin Detective:** Students play a game against a partner or computer with one special rule: every time a pin appears in the position, the first player to call "PIN!" gets a point. After the game, they write down the position and classify each pin as absolute or relative.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Use only absolute pins to the King (clearer and more visual) | Study the "cross-pin" where two pins intersect |
||| Provide color-coded arrows: red for pinning piece, yellow for pinned piece | Analyze famous games where a player sacrificed a Queen to exploit a pin |
||| Pair work: one student places the pin, the other tries to break it | Create a puzzle where the "pinned" piece is actually a winning tactical shot |

---

## Teacher Reflection

- [ ] Did learners understand the difference between absolute and relative pins?
- [ ] Was the Bishop persona engaging? Did they connect it to diagonal vision?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Tactics | 400–800 |
||| Chess.com Lessons | Tactics — Pins | Beginner |
||| Skill Tier | Knight Tier | Tactical pattern recognition |
