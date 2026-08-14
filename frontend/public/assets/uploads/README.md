# Image upload folders

Upload images into the folder that matches where they will appear on the site.

## How to upload

1. Open this folder on GitHub: `frontend/public/assets/uploads`
2. Click into the folder you want (for example `doctors`)
3. Use **Add file → Upload files**, then commit

Once committed, the image is live at:

```
/assets/uploads/<folder>/<file-name>
```

In code, reference it through the existing `asset()` helper so it works on GitHub Pages:

```tsx
asset("/assets/uploads/doctors/dr-name.jpg")
```

## Folders

| Folder | Use for |
| --- | --- |
| `doctors` | Individual doctor and consultant portraits |
| `specialties` | Specialty department images (cardiology, orthopaedics, etc.) |
| `diagnostics` | Imaging and scan images (MRI, CT, X-ray, ultrasound) |
| `laboratory` | Lab, sample collection and pathology images |
| `health-packages` | Health checkup and package images |
| `hospital` | Building exterior, reception, interiors, rooms, equipment |
| `services` | General service and treatment images |
| `corporates` | Corporate tie-up and employee checkup images |
| `patient-info` | Patient guidance, admission and support images |
| `team` | Group and staff photos |
| `gallery` | General photo gallery images |
| `banners` | Wide hero and page banner images |
| `icons` | Small icons and pictograms (SVG preferred) |
| `logos` | Brand, partner and accreditation logos |
| `testimonials` | Patient photos used with testimonials |
| `certifications` | Accreditation and certificate images |
| `events` | Camps, awareness drives and event photos |
| `blog` | Article and medical library images |
| `misc` | Anything that does not fit the folders above |

Need another category? Create a new folder here and add a matching row above.

## File guidelines

- **Formats:** `.jpg` or `.webp` for photos, `.svg` or `.png` for icons and logos
- **Names:** lowercase with hyphens, no spaces — `dr-anita-rao.jpg`, `mri-3t-suite.jpg`
- **Size:** keep each file under about 500 KB so pages stay fast
- **Suggested dimensions:**
  - Banners: 1920 × 800
  - Cards and service images: 1200 × 900
  - Doctor portraits: 800 × 1000 (portrait)
  - Logos and icons: SVG, or PNG with a transparent background

Do not delete the `.gitkeep` files — they keep empty folders present in Git.
