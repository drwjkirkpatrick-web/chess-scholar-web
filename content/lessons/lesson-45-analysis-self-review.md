# Lesson Plan 45: Analysis & Self-Review

> *The Queen Tier — Mastery & Synthesis*

---

# Lesson Plan 45: Analysis & Self-Review

**Module Reference:** Prompt 45 — lesson-45-analysis-self-review.md  
**Duration:** 80 min  
**Age Group:** 14-16  
**Chess Skill Level:** ♕ Queen Tier  
**Tool:** PGN viewer + analysis engine

---

## Learning Outcomes

By the end of this lesson, the learner should be able to:
1. **Analyze** your own games to find mistakes and missed opportunities.
2. **Use** an engine to check analysis without becoming dependent on it.
3. **Value** honesty — understanding that the only way to improve is to admit your mistakes.

## Key Inquiry Question

> How do you learn more from your losses than your wins — and why is engine analysis a tool, not a crutch?

---

## Resources

- PGN viewer + analysis engine (Stockfish, Lichess, Chess.com)
- Physical chess board for manual replay
- Printed "analysis worksheet" for each student
- Reference: `research/chess-concepts.md` — Game Analysis entry

---

## Chess Persona: The Rook

**Piece:** Rook  
**Value:** 5 points  
**Movement:** Any number of squares horizontally or vertically  
**Persona Trait:** Honest Evaluation  
**Why this piece?** The Rook is direct and unforgiving. He sees straight lines — there are no tricks, no illusions, no hidden diagonals. In analysis, the Rook is the perfect mentor: he forces you to look at the truth of the position, not what you hoped would happen. The Rook teaches that self-deception is the enemy of improvement.  
**Historical Note:** The first comprehensive game collection for study was the *Handbuch des Schachspiels* by Paul Rudolf von Bilguer and Tassilo von Heydebrand und der Lasa, published in 1843. It contained thousands of annotated games and established the tradition of post-mortem analysis. The advent of computer engines in the 1980s — first with Chessmaster, then Fritz, then today's Stockfish and Lc0 — revolutionized analysis by revealing objective truth, but also sparked debate: does engine analysis help players think, or does it replace thinking?

---

## Lesson Development

### Introduction (5-10 min)

**Hook:** Show two positions from the same game — one where a student thought they were winning, and the engine evaluation says they were losing. Ask: "How could you be so wrong about your own position?"

```
Student's perception: "I have a strong attack."
Engine evaluation: -2.3 (Black is much better)
FEN: r2q1rk1/ppp2ppp/2n1pn2/1B1p4/3P1b2/2P2N2/PP1N1PPP/R2Q1RK1 w - - 0 1
```

- *Why do we misjudge our own positions?* — *We see our threats and ignore our opponent's; we remember our plan and don't update when the position changes.*
- *Can the engine make you a worse player?* — *Yes — if you just look at the evaluation without understanding why.*
- *What is the right way to use an engine?* — *Analyze first by yourself for 20 minutes, then check with the engine.*

Explain: *Today we learn how to review our games like a grandmaster — with honesty, structure, and the engine as a consultant, not a boss. The Rook is our guide because he sees straight to the truth.*

### Step 1: Concept Introduction — The Analysis Method (15-20 min)

Teach the "Rook Method" of game analysis:

**Phase 1: Emotional Cool-Down (10 minutes after the game)**
- Do not analyze immediately after winning or losing. Emotions distort judgment.

**Phase 2: Replay Without Engine (15-20 minutes)**
- Play through the game move by move on a physical board.
- At each move, ask: "What was I thinking? What did I miss?"
- Mark moves where you felt uncertain or where the opponent surprised you.

**Phase 3: Identify Critical Moments (5 minutes)**
- Find the 3-5 moments that decided the game: blunders, missed tactics, strategic turning points.

**Phase 4: Engine Check (10-15 minutes)**
- Only now turn on the engine.
- For each critical moment, compare your thoughts to the engine's top move.
- Ask: "Why is the engine move better? What principle does it illustrate?"
- Write ONE lesson learned per critical moment.

**Phase 5: Pattern Storage (ongoing)**
- Turn your mistakes into flashcards or puzzle positions.
- Review them weekly.

Example analysis of a critical moment:

```
Game: Student vs Opponent
Move 18: Student played Bxf7+?
Engine says: 18.Rad1 is +1.2; 18.Bxf7+ is 0.0

Student thought: "I'm winning a pawn."
Truth: After 18...Kxf7 19.Qh5+ Kg8, White has no follow-up. The Bishop is traded for a pawn and White's initiative evaporates.
Lesson: "Don't capture without a plan. Ask: what happens next?"
```

**Key teaching point:** *The engine tells you WHAT is best. Your brain must figure out WHY. If you skip the "why," you learn nothing.*

### Step 2: Guided Practice — Live Analysis (15-20 min)

Provide a PGN of a short student-level game (8-15 moves of theory, then a decisive mistake). Students analyze in pairs:

```
[Event "Practice Game"]
[White "Student"]
[Black "Opponent"]

1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Nb8 10.d4 Nbd7 11.Nbd2 Bb7 12.Bc2 Re8 13.Nf1 Bf8 14.Ng3 g6 15.Bg5 h6 16.Bd2 Bg7 17.Qc1 Kh7 18.b3 Rc8 19.Bb1 c5 20.d5 c4 21.b4 Nxe4 22.Bxe4 f5 23.Bc2 Nf6 24.Nh4 Kh8 25.f3 Nxd5 26.Qd1 Ne3 27.Bxe3 Rxe3 28.Qd2 Qe7 29.Rf1 Rce8 30.Rf2 d5 31.Nf3 d4 32.cxd4 exd4 33.Nxd4 Bxd4 34.Qxd4 R8e5 35.Rd1 Qc5 36.Qxc5 Rxc5 37.Rd6 Kg7 38.Rxa6 Rc7 39.Rd2 Bd5 40.Rd6 Be6 41.Rd4 Rd7 42.Rxd7+ Bxd7 43.Rxd7+ Kh8 44.Rd6 Rxc2 45.Rxg6 Rxa2 46.Rxh6+ Kg7 47.Rb6 Rb2 48.Rxb5 Rxb4 49.Rxb4 cxb4 50.h4 b3 51.Kf2 b2 52.Ke3 b1=Q 53.Kd4 Qb5 54.Kc3 Qc5+ 55.Kb3 Qd4 56.Ka3 Qc4 57.Kb2 f4 58.Ka3 Qc2 59.Bb1 Qxb1 60.g4 Qa2# 0-1
```

Walk through moves 20-26 together. Identify: 20.d5? (closes the center prematurely), 21.b4? (weakens c4), 22.Bxe4? (opens the f-file for Black), 26.Qd2?? (loses to ...Ne3).

[Checklist for students:]
- [ ] I replayed the game on a physical board before opening the engine
- [ ] I identified at least 3 critical moments where I was unsure
- [ ] I checked my analysis with the engine and found the objective best move
- [ ] I wrote one "lesson learned" for my biggest mistake

### Step 3: Independent Practice — Analyze Your Own Game (10-15 min)

**Challenge:** Students bring a recent game (online or over-the-board). They apply the Rook Method:
1. Replay the game manually
2. Identify 3 critical moments
3. Check with the engine
4. Write lessons learned

||| Position / Criterion | Success Metric |
|||------------------------|------------------|
|| Critical moments identified | 3/3 |
|| Engine comparison completed | Yes |
|| Lessons written | 2+ sentences per moment |

[Student checklist:]
- [ ] I did not open the engine until after manual replay
- [ ] I identified the opening, middlegame, and endgame phases
- [ ] I found my worst mistake and the engine's best alternative
- [ ] I translated the engine move into a principle I can remember

### Step 4: Sharing & Feedback (5-10 min)

Students share one lesson learned. Use the critique framework:
- **What's working:** "Your analysis of move 22 was honest — you admitted you were greedy for the pawn and ignored the open f-file. That self-awareness is the mark of a improving player."
- **One thing to try:** "Next time, also analyze your opponent's mistakes. Why did they let you back into the game?"
- **Question:** "If you could only remember one lesson from this game for the rest of your chess career, which would it be?"

---

## Assessment

||| Criteria | BE (Below Expectation) | AE (Approaching) | ME (Meets) | EE (Exceeds) |
|||----------|------------------------|-------------------|------------|--------------|
||| Manual analysis | Skips manual replay; goes straight to engine | Replays game but misses critical moments | Replays game and identifies key moments before engine check | Replays game and predicts engine's top move in critical positions |
||| Engine use | Becomes dependent; copies engine lines | Uses engine but doesn't understand why | Uses engine to verify and learn principles | Uses engine as a sparring partner; explores "what if" variations independently |
||| Honest reflection | Blames opponent or luck | Acknowledges some mistakes | Takes full responsibility for all critical errors | Turns mistakes into a systematic improvement plan |

---

## Extended Activity

**The Mistake Journal:** Create a dedicated notebook or digital document. After every game this month, write: (1) The opening played, (2) The biggest mistake, (3) The principle violated, (4) The corrected plan. Review the journal weekly before playing. Bring your top 3 recurring mistakes to the next lesson.

---

## Differentiation

||| For learners who need more support | For advanced learners |
|||-------------------------------------|----------------------|
||| Analyze a game together as a class first | Analyze a master game (e.g., Fischer vs Spassky 1972) using the same method |
||| Focus on finding just one critical moment | Study the concept of "candidate moves" — why the engine's 2nd and 3rd choices matter |
||| Provide a printed analysis template with prompts | Compare engine evaluations between Stockfish and Lc0 to understand different "styles" of objectivity |

---

## Teacher Reflection

- [ ] Did learners understand that the engine is a tool, not a replacement for thinking?
- [ ] Was the Rook persona engaging? Did they connect Honest Evaluation to self-review?
- [ ] Could learners analyze a game manually before using the engine?
- [ ] What would I change next time?

---

## Elo & Skill Cross-Reference

||| Framework | Strand | Level |
|||-----------|--------|-------|
||| USCF / FIDE | Analysis / Self-Improvement | 1600–2000 |
||| Chess.com Lessons | Strategy | Advanced |
||| Skill Tier | Queen Tier | Mastery & Synthesis |
