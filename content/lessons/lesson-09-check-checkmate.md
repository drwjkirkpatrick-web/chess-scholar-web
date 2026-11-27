# Lesson Plan 09: Check & Checkmate

> *Threatening the King; ending the game.*

---

**Module Reference:** Prompt 09 — lesson-09-check-checkmate.md  
**Duration:** 60 min  
**Age Group:** 8-10  
**Chess Skill Level:** ♙ Pawn Tier  
**Tool:** Physical board (primarily)

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Distinguish** between check, checkmate, and stalemate.
2. **Identify** three ways to escape check: move the King, block the check, capture the attacker.
3. **Value** awareness — understanding that threats must be seen before they can be stopped.

## Key Inquiry Question

> What is the difference between a warning and a knockout — and how do you know when the game is truly over?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Red markers or cards labeled "CHECK" and "CHECKMATE"
- Printed diagrams showing the three ways out of check
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Check and Checkmate entry

---

## Chess Persona: The King

**Piece:** King  
**Value:** Infinite points  
**Movement:** One square in any direction  
**Persona Trait:** Threat & Escape  
**Why this piece?** The King returns as our persona because check and checkmate are entirely about the King's fate. This lesson teaches students that in chess, as in life, threats must be seen before they can be addressed. A player who ignores a warning (check) will soon face a knockout (checkmate). The King's vulnerability is what makes chess exciting — every game builds toward the moment when one King is cornered and the other stands victorious.  
**Historical Note:** The terms "check" and "checkmate" come from the Persian phrase "shah mat." "Shah" means King (still used in Iran today as a title), and "mat" means helpless, defeated, or astonished. When chess spread to Europe through Arabic, "shah" became "check" and "shah mat" became "checkmate." In medieval Europe, it was considered rude to say "checkmate" too loudly — some players would whisper it politely. In the 19th century, saying "check" aloud was actually required in formal games, though today it is optional and often considered distracting.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Set up a position where a Black Rook on e8 attacks the White King on e1. Announce "CHECK!" loudly. Then set up a position where the King is surrounded with no escape and announce "CHECKMATE!"

- "If your King is in check, can you ignore it and move another piece?" *No — you MUST get out of check. It is the only time you are forced to do something.*
- "What if your King is in check and there is no way out?" *That is checkmate — the game is over, and you lose.*
- "What if it is your turn but your King is not in check, and you have no legal moves?" *That is stalemate — the game is a draw (we learn that in Lesson 10).*

Explain: *Today we learn the heart of chess: check, checkmate, and how to escape. The entire game builds toward this moment — threatening the enemy King while protecting your own.*

### Step 1: Concept Introduction — Check and the Three Escapes (15-20 min)

**Teach CHECK:**
- **Check** means an enemy piece attacks your King.
- When in check, you **must** respond immediately. You cannot make a move that leaves your King in check.
- There are exactly **three ways to escape check**:
  1. **Move the King** to a safe square.
  2. **Block the check** by placing a piece between the attacker and the King.
  3. **Capture the attacking piece**.

**Demonstration of each escape:**

```
Position 1 — Move the King:
White King on e1.
Black Rook on e8.
White can play Ke1-d1 or Ke1-d2 or Ke1-f1 or Ke1-f2 (if safe).
```

```
Position 2 — Block the check:
White King on e1.
Black Bishop on a5.
White can place a piece on d2 or c3 or b4 (the diagonal) to block.
```

```
Position 3 — Capture the attacker:
White King on e1.
Black Knight on f2.
White can capture the Knight with the King (Kxf2) if the Knight is not protected.
Or another White piece can capture the Knight.
```

**Double check:**

```
Position 4 — Double check:
White King on e1.
Black Queen on e8.
Black Bishop on a5.
Both pieces give check simultaneously.
```

In a double check, you **must move the King** — you cannot block two lines at once, and you usually cannot capture both attackers. Double check is the most dangerous form of check.

**Key teaching point:** Always look for checks. They are forcing moves — the opponent MUST respond — which means you control the game when you give check.

### Step 2: Concept Introduction — Checkmate (same 15-20 min block)

**Teach CHECKMATE:**
- **Checkmate** means the King is in check AND has no legal way to escape.
- The game ends immediately. The player whose King is checkmated loses.
- Checkmate = check + no escape.

**Demonstration of a simple checkmate:**

```
Position:
White King on e1.
White Pawns on e2, f2, g2, h2.
Black Queen on e2 (giving check).
Black King on h8 (far away).
```

Wait — the Queen on e2 cannot check because e2 is occupied by a White Pawn. Let me fix:

```
Corrected position — Back-rank mate:
White King on e1.
White Pawns on e2, f2, g2.
Black Queen on e8.
Black Rook on a1.
```

The Queen on e8 gives check along the e-file. The King cannot move to d1 (attacked by Rook on a1 along the first rank? No, Rook on a1 attacks the entire first rank, so d1 IS attacked). The King cannot move to d2 or f2 or f1 because those squares are blocked by Pawns or attacked. The King cannot capture the Queen (too far). No piece can block. This is CHECKMATE.

**Simplest checkmate to teach beginners:**

```
Position — King and Queen vs. lone King:
White King on e1.
White Queen on f6.
Black King on h8.
```

White plays Qf6-f8#. The Queen attacks h8 (diagonal) and g8/g7/f7/e7/e8 (all around). The Black King on h8 has no safe squares. This is CHECKMATE.

**Key teaching point:** Checkmate is the GOAL of chess. Every move you make should bring you closer to checkmating the enemy King or farther from being checkmated yourself.

### Step 3: Guided Practice — Escape or Mate? (15-20 min)

Students work in pairs.

**Activity:** The teacher sets up positions. Students must determine:
- Is the King in check?
- Is it checkmate?
- If it is check, which of the three escapes works?

```
Position 1:
White King e1, Black Queen e8. White Knight d2. → Check! Knight can block on e2? No, Queen on e8 attacks e2. Knight on d2 cannot block e-file. King can move to d1 or f1? If not blocked, yes. If safe, not checkmate.

Let me make clearer positions:

Position 1 (Check, can escape by moving):
White King e1. Black Rook e8. No other pieces. → Check. King can move to d1, d2, f1, f2. NOT checkmate.

Position 2 (Check, can block):
White King e1. Black Bishop a5. White Queen d1. → Check. Queen can block on d2 or c3 or b4. NOT checkmate.

Position 3 (Check, can capture):
White King e1. Black Knight f2. White Bishop g1. → Check. Bishop can capture Nf2 (Bxf2). NOT checkmate.

Position 4 (Checkmate):
White King e1. White Pawns e2, f2, g2. Black Queen e8. Black Rook a1. → Checkmate! King cannot move (d2 attacked by Queen, f1 attacked by Rook, d1 attacked by Rook). No blocking possible. Cannot capture Queen.

Position 5 (Double check):
White King e1. Black Queen e8. Black Bishop b4. → Double check. King MUST move. If no safe squares, it is checkmate.
```

[Checklist for students:]
- [ ] I identified whether the King is in check.
- [ ] I checked if the King can move to a safe square.
- [ ] I checked if any piece can block the check.
- [ ] I checked if any piece can capture the attacker.
- [ ] I determined if the position is check or checkmate.

### Step 4: Independent Practice — Deliver Checkmate (10-15 min)

**Challenge:** Set up the following position:

```
White: King on e1, Queen on d1, Rook on h1.
Black: King on e8, Pawns on e7, f7, g7, h7.
```

**Task:** It is White to move. Find a checkmate in one move. (Hint: look for the back rank.)

**Solution:** Qd1-d8# (Queen moves to d8, giving check). The Black King cannot move (e7, f7, g7, f8, d8 are all blocked or attacked). The Queen cannot be captured. No piece can block. CHECKMATE.

**Task 2:** Reset. White to move again, but this time find a DIFFERENT checkmate in one move. Is there more than one? (Rh1-e1#? No, that does not check the King on e8. Qd1-a4#? No. Actually, Qd8# is the only immediate checkmate here.)

Let me make a position with multiple solutions:

```
Revised Position:
White: King on e1, Queen on h5, Rook on e1.
Black: King on g8, Pawns on f7, g7, h7.
```

White can play Qh5-h8# (Queen to h8, checkmate). Or Re1-e8#? Rook moves to e8, but the King is on g8 — not on the same file. Not check.

Let me keep it simple:

```
Final Position:
White: Queen on f6, King on e1.
Black: King on h8, Pawns on g7, h7.
```

**Task:** White to move. Checkmate in one. Qf6-f8# or Qf6-h6#? Qf6-h6# attacks h8 (adjacent)? No, h6 to h8 is not adjacent. Qf6-h6# — from h6, the Queen attacks h8 along the h-file, and g7 and g8. The King on h8 is blocked by its own Pawns. Yes! Qh6 is checkmate. Also Qf8# works (Queen on f8 attacks h8 diagonally and g8, e8, etc.). The King on h8 cannot escape.

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Student finds at least one checkmate in one | Understands how to deliver back-rank/corner mate |
|| Student verifies that the King has no escape | Applies all three escape tests |
|| Student explains why their move is checkmate | Articulates the definition clearly |

[Student checklist:]
- [ ] I set up the position correctly.
- [ ] I found a move that puts the King in check.
- [ ] I verified the King cannot move to any safe square.
- [ ] I verified no piece can block the check.
- [ ] I verified the attacker cannot be captured.
- [ ] I wrote the checkmate move with a # symbol (e.g., Qf8#).

### Step 4: Sharing & Feedback (5-10 min)

Learners present their checkmate solutions. Use the critique framework:
- **What's working:** "You checked every escape route before calling checkmate — that is exactly how grandmasters think!"
- **One thing to try:** "Try setting up a position where the King has only ONE escape square, but your next move traps it anyway. That is called a "mating net.""
- **Question:** "Why is it important to announce "check" in a friendly game, even though it is not required in tournaments?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Distinguishing Check/Mate | Cannot tell the difference | Identifies check but confuses checkmate with stalemate | Correctly identifies check, checkmate, and stalemate in any position | Explains why double check forces the King to move |
|| Escaping Check | Cannot find any escape | Finds one escape method with prompting | Applies all three escape methods independently | Prioritizes escapes: captures first, then blocks, then moves |
|| Board/Tool Use | Cannot set up mating positions | Sets up with help | Sets up independently and verifies checkmate | Creates original checkmate-in-1 puzzles |

---

## Extended Activity

**Checkmate Collection:** Students set up 3 different checkmate positions using only a Queen + King vs. King, a Rook + King vs. King, and two Rooks vs. King. They draw each position and label it.

**Physical Activity:** "King's Gauntlet" — one student is the King and must try to run across the room. Other students are "checkmating pieces" who must corner them so they have nowhere to go.

**Digital Activity:** Solve "checkmate in 1" puzzles on lichess.org/learn.

**Teaching Activity:** Teach a family member the three ways out of check and quiz them with positions.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Use colored cards: red for check, black for checkmate, gray for stalemate | Introduce the concept of "smothered mate" — when the King's own pieces trap it |
|| Practice with only one attacker at a time | Challenge them to find the fastest checkmate with King + Rook vs. King |
|| Verbalize the three escapes before every move | Ask them to explain why stalemate is different from checkmate |

---

## Teacher Reflection

- [ ] Did learners understand the difference between check and checkmate?
- [ ] Were the three escapes clear and memorable?
- [ ] Could learners deliver a simple checkmate in one?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Checkmate Patterns | 0–400 |
|| Chess.com Lessons | Checkmate | Basics |
|| Skill Tier | Pawn Tier | ♙ Foundation |