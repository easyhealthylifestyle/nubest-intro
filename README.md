# NuBest Nutrition — Introduction Page

A one-page, static introduction to **[NuBest Nutrition](https://www.nubest.com/)** (nubest.com), a U.S. supplement brand focused on daily nutritional support for growing children and teens, with an adult wellness line alongside.

The page is built with plain HTML, CSS and JavaScript, with no build step and no dependencies, so it can be hosted directly on GitHub Pages.

## About NuBest

- **Company:** NuBest, Inc., 1910 Thomes Avenue, Cheyenne, WY 82001, USA
- **Mission:** to nurture every child’s potential through scientifically formulated products that families can trust
- **Website:** https://www.nubest.com/
- **Support:** support@nubest.com

### Growth product lines by age

| Product | Ages | Format |
|---|---|---|
| [NuBest Tall Kids](https://www.nubest.com/products/nubest-tall-kids-helps-children-grow-taller-aged-2-to-9-doctor-recommended-361505) | 2–9 | Berry chewable multivitamin |
| [NuBest Tall Gummies](https://www.nubest.com/products/nubest-tall-gummies) | 2+ and teens | Sugar-free gummy |
| [NuBest Tall Protein, Chocolate](https://www.nubest.com/products/nubesttall-protein-powder-super-growth-boost-for-ages-2-to-teens-chocolate-15-servs-696808) | 3+ and teens | Protein shake powder |
| [NuBest Tall](https://www.nubest.com/products/nubest-tall-60-capsules-growth-height-nanometer-calcium-242508) | 5+ and teens | Capsule, for kids who don’t drink milk daily |
| [NuBest Tall 10+](https://www.nubest.com/products/nubesttall-for-children-and-teenagers-from-10-years-old-doctor-recommended-182008) | 10+ and teens | Capsule, for milk drinkers |

NuBest also offers kids’ Omega-3 and Probiotic gummies and an [adult health line](https://www.nubest.com/collections/adult-health) covering multivitamins, skin brightening, hair, joints, bones, sleep and focus.

### Quality

- Made in the USA with globally sourced ingredients; NuBest describes its manufacturing as cGMP-certified and its products as third-party tested for quality
- NuBest Tall 10+ and NuBest Tall Gummies are iGEN™ Non-GMO tested and verified
- NuBest Tall 10+ and NuBest Tall Protein, Chocolate are Parent Tested Parent Approved® (PTPA) winners
- [30-day money-back guarantee](https://www.nubest.com/pages/money-back) on first-bottle orders placed on nubest.com (request within 30 days of delivery; see full terms)
- Some NuBest Tall formulas may be [HSA/FSA eligible](https://www.nubest.com/pages/hsa-fsa-payments) for qualified customers through Truemed, which decides eligibility

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `style.css` | Layout, growth-chart visual theme, light and dark mode, responsive rules |
| `script.js` | Interactive age finder (filters products by label age range and milk-drinking status) |
| `README.md` | This document |

## Run locally

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/easyhealthylifestyle/nubest-intro.git
cd nubest-intro
open index.html        # macOS  (use xdg-open on Linux, start on Windows)
```

## Deploy with GitHub Pages

1. Create a repository named `nubest-intro` under `easyhealthylifestyle`, then push the four files to the root of the repository’s `main` branch.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save. The page will be published at `https://easyhealthylifestyle.github.io/nubest-intro/`.

## Features

- Growth-chart hero showing NuBest’s three age bands (2–4, 5–9, 10+)
- Age finder with a slider and milk-drinking toggle that lists products by their label age range (a guide to labels, not personal advice)
- Automatic light and dark mode
- Keyboard-friendly navigation, visible focus states, skip link
- Respects reduced-motion settings
- Mobile-responsive layout

## Disclaimer

These statements have not been evaluated by the Food and Drug Administration. NuBest products are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary; age, genetics and lifestyle all play a role. Consult a physician before use if you are pregnant or nursing, take medication, have a medical condition, or are giving a supplement to a child under 18.

This repository introduces NuBest Nutrition using information published on nubest.com. Product names, age ranges and policies were last reviewed against nubest.com in November 2026; product details, policies, availability and pricing are current only on [nubest.com](https://www.nubest.com/).

NuBest® is a trademark of NuBest, Inc.
