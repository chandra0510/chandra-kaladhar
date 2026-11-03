# Quality control — how to run DNA / DAPI (and DNase rescue)

Run QC on every production batch **before reseeding**. Compare to a **matched native** piece from the same harvest when possible.

Split each batch into:

| Aliquot | Use |
| --- | --- |
| **DNA piece** | Dry weight + dsDNA assay (± agarose gel) — sacrificed |
| **Histology piece** | DAPI ± H&E (cryosections) — sacrificed |
| **Hold / reseed piece** | Stays **unfixed** in PBS+P/S or goes to PAA → culture if QC passes |

---

## Pass / fail (Crapo et al., 2011)

| Criterion | Pass |
| --- | --- |
| dsDNA | **< 50 ng per mg dry ECM** |
| Fragment length | **< 200 bp** if DNA is still detectable |
| DAPI (and H&E) | **No intact nuclei** — check the former core, not only the edge |

If **any** required criterion fails → do **one DNase rescue** (below) → **re-QC**.  
If still failing → do **not** reseed; thin pieces / change chemistry on the next batch.

---

## A. DNA QC — ng dsDNA per mg dry weight

### A1. Get dry weight

1. Blot the DNA aliquot gently (no crushing). Record **wet weight** (optional log).
2. Dry until constant mass:
   - **Preferred:** lyophilize overnight, or  
   - **Oven / vacuum dry** at ≤60 °C until weight stable (record method).
3. Weigh on an analytical balance → **mg dry ECM**.  
   Example: piece weighs **2.4 mg** dry.

Use dry weight in the denominator. Wet-weight-only values are not comparable to the Crapo cutoff.

### A2. Extract or lyse for DNA

**Preferred path (better for small fragments):**

1. Mince the dried (or parallel wet) piece finely.
2. Digest overnight with **proteinase K** in the kit/lysis buffer (follow Qiagen DNeasy or a proteinase K lysis recipe).
3. Measure dsDNA on the **lysate** with **Qubit dsDNA** (HS or BR kit as appropriate) **before** or **instead of** relying only on a silica column elution.  
   Reason: silica columns can lose fragments **<200 bp**, underestimating residual DNA.

**Alternate path (common, document it):**

1. DNeasy Blood & Tissue (or equivalent) on up to ~25 mg tissue.
2. Elute in a known volume (e.g. **100 µL** Buffer AE).
3. Quantify with **Qubit dsDNA** (preferred) or NanoDrop A260 (less specific — note if used).

### A3. Calculate ng/mg dry

\[
\text{ng dsDNA / mg dry} = \frac{(C\ \text{ng/µL}) \times (V\ \text{µL elution or lysate})}{W\ \text{mg dry}}
\]

Example: Qubit = **0.8 ng/µL**, elution = **100 µL**, dry weight = **2.4 mg**  
→ total DNA = 80 ng → **80 / 2.4 ≈ 33 ng/mg dry** → **PASS** (<50).

If result is **≥ 50** → **FAIL** → go to **DNase rescue**.

### A4. Agarose gel (if DNA is still detectable)

1. Load extract on **0.8% agarose** (± SYBR/GelRed) with a low-MW ladder.
2. Run ~110 V until dye front separates small fragments (order of ~90 min as in Padua methods, or until ladder resolves <200 bp).
3. **Pass:** no band, or smear/band **below 200 bp**.  
4. **Fail:** high-MW genomic smear/band still present → treat as incomplete clearance (DNase rescue).

Always run a **native tissue** extract diluted as a positive control so you know the assay works.

---

## B. DAPI QC — no nuclei

### B1. Process histology aliquot

1. Fix a **small sacrificial** piece in **4% PFA** ~1 h at 4 °C (histology only — not the reseed piece).
2. Sucrose cryoprotect (10% → 15% → 30%) or follow lab OCT protocol.
3. Embed in OCT; cryosection **6–8 µm**. Include sections from the **center/core** of the scaffold.

### B2. Stain

1. Bring slides to room temperature; optional brief PBS wash.
2. Mount with medium containing **DAPI**, or incubate in DAPI (e.g. ~100 ng/mL–1 µg/mL in PBS/methanol per lab SOP) then wash and coverslip.
3. Optional parallel slide: **H&E**.

### B3. Score

1. Image native control first (bright nuclei = stain worked).
2. On decellularized sections, scan **edge and core** at 10×/20×.
3. **Pass:** no intact nuclei (no bright, round DAPI+ nuclear profiles). Diffuse autofluorescence of collagen is **not** a fail — compare shape to native nuclei.
4. **Fail:** residual nuclei in the core or throughout → DNase rescue (and/or more washout if detergent may remain).

If collagen autofluorescence hides weak signal, use **Feulgen** or lower exposure and matched native/decell settings.

---

## C. If fail → one DNase step → re-QC

Do this **once** on the **remaining live (unfixed) batch**, only after detergent/NH₄OH/PAA chemistry you already planned is washed out. Residual SDS inhibits DNase — if you just finished SDS, water/PBS wash thoroughly first.

### C1. DNase rescue bath

1. Prepare fresh **DNase I in 1 M NaCl** at the same activity used in DET (**2000 kU per bath volume**, e.g. 40 mL — **CONFIRM** vendor units).
2. Incubate scaffolds **3 h**, room temperature, **gentle agitation**.
3. Wash extensively: sterile water or PBS, several changes (≥1–2 h total).
4. Return to **PBS + 3% P/S** at 4 °C (daily changes).

### C2. Re-QC

1. Take **new** DNA and DAPI sacrificial pieces from the rescued batch.
2. Repeat **A** (dry weight + Qubit) and **B** (DAPI).
3. Optional: repeat agarose gel.

| Re-QC result | Action |
| --- | --- |
| DNA <50 ng/mg dry **and** DAPI clear | **Pass** → optional PAA → reseed |
| Still fail | **Do not reseed.** Next batch: thinner pieces, more detergent cycles/time, or ensure washout before DNase. Do not stack endless DNase on a friable matrix |

Only **one** rescue attempt per batch for production decisions. Extra DNase after that is troubleshooting, not a quality plan.

---

## D. Quick workflow card

```
Decell finished + washout done
        │
        ├─► DNA piece: dry → lyse/extract → Qubit → ng/mg dry
        ├─► Histology piece: PFA → cryosection → DAPI (± H&E)
        │
        ▼
   Both pass? ──yes──► optional PAA → PBS washes → reseed
        │
       no
        ▼
   One DNase 3 h → wash → PBS+P/S
        │
        ▼
   Re-do DNA + DAPI
        │
   Pass? ──yes──► reseed
    no ──► discard for culture; redesign next batch
```

---

## E. ECM retention (still required for first qualification)

On first qualified batches (and for FGF2/HS work), also check laminin / collagen I IF and **sGAG or HS** (Blyscan / HS stain). See table in prior overview — DNA/DAPI pass alone does not prove matrix biology you care about is intact.

## F. Batch log

Record: batch ID, chemistry, dry weight (mg), DNA ng/mg, method (Qubit/lysate vs column), gel pass/fail, DAPI pass/fail (core checked), DNase rescue yes/no, final disposition. Use [CHECKLIST.md](CHECKLIST.md).
