# Materials and stock recipes

Volumes below assume ~0.5–1 cm pieces in **40 mL** bath volume per sample (Padua-scale immersion). Scale bath volume so tissue is fully submerged with free movement under gentle rocking. **CONFIRM** final piece size and bath volume for the first CHLA run.

## Consumables and equipment

- Sterile disposable containers or 50 mL conical tubes (detergent-resistant)
- Orbital rocker or nutator (gentle agitation; avoid vortexing scaffolds)
- Cold room or 4 °C refrigerator
- Biosafety cabinet (Class II) for harvest, sterile washes, and reseeding
- Cryostat or microtome for QC sections; fluorescence microscope for DAPI
- Analytical balance (wet and dry weight)
- NanoDrop or, preferably, **Qubit dsDNA** assay for residual DNA
- Agarose gel electrophoresis setup
- Optional: Sircol collagen kit, Blyscan sGAG kit
- Optional: AFM or tensile setup if mechanics are a readout (**CONFIRM** instrument access)

## Reagents

| Reagent | Typical use | Notes |
| --- | --- | --- |
| Sterile deionized / ultrapure water | Hypotonic lysis, detergent washout | Autoclave or filter; use sterile for late washes |
| 1× PBS | Rinses, antibiotic storage | Sterile |
| SDS (sodium dodecyl sulfate) | ARMS detergent (1% w/v) | Harsh anionic detergent; wears gloves, eye protection |
| SDC (sodium deoxycholate) | Muscle detergent (4% w/v) | Prepare fresh; may precipitate at cold temps |
| NH₄OH (ammonium hydroxide) | Optional alternate with Triton X-100 | Not first-line for ARMS here; fume hood; see [09-nh4oh-alternative.md](09-nh4oh-alternative.md) |
| Triton X-100 | Paired with NH₄OH in alternate protocols | Nonionic detergent; rinse thoroughly before reseeding |
| Peracetic acid (PAA) | Optional terminal sterilization after washout | Typically **0.1% PAA + 4% ethanol**, 1–2 h; then PBS washes — see [06-storage-and-reseeding.md](06-storage-and-reseeding.md) |
| Ethanol | With PAA sterilant; not a fixative substitute | Absolute or 200-proof for dilution into 4% |
| DNase I | DNA clearance | Use activity units as labeled; keep cold until use |
| NaCl | 1 M carrier for DNase step | |
| Penicillin–streptomycin (P/S) | 3% in PBS for post-DET rinse | Or lab-standard antibiotic mix |
| DMSO, FBS, DMEM | Freezing medium for scaffolds | 70% FBS / 20% DMSO / 10% DMEM |
| 4% PFA | Fixation for histology | |
| Sucrose, OCT | Cryosection prep | |
| DAPI, H&E, Masson’s trichrome, Alcian blue | Nuclear / matrix histology | |
| Primary Abs: laminin, collagen I (± fibronectin) | ECM retention IF | Match species to tissue source |
| DNeasy Blood & Tissue (Qiagen) or equivalent | DNA extraction | Prefer also a lysate + Qubit path (silica columns can lose <200 bp fragments) |
| Proteinase K, pepsin, papain | Digests for DNA / collagen / GAG | Kit-dependent |

## Stock recipes

### 1% SDS (ARMS detergent)

Dissolve 1 g SDS in sterile water to 100 mL. Mix gently (avoid foam when possible). Store at room temperature. Discard if cloudy with insoluble debris.

### 4% SDC (muscle detergent)

Dissolve 4 g sodium deoxycholate in sterile water to 100 mL. Prepare close to use. Warm briefly if needed to dissolve; do not boil.

### DNase I working solution

**Two different concentrations are in this recipe — do not confuse them:**

| What | Concentration |
| --- | --- |
| **NaCl (carrier / solvent)** | **1 M** (58.44 g/L) |
| **DNase I (enzyme)** | **~50 Kunitz units/mL** |

Padua DET wording (“**2000 kU** DNase I in 1 M NaCl”, **40 mL** bath) means:

- Dissolve **2000 Kunitz units** of DNase I **total** into **40 mL of 1 M NaCl**
- That is **2000 U ÷ 40 mL = 50 Kunitz U/mL**
- Here **kU = Kunitz units** (Sigma unit definition), **not** “kilo-units × 1000” beyond that

#### Practical prep (40 mL bath)

1. Make **1 M NaCl**: 2.34 g NaCl → dissolve to 40 mL with sterile water (or 58.44 g/L and measure 40 mL).
2. Add **2000 Kunitz units** DNase I:
   - Easiest: one Sigma **D4263**-style vial standardized to **2000 Kunitz units**, reconstituted into the 40 mL of 1 M NaCl, **or**
   - From powder: units needed ÷ (Kunitz U per mg on the **lot COA**). Example: if the bottle is ~2000 Kunitz U/mg protein, use ~**1 mg** protein worth per 40 mL (~**0.025 mg/mL**).
3. Mix gently on ice; use **immediately** (3 h incubation at room temperature with agitation).
4. Scale linearly: e.g. 20 mL bath → **1000 Kunitz units** (still **50 U/mL** in **1 M NaCl**).

**CONFIRM** your bottle’s unit system (Kunitz vs other). Other papers sometimes use **~40 U/mL** DNase — close to this 50 U/mL target. Do not report DNase as “1 M”; 1 M is only the NaCl.

### Post-DET antibiotic PBS

**Standard (Padua DET rinse / short-term storage):** sterile **1× PBS + 3% penicillin–streptomycin (P/S)**.

Use the usual cell-culture **100× P/S stock** (Gibco / Thermo Fisher Life Technologies or equivalent): typically **10,000 U/mL penicillin + 10,000 µg/mL streptomycin**.

| Mix | Amount |
| --- | --- |
| Sterile 1× PBS | 97 mL |
| 100× P/S stock | **3 mL** (this is the “3%”) |
| Final (approx.) | **300 U/mL penicillin + 300 µg/mL streptomycin** |

That is about **3×** the usual 1% P/S used in culture medium (100 U/mL / 100 µg/mL). Higher antibiotic in the bath is for cold scaffold storage / rinse, not for growing cells in that buffer.

**Alternatives some labs use:** 1% P/S only; or P/S **plus** amphotericin B (Fungizone) if fungal contamination is a concern — **CONFIRM** with Park-lab culture practice before adding amphotericin (it can be harsh on some lines if carried into the first seeding wash). Do not use sodium azide in any aliquot that will be reseeded.

### Scaffold freezing medium

70% FBS + 20% DMSO + 10% DMEM high glucose. Prepare fresh, keep cold, aliquot scaffolds into cryovials.

## Safety

- SDS and SDC irritate skin and eyes; work with PPE.
- Collect detergent waste per CHLA chemical waste rules — do not pour concentrated SDS/SDC down the sink.
- Xenograft tissue is animal-derived human-tumor material: follow the approved IACUC protocol and BSL practices for the line used.
