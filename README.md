# 📖 BiBel-Chat

Eine Web-App zum Vertiefen von Bibelstudium im Dialog mit Claude AI. Sprich oder tippe Fragen zur Tageslesung, und Claude antwortet mit theologischen Insights.

**Features:**
- 🎤 Sprach-Dialog (Speech-to-Text + Text-to-Speech)
- 📖 Tageslesung (Fallback-Daten für Testing)
- 🤖 Claude AI als Bibel-Tutor
- 🇩🇪 🇬🇧 Deutsch/Englisch Support
- 📱 Responsive Design (Desktop, Tablet, Handy)

## 🚀 Deploy auf Vercel (1 Klick!)

1. Gehe zu https://vercel.com/login
2. Meld dich an (mit GitHub am einfachsten)
3. Klick **"Add New..."** → **"Project"**
4. Wähle das `bible-chat` Repo
5. Vercel fragt nach **Environment Variables:**
   - `VITE_CLAUDE_API_KEY` = dein Claude API Key (von https://console.anthropic.com)
6. Klick **Deploy** 🎉

**Fertig!** Die App läuft jetzt unter z.B. `https://bible-chat.vercel.app`

### So funktioniert's:

- **Frontend:** `index.html` wird statisch gehostet (GitHub Pages Style)
- **Backend:** `/api/chat` ist eine Vercel Serverless Function
- **Claude:** API-Aufrufe laufen über die Function (kein CORS-Problem!)

## 💻 Lokal testen

```bash
# Abhängigkeiten
npm install

# Vercel CLI installieren
npm install -g vercel

# Lokal starten
vercel dev
```

Dann: http://localhost:3000

## 📋 API Key Konfigurieren

**Wichtig:** Der Claude API Key wird nur bei Vercel konfiguriert, nicht im Code!

1. Claude API Key holen: https://console.anthropic.com
2. Bei Vercel:
   - Project Settings → Environment Variables
   - Neue Variable: `VITE_CLAUDE_API_KEY` = `sk-ant-...`
   - Redeploy

## 🔧 Architektur

```
📁 bible-chat/
├── index.html          ← Frontend (statisch)
├── api/
│   └── chat.js        ← Backend Proxy (Vercel Function)
├── package.json
└── vercel.json        ← Deployment Config
```
