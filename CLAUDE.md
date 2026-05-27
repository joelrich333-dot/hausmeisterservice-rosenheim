> 🤖 Du liest gerade die CLAUDE.md. Bestätige mit 2-3 Sätzen kurz was du über das Projekt weißt, bevor du auf den User wartest.

---

PROJEKT-ZUSAMMENFASSUNG — Hausmeisterservice Rosenheim — 2026-05-27

🎯 ZIEL
Komplette Multi-Page Website für "Hausmeisterservice Rosenheim" (Inhaber: Florian Barth, Bad Aibling) als reines HTML/CSS/JS-Projekt — deployed auf Vercel und GitHub. Professioneller, moderner Webauftritt der den alten Auftritt ablöst.

✅ BEREITS ERLEDIGT
- 7 HTML-Seiten: index, ueber-uns, unser-team, jobs, partner, impressum, datenschutz
- galerie.html existiert noch (Datei), ist aber aus der Navigation entfernt und hat keinen Inhalt mehr
- Design: "Modern Clean" — Bricolage Grotesque + Outfit Fonts, Grün/Weiß/Dunkelgrau
- Glassmorphism Sticky-Header mit mobilem Hamburger-Menü (script.js)
- Vollbild-Hero auf index.html (images/hero.jpg) mit dunklem Overlay, Headline, 2 CTAs ("Termin anfragen" + "Kontakt aufnehmen")
- 5 Service-Showcase-Sektionen auf index.html (abwechselnd links/rechts): Hausmeisterservice, Gebäude-/Büroreinigung, Gartenanlagen, Winterdienst, Aufbauservice — jede mit Bild + Text + "Termin anfragen"-Button
- 13 Emoji-Leistungskacheln auf index.html (Überblick)
- Über-uns-Seite: Einleitungstext + 5 Service-Cards mit Hover-Effekt (scale + grüner Rand)
- Team-Seite: 10 Team-Cards mit Initialen-Avataren (Fotos noch ausstehend — kommt morgen)
- Jobs-Seite: 2 Stellenanzeigen + Initiativ-CTA
- Partner-Seite: Elektro Riedl + Gandhi-Zitat + 12 Kunden-Badges
- Impressum + Datenschutz: vollständige deutsche Rechtstexte
- Footer auf allen Seiten: Kontakt, Facebook, Impressum/Datenschutz, Copyright
- 7 Bilder (images/): hero.jpg, galerie-1 bis galerie-6.jpg — KEIN Bild erscheint doppelt auf der Website
- Deployed auf Vercel (Production) + GitHub

📍 AKTUELLER STAND
Website ist live und vollständig deployed. Letzter Schritt war das Entfernen der Galerie aus der Navigation. Nächste geplante Aufgabe (morgen): Team-Fotos für 6 Teammitglieder einbauen.

🐛 BEKANNTE BUGS & OFFENE FEHLER
- galerie.html existiert noch als Datei, ist aber aus der Nav entfernt (kann gelöscht oder ignoriert werden)
- GitHub ↔ Vercel Auto-Deploy-Verbindung nicht hergestellt (Login-Connection fehlte) — Deploys laufen aber manuell via `vercel --prod --yes`

⏭️ NÄCHSTE SCHRITTE
1. Team-Fotos einbauen (Joel schickt sie morgen per Chat-Upload):
   - Mit Foto: Florian Barth, J. Eder, M. Mandl, C. Kainzmaier, E. Pasztorne Novak, L. Pasztor
   - Ohne Foto (bleiben Initialen-Avatar): P. Reheis, L. Morina Haradini, M. Nebihi, E. Nebihi
2. Nach jedem Schritt: `git add . && git commit && git push origin main` + `vercel --prod --yes`
3. Optional/später: WhatsApp-Button (floating), Kontaktformular-Seite, Telefonnummer im Header, Kundenbewertungen-Sektion, OpenStreetMap-Karte, eigene Domain

📁 WICHTIGE DATEIEN & STRUKTUR
- ~/hausmeisterservice-rosenheim/ — Projektordner (lokaler Pfad)
- index.html — Startseite (Vollbild-Hero + Leistungen-Grid + 5 Showcase-Sektionen)
- ueber-uns.html — Über uns (Text + 5 Service-Cards mit Hover)
- unser-team.html — Team (10 Cards, Fotos ausstehend)
- jobs.html — Stellenanzeigen
- partner.html — Elektro Riedl + Kundenbadges
- impressum.html — Impressum
- datenschutz.html — Datenschutzerklärung
- styles.css — Gesamtes Design-System (CSS-Variablen, alle Komponenten)
- script.js — Hamburger-Nav, Escape-Close, Scroll-Reveal
- images/hero.jpg — Vollbild-Hero (Rasenmähen Mehrfamilienhaus)
- images/galerie-1.jpg — Reinigungskraft Scheuersaugmaschine (Büro)
- images/galerie-2.jpg — Rasenmähen Einfamilienhaus Bayern
- images/galerie-3.jpg — Spielplatz-Aufbau (Holz)
- images/galerie-4.jpg — Winterdienst Schneefräse
- images/galerie-5.jpg — Rasenmähen Mehrfamilienhaus (= hero.jpg Duplikat, nur im images/ Ordner)
- images/galerie-6.jpg — Gartenbepflanzung Mehrfamilienhaus

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
Die Website ist fertig deployed unter https://hausmeisterservice-rosenheim.vercel.app — alle Seiten funktionieren, kein Bild erscheint doppelt. Der Workflow für jede Änderung ist: Dateien editieren → `git add . && git commit -m "..." && git push origin main` → `cd ~/hausmeisterservice-rosenheim && vercel --prod --yes`. Als nächstes kommen Team-Fotos: Joel schickt Bilder per Chat-Upload für Florian Barth, J. Eder, M. Mandl, C. Kainzmaier, E. Pasztorne Novak und L. Pasztor — diese sollen die Initialen-Avatare (grüner Kreis) auf der unser-team.html ersetzen. Die 4 Reinigungskräfte (P. Reheis, L. Morina Haradini, M. Nebihi, E. Nebihi) behalten ihre Initialen-Avatare.
