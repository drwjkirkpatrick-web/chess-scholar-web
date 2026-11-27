# Lesson Plan 19: Mate in 1 Patterns

> *See the knockout blow — the King's lesson in finishing.*

---

# Lesson Plan 19: Mate in 1 Patterns

**Module Reference:** Prompt 19 — lesson-19-mate-in-1.md  
**Duration:** 60 min  
**Age Group:** 10-12  
**Chess Skill Level:** ♘ Knight Tier  
**Tool:** Physical board + puzzles

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Recognize** common mate-in-1 patterns: back rank, smothered, corner, corridor.
2. **Deliver** checkmate in one move from a given position.
3. **Value** finishing — understanding that recognizing the end is as important as playing the beginning.

## Key Inquiry Question

> How do you know when one move will end the game — and what patterns should you train your eyes to see instantly?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed mate-in-1 puzzle diagrams (10 positions)
- Timer for speed drills (optional)
- King-shaped tokens for marking the target King
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Mate in 1 Patterns entry

---

## Chess Persona: The King

**Piece:** King  
**Value:** Infinite (the object of the game)  
**Movement:** One square in any direction  
**Persona Trait:** Awareness & The Knockout Blow  
**Why this piece?** The King is the target of every checkmate. Understanding mate-in-1 patterns means understanding where the King can and cannot go. The King persona teaches students that the most important skill in chess is not capturing pieces — it's recognizing when the enemy King has run out of squares. Every other piece exists to create the conditions for checkmate; the King is the reason the game ends.  
**Historical Note:** The concept of "mate in 1" as a training tool dates back to the 9th-century Arabic manuscript *Kitab ash-shatranj* by al-Adli, which contained hundreds of one-move puzzles. In medieval Europe, these were called "matte in uno" and were used to teach noblemen the fastest way to win. The legendary trainer Laszlo Polgar (father of the Polgar sisters) made his daughters solve thousands of mate-in-1 puzzles as children, building the pattern recognition that made them world champions.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show a position where White can deliver checkmate in one move. Ask students to find it in 10 seconds.

- What makes this position special? *The King is trapped and one move ends the game.*
- Can you see the mate in 1? *Qd8# or similar.*
- Why is training your eye to see mate in 1 important? *It saves you from missing wins and helps you spot danger to your own King.*

Explain: *Today we'll learn the four most common mate-in-1 patterns. King Reginald is our guide — he knows that the game is all about him, and recognizing when he's trapped is the most important skill in chess.*

### Step 1: Concept Introduction — The Four Mate-in-1 Patterns (15-20 min)

Teach the four core patterns. Each is a geometric situation where the King has no escape squares and one move delivers the final blow.

**Pattern 1: Back-Rank Mate**
The King is trapped on the 8th rank by its own pawns. A Queen or Rook slides to the back rank and delivers checkmate.

```
White Queen on d1. Black King on g8, pawns f7, g7, h7.
1.Qd8# — Queen moves to d8, attacking g8 along the 8th rank. King has no escape.
```

**Pattern 2: Smothered Mate**
The King is surrounded by its own pieces and cannot move. A Knight delivers checkmate — the only piece that can check without being captured by the surrounding pieces.

```
White Knight on f7. Black King on h8, Black Rook on g8, Black pawn on h7, Black pawn on g7.
1.Nf7-g6#? From g6, Knight attacks h8? g6 to h8 is +2,+2. No.

Correct smothered mate:
White Knight on g5. Black King on h8, Black Rook on g8, Black pawn on h7.
1.Nf7#? From f7, Knight attacks h8? f7 to h8 is +2,+1. Yes! The Knight on f7 checks h8. The King on h8 is surrounded by g8 (Rook), h7 (pawn), g7 (pawn if present). The King cannot capture the Knight on f7 (f7 to h8 is a Knight move, not a King move). The King has no escape squares. SMOTHERED MATE!
```

Actually, the classic smothered mate requires the King to be truly surrounded:

```
White Knight on e7. Black King on h8, Black Rook on g8, Black Bishop on f8, Black pawn on h7.
1.Ng6#? From g6, Knight attacks h8? g6 to h8 is +2,+2. No.

White Knight on f7. Black King on h8, Black Rook on g8, Black Bishop on f8, Black pawn on h7.
1.Ng5#? From g5, Knight attacks h7, f7, e6, e4, f3, h3. Not h8.

Correct: White Knight on g6. Black King on h8, Black Rook on g8, Black Bishop on f8, Black pawn on h7.
1.Nf8#? From f8, Knight attacks h7, g6, e6, d7, d9(offboard). Not h8.

The standard smothered mate is:
White Knight on e7. Black King on h8, Black Rook on g8, Black pawn on g7, Black pawn on h7.
1.Nf7#? From f7, Knight attacks h8? f7 to h8 is +2,+1. Yes! Knight on f7 checks h8. The King on h8 cannot move: g8 (Rook), g7 (pawn), h7 (pawn). The King cannot capture f7 (too far). SMOTHERED MATE!
```

**Pattern 3: Corner Mate**
The King is trapped in the corner by its own pieces or the edge of the board. A Queen or Rook delivers mate along the edge.

```
White Queen on b6. Black King on a8, Black pawn on a7, Black pawn on b7.
1.Qb8#? From b6 to b8: Queen moves up the b-file. From b8, Queen attacks a8 (adjacent horizontal). Check! The King on a8 cannot move: a7 (blocked by pawn), b7 (blocked by pawn), b8 (occupied by Queen). The King cannot capture b8 (Queen is protected? If protected, yes). If the Queen on b8 is protected by a piece on b6? No, she moved from b6. Is she protected by something else? Let's say White Rook on b1. Then Qb8# is mate because the King has no escape and cannot capture the protected Queen.
```

**Pattern 4: Corridor Mate**
The King is trapped on an open file or rank with no escape squares. A Rook or Queen delivers mate along the corridor.

```
White Rook on a1. Black King on a8, Black pawns b7, c7.
Wait, the King on a8 needs to be trapped. If pawns on b7 and a7, the King on a8 is trapped.
1.Ra8#? From a1 to a8. But a8 is occupied by the King. Can't move there.

Correct corridor mate:
White Rook on h1. Black King on h8, Black pawns g7, h7.
1.Rh8#? Occupied by King.

White Rook on e1. Black King on e8, Black pawns d7, e7, f7.
1.Re8#? Occupied.

The corridor mate requires the attacker to ALREADY be on the same file/rank with the King trapped in between, or to move to an empty square.

Standard corridor:
White Queen on h6. Black King on g8, Black pawns f7, g7, h7.
1.Qg7#? Occupied by pawn.

White Queen on h4. Black King on g8, Black pawns f7, g7, h7.
1.Qh8#? Occupied by nothing? If h8 is empty, Qh8# checks g8? h8 to g8 is -1,0. Adjacent horizontal. Yes! The Queen on h8 attacks g8. The King cannot escape: h7 (blocked by pawn), g7 (blocked by pawn), f7 (blocked by pawn), f8 (attacked by Queen on h8 along the 8th rank). Checkmate!
```

**Key teaching point:** Mate-in-1 patterns are about GEOMETRY, not calculation. Train your eye to see: Is the King trapped? Can I deliver check to the only square the King is on? Are all escape squares blocked or attacked?

### Step 2: Guided Practice — Spot the Mate (15-20 min)

Walk through hands-on activities. Students follow along on their boards.

**Position 1 — Back-Rank:** White Queen on d1. Black King on g8, pawns f7, g7, h7.
*Solution: Qd8#*

**Position 2 — Smothered:** White Knight on e7. Black King on h8, Rook on g8, pawns g7, h7.
*Solution: Nf7#*

**Position 3 — Corner:** White Queen on b6. Black King on a8, pawns a7, b7. White Rook on b1.
*Solution: Qb8#*

**Position 4 — Corridor:** White Queen on h4. Black King on g8, pawns f7, g7, h7.
*Solution: Qh8#*

**Position 5 — No Mate:** White Queen on d1. Black King on g8, pawns f7, g7, h6.
*No mate — the King can escape to h7 after Qd8+.*

[Checklist for students:]
- [ ] I set up Position 1 and delivered back-rank mate
- [ ] I set up Position 2 and delivered smothered mate with the Knight
- [ ] I set up Position 3 and delivered corner mate
- [ ] I set up Position 4 and delivered corridor mate
- [ ] I set up Position 5 and explained why it is NOT mate

### Step 3: Independent Practice — The Mate-in-1 Challenge (10-15 min)

**Challenge:** Students receive 8 diagrams on a sheet. They have 5 minutes to circle all diagrams that are mate in 1 and write the mating move. Speed AND accuracy matter.

||| Position | Success Metric |
|||------------------------|------------------|
|| Diagram 1: Back-rank | Finds Qd8# or Re8# |
|| Diagram 2: Smothered | Finds Nf7# or similar |
|| Diagram 3: Corner | Finds Qb8# or similar |
|| Diagram 4: Corridor | Finds Qh8# or similar |
|| Diagram 5: NOT mate | Correctly identifies escape square |
|| Diagram 6: NOT mate | Correctly identifies blocking defender |
|| Diagram 7: Back-rank with Rook | Finds Ra8# |
|| Diagram 8: Smothered with Knight | Finds Ng6# or similar |

**Diagram 5:** White Queen on d1. Black King on g8, pawns f7, g7, h6.
*NOT mate — King escapes to h7.*

**Diagram 6:** White Queen on d1. Black King on g8, pawns f7, g7, h7, Black Rook on f8.
*NOT mate — Rook on f8 blocks and can capture or interpose.*

**Diagram 7:** White Rook on a1. Black King on c8, pawns b7, c7, d7.
*Solution: Ra8#*

**Diagram 8:** White Knight on e5. Black King on h8, Rook on g8, pawn on h7.
*Solution: Nf7# (Knight from e5 to f7 checks h8).*

Wait — e5 to f7 is +1,+2. Yes, Knight move. From f7: attacks h8, h6, g5, e5, d6, d8, e9(offboard), g9(offboard). h8 IS attacked. Yes! Nf7# is smothered mate.

[Student checklist:]
- [ ] I found the mate in Diagrams 1-4
- [ ] I correctly identified Diagrams 5-6 as NOT mate
- [ ] I found the mate in Diagrams 7-8
- [ ] I finished within the time limit
- [ ] I explained my reasoning for one diagram to a partner

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "You spotted the smothered mate instantly — that's the power of pattern recognition!"
- **One thing to try:** "When you think you see mate in 1, count the King's escape squares out loud. Make sure every single one is blocked or attacked."
- **Question:** "Why is smothered mate only possible with a Knight? Why can't a Queen or Rook deliver smothered mate?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Recognizing mate-in-1 patterns | Cannot identify any mate-in-1 pattern | Recognizes 1-2 patterns with hints | Recognizes all four patterns independently | Identifies mate in 1 in messy, non-standard positions |
||| Delivering mate in 1 | Cannot deliver mate even when shown the pattern | Delivers mate with guidance after pattern is named | Delivers mate independently within 10 seconds per puzzle | Delivers mate in blitz conditions (3 seconds per puzzle) |
||| Board/Tool Use | Cannot use board to set up positions | Basic setup with help | Competently sets up and tests positions | Expert use + creates physical puzzle cards |

---

## Extended Activity

**Mate-in-1 Speed Drill:** Students create 10 mate-in-1 positions and quiz each other in pairs. Record times and accuracy. Aim for 8/10 correct within 3 minutes.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Focus on only back-rank and corridor mates (easiest to see) | Include smothered mates and "helpmate" style patterns |
||| Provide pre-marked escape squares with X's on diagrams | Solve mate-in-1 puzzles from real games where pieces are scattered |
||| Pair work: partner calls out the pattern, student delivers the mate | Create original mate-in-1 compositions with minimum pieces |

---

## Teacher Reflection

- [ ] Did learners recognize all four mate-in-1 patterns?
- [ ] Was the King persona engaging? Did they connect it to being the target?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Tactics | 400–800 |
||| Chess.com Lessons | Tactics — Checkmate Patterns | Beginner |
||| Skill Tier | Knight Tier | Tactical pattern recognition |
