# BiBel-Chat

![Version](https://img.shields.io/badge/version-1.0.1-blue)
![Status](https://img.shields.io/badge/status-active-green)
![License](https://img.shields.io/badge/license-MIT-blue)

**Single-file Bible study web app with Claude AI integration**

## 🚀 Features

- 📖 Daily Bible reading sidebar
- 🤖 Chat with Claude AI as your Bible teacher
- 🎤 Web Speech API (voice input + text-to-speech)
- 🌍 Deutsch / English language toggle
- 📱 Mobile-responsive design
- 🔑 API key management (localStorage)
- ⚡ No backend required – direct browser→Claude API

## 🌐 Live Demo

**https://jxp1970.github.io/bible-chat/**

## 💻 Quick Start

1. Open https://jxp1970.github.io/bible-chat/
2. Click **🔑 API** button
3. Enter your Claude API key (get one at [console.anthropic.com](https://console.anthropic.com))
4. Ask questions about the daily reading
5. Use 🎤 to speak (Web Speech API)

## 🔧 Technical Details

- **Architecture:** Single-file HTML + inline CSS + vanilla JavaScript
- **Deployment:** GitHub Pages
- **API Integration:** Claude Messages API with `anthropic-dangerous-direct-browser-access` header
- **Model:** `claude-3-5-sonnet-20241022`
- **Storage:** localStorage (API key only)

## 📝 Versioning

This project follows **Semantic Versioning** (semver):
- **MAJOR.MINOR.PATCH** (e.g., 1.0.0)
- See [CHANGELOG.md](CHANGELOG.md) for version history
- Git tags track all releases: `git tag -l`

### Current Version
```
v1.0.1 – Fix: doppelte Kapitelnummer in der Lesungsreferenz (2026-09-21)
```

## 🔐 Security Notes

- API key stored in browser localStorage (suitable for personal use)
- For production: use server-side proxy or API gateway
- No sensitive data stored; all processing in-browser

## 📦 Files

- `index.html` – Complete app (all CSS + JavaScript inline)
- `CHANGELOG.md` – Version history
- `README.md` – This file

## 🚀 Updates & Deployment

When you update the app:

```bash
# 1. Make changes to index.html
# 2. Commit
git add index.html
git commit -m "Description of change"

# 3. Tag the version (if releasing new version)
git tag -a v1.1.0 -m "Release v1.1.0: Feature description"

# 4. Push to GitHub
git push origin main --tags
```

GitHub Pages auto-deploys on `git push`.

## 📞 Support

Questions about the app? Check the [CHANGELOG.md](CHANGELOG.md) for known limitations and planned features.

---

**Made with ❤️ for Bible study**
