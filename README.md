# KS Beautybar website

Static site (index.html, policy.html, styles.css, script.js, images/) built from the concept Karlee approved. No build step; deploy the folder as-is on Vercel.

Preview locally: `python3 -m http.server 4321` in this folder, then open http://localhost:4321.

## Connected to Zoroliq
- `BOOK_BASE` (top of script.js): her booking page, `app.zoroliq.com/book/ks-beautybar`. Change it if her slug is different (also in policy.html).
- `SERVICE_IDS`: fixed service ids created by `docs/clients/ks-beautybar/seed_ks_beautybar_services.sql` in the Zoroliq repo. Keep both in sync. Nail sets link to their Short option; the booking page then makes the client pick a length and nail art.

## Content from Karlee
- Hours: Tue–Thu 10–3, Fri & Sun 10–7 (index.html hero, Visit section and the schema.org block).
- Spray tan prep and aftercare: her wording (one spelling fix: "DEODORANT").
- Booking policy (policy.html): her two policy graphics combined and lightly reworded, as she allowed. The same text is saved in Zoroliq by the seed script.

## Notes
- Photos were resized and their metadata (including location) removed.
- Waxing descriptions and the gel polish and removal wording were written for her to review.
