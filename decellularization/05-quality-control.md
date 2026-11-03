# Quality control

Run QC on every production batch before reseeding experiments. Compare decellularized samples to **matched native** tissue from the same harvest when possible.

## 1. Residual DNA (required)

### Acceptance (Crapo et al., 2011)

| Criterion | Pass |
| --- | --- |
| dsDNA content | **< 50 ng / mg dry ECM** |
| Fragment length | **< 200 bp** if DNA is still detectable |
| Histology | **No visible nuclei** (DAPI preferred; H&E supportive) |

### Practical assay path

1. Blot scaffold, record **wet weight**; for the gold-standard ratio, lyophilize or dry a weighed piece to get **dry weight**.
2. Digest / extract DNA.
   - Preferred for total residual DNA: direct lysate quantified with **Qubit dsDNA** (silica spin columns can under-count fragments <200 bp).
   - Optional parallel: DNeasy extraction + NanoDrop (document method; NanoDrop alone is less specific for dsDNA).
3. Normalize to **mg dry weight**.
4. Run **0.8% agarose** gel (or equivalent) on the extract to confirm fragment size <200 bp.
5. Cryosection 6–8 µm; stain **DAPI** and **H&E**. Score several fields including the former core. Feulgen is a useful backup if autofluorescence masks DAPI.

Fail the batch if any required criterion fails. Extra DET cycles may rescue DNA clearance; re-QC afterward. If the matrix is already degraded, discard and restart with milder agitation or fewer cycles on thinner tissue.

## 2. ECM retention (required for first qualification; spot-check later)

| Assay | What “good” looks like |
| --- | --- |
| Laminin IF | Continuous basement-membrane-like signal retained vs native |
| Collagen I IF / Masson’s trichrome | Collagen network present; not empty voids only |
| Sircol collagen (optional quantitative) | Collagen still measurable; large loss flags over-digestion |
| Blyscan sGAG (optional quantitative) | sGAG retained relative to native; SDS can strip GAGs — track this if FGF2 / HSPG biology is the endpoint |
| Gross / phase contrast | Cohesive scaffold, not slurry |

For Park-lab questions about **heparan sulfate / SPOCK3 / FGF2**, treat sGAG retention as a priority QC, not optional, on batches used for those assays.

## 3. Cytocompatibility smoke test (before a big experiment)

Seed a small scaffold piece with the parental fusion-positive line (low density). After 24–48 h:

- Cells attach and show expected morphology for that matrix
- No widespread death attributable to residual detergent (compare to cells on plastic in parallel)

If cells die only on the scaffold, extend PBS+antibiotic washes or add an extra water/PBS wash day and retest.

## 4. Mechanics (optional / experiment-dependent)

If cortical tension or matrix stiffness is a readout:

- **CONFIRM** whether AFM is performed on reseeded cells, on the acellular scaffold, or both
- Keep DET cycle number and detergent identity constant across compared genotypes
- Record indentation settings before comparing groups

## Batch record

Log: harvest ID, detergent, cycles, DNA ng/mg dry, gel result, DAPI pass/fail, collagen/GAG notes, operator, date. See [CHECKLIST.md](CHECKLIST.md).
