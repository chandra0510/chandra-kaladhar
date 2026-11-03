# NH₄OH (ammonium hydroxide) — can it decellularize?

**Yes, but usually not alone, and it is not the first-line ARMS method in this package.**

Ammonium hydroxide is a mild alkaline agent used in several published muscle (and other tissue) protocols. It helps lyse cells and is almost always paired with a detergent — most often **Triton X-100** — sometimes after a short **trypsin/EDTA** step. NH₄OH by itself is a weak full-decellularization strategy for thick tumor or muscle pieces.

## How it is typically used

Example from human/animal skeletal-muscle scaffold work (Porzionato et al.–style Protocol 2):

1. Water wash (e.g. 24 h, 4 °C)
2. Optional: **0.05% trypsin / 0.02% EDTA**, 1 h, 37 °C → PBS wash  
3. **2% Triton X-100 + 0.8% NH₄OH**, often **~72 h** at 4 °C with agitation  
4. Long water / PBS washes  

That combination can meet Crapo DNA criteria in some muscle studies (<10–25 ng dsDNA/mg dry weight reported in one human-muscle comparison). Other reviews note that **NH₄OH / non-SDS arms often remove only ~50–80% of DNA** unless the full cocktail and long wash are optimized — weaker than **1% SDS** (~98% DNA removal in many minced-muscle reports).

## Compared with this lab’s default DET

| Approach | Best for | Watch-outs |
| --- | --- | --- |
| **1% SDS + DNase** (ARMS default here) | Tumor xenografts; reliable DNA clearance | Can strip GAGs / HSPGs — bad if FGF2/SPOCK3 is the readout |
| **4% SDC + DNase** (muscle default here) | Muscle with DET cycle timing matched to Padua | May under-clear thick pieces |
| **Triton + NH₄OH** (± trypsin) | Muscle when you want to avoid SDS; some human-muscle papers prefer it for fiber clearance + ECM architecture | Long incubations; trypsin can damage matrix if overdone; DNA clearance is variable — **still require DAPI + dsDNA QC** |
| **NH₄OH alone** | Not recommended as sole agent for ARMS/muscle production batches | Incomplete cell/DNA removal |

## If you want to try an NH₄OH arm

1. Run it as a **parallel experimental arm**, not as a silent swap for SDS on ARMS without QC.
2. Use **Triton X-100 + NH₄OH** (not NH₄OH water alone).
3. Skip or minimize trypsin if matrix preservation (laminin, GAGs) is critical for reseeding / FGF2 work.
4. Wash extensively — alkaline detergent mix must be gone before reseeding.
5. Apply the **same pass/fail QC** ([05-quality-control.md](05-quality-control.md)): <50 ng dsDNA/mg dry, no nuclei, matrix IF, cytocompatibility.
6. **CONFIRM** % NH₄OH and % Triton with the exact paper you follow before scaling; recipes vary (e.g. 0.2–0.8% NH₄OH with 1–2% Triton).

## Safety

Ammonium hydroxide is corrosive and releases ammonia vapor. Use a fume hood, fresh dilutions, and proper chemical waste disposal. Do not mix casually with strong acids or bleach waste streams.

## Bottom line for reseeding plans

NH₄OH **can** be part of a valid decell protocol. For your ARMS reseeding project, keep **1% SDS DET** (or SDC for muscle) as the production default unless an NH₄OH/Triton arm passes QC and preserves the matrix features you care about (especially sGAG/HS if SPOCK3/FGF2 is in scope).
