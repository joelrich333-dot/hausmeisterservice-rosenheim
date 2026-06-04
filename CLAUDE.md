> 🤖 Du liest gerade die CLAUDE.md. Bestätige mit 2-3 Sätzen kurz was du über das Projekt weißt, bevor du auf den User wartest.

---

PROJEKT-ZUSAMMENFASSUNG — Hausmeisterservice Rosenheim / Video Scrubbing Hero — 04.06.2026

🎯 ZIEL
Komplette Multi-Page Website für "Hausmeisterservice Rosenheim" (Inhaber: Florian Barth, Bad Aibling) als reines HTML/CSS/JS-Projekt — deployed auf Vercel. Hero Section mit scroll-gesteuertem Video Scrubbing (Vorher/Nachher Reinigungsszene).

✅ BEREITS ERLEDIGT
- 7 HTML-Seiten: index, ueber-uns, unser-team, jobs, partner, impressum, datenschutz
- Design: Bricolage Grotesque + Outfit, Grün/Weiß/Dunkelgrau
- Glassmorphism Sticky-Header mit mobilem Hamburger-Menü
- Video Scrubbing Hero Section eingebaut:
  • hero_scrub.mp4 (25MB, 1076×1924 Portrait, 10s, von Kling O3 via ElevenLabs generiert)
  • ffmpeg optimiert: libx264, CRF 18, -g 2, faststart, kein Audio
  • JS: Video wird als Blob geladen (garantiert seekbar), currentTime per scroll gesteuert
  • Sticky-Position, 5× Viewport Scrollbereich, grüner Fortschrittsbalken, "Scrollen"-Hint
  • Headline: "Ihr Gebäude. Makellos sauber."
- 5 Service-Showcase-Sektionen + 13 Leistungskacheln
- Footer auf allen Seiten
- Deployed auf Vercel (letzter Commit: 8f51ae6)

📍 AKTUELLER STAND
Video Scrubbing Hero ist live und funktioniert technisch einwandfrei. Offenes Problem: Das Video wirkt unscharf, weil es Portrait (1076×1924, 9:16) ist, aber der Hero Landscape (16:9 Fullscreen) ist → Browser muss 1.78× upscalen → Blur.

🐛 BEKANNTE BUGS & OFFENE FEHLER
- 🔴 [hero] Video erscheint unscharf/niedrig aufgelöst weil Portrait-Video (1076px breit) auf Fullscreen-Landscape-Hero (1920px) upgeskaliert wird (1.78× Upscale). Encoding-Qualität ist gut (CRF 18), das Problem ist rein geometrisch/CSS.
- 🟡 GitHub ↔ Vercel Auto-Deploy nicht verbunden — Deploy manuell via `vercel --prod --yes`
- 🟡 Team-Fotos fehlen für 6 Teammitglieder (Initialen-Avatare als Platzhalter)

⏭️ NÄCHSTE SCHRITTE
1. Qualitätsproblem beheben — zwei Optionen (Joel entscheidet):
   A) Video neu in Kling als 16:9 Landscape (1920×1080) generieren → bester Fix
   B) CSS-Fix: Portrait-Video zentriert auf volle Höhe + gleiches Video stark geblurrt als Background (wie alter Hero-Aufbau) → sofort umsetzbar ohne neues Video
2. Nach Fix: `git add . && git commit -m "..."` + `vercel --prod --yes`
3. Optional: Team-Fotos einbauen (Joel schickt Bilder)
4. Optional: WhatsApp-Button, Kontaktformular, Bewertungen-Sektion

📁 WICHTIGE DATEIEN & STRUKTUR
- /Users/joel/hausmeisterservice-rosenheim/index.html — Startseite mit Video Scrubbing Hero
- /Users/joel/hausmeisterservice-rosenheim/styles.css — Gesamtes Design inkl. .hero-scrub-* Styles
- /Users/joel/hausmeisterservice-rosenheim/script.js — Nav + Scroll-Reveal + Video Scrubbing Logic (Blob-Load + onScrubScroll)
- /Users/joel/hausmeisterservice-rosenheim/videos/hero_scrub.mp4 — Scrubbing-Video (25MB, Portrait 1076×1924)
- /Users/joel/hausmeisterservice-rosenheim/videos/hero.mp4 — Altes Hero-Video (6MB, nicht mehr verwendet)
- /Users/joel/hausmeisterservice-rosenheim/images/ — galerie-1..6.jpg für Service-Showcases

🔑 CREDENTIALS, KEYS & WICHTIGE INFOS
- Website live: https://hausmeisterservice-rosenheim.vercel.app
- Vercel Project-ID: prj_TuoisNIkNcztLFLnKfldEk1iSf1m
- Vercel Org-ID: team_4G8nyXoRmSmTbnarqfU7iRQl
- Deploy-Befehl: cd ~/hausmeisterservice-rosenheim && vercel --prod --yes
- GitHub-Repo: https://github.com/joelrich333-dot/hausmeisterservice-rosenheim
- Firmen-E-Mail: info@hausmeisterservice-rosenheim.de
- Inhaber: Florian Barth, Flurstrasse 1b, 83043 Bad Aibling
- Telefon: +49 178 6323146
- Facebook: https://www.facebook.com/Hausmeisterservice-Rosenheim-330159847586486/
- Video generiert mit: ElevenLabs → Kling O3, 10s, 1080p, 9:16 Portrait
- ffmpeg-Befehl (ohne Scale, weil Portrait): ffmpeg -i input.mp4 -movflags faststart -vcodec libx264 -crf 18 -g 2 -pix_fmt yuv420p -an output.mp4

💡 SOFORT-KONTEXT FÜR NEUEN CHAT
Die Website ist live. Der Video Scrubbing Hero funktioniert technisch (Blob-Load, seekable, Scroll → currentTime), hat aber ein Qualitätsproblem: Das Kling-Video ist Portrait (9:16, 1076×1924) und wird fullscreen auf einem Landscape-Hero (16:9) dargestellt → 1.78× Upscale → sieht unscharf aus. Joel muss entscheiden: A) neues 16:9 Video in Kling generieren, oder B) CSS-Fix mit Portrait-Video zentriert + gleiche Video geblurrt als Background. Kein Framework, kein Build-Step — reines HTML/CSS/JS. Deploy: `vercel --prod --yes` im Projektordner.
