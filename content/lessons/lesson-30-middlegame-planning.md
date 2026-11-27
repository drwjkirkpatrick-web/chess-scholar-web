# Lesson Plan 30: Planning in the Middlegame

> **Module Reference:** Prompt 30 — lesson-30-middlegame-planning.md  
> **Duration:** 70 min  
> **Age Group:** 10-14  
> **Chess Skill Level:** ♗ Bishop Tier  
> **Tool:** Physical board + PGN viewer / analysis

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Create** a plan from a middlegame position: identify weaknesses, find targets, choose an attack or improvement.
2. **Explain** the difference between having a plan and making random moves.
3. **Value** strategy — understanding that a mediocre plan is better than no plan at all.

## Key Inquiry Question

> How do you create a plan when there are no obvious captures — and why is a bad plan better than no plan?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/learn
- PGN viewer showing middlegame positions from master games
- Printed planning worksheet with step-by-step questions
- Optional: Raspberry Pi with browser for low-resource settings
- Reference: `research/chess-concepts.md` — Middlegame Planning entry

---

## Chess Persona: The Queen

**Piece:** Queen  
**Value:** 9  
**Movement:** Combines Rook (ranks/files) and Bishop (diagonals)  
**Persona Trait:** Creating a Plan  
**Why this piece?** The Queen is the most powerful piece because she can do everything — but that power is wasted without a plan. A queen running around the board making random checks is usually losing. A queen positioned to support a long-term plan is terrifying. The Queen teaches us that raw power is nothing without direction. Strategy is the art of pointing your strongest weapons at the right targets.  
**Historical Note:** In 1851, Adolf Anderssen played the "Immortal Game" against Lionel Kieseritzky. In this game, Anderssen sacrificed his queen — not because he had to, but because his PLAN required it. The queen sacrifice cleared the way for a checkmate that used only two knights and a bishop. The game is celebrated not for the sacrifice itself, but for the VISION that made the sacrifice possible.

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show a middlegame position with no captures available and no obvious tactics. Ask: "What do you do when there is nothing to take?"

- *Do you just move a piece to a random safe square?* (No — that is how you lose.)
- *Do you wait for your opponent to make a mistake?* (No — good opponents don't make random mistakes.)
- *What do grandmasters do in these positions?* (They make a PLAN. They improve their worst piece, attack a weakness, or prepare a pawn break.)

Explain: *Today the Queen teaches us that power without direction is chaos. We will learn the four-step planning method that turns any position into a roadmap.*

### Step 1: Concept Introduction — The Four-Step Planning Method (15-20 min)

**Step 1: Evaluate the Position**

Ask four questions:
1. Who has more space?
2. Who has better development?
3. Are there any pawn weaknesses?
4. Is the King safe on both sides?

**Step 2: Find the Weakness**

Every plan needs a target. Look for:
- Weak pawns (doubled, isolated, backward)
- Weak squares (squares your opponent cannot defend with pawns)
- Exposed king (no pawn shield, open files nearby)
- Poor piece placement (a piece that does nothing)

**Step 3: Choose a Plan**

Common plans:
- **Attack the King:** Open files, pile up pieces, sacrifice to open lines
- **Pressure a weakness:** Put a piece on the weak square and never move it
- **Improve your worst piece:** Find the piece doing the least and give it a job
- **Pawn break:** Push a pawn to open lines for your pieces

**Step 4: Calculate the First Move**

Once you have a plan, find the specific move that starts it. Do not play the plan in your head — play it on the board one move at a time.

```
Example Position:
White: Kg1, Qd1, Ra1, Rf1, Bc1, Be2, Nb1, Nd4
Pawns: a2, b2, c2, d3, e4, f2, g2, h2

Black: Kg8, Qd8, Ra8, Rf8, Bc8, Be7, Nb8, Nd7
Pawns: a7, b7, c7, d6, e7, f7, g7, h7

Evaluation:
- White has more space (e4 vs e7)
- White has better development (knight on d4 vs d7)
- Black's d6 pawn is slightly weak
- Both kings are safe for now

Plan for White: Pressure d6, prepare e4-e5 break to open the center
First move: Re1 (prepares e5 and supports the center)
```

**Key teaching point:** A plan does not need to be perfect. It needs to be clear. Even a plan that is only 60% correct gives your moves purpose, and purposeful moves create pressure.

### Step 2: Guided Practice — Planning Together (15-20 min)

Set up the following position and build a plan together:

```
White: Kg1, Qd2, Ra1, Rf1, Bc1, Bg2, Ne2, Nf3
Pawns: a2, b2, c2, d4, e5, f2, g2, h2

Black: Kg8, Qd8, Ra8, Rf8, Bc8, Bg7, Ne8, Nf6
Pawns: a7, b7, c7, d5, e6, f7, g7, h7
```

[Checklist for students:]
- [ ] I evaluated space (White has more — e5 pawn vs e6)
- [ ] I found a weakness (Black's d5 pawn is isolated if c-pawn moves)
- [ ] I chose a plan (White should attack on the kingside with f4-f5 or pressure d5)
- [ ] I calculated the first move (Nd3-f4-g6, or Bf4 preparing f4-f5)

**Discussion:** Compare plans. Some students will want to attack the king; others will want to pressure d5. Discuss which plan is more realistic given the pawn structure.

### Step 3: Independent Practice — Plan Builder (10-15 min)

**Challenge:** Students are given 3 positions and must write a four-sentence plan for each:
1. Evaluation (one sentence)
2. Weakness/target (one sentence)
3. Plan (one sentence)
4. First move (one sentence)

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
||| Position 1: Closed center, both sides castled kingside | Plan should include a pawn break (f4 or ...f5) |
||| Position 2: Open center, white has bishop pair | Plan should use open lines and control diagonals |
||| Position 3: Black has isolated queen pawn (d5) | Plan should blockade d5, then attack it with pieces |

[Student checklist:]
- [ ] I evaluated all four factors (space, development, weaknesses, king safety)
- [ ] I identified at least one target in each position
- [ ] I wrote a clear plan sentence for each position
- [ ] I named the first move to start the plan

### Step 4: Sharing & Feedback (5-10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your plan to blockade the isolated pawn and then bring rooks to the d-file is exactly how Capablanca would have played it."
- **One thing to try:** "Instead of jumping to attack immediately, what if you improved your worst-placed piece first? Sometimes patience IS the plan."
- **Question:** "If your opponent guesses your plan and prevents it, what is your backup plan — or do you need one?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
||| Position evaluation | Cannot answer the four evaluation questions | Answers 1-2 questions | Evaluates all four factors accurately | Predicts how the position will evolve in 5 moves |
||| Finding weaknesses | Cannot find targets | Finds obvious weak pawns | Finds weak squares, exposed kings, AND poorly placed pieces | Creates a weakness by forcing the opponent to make a concession |
||| Creating a plan | Makes random moves | Has a vague idea (e.g., "attack") | Writes a specific plan with a target and method | Compares multiple plans and chooses the best one |
||| Board/Tool Use | Cannot use board/tool | Basic use of board | Competent use with notation | Expert use + plays through master game in PGN viewer to see plans in action |

---

## Extended Activity

**Plan Journal:** Students play a game and after move 15, they pause and write:
1. My evaluation of the position
2. My target
3. My plan
4. My next three moves

They compare what they planned to what actually happened and reflect on why.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
||| Provide a printed "planning worksheet" with the four questions as fill-in-the-blanks | Ask them to analyze a famous game (e.g., Capablanca vs. Tartakower, 1924) and write out Capablanca's plan at each stage |
||| Give them only ONE position to plan for, with hints about the target | Challenge them to find a position where the BEST plan is to do nothing and improve piece by piece (prophylaxis) |
||| Pair with a partner who asks each of the four evaluation questions aloud | Give them a position with no obvious plan and ask them to create one from scratch |

---

## Teacher Reflection

- [ ] Did learners understand that planning is a four-step process, not just "thinking ahead"?
- [ ] Was the Queen persona engaging? Did they connect it to direction and vision?
- [ ] Could learners write a specific plan for a given position?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
||| USCF / FIDE | Strategy / Planning | 800–1200 |
||| Chess.com Lessons | Strategy | Intermediate |
|| | Skill Tier | Bishop Tier | Pawn → King progression |
