> 🤖 Du liest gerade die CLAUDE.md. Bestätige mit 2-3 Sätzen kurz was du über das Projekt weißt, bevor du auf den User wartest.

---

PROJEKT-ZUSAMMENFASSUNG — Hausmeisterservice Rosenheim — 2026-05-28

🎯 ZIEL
Komplette Multi-Page Website für "Hausmeisterservice Rosenheim" (Inhaber: Florian Barth, Bad Aibling) als reines HTML/CSS/JS-Projekt — deployed auf Vercel und GitHub. Professioneller, moderner Webauftritt der den alten Auftritt ablöst.

✅ BEREITS ERLEDIGT
- 7 HTML-Seiten: index, ueber-uns, unser-team, jobs, partner, impressum, datenschutz
- galerie.html existiert noch als Datei, ist aber aus der Navigation entfernt
- Design: "Modern Clean" — Bricolage Grotesque + Outfit Fonts, Grün/Weiß/Dunkelgrau
- Glassmorphism Sticky-Header mit mobilem Hamburger-Menü (script.js)
- Vollbild-Hero auf index.html mit VIDEO (videos/hero.mp4 — Pexels Freestock, 6.0 MB)
  statt Bild — autoplay, muted, loop, playsinline, object-position: center top
- Dunkles Overlay + Headline + 2 CTAs (Termin anfragen / Kontakt aufnehmen)
- 5 Service-Showcase-Sektionen (abwechselnd links/rechts): Hausmeisterservice,
  Gebäude-/Büroreinigung, Gartenanlagen, Winterdienst (Fullbleed), Aufbauservice
- 13 Emoji-Leistungskacheln als 2-Spalten-Liste mit Trennlinien
- Pill-Buttons mit Fill-from-left Hover-Animation
- Scroll-Reveal via IntersectionObserver (section-reveal / is-visible)
- Favicon (favicon.svg) — grünes Haus-Icon — in allen 7 HTML-Seiten
- Alle Unterseiten vollständig: Über uns, Team, Jobs, Partner, Impressum, Datenschutz
- Footer auf allen Seiten: Kontakt, Facebook, Impressum/Datenschutz, Copyright
- 7 Bilder (images/): hero.jpg, galerie-1 bis galerie-6.jpg
- Deployed auf Vercel (Production) + GitHub (letzter Commit: 800ff8e)

📍 AKTUELLER STAND
Website ist live unter https://hausmeisterservice-rosenheim.vercel.app — alle 7 Seiten funktionieren. In dieser Session: Hero-Bild durch Pexels-Video ersetzt (videos/hero.mp4). Ein Scroll-Scrub-Effekt (Ferrari-Style via GSAP) wurde experimentell versucht aber auf Wunsch des Users vollständig rückgängig gemacht — nie deployed, lokal geblieben.

🐛 BEKANNTE BUGS & OFFENE FEHLER
- galerie.html existiert noch als Datei, ist aber aus der Nav entfernt (kann gelöscht werden)
- GitHub ↔ Vercel Auto-Deploy-Verbindung nicht hergestellt — Deploys laufen manuell via `vercel --prod --yes`
- Team-Fotos fehlen noch für 6 Teammitglieder (Initialen-Avatare als Platzhalter)
- Das Hero-Video zeigt den Arbeiter von hinten — kein Gesicht sichtbar (Pexels-Video das User selbst heruntergeladen hat)

⏭️ NÄCHSTE SCHRITTE
1. Optional: besseres Hero-Video finden (Person von vorne sichtbar, cinematic)
2. Team-Fotos einbauen (Joel schickt sie per Chat-Upload):
   - Mit Foto: Florian Barth, J. Eder, M. Mandl, C. Kainzmaier, E. Pasztorne Novak, L. Pasztor
   - Ohne Foto (bleiben Initialen-Avatar): P. Reheis, L. Morina Haradini, M. Nebihi, E. Nebihi
3. Optional/später: WhatsApp-Button (floating), Kontaktformular-Seite, Telefonnummer im Header,
   Kundenbewertungen-Sektion, OpenStreetMap-Karte, eigene Domain
4. Nach jedem Schritt: `git add . && git commit && git push origin main` + `vercel --prod --yes`

📁 WICHTIGE DATEIEN & STRUKTUR
- ~/hausmeisterservice-rosenheim/ — Projektordner (lokaler Pfad)
- index.html — Startseite (Video-Hero + 13 Leistungs-Kacheln + 5 Showcase-Sektionen)
- ueber-uns.html — Über uns
- unser-team.html — Team (10 Cards, 6 Fotos noch ausstehend)
- jobs.html — Stellenanzeigen
- partner.html — Elektro Riedl + Kundenbadges
- impressum.html / datenschutz.html — Rechtstexte
- styles.css — Gesamtes Design-System (CSS-Variablen, alle Komponenten)
- script.js — Hamburger-Nav, Escape-Close, Scroll-Reveal (IntersectionObserver)
- favicon.svg — SVG Haus-Icon (grün)
- videos/hero.mp4 — Hero-Video (6.0 MB, Pexels Freestock, vom User heruntergeladen)
- images/hero.jpg — Originalbild (noch vorhanden aber nicht mehr im Einsatz)
- images/galerie-1..6.jpg — Bilder für Service-Showcases und Winterdienst-Fullbleed

🔑 CREDENTIALS, KEYS & WICHTIGE INFOS
- GitHub-Repo: https://github.com/joelrich333-dot/hausmeisterservice-rosenheim
- GitHub-User: joelrich333-dot
- Vercel-URL (Production): https://hausmeisterservice-rosenheim.vercel.app
- Vercel Project-ID: prj_TuoisNIkNcztLFLnKfldEk1iSf1m
- Vercel Org-ID: team_4G8nyXoRmSmTbnarqfU7iRQl
- Vercel Deploy-Befehl: `cd ~/hausmeisterservice-rosenheim && vercel --prod --yes`
- Firmen-E-Mail: info@hausmeisterservice-rosenheim.de
- Inhaber: Florian Barth, Flurstrasse 1b, 83043 Bad Aibling
- Telefon: +49 178 6323146
- USt-ID: 156/202/60921
- Facebook: https://www.facebook.com/Hausmeisterservice-Rosenheim-330159847586486/

💡 SOFORT-KONTEXT FÜR NEUEN CHAT
Die Website ist live unter https://hausmeisterservice-rosenheim.vercel.app — alle 7 Seiten funktionieren, Bricolage Grotesque ist die Headline-Schrift, Hero nutzt jetzt ein Video (videos/hero.mp4, 6 MB Pexels Freestock) statt einem Bild. Der Workflow für jede Änderung: Dateien editieren → `git add . && git commit -m "..." && git push origin main` → `vercel --prod --yes`. Framer Motion ist NICHT möglich (kein React/Build-Step) — bei Animations-Wünschen GSAP via CDN-Script-Tag vorschlagen (wurde bereits kurz getestet, aber Scroll-Scrub-Experiment auf Wunsch rückgängig gemacht). Als nächstes kommen Team-Fotos: Joel schickt Bilder per Chat-Upload für Florian Barth, J. Eder, M. Mandl, C. Kainzmaier, E. Pasztorne Novak und L. Pasztor.
