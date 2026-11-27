# Lesson Plan 24: Pawn Structures

> **Module Reference:** Prompt 24 — lesson-24-pawn-structures.md  
> **Duration:** 70 min  
> **Age Group:** 10-14  
> **Chess Skill Level:** ♗ Bishop Tier  
> **Tool:** Physical board + PGN viewer / analysis

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Identify** pawn chains, pawn islands, and passed pawns.
2. **Evaluate** which side has the better pawn structure.
3. **Value** structure — understanding that pawns are the bones of a position; everything else hangs on them.

## Key Inquiry Question

> Why do grandmasters say pawns are the soul of chess — and how do these little pieces shape the entire battlefield?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer showing positions with different pawn structures
- Printed diagrams of pawn chains, islands, and passed pawns
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Pawn Structures entry

---

## Chess Persona: The Pawn

**Piece:** Pawn  
**Value:** 1  
**Movement:** One square forward (two on first move), captures diagonally  
**Persona Trait:** The Skeleton of the Position  
**Why this piece?** The Pawn is the only piece that cannot move backward. Once placed, a pawn structure is permanent — it determines where pieces belong, which diagonals are open, and which squares are weak. The Pawn teaches us that foundations matter: build them carefully because you cannot take them back.  
**Historical Note:** Philidor, the 18th-century French chess genius, famously wrote: "Pawns are the soul of chess." He was the first player to systematically study pawn structures and demonstrate that pawn chains, not just piece play, decide the outcome of games.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show two positions on the board — one with a beautiful pawn chain pointing at the enemy king, and one with scattered, disconnected pawns. Ask which army looks stronger.

- *What do you notice about the pawns in the first position?* (They are connected in a chain, supporting each other like a wall.)
- *What about the second position?* (The pawns are alone, with gaps between them. They cannot protect each other.)
- *Which side would you rather have?* (The chained pawns — they create a solid foundation for an attack.)

Explain: *Today the Pawn shows us why grandmasters call it "the soul of chess." Pawns don't just move — they build the battlefield itself.*

### Step 1: Concept Introduction — Pawn Chains, Islands, and Passed Pawns (15-20 min)

**Pawn Chains**

A pawn chain is a diagonal line of pawns protecting each other. The base of the chain is the weakest point — attack the base and the whole chain collapses.

```
White pawn chain:
Pawns on d4, e5, f4
The chain points toward h7 — White should attack on the kingside!

Black pawn chain:
Pawns on d5, e6, f7
The chain points toward c3 — Black should attack on the queenside!
```

**Pawn Islands**

A pawn island is a group of pawns connected horizontally (on adjacent files). More islands = more weaknesses.

```
White pawns: a2, b2, c2, d4, e5, f4, g3, h2
Islands: {a2,b2,c2}, {d4,e5,f4}, {g3}, {h2} = 4 islands

Black pawns: a7, b7, c6, d5, e6, f7, g7, h7
Islands: {a7,b7}, {c6,d5,e6}, {f7,g7,h7} = 3 islands
```

**Passed Pawns**

A passed pawn has no enemy pawns in front of it on the same file or adjacent files. It is a candidate to become a Queen.

```
White has a passed pawn on d5
Black pawns are on a7, b6, e7, f7, g6, h7
No black pawn can stop d5 from advancing — it is PASSED
```

**Key teaching point:** Pawns determine the "terrain" of the battle. Knights need outposts, bishops need open diagonals, rooks need open files — and all of these depend on pawn structure.

### Step 2: Guided Practice — Structure Analysis (15-20 min)

Set up the following position and analyze together:

```
White: Ke1, Qd1, Ra1, Rh1, Bc1, Bf1, Nb1, Ng1
Pawns: a2, b2, c2, d4, e5, f2, g2, h2

Black: Ke8, Qd8, Ra8, Rh8, Bc8, Bf8, Nb8, Ng8
Pawns: a7, b7, c7, d6, e7, f7, g7, h7
```

[Checklist for students:]
- [ ] I can draw White's pawn chain and identify its base
- [ ] I can count Black's pawn islands
- [ ] I can identify if either side has a passed pawn
- [ ] I can predict which side of the board each side should attack

**Questions to discuss:**
- White's pawn chain (d4-e5) points toward which side? (Kingside — White should play f4, g4, h4 and attack!)
- Where is Black's chain? (d6-e7) Which side does it point toward? (Queenside — Black should play ...c5 and attack there!)

### Step 3: Independent Practice — Structure Detective (10-15 min)

**Challenge:** Students are given 3 positions with different pawn structures. They must:
1. Count the pawn islands for each side
2. Identify any passed pawns
3. Recommend which side of the board each side should attack

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
||| Position 1: French Defense structure (White: d4,e5 vs Black: d5,e6) | White attacks kingside, Black attacks queenside |
||| Position 2: Isolated queen pawn (White: d4 pawn alone) | Black should blockade d4; White should use the open e-file |
||| Position 3: Closed center (pawns on d4,e5 vs d5,e4) | Knights are stronger than bishops; look for pawn breaks |

[Student checklist:]
- [ ] I counted pawn islands for both sides in each position
- [ ] I identified all passed pawns
- [ ] I recommended an attack direction based on the pawn chain direction
- [ ] I explained WHY the structure favored that plan

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your count of pawn islands is correct — you can see that White's scattered pawns create more targets for Black."
- **One thing to try:** "Think about what happens if White pushes f4-f5 in the French position — does it open lines for the attack, or does it create weaknesses?"
- **Question:** "If you had a passed pawn on d6 but your king was exposed, would you push it to queen or use it as a distraction?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
||| Pawn chains | Cannot identify a chain | Identifies chains but not direction | Identifies chains AND attack direction | Plans an attack based on the pawn chain's orientation |
||| Pawn islands | Cannot define "island" | Counts islands with help | Counts islands independently | Uses island count to evaluate who has the better endgame |
||| Passed pawns | Cannot define "passed pawn" | Identifies obvious passed pawns | Identifies all passed pawns AND explains their value | Evaluates whether a passed pawn is strong or blockaded |
||| Board/Tool Use | Cannot use board/tool | Basic use of board | Competent use with notation | Expert use + sets up positions from FEN on analysis board |

---

## Extended Activity

**Structure Journal:** Over one week, students play 3 games and draw the pawn structure after move 20. For each game, they write:
1. How many pawn islands each side has
2. Whether there are any passed pawns
3. Which side of the board they attacked and why

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
||| Use colored poker chips to mark pawn islands visually | Ask them to explain the "pawn break" concept — how to break a chain with a well-timed pawn push |
||| Focus only on pawn chains, not islands or passed pawns | Challenge them to analyze a famous game (e.g., Capablanca vs. Marshall) for pawn structure lessons |
||| Pair with a stronger student who can guide the counting | Give them a position and ask them to find the BEST pawn break |

---

## Teacher Reflection

- [ ] Did learners understand that pawn structure is permanent and determines piece placement?
- [ ] Was the Pawn persona engaging? Did they connect it to the idea of building foundations?
- [ ] Could learners identify chains, islands, and passed pawns in a new position?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
||| USCF / FIDE | Strategy / Pawn Play | 800–1200 |
||| Chess.com Lessons | Strategy | Intermediate |
|| | Skill Tier | Bishop Tier | Pawn → King progression |
