# Lesson Plan 10: Stalemate & Draws

> *When nobody wins; the art of escaping.*

---

**Module Reference:** Prompt 10 — lesson-10-stalemate-draws.md  
**Duration:** 60 min  
**Age Group:** 8-10  
**Chess Skill Level:** ♙ Pawn Tier  
**Tool:** Physical board (primarily)

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** stalemate, insufficient material, threefold repetition, and the 50-move rule.
2. **Evaluate** when a draw is a good result versus when it is a missed opportunity.
3. **Value** resourcefulness — understanding that a draw is not a failure but a skillful escape.

## Key Inquiry Question

> How can a game with no winner still be a triumph — and when is escaping with a draw the smartest move?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- Printed cards showing each type of draw
- Score sheets for tracking moves (for the 50-move rule)
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Draws and Stalemate entry

---

## Chess Persona: The Draw

**Piece:** ⚖️ Draw  
**Value:** ½ point (half a point each)  
**Movement:** N/A — the draw is not a piece but a result  
**Persona Trait:** Balance & Escape  
**Why this piece?** The "Draw" persona teaches that not every game has a winner, and that is okay. In chess, a draw is a legitimate result — not a failure, but often a triumph of defense. When a losing player traps their own King so it cannot move but is not in check, they force a draw. This is the ultimate lesson in resourcefulness: when you cannot win, do not lose. The draw teaches humility, resilience, and the wisdom to know when half a point is better than zero.  
**Historical Note:** The concept of stalemate has changed dramatically over chess history. In medieval Arabic chess (shatranj), stalemate was actually a **win** for the side delivering it — the stalemated player lost! In 15th-century Europe, stalemate became a draw. Some old Italian rules even gave the stalemating player three-quarters of a point and the stalemated player one-quarter. The modern rule (stalemate = draw, both get half a point) was finally standardized in the 19th century. Grandmaster Savielly Tartakower famously said: "Stalemate is the dramatic moment when the helpless victim, unable to move, discovers that the persecutor has no legal way to finish the job."

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Set up a position where White has a Queen and King, and Black has only a King. Ask: "Can White win this?" *Yes — eventually.* Now set up a position where White has only a King and Black has only a King. "Can anyone win now?" *No — neither side can checkmate with just a King.*

- "If neither player can win, what happens?" *The game is a draw.*
- "What if you are losing badly but you trick your opponent into a position where you have no legal moves and your King is not in check?" *That is stalemate — a draw! You escaped with half a point!*
- "Is a draw good or bad?" *It depends — sometimes it is a disaster (you were winning), sometimes it is a miracle (you were losing).*"

Explain: *Today we learn that chess is not always about winning. Sometimes the smartest move is not to lose. We meet the Draw — the result that teaches resourcefulness and humility.*

### Step 1: Concept Introduction — Stalemate (15-20 min)

**Teach STALEMATE:**
- **Stalemate** occurs when it is a player's turn, their King is **NOT in check**, but they have **NO legal moves**.
- Stalemate is a **draw** — neither player wins.
- Stalemate is most common when the player with a huge advantage (like a Queen vs. a lone King) accidentally traps the opponent's King without putting it in check.

**Demonstration of stalemate:**

```
Position 1:
White King on a8. White Queen on b7.
Black King on a6.
```

Black to move. The Black King is not in check (Queen on b7 does not attack a6). Where can the Black King go?
- a5? Controlled by Queen on b7 (diagonal). *No.*
- b5? Controlled by Queen on b7 (file). *No.*
- b6? Controlled by Queen on b7 (diagonal). *No.*
- a7? Controlled by Queen on b7 (rank). *No.*
- b7? Controlled by Queen. *No.*
- a6? Already there. *No.*

The Black King has no legal moves and is not in check. **STALEMATE — DRAW!**

**Key teaching point:** White had a winning position (Queen + King vs. King) but played Qb7, accidentally stalemating Black. When you are ahead, you must be careful not to stalemate your opponent!

**Demonstration of NOT stalemate:**

```
Position 2:
White King on a8. White Queen on b6.
Black King on a6.
```

Black to move. The Black King is not in check. But now b5 is NOT controlled by the Queen (Queen on b6 controls b5 along the file!). The Black King can move to b5. This is NOT stalemate — the game continues.

**Key teaching point:** To avoid stalemate when you are winning, always give the losing King a "flight square" — a square to move to — until you are ready to deliver checkmate.

### Step 2: Concept Introduction — Other Types of Draws (15-20 min)

**Teach the four ways to draw:**

**1. Stalemate:** No legal moves, King not in check. (Already covered.)

**2. Insufficient Material:** Neither side has enough pieces to force checkmate.
- King vs. King = draw
- King + Bishop vs. King = draw
- King + Knight vs. King = draw
- King + two Knights vs. King = draw (cannot force checkmate)
- But: King + Bishop + Knight vs. King CAN win (very difficult).

**Demonstration:**

```
White King on e1, White Bishop on c1.
Black King on e8.
```

No matter what White does, the Bishop cannot checkmate the Black King alone. The game is a draw by insufficient material.

**3. Threefold Repetition:** If the **exact same position** occurs three times with the same player to move, either player can claim a draw.

**Demonstration:**

```
Position repeats because both players keep checking each other:
1. Qe2+ Kh8  2. Qh5+ Kg8  3. Qe2+ Kh8  4. Qh5+ Kg8  5. Qe2+ Kh8
```

The position after moves 1, 3, and 5 is identical (White Queen on e2, Black King on h8, White to move). White can claim a draw by threefold repetition.

**Key teaching point:** Threefold repetition usually happens when one player is chasing the enemy King with checks and the other keeps escaping back to the same square. It is a way to escape a losing position.

**4. The 50-Move Rule:** If **50 consecutive moves** occur with no Pawn move and no capture, either player can claim a draw.

**Demonstration:** Explain that in a very long endgame, if neither side makes progress (no Pawns move, no pieces are captured), the game is declared a draw after 50 moves. Players often use score sheets to count.

**Key teaching point:** The 50-move rule prevents games from going on forever when neither player can make progress.

### Step 3: Guided Practice — Draw Detective (15-20 min)

Students work in pairs.

**Activity:** For each position, determine:
- Is it checkmate?
- Is it stalemate?
- Is it a draw by insufficient material?
- Or is the game still going?

```
Position 1:
White King e1. White Queen b6. Black King a6. Black to move.
→ Stalemate! Queen controls all escape squares. DRAW.

Position 2:
White King e1. White Queen b6. Black King a5. Black to move.
→ NOT stalemate. King can move to a4, b4, b5. Game continues.

Position 3:
White King e1. White Bishop c1. Black King e8.
→ Insufficient material. DRAW.

Position 4:
White King e1. Black King e8. No other pieces.
→ Insufficient material. DRAW.

Position 5:
White King e1. White Knight g1. Black King e8.
→ Insufficient material. DRAW.

Position 6:
White King e1. White Queen d1. Black King e8. Black Rook e2. White to move.
White plays Qxe2+. Black plays Ke8. White plays Qe2+?? (repeats). 
After Qd1+ Ke8 Qe2+ Ke8 three times → Threefold repetition! DRAW.

Position 7:
White King e1. White Queen e2. Black King e8. Black Rook e7. White to move.
→ Game continues. White can capture the Rook or deliver check.
```

[Checklist for students:]
- [ ] I checked if the King is in check.
- [ ] I checked if the player has any legal moves.
- [ ] I identified stalemate when the King is not in check but cannot move.
- [ ] I identified insufficient material when neither side can force checkmate.
- [ ] I can explain why stalemate is different from checkmate.

### Step 4: Independent Practice — Escape Artist Challenge (10-15 min)

**Challenge:** Set up this position:

```
White: King on h1, Queen on g2.
Black: King on h3, Pawn on g3.
```

**Task 1:** It is Black to move. Black plays ...g3-g2 (Pawn advances one square). Now it is White to move. White wants to checkmate but must be careful! If White plays Qxg2#, is that checkmate? Let's check: Queen on g2 attacks h3 (King's square) and h1, g1, f1, f2, f3, h2. The Black King on h3 is in check. Can the King move to h4? Yes, if empty. Can the King capture the Queen? No — the King would move into check (adjacent to the White King on h1? No, h1 to h3 is two squares. But Queen on g2 is adjacent to h3! The King cannot capture a protected piece). Is there any piece that can block? No. So if h4 is available, the King escapes → NOT checkmate.

Let me make a proper stalemate puzzle:

```
Revised Position:
White: King on a8, Queen on b7.
Black: King on a6. No other pieces.
```

**Task:** It is Black to move. Verify that this is stalemate. Now imagine you are White with Queen + King vs. lone King. You want to WIN, not draw. Move the Queen from b7 to a DIFFERENT square so that next move you can deliver checkmate. 

**Hint:** Put the Queen one knight's move away from the enemy King, controlling escape squares but leaving the King a "temporary" escape square that leads into a mating net.

**One solution:** Queen to b6. Now the Black King on a6 is in check from Qb6 (Queen attacks a6 along the rank). Black must move. The King can go to a5 or b5 (if safe). After Ka5, White plays Qb5# (Queen on b5 attacks a5, a6, a4, b4, c4, c5, c6, b6). The King has no escape. CHECKMATE.

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Student correctly identifies stalemate vs. checkmate | Understands both conditions |
|| Student modifies the position to avoid stalemate | Understands winning technique |
|| Student delivers actual checkmate | Demonstrates the skill of converting an advantage |

[Student checklist:]
- [ ] I set up the position correctly.
- [ ] I confirmed the starting position was stalemate.
- [ ] I moved the Queen to a better square.
- [ ] I delivered checkmate on the next move.
- [ ] I explained the difference between stalemate and checkmate.

### Step 4: Sharing & Feedback (5-10 min)

Learners present their stalemate-to-checkmate transformations. Use the critique framework:
- **What's working:** "You saw that the original position was stalemate and found a way to win instead — that is exactly the skill that separates beginners from improvers!"
- **One thing to try:** "Try setting up a position where you are losing badly but can force stalemate. That is called "swindling" a draw, and it is one of chess's greatest skills."
- **Question:** "If you are winning by a lot of material, is a draw good or bad? If you are losing, is a draw good or bad? Why does the same result mean different things?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Identifying Draw Types | Cannot identify any draw | Identifies stalemate but confuses with checkmate | Correctly identifies all four draw types | Explains which draw type is most common in which phase of the game |
|| Stalemate vs. Checkmate | Thinks stalemate is a win for the attacker | Identifies stalemate as a draw but cannot explain why | Clearly distinguishes all three outcomes (check, checkmate, stalemate) | Creates positions that transition from checkmate to stalemate with one piece moved |
|| Board/Tool Use | Cannot set up positions | Sets up with help | Sets up independently and verifies draw conditions | Uses score sheets to track the 50-move rule |

---

## Extended Activity

**Draw Diary:** Students find three famous games that ended in draws (use a database or teacher-provided examples). They write one sentence about why each draw happened.

**Physical Activity:** "Stalemate Statues" — one student is the "King" and must freeze in place. Other students are "pieces" who surround them so they cannot move. If the "King" is not "in check" (nobody touches them), they yell "STALEMATE!"

**Digital Activity:** Practice identifying stalemate vs. checkmate on lichess.org/learn.

**Teaching Activity:** Teach a family member all four ways a game can be drawn and quiz them with positions.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Focus only on stalemate vs. checkmate; save threefold repetition and 50-move rule for later | Introduce the concept of "perpetual check" — forcing threefold repetition to escape a losing position |
|| Use physical barriers (books, blocks) to show "no legal moves" | Challenge them to set up a position where a player forces stalemate from a losing position |
|| Color-code: green = checkmate (game over, winner), yellow = stalemate (draw), red = game continues | Ask them to explain why King + two Knights vs. King is technically a draw but King + Bishop + Knight vs. King can win |

---

## Teacher Reflection

- [ ] Did learners understand stalemate vs. checkmate?
- [ ] Was the "draw as escape" metaphor engaging?
- [ ] Could learners identify all four draw types?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Draws / Endgame Rules | 0–400 |
|| Chess.com Lessons | Draws & Stalemate | Basics |
|| Skill Tier | Pawn Tier | ♙ Foundation |