# Complete process: NH₄OH / Triton X-100 decellularization

Working protocol adapted from **Porzionato et al., *Int J Mol Sci* 2015** (Protocol 2: trypsin–EDTA → Triton X-100 + NH₄OH), written for immersion + continuous gentle agitation. Validated in that paper on rat, rabbit, and human skeletal muscle. For ARMS xenografts this is an **experimental arm** — run QC before treating it as production-ready.

**Do not formalin-fix** any piece you plan to reseed. Storage after this process = PBS + 3% P/S at 4 °C or LN2 freezing medium ([06-storage-and-reseeding.md](06-storage-and-reseeding.md)).

---

## Timeline (about 6 days wet chemistry)

| Day | Step | Condition |
| --- | --- | --- |
| 0 | Harvest, trim to ≤3–5 mm thickness, PBS rinse, reserve native QC piece | Ice / sterile |
| 0→1 | Ultrapure water | 4 °C, **24 h** |
| 1 | Optional trypsin–EDTA | 37 °C, **1 h** |
| 1 | PBS wash | RT, several changes |
| 1→4 | **2% Triton X-100 + 0.8% NH₄OH** | 4 °C, continuous agitation, **72 h** |
| 4→6 | Ultrapure water washout | 4 °C, **48 h**, change water several times |
| 6 | PBS rinses (×3), then PBS + 3% P/S | 4 °C |
| 6+ | Optional DNase rescue if DNA QC fails | See below |
| 6–9 | ≥3 days PBS + 3% P/S before reseeding | Daily changes |
| — | QC gate, then reseed or freeze | |

---

## Stock recipes (make fresh where noted)

Work in a **fume hood** for NH₄OH. Wear eye protection and gloves.

### 0.05% trypsin + 0.02% EDTA (optional, 37 °C)

Use a commercial trypsin-EDTA that matches these percentages, or dilute lab stock in PBS / HBSS to:

- trypsin **0.05% (w/v)**
- EDTA **0.02% (w/v)**

Warm to 37 °C before use. **CONFIRM** whether your first ARMS/muscle run includes trypsin (recommended for tough muscle fiber clearance in Porzionato; skip or shorten if GAG/HS preservation is the priority).

### 2% Triton X-100 + 0.8% NH₄OH (main decell bath)

For **100 mL** bath (scale to fully cover tissue with free movement):

| Component | Amount | Notes |
| --- | --- | --- |
| Triton X-100 | **2 mL** | Viscous — pipette slowly or weigh ~2.1 g |
| Ammonium hydroxide | to **0.8% (v/v)** final | See dilution note below |
| Sterile ultrapure water | q.s. to 100 mL | Mix gently; avoid excess foam |

**NH₄OH dilution note:** Commercial “concentrated” ammonium hydroxide is often ~28–30% NH₃ (≈14.8 N). **0.8% (v/v)** means **0.8 mL concentrated NH₄OH per 100 mL** final solution if your bottle is labeled as the usual concentrated reagent. **CONFIRM** the % on your bottle and calculate so the bath is 0.8% v/v of that stock as used in Porzionato, or match their molarity if your stock differs. Prepare the Triton/NH₄OH mix shortly before use; keep cold.

### Optional DNase rescue (if nuclei/DNA remain)

Same as DET package: **2000 kU DNase I in 1 M NaCl**, 3 h, RT, gentle agitation, after detergent is fully washed out. Then return to PBS + 3% P/S washes.

---

## Step-by-step

### 1. Tissue prep (Day 0)

1. Harvest muscle or ARMS xenograft under the approved IACUC protocol ([02-tissue-harvest.md](02-tissue-harvest.md)).
2. Trim necrosis/fat; cut pieces **≤3–5 mm** in the shortest dimension.
3. Rinse in sterile cold 1× PBS.
4. Reserve a **native** piece for DNA / DAPI / matrix baselines.
5. Label batch: tissue type, ID, “Triton+NH4OH”, ± trypsin.

### 2. Hypotonic water (Day 0 → 1)

- Submerge in sterile **ultrapure water**.
- **24 h at 4 °C** (static or gentle rock).
- Volume example: ~40 mL per piece (tissue must move freely).

### 3. Trypsin–EDTA (Day 1) — optional but part of the published Protocol 2

- Transfer to pre-warmed **0.05% trypsin / 0.02% EDTA**.
- **1 h at 37 °C**, gentle agitation.
- Wash thoroughly in **PBS** (several complete changes) to stop trypsin.

**Without trypsin:** go from water → PBS rinse → straight to Triton/NH₄OH. Expect slower or incomplete fiber clearance on dense muscle; QC will decide.

### 4. Main decell: Triton + NH₄OH (Day 1 → 4)

- Incubate in **2% Triton X-100 + 0.8% NH₄OH**.
- **72 h at 4 °C**, **continuous agitation**.
- Keep the container closed as much as practical (ammonia odor); open only in a fume hood when changing or checking.
- Tissue should progressively pale; it must remain cohesive.

### 5. Detergent / alkali washout (Day 4 → 6)

- Transfer to sterile **ultrapure water**.
- Wash **48 h at 4 °C** with **multiple water changes** (e.g. 3–6 changes over 2 days). Residual Triton/NH₄OH kills cells at reseeding.
- Then rinse **3× in sterile 1× PBS**.

### 6. Antibiotic PBS hold (Day 6 onward)

- Move to sterile **1× PBS + 3% penicillin–streptomycin** (see [01-materials.md](01-materials.md)).
- Hold **≥3 days** at 4 °C with daily changes before first reseeding, or proceed to QC then freeze.

### 7. QC gate (required before reseeding)

Same criteria as the SDS/SDC package ([05-quality-control.md](05-quality-control.md)):

- dsDNA **< 50 ng / mg dry ECM** (Porzionato Protocol 2 reported **< 10 ng/mg** on muscle when fully successful)
- **No intact nuclei** on DAPI (check the core)
- DNA fragments **< 200 bp** if any DNA remains
- Laminin / collagen I (and **sGAG** if FGF2/HSPG assays are planned) still present
- Cytocompatibility smoke test on a scrap piece

**If DNA/DAPI fails:** confirm washout was complete, then run **DNase rescue** once, re-wash in PBS+P/S, and re-QC. If still failing, thin pieces or extend Triton/NH₄OH time on the next batch — do not reseed a failed batch.

### 8. Reseed (live scaffold only)

1. Equilibrate unfixed scaffold in culture medium.
2. Seed RMS lines as in [06-storage-and-reseeding.md](06-storage-and-reseeding.md).
3. Log detergent chemistry on every experiment (Triton+NH₄OH ± trypsin ≠ SDS DET).

---

## Quick decision guide

| Goal | Suggestion |
| --- | --- |
| Match published human/animal muscle Protocol 2 | Full process **with** trypsin–EDTA |
| Maximize GAG/HS for FGF2 / SPOCK3 readouts | Try **without trypsin** first; prioritize Blyscan/HS QC |
| ARMS tumor scaffold, first production | Prefer **1% SDS DET** ([03-arms-protocol.md](03-arms-protocol.md)); use this as a comparator arm |
| Failed DNA after Triton/NH₄OH | DNase rescue → re-QC |

---

## Safety and waste

- NH₄OH: corrosive, ammonia vapor → **fume hood**
- Collect Triton/NH₄OH waste as chemical waste (not sink)
- Same xenograft biosafety rules as other arms

## Source

Porzionato A, et al. Decellularized human skeletal muscle as biologic scaffold for reconstructive surgery. *Int J Mol Sci.* 2015;16(7):14808–14831. Protocol 2 text: water 24 h → 0.05% trypsin–0.02% EDTA 1 h → PBS → **2% Triton X-100–0.8% NH₄OH 72 h** → water 48 h → PBS rinses.
