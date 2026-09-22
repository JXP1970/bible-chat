# BiBel-Chat Changelog

## [1.0.2] – 2026-09-22
**Patch – „Failed to fetch" behoben: abgeschaltetes Modell**

### Fixes
- 🐛 Jede Anfrage schlug fehl, weil die App `claude-3-5-sonnet-20241022` aufrief. Dieses Modell wurde von Anthropic am **28.10.2025 retired** – Anfragen an abgeschaltete Modelle schlagen fehl. Modell auf `claude-sonnet-5` umgestellt (aktiv bis mindestens 30.06.2027).

### Hinweis
- Modell-Lebensdauer im Blick behalten: https://platform.claude.com/docs/en/about-claude/model-deprecations

---

## [1.0.1] – 2026-09-21
**Patch – Anzeige der Lesungsreferenz**

### Fixes
- 🐛 Kapitelnummer wurde in der Sidebar doppelt angezeigt („Philipper 4 4:1-9"). Das Feld `book` enthielt das Kapitel bereits, das Template hat es ein zweites Mal angehängt. `book` ist jetzt nur noch der Buchname, die Referenz wird aus `book`/`chapter`/`verses` zusammengesetzt → „Philipper 4:1-9".

---

## [1.0.0] – 2026-09-21
**Initial Release – Full Feature Set**

### Features
- ✅ Single-file HTML app (no build process needed)
- ✅ Claude AI integration via direct browser API calls
- ✅ Daily Bible reading sidebar (Philippians 4:1-9 default)
- ✅ Chat interface with message history
- ✅ Web Speech API (microphone input + text-to-speech output)
- ✅ German/English language toggle
- ✅ API key management (localStorage)
- ✅ GitHub Pages deployment
- ✅ Mobile-responsive design (purple gradient theme)
- ✅ Typing indicator animation
- ✅ Message validation (requires API key)

### Technical
- **Header:** `anthropic-dangerous-direct-browser-access: true` for direct browser→Claude API access
- **Model:** claude-3-5-sonnet-20241022
- **Deployment:** GitHub Pages (https://jxp1970.github.io/bible-chat/)
- **Storage:** localStorage for API key
- **No backend required** – all processing in browser

### Known Limitations
- Bible reading is hardcoded (future: integrate Bible API)
- No chat history persistence (can add localStorage)
- Speech synthesis limited by browser language support
- API key stored in localStorage (consider env-based auth for production)

---

## Version History Format
- **[version] – YYYY-MM-DD**
- Major.Minor.Patch (semver)
- Sections: Features | Fixes | Changed | Technical
