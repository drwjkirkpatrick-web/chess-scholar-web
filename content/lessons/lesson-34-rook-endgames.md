# Lesson Plan 34: Rook Endgames

> **Module Reference:** Prompt 34 — lesson-34-rook-endgames.md
> **Duration:** 80 min
> **Age Group:** 12-14
> **Chess Skill Level:** ♖ Rook Tier (1200–1600)
> **Tool:** Physical board + analysis engine

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Play** the Lucena position (winning) and Philidor position (drawing) correctly.
2. **Explain** why rook + pawn vs rook is the most common endgame and must be learned.
3. **Value** precision — understanding that endgames are unforgiving and one mistake ruins everything.

## Key Inquiry Question

> Why do even grandmasters struggle with Rook endgames — and what makes the Lucena and Philidor positions essential?

---

## Resources

- Physical chess board (recommended) OR online board at lichess.org/practice
- Analysis engine (Stockfish via lichess.org/analysis)
- Printed diagrams of Lucena and Philidor positions
- Optional: Raspberry Pi with browser for low-resource settings

---

## Chess Persona: The Rook

**Piece:** Rook  
**Value:** 5 points  
**Movement:** Straight lines — any number of squares along ranks or files  
**Persona Trait:** Precision in Simplification  
**Why this piece?** The Rook thrives in open files and simplified positions. In the endgame, when most pieces are gone, the Rook's long-range power becomes dominant. Learning rook endgames teaches students that calculation and precision matter more than ever when material is scarce — the Rook doesn't forgive mistakes.  
**Historical Note:** The Rook's design comes from the Persian chariot (rukh). In medieval chess, it was often depicted as a siege tower or castle. The rook endgame has been called "the great equalizer" — even world champions have blundered rook endings and lost half-points they should have won or saved.

---

## Lesson Development

### Introduction (10 min)

**Hook:** Show the famous game Capablanca vs. Lasker, 1921, where Capablanca demonstrated flawless rook endgame technique to win the world championship. Or show a recent grandmaster game where a winning rook endgame was drawn due to one careless move.

*Hook questions:*
- "Why do players with 2700+ ratings still study rook endgames every week?" *—Because rook + pawn vs rook is the most common endgame, and even grandmasters make mistakes here.*
- "What makes rook endgames harder than they look?" *—The defender's rook can give endless checks, and one wrong move can turn a win into a draw or a draw into a loss.*
- "If you had a rook and pawn vs a rook, would you know if it's winning?" *—Most players don't — but after today, you will.*

Explain: *Today we'll learn the two most important rook endgame positions: the Lucena (how to win) and the Philidor (how to draw). The Rook is our guide — precise, patient, and unforgiving.*

### Step 1: Concept Introduction — The Lucena Position (20 min)

**The Lucena Position: Building the Bridge**

The Lucena is the winning method in rook + pawn vs rook when the attacking king has reached in front of its pawn (on the promotion file).

```
White: Ka1, Ra6, Pa7
Black: Ka8, Rh1
White to move

The key idea: White must "build a bridge" for the king.
1. Rc6! (preparing the bridge)
1...Rh1+
2. Kb2 Rh2+
3. Kb3 Rh3+
4. Kb4 Rh4+
5. Kb5 Rh5+
6. Rc5! (the bridge — blocking the checks)
6...Rxc5+
7. Kxc5 and the pawn promotes.
```

**Key teaching point:** The Lucena position requires the attacking rook to cut off the defending king and create a "bridge" for its own king to shelter from checks. The rook moves to the 4th or 5th rank to interpose and stop the endless checks.

**The Long Road:** If the defending king is cut off by one or more files, the attacker must first approach with the king, then use the rook to build the bridge. Students should practice the sequence until it feels automatic.

[Student checklist:]
- [ ] I can set up the Lucena position on my board
- [ ] I understand what "building the bridge" means
- [ ] I can play through the Lucena win without looking at the answer

### Step 2: Guided Practice — The Philidor Position (20 min)

**The Philidor Position: Drawing from Behind**

The Philidor is the drawing method when the defending side's king has not yet reached in front of the pawn. The defender keeps the rook on the 3rd rank (or 6th rank for Black) and waits.

```
White: Ke6, Rh5, Pf5
Black: Ke8, Ra8
Black to move (defending)

1...Ra6! (checking from the side)
2. Kd5 Ra5+!
3. Kd6 Ra6+!
4. Kc7 Ra7+
5. Kb6 Ra6+!
6. Kc7 Ra7+ (perpetual checks — draw)
```

**The Alternative Philidor (Third Rank Defense):**

```
White: Kg6, Rf7, Pf5
Black: Kg8, Rh8

Black waits with 1...Ra8 or 1...Rb8 — keeping the rook on the 3rd rank until White pushes the pawn. When White plays f6, Black switches to the side-checking method above.
```

**Key teaching point:** The Philidor defense requires patience. The defender keeps the rook on the third rank to prevent the attacking king from approaching, then switches to side checks once the pawn advances. If the defender gets their king in front of the pawn, it's usually a draw.

[Checklist for students:]
- [ ] I understand why the rook must stay on the 3rd rank in the Philidor
- [ ] I can switch from the 3rd rank to side checks when the pawn advances
- [ ] I recognize when my king can reach in front of the pawn for a draw

### Step 3: Independent Practice — Lucena vs Philidor Challenge (20 min)

**Challenge:** Students receive 5 positions. For each, they must determine if it is a Lucena (winning) or Philidor (draw) position and play the correct technique.

**Position 1 (Lucena):**
```
White: Kb1, Rb7, Pa6
Black: Ka8, Rh8
White to move — win with the bridge
```

**Position 2 (Philidor):**
```
White: Ke5, Rh5, Pf4
Black: Ke8, Ra8
Black to move — draw with checks
```

**Position 3 (Lucena variant — rook pawn):**
```
White: Kb1, Ra7, Pa6
Black: Ka8, Rh8
White to move
```

||| Position | Success Metric |
|||------------------------|------------------|
|| Lucena Position 1 | Build the bridge and promote |
|| Philidor Position 2 | Draw with side checks or 3rd rank |
|| Lucena Rook-Pawn | Recognize this is often drawn |

[Student checklist:]
- [ ] I identified whether each position was Lucena or Philidor
- [ ] I played the correct technique for each
- [ ] I used the analysis engine to verify my answers

### Step 4: Sharing & Feedback (10 min)

Learners present their solutions or discuss positions. Use the critique framework:
- **What's working:** "Your king march in the Lucena was well-calculated — you didn't let the checks distract you."
- **One thing to try:** "Consider placing your rook more actively before building the bridge — sometimes you need to cut off the enemy king first."
- **Question:** "What would happen if the defender's rook had access to the promotion square? Would the Lucena still work?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
||----------|------------------------|-------------------|------------|--------------|
|| Lucena Technique | Cannot build the bridge | Builds bridge with hints | Plays Lucena independently | Explains why the bridge works |
|| Philidor Defense | Cannot find side checks | Finds checks with prompting | Draws Philidor independently | Switches between 3rd rank and side checks |
|| Board/Tool Use | Cannot use analysis engine | Basic use of engine | Competent use + verification | Expert use + explains evaluations |

---

## Extended Activity

**Rook Endgame Mastery:** Over the next week, practice 10 rook + pawn vs rook positions on lichess.org/practice. Keep a journal of which ones you found easy and which required the Lucena or Philidor technique.

---

## Differentiation

||| For learners who need more support | For advanced learners |
||-------------------------------------|----------------------|
|| Start with king and pawn vs king first | Study the Vancura position (rook pawn draw) |
|| Use only the Philidor defense first | Analyze grandmaster rook endgames from recent tournaments |
|| Pair work: one plays attacker, one defender | Study rook + two pawns vs rook endgames |

---

## Teacher Reflection

- [ ] Did learners understand the difference between Lucena and Philidor positions?
- [ ] Was the Rook persona (precision, unforgiving) engaging? Did they connect it to the endgame concept?
- [ ] Could learners complete the independent challenge?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
||-----------|--------|-------|
|| USCF / FIDE | Endgame | 1200–1600 |
|| Chess.com Lessons | Endgames | Intermediate |
|| Skill Tier | Rook Tier | Rook Tier (Lessons 31–40) |