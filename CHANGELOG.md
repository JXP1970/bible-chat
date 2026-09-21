# BiBel-Chat Changelog

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
