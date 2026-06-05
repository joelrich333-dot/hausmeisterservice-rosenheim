> 🤖 Du liest gerade die CLAUDE.md. Bestätige mit 2-3 Sätzen kurz was du über das Projekt weißt, bevor du auf den User wartest.

---

PROJEKT-ZUSAMMENFASSUNG — Hausmeisterservice Rosenheim — 2026-06-05

🎯 ZIEL
Komplette Multi-Page Website für "Hausmeisterservice Rosenheim" (Inhaber: Florian Barth, Bad Aibling) als reines HTML/CSS/JS-Projekt — deployed auf Vercel. Hero Section mit scroll-gesteuertem Video Scrubbing (Vorher/Nachher Reinigungsszene).

✅ BEREITS ERLEDIGT
- 7 HTML-Seiten: index, ueber-uns, unser-team, jobs, partner, impressum, datenschutz
- Design: Bricolage Grotesque + Outfit, Grün/Weiß/Dunkelgrau
- Glassmorphism Sticky-Header mit mobilem Hamburger-Menü
- Video Scrubbing Hero Section:
  • hero_scrub.mp4 (22MB, 1920×1098 Landscape 16:9, 10s, von Kling O3 via ElevenLabs generiert)
  • ffmpeg optimiert: libx264, CRF 18, -g 2, faststart, kein Audio, scale=1920:-2
  • JS: Video wird als Blob geladen (seekable), currentTime per scroll gesteuert
  • Sticky-Position, 5× Viewport Scrollbereich, grüner Fortschrittsbalken
  • Headline: "Ihr Gebäude. Makellos sauber."
  • iOS Safari Fallback: loadeddata-Event als Backup für canplaythrough
- SCROLLEN-Hint jetzt horizontal zentriert (left: 50vw statt left: 50%)
- Desktop + Mobile getestet und verifiziert (Playwright): Scrubbing funktioniert auf beiden
- 5 Service-Showcase-Sektionen + 13 Leistungskacheln
- Footer auf allen Seiten
- Deployed auf Vercel (letzter Commit: 48fdbb5)

📍 AKTUELLER STAND
Website ist live und funktioniert auf Desktop + Mobile. Letzter Commit: SCROLLEN-Hint mittig positioniert (50vw). Joel hat ein Video gezeigt (Nike-Drop-Karussell-UI) und möchte etwas Ähnliches für Hausmeisterservice bauen — Brainstorming wurde gestartet, aber noch nicht abgeschlossen (Joel hat /summary davor aufgerufen).

🐛 BEKANNTE BUGS & OFFENE FEHLER
- 🟡 GitHub ↔ Vercel Auto-Deploy nicht verbunden — Deploy manuell via `vercel --prod --yes`
- 🟡 Team-Fotos fehlen für 6 Teammitglieder (Initialen-Avatare als Platzhalter)
- 🟡 Rohvideo (ElevenLabs_video_kling-o-3_Slow dolly...) liegt noch in /videos/ — könnte gelöscht werden

⏭️ NÄCHSTE SCHRITTE
1. Karussell-Sektion bauen (ähnlich wie Nike-Drop-Karussell aus dem Video):
   - Horizontale Card-Slider mit < / > Navigation
   - Für Hausmeisterservice: z.B. saisonale Angebote / Leistungen der Woche
   - Brainstorming war in Gang — Joel möchte darüber sprechen was genau rein soll
2. Team-Fotos einbauen (Joel schickt Bilder)
3. Optional: WhatsApp-Button, Kontaktformular, Bewertungen-Sektion

📁 WICHTIGE DATEIEN & STRUKTUR
- /Users/joel/hausmeisterservice-rosenheim/index.html — Startseite mit Video Scrubbing Hero
- /Users/joel/hausmeisterservice-rosenheim/styles.css — Gesamtes Design (1404 Zeilen)
- /Users/joel/hausmeisterservice-rosenheim/script.js — Nav + Scroll-Reveal + Video Scrubbing Logic
- /Users/joel/hausmeisterservice-rosenheim/videos/hero_scrub.mp4 — Scrubbing-Video (22MB, 1920×1098)
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
- Video generiert mit: ElevenLabs → Kling O3, 10s, 1080p, 16:9 Landscape
- ffmpeg-Befehl (Landscape): ffmpeg -y -i input.mp4 -vf scale=1920:-2 -movflags faststart -vcodec libx264 -crf 18 -g 2 -pix_fmt yuv420p -an output.mp4

💡 SOFORT-KONTEXT FÜR NEUEN CHAT
Die Website ist live auf Vercel (reines HTML/CSS/JS, kein Framework, kein Build-Step). Video Scrubbing Hero mit dem neuen 1920×1098 Landscape-Video funktioniert auf Desktop + Mobile inkl. iOS Safari Fallback. Joel möchte eine Karussell-Sektion ähnlich dem Nike-Drops-UI aus einem Screencast einbauen — horizontale Cards mit < / > Navigation für saisonale Leistungen/Angebote. Das Brainstorming dazu lief noch, bevor /summary aufgerufen wurde. Deploy immer mit `vercel --prod --yes` (kein GitHub Auto-Deploy). Kein Node.js nötig — alles vanilla HTML/CSS/JS.
