# Storage, sterilization, and reseeding

Choose storage by **end use**. Formalin is fine for histology archives. It is **not** a way to bank scaffolds you plan to reseed with living cells.

## Formalin fixation (histology / QC archive only)

**Yes — for fixed analysis and long-term morphology storage.**  
**No — for any later cell culture, AFM on living cells, FGF2-capture biology, or implantation-style use.**

Formaldehyde crosslinks ECM proteins, quenches residual bioactivity, hardens the matrix, and changes mechanics. Once fixed, the piece is a histology specimen, not a living scaffold.

### Practical fixation and storage

1. Rinse the acellular scaffold in PBS to remove detergent/antibiotic carryover.
2. Fix in **4% PFA** (or 10% neutral buffered formalin) at 4 °C. Padua muscle/ARMS histology used **~1 h** for small pieces; thicker pieces may need **2–24 h** — stop when the piece is firm through the core. Do not leave weeks in fixative if you care about epitope quality.
3. Wash out fixative with several PBS changes (important before IF).
4. Then store by one of these paths:
   - **Short archive:** PBS (+ azide if the lab allows) at 4 °C for days to a few weeks
   - **Cryosections:** sucrose gradient → OCT → freeze (as in harvest/QC notes)
   - **Paraffin:** process to FFPE for long-term room-temperature blocks
   - **Avoid** indefinite storage in concentrated formalin if you still need immunofluorescence; over-fixation raises autofluorescence and hurts some epitopes (laminin/collagen often survive with antigen retrieval; HS/GAG epitopes are more fragile)

Split every production batch: fix only the **QC / archive aliquot**. Keep the experiment aliquot unfixed (PBS+P/S or LN2 freezing medium below).

### Do not “unfix” with ethanol for reseeding

A common idea is: formalin fix → ethanol dehydration → step ethanol down (100% → 95% → 75% → 50% → water) → seed cells.

**That does not make the scaffold usable for reseeding.** Formaldehyde forms covalent crosslinks in collagen and other ECM proteins. Graded ethanol only moves water in and out of an already fixed matrix; it does **not** reverse those crosslinks, restore native mechanics or growth-factor activity, or reliably clear cytotoxic fixative residues to a cell-culture standard.

Use that path only if the end point is histology (or similar fixed imaging). For reseeding, never put the scaffold in formalin/PFA at any step.

## Short-term storage of **live** scaffolds (days)

Keep QC-passed, **unfixed** scaffolds in sterile **1× PBS + 3% P/S** at 4 °C. Change buffer every 2–3 days. Use within ~1–2 weeks for best matrix fidelity (**CONFIRM** lab preference).

## Long-term storage of **live** scaffolds

Published Padua storage medium: **70% FBS / 20% DMSO / 10% DMEM**, freeze in liquid nitrogen (vapor phase acceptable if that is CHLA practice).

On thaw:

1. Warm quickly in a sterile bath.
2. Wash thoroughly in sterile PBS (multiple changes) to remove DMSO/FBS before seeding.
3. Optional: re-check DAPI on a thawed sacrificial piece if the batch is old.

Lyophilization is another unfixed long-term option used in some ECM scaffold labs; **CONFIRM** before adopting — rehydration and mechanics differ from the frozen wet scaffold.

## Sterilization before cell culture

DET and antibiotic PBS reduce bioburden but are not a validated sterile process. Before reseeding:

1. Handle only in a BSC after the final multi-day rinse.
2. Optional extra step: brief antibiotic cocktail or sterile PBS washes only — avoid harsh sterilants that fix or denature the matrix.
3. **CONFIRM** whether the lab will use peracetic acid, UV, or antibiotic-only handling; document the choice. Do not autoclave proteinaceous scaffolds.

## Reseeding for cell–ECM assays

Designed for lines already used in this laboratory (fusion-positive parental, PAX3-FOXO1 knockdown, SPOCK3 knockout, fusion-negative comparator, ± surfen).

1. Equilibrate scaffold in serum-containing or serum-free medium matching the assay (FGF2-capture arms may need defined growth-factor conditions).
2. Place scaffold in a low-attachment well or on a sterile support so cells contact the matrix, not only surrounding plastic.
3. Seed from a single-cell suspension; allow attachment (typically 2–24 h depending on line).
4. Transfer scaffold to fresh wells if unattached cells on plastic would confound the readout.

### Suggested readouts on ARMS vs muscle scaffolds

| Question | Readout |
| --- | --- |
| Attachment / spreading | Area, vinculin / actin IF (same markers as the 2025 JCB cell–ECM study) |
| Proliferation | CCK-8 or live-cell imaging on scaffold-resident cells |
| FGF2 capture / HS | Expansion microscopy or IF for HS and FGF2 on scaffold surface |
| ERK | Lysates from scaffold-recovered cells or in situ phospho-ERK if validated |
| Migration / invasion | Scaffold invasion depth or egress into surrounding gel |
| Cortex / mechanics | AFM on cells adhered to scaffold (**CONFIRM** setup) |

Keep **matrix source** (ARMS vs muscle) and **DET batch** as experimental factors. Do not compare genotypes across differently cleared batches without noting it.

## What this protocol is not

It is not a clinical graft method, not a drug-screening CRO SOP, and not a substitute for xenograft metastasis models. Pore / transwell extravasation assays in the SPOCK3 plan remain separate unless explicitly moved onto these scaffolds.
