# 📖 BiBel-Chat

Eine Web-App zum Vertiefen von Bibelstudium im Dialog mit Claude AI. Sprich oder tippe Fragen zur Tageslesung, und Claude antwortet mit theologischen Insights.

**Features:**
- 🎤 Sprach-Dialog (Speech-to-Text + Text-to-Speech)
- 📖 Tageslesung aus Bibeltag-API
- 🤖 Claude AI als Bibel-Tutor
- 🇩🇪 🇬🇧 Deutsch/Englisch Support
- 📱 Responsive Design (Desktop, Tablet, Handy)

## 🚀 Deploy auf dein Handy

### Schritt 1: Backend deployen (Render.com)

1. Gehe zu https://render.com
2. Sign up / Log in
3. Klick "New +" → "Web Service"
4. Connect zu `https://github.com/JXP1970/bible-chat`
5. Konfiguriere:
   - **Name:** `bible-chat-api`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Füge hinzu:
     - `VITE_CLAUDE_API_KEY` = dein Claude API Key
     - `VITE_BIBELTAG_API_URL` = https://bibeltag-api.example.com
6. Deploy 🚀

**Backend-URL merken:** z.B. `https://bible-chat-api.onrender.com`

### Schritt 2: Frontend auf Vercel deployen

1. Gehe zu https://vercel.com
2. Import → Select `bible-chat` repo
3. Configure:
   - Framework Preset: Vite
   - Environment Variables:
     - `VITE_CLAUDE_API_KEY` = dein Claude API Key
     - `VITE_BIBELTAG_API_URL` = https://bibeltag-api.example.com
   - **Root Directory:** `.` (default)
4. Deploy 🎉

**Frontend-URL:** z.B. `https://bible-chat.vercel.app`

### Schritt 3: Backend-URL in Frontend aktualisieren

Bearbeite `src/hooks/useClaudeChat.js` Zeile 33:
```javascript
const response = await fetch('https://bible-chat-api.onrender.com/api/chat', {
```

### Jetzt auf deinem Handy nutzen:

1. Öffne `https://bible-chat.vercel.app` im Browser
2. Gib eine Frage zur Bibellesung ein
3. Claude antwortet! 🎉

## 💻 Lokal entwickeln

```bash
# Frontend starten
npm run dev

# Backend in neuem Terminal
$env:VITE_CLAUDE_API_KEY='sk-ant-xxxxx'
node server.js
```

Dann: http://localhost:5173

## 📋 Anforderungen

- Claude API Key: https://console.anthropic.com
- GitHub Account (optional, für Deployment)
- Render.com + Vercel Account (kostenlos)
