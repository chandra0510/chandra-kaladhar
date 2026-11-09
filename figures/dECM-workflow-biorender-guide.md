# BioRender rebuild guide — mouse → dECM → recell → CRM

Use this to recreate the schematic in BioRender with their stock icons (closer to journal figure style than the AI draft).

## Suggested BioRender starting templates

- [Decellularization and Recellularization of Whole Organs](https://www.biorender.com/template/decellularization-and-recellularization-of-whole-organs)
- [The Decellularization Effect on the Extracellular Matrix (ECM)](https://www.biorender.com/template/the-decellularization-effect-on-the-extracellular-matrix-ecm)

Layout: **one horizontal strip, 6 equal panels**, white background, teal cells + coral tumor accent.

## Panel-by-panel icons to search in BioRender

| Step | Title | BioRender icon / object search terms | Label text |
| --- | --- | --- | --- |
| 1 | Mouse model | `mouse`, `laboratory mouse`, `subcutaneous tumor` | ARMS xenograft / skeletal muscle |
| 2 | Tissue harvest | `scissors`, `forceps`, `tissue explant`, `muscle tissue` | Tumor or muscle explant |
| 3 | Decellularization | `Erlenmeyer flask`, `beaker with liquid`, `cells washing away`, progressive ECM template (cells → fibers) | SDS / SDC / Triton · Remove cells, preserve ECM |
| 4 | Acellular dECM | `extracellular matrix`, `collagen fibers`, `scaffold`, `decellularized tissue` | Native architecture retained |
| 5 | Recellularization | `pipette`, `cancer cells`, `cells on scaffold`, `3D culture` | Seed FPRMS cells |
| 6 | CRM imaging | `confocal microscope`, `fluorescence microscope`, `petri dish`, inset microscopy FOV | Confocal reflection microscopy (CRM) |

## Bottom caption strip

`Mouse → Decell → dECM → Recell → CRM`

## Color convention (match lab figures)

- Tumor / native cellular tissue: coral–red
- Detergent wash: light blue
- Acellular ECM fibers: pale gray / off-white
- Reseeded FPRMS cells: teal
- CRM fiber signal inset: cool blue reflection channel + teal cells

## Science notes for the legend (optional footnote)

1. Harvest ARMS xenograft and/or skeletal muscle from mouse.
2. Detergent–enzymatic decellularization (SDS for ARMS; SDC ± SDS for muscle; Triton/NH₄OH alternative).
3. QC: DNA &lt; 50 ng/mg dry ECM, DAPI-negative nuclei, matrix proteins retained.
4. Sterilize (optional PAA) → equilibrate → reseed FPRMS lines.
5. Image ECM architecture and cell–matrix interaction by **confocal reflection microscopy (CRM)**, with fluorescence overlays as needed.

## Files in this folder

AI draft schematic (for slides / grant drafts while you rebuild in BioRender):

[`dECM-workflow-mouse-to-CRM.jpg`](dECM-workflow-mouse-to-CRM.jpg)

Photo-realistic **collage** version of the same 6-panel flow (mouse → harvest → decell → dECM → recell → CRM):

[`dECM-workflow-collage.jpg`](dECM-workflow-collage.jpg)
