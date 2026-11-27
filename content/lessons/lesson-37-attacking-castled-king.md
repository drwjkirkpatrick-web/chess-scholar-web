# Lesson Plan 37: Attacking the Castled King

> **Module Reference:** Prompt 37 — lesson-37-attacking-castled-king.md
> **Duration:** 80 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♖ Rook Tier (1200–1600)
> **Tool:** Physical board + analysis engine

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** when the kingside pawn shield is weak enough to attack.
2. **Create** an attack using sacrifices to open lines toward the King.
3. **Value** courage — understanding that attacking the enemy King requires both calculation and bravery.

## Key Inquiry Question

> How do you break through the wall of pawns protecting the King — and when is the right moment to sacrifice for a mating attack?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/practice
- Analysis engine (Stockfish via lichess.org/analysis)
- Printed diagrams of attacking formations (Greek Gift, rook lift, etc.)
- Optional: Raspberry Pi with browser for low-resource settings

---

## Chess Persona: The Queen

**Piece:** Queen  
**Value:** 9 points  
**Movement:** Combines Rook and Bishop — any number of squares in any direction  
**Persona Trait:** Breaking Through  
**Why this piece?** The Queen is the ultimate attacking piece. In attacks on the castled king, the Queen often delivers the final blow — but only after other pieces (knights, bishops, rooks) have opened the lines. The Queen teaches that power is most effective when it has a clear path.  
**Historical Note:** The "Greek Gift" sacrifice (Bxh7+) was named not by the Greeks but by European chess writers who associated it with classical antiquity. The pattern was known by Greco in the 1600s. In 1912, Frank Marshall played his famous "Gold Coins Game" where spectators allegedly threw gold coins onto the board after his queen sacrifice against Levitsky.

---

## Lesson Development

### Introduction (10 min)

**Hook:** Show the famous "Opera Game" (Morphy vs. Duke and Count, 1858) and stop before the final combination. Ask students: "White sacrifices a knight. Why?"

*Hook questions:*
- "If your opponent has castled kingside, what tells you their king is actually unsafe?" *—Weak pawn structure, exposed diagonals, pieces that have left the kingside undefended.*
- "Why would you give up a piece to expose the king?" *—Because a mating attack is worth more than material.*
- "What's more important: having more pieces, or having open lines to the king?" *—Open lines. Material doesn't matter if you're delivering checkmate.*

Explain: *Today we learn to attack the castled king. The Queen is our weapon — but she needs her army to clear the way first.*

### Step 1: Concept Introduction — The Greek Gift and Classic Patterns (20 min)

**The Greek Gift Sacrifice (Bxh7+)**

```
Position after Black has castled kingside:
White: Qd1, Bc4, Nf3, Ng5, Rd1, pawns on d4, e4, f2, g2, h2
Black: O-O, Bc5, Nc6, pawns on d5, e6, f7, g7, h7

1. Bxh7+! Kxh7
2. Ng5+ Kg8 (or Kg6)
3. Qh5 (threatening Qh7#)
3...Re8
4. Qxf7+ Kh8
5. Qh5+ Kg8
6. Qh7+ Kf8
7. Qh8#
```

**Key Ingredients for the Greek Gift:**
- Knight ready to jump to g5
- Queen able to reach h5
- A rook or other piece to follow up
- The f7 pawn undefended or weak

**Other Classic Sacrifices:**

**The Rook Lift (Rook to g3 or h3):**
```
White: Ra1, Qd1, Bc4, Nf3, pawns on e4, d4, f2, g2, h2
Black: O-O

1. Rf1-e1 (preparing)
2. Re3! (rook lift)
2...d5
3. Rh3! (threatening Rxh7 and Qh5)
```

**Key teaching point:** Sacrifices to expose the king require calculation. You must verify that you have follow-up pieces ready to exploit the opened lines. The sacrifice itself is only as good as the attack that follows.

[Student checklist:]
- [ ] I know the ingredients for a Greek Gift sacrifice
- [ ] I can identify when a rook lift creates attacking chances
- [ ] I understand that sacrifices must have follow-up — not just hope

### Step 2: Guided Practice — Building the Attack (20 min)

**Step-by-Step: From Position to Attack**

**Position:**
```
White: Qd1, Bb3, Nf3, Nc3, Ra1, Rh1, pawns on d4, e4, f2, g2, h2
Black: O-O, Be7, Nc6, Nd7, Ra8, Rf8, pawns on d5, e6, f7, g7, h7
```

**Phase 1: Recognize the weakness**
- Black's knight on d7 blocks the queen's defense of h7
- White's bishop on b3 aims at f7
- White's knight on f3 can reach g5

**Phase 2: Open lines**
- 1. e5! (forcing open lines)
- 1...dxe5 2. dxe5 (opening the d-file)

**Phase 3: Sacrifice and deliver**
- 2...Ndxe5 3. Bxh7+! Kxh7 4. Qh5+ Kg8 5. Qh7#

**Key teaching point:** Every successful king attack follows a pattern: identify weakness → open lines → sacrifice → follow through. Skipping any step leads to failed attacks and lost material.

[Checklist for students:]
- [ ] I identified the weakness in the position
- [ ] I found the move to open lines
- [ ] I calculated the sacrifice and follow-up

### Step 3: Independent Practice — Attack Creation Challenge (20 min)

**Challenge:** Students receive 4 positions where the opponent has castled kingside. They must determine if an attack is possible and calculate the winning sequence.

**Position 1 (Greek Gift available):**
```
White: Qd1, Bc4, Nf3, Ng5, Rd1
Black: O-O, Nc6, Be7, pawns on d5, e6, f7, g7, h7

Hint: Look at Bxh7+ and Ng5+.
Solution: 1. Bxh7+! Kxh7 2. Ng5+ Kg8 3. Qh5 Re8 4. Qh7+ Kf8 5. Qh8#
```

**Position 2 (Rook lift needed):**
```
White: Qd2, Bg5, Nf3, Rd1, Ra1
Black: O-O, Be7, Nc6, pawns on d5, e6, f7, g6, h7

Hint: The g-pawn has moved — is h7 weak?
Solution: 1. Bxf6 Bxf6 2. Qh6! (threatening Qg7#) 2...Re8 3. Ng5! Bxg5 4. Qxg5+ Kf8 5. Qh6+ Kg8 6. Qxh7#
```

**Position 3 (No attack — too solid):**
```
White: Qd1, Be2, Nf3, O-O
Black: O-O, Be7, Nf6, d5, pawns on f7, g6, h7, Nc6

Answer: No immediate sacrifice works. Black's kingside is solid.
```

||| Position | Success Metric |
|||------------------------|------------------|
|| Greek Gift | Correctly execute sacrifice sequence |
|| Rook Lift / Other | Find the correct attacking formation |
|| Solid Defense | Recognize when no attack exists |

[Student checklist:]
- [ ] I identified which positions had attacking chances
- [ ] I calculated at least 3 moves deep for each attack
- [ ] I recognized when the position was too solid to attack

### Step 4: Sharing & Feedback (10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your calculation in Position 1 was clean — you saw the mate in 5 after Bxh7+."
- **One thing to try:** "In Position 2, try looking for quiet moves (like Qh6) before looking for sacrifices — sometimes the threat is stronger than the execution."
- **Question:** "What would Black need to have on the kingside to make the Greek Gift NOT work?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Identify Attack Chance | Cannot see kingside weakness | Identifies with prompting | Recognizes attack independently | Evaluates subtle weaknesses (moved pawns) |
|| Calculate Sacrifices | Cannot calculate 2+ moves | Calculates with help | Calculates sacrifice + follow-up | Finds non-obvious sacrifices |
|| Board/Tool Use | Cannot verify with engine | Basic engine use | Verifies lines competently | Uses engine to explore defensive resources |

---

## Extended Activity

**Attack Collection:** Find 3 famous games where a player sacrificed to expose the enemy king. Write the key moves and explain why the sacrifice worked. Suggested games: Morphy's Opera Game, Marshall's Gold Coins Game, Fischer's Game of the Century (Byrne vs. Fischer, 1956).

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Start with mate-in-2 and mate-in-3 puzzles only | Study the "Immortal Game" (Anderssen vs. Kieseritzky, 1851) |
|| Provide the first move of the combination | Analyze modern attacking games (Nakamura, Tal) |
|| Use diagrams with arrows showing attacking lines | Create original attacking positions and test them on classmates |

---

## Teacher Reflection

- [ ] Did learners understand when a kingside attack is possible?
- [ ] Was the Queen persona (breaking through, power with purpose) engaging? Did they connect it to the attacking concept?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Tactics / Attack | 1200–1600 |
|| Chess.com Lessons | Tactics | Intermediate |
|| Skill Tier | Rook Tier | Rook Tier (Lessons 31–40) |